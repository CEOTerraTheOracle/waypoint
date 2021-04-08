package core

import (
	"context"
	"strings"

	"github.com/golang/protobuf/proto"
	"github.com/golang/protobuf/ptypes/any"
	"github.com/google/uuid"
	"github.com/hashicorp/go-argmapper"
	"github.com/hashicorp/go-hclog"
	"github.com/hashicorp/hcl/v2"
	"github.com/zclconf/go-cty/cty"

	"github.com/hashicorp/waypoint-plugin-sdk/component"
	"github.com/hashicorp/waypoint/internal/config"
	pb "github.com/hashicorp/waypoint/internal/server/gen"
)

// Deploy deploys the given artifact.
// TODO(mitchellh): test
func (a *App) Deploy(ctx context.Context, push *pb.PushedArtifact) (*pb.Deployment, error) {
	// Add our build to our config
	var evalCtx hcl.EvalContext
	evalCtx.Variables = map[string]cty.Value{}
	if err := evalCtxTemplateProto(&evalCtx, "artifact", push); err != nil {
		a.logger.Warn("failed to prepare template variables, will not be available",
			"err", err)
	}
	deployConfig, err := a.deployEvalContext(ctx, &evalCtx)
	if err != nil {
		return nil, err
	}

	// Render the config
	c, err := componentCreatorMap[component.PlatformType].Create(ctx, a, &evalCtx)
	if err != nil {
		return nil, err
	}
	defer c.Close()

	_, msg, err := a.doOperation(ctx, a.logger.Named("deploy"), &deployOperation{
		Component:        c,
		Push:             push,
		DeploymentConfig: deployConfig,
	})
	if err != nil {
		return nil, err
	}

	return msg.(*pb.Deployment), nil
}

// deployEvalContext sets the HCL evaluation context for `deploy` blocks.
func (a *App) deployEvalContext(
	ctx context.Context,
	evalCtx *hcl.EvalContext,
) (*component.DeploymentConfig, error) {
	if evalCtx.Variables == nil {
		evalCtx.Variables = map[string]cty.Value{}
	}

	// Get the deployment config
	resp, err := a.client.RunnerGetDeploymentConfig(ctx, &pb.RunnerGetDeploymentConfigRequest{})
	if err != nil {
		return nil, err
	}

	// Build our deployment config and expose the env we need to the config
	deployConfig := &component.DeploymentConfig{
		ServerAddr:          resp.ServerAddr,
		ServerTls:           resp.ServerTls,
		ServerTlsSkipVerify: resp.ServerTlsSkipVerify,
	}
	deployEnv := map[string]cty.Value{}
	for k, v := range deployConfig.Env() {
		deployEnv[k] = cty.StringVal(v)
	}
	evalCtx.Variables["entrypoint"] = cty.ObjectVal(map[string]cty.Value{
		"env": cty.MapVal(deployEnv),
	})

	return deployConfig, nil
}

type deployOperation struct {
	Component        *Component
	Push             *pb.PushedArtifact
	DeploymentConfig *component.DeploymentConfig

	// Set by init
	autoHostname pb.UpsertDeploymentRequest_Tristate

	// id is populated with the deployment id on Upsert
	id string

	// cebToken is the token to set for the deployment to auth
	cebToken string
}

func (op *deployOperation) Init(app *App) (proto.Message, error) {
	if v := app.config.URL; v != nil {
		if v.AutoHostname != nil {
			if *v.AutoHostname {
				op.autoHostname = pb.UpsertDeploymentRequest_TRUE
			} else {
				op.autoHostname = pb.UpsertDeploymentRequest_FALSE
			}
		}
	}

	// If the deployment plugin supports creating a generation ID, then
	// get that ID up front and set it.
	var generationId string
	if g, ok := op.Component.Value.(component.Generation); ok {
		if f := g.GenerationFunc(); f != nil {
			// Get the ID from the plugin.
			idBytesRaw, err := app.callDynamicFunc(context.Background(),
				app.logger,
				nil,
				op.Component,
				g.GenerationFunc(),
				op.args()...,
			)
			if err != nil {
				return nil, err
			}
			idBytes := idBytesRaw.([]byte)

			// The plugin can return an empty ID for us to default it to random.
			// If it isn't empty, then we SHA-1 (Version 5 UUID) the bytes
			// to create the actual generation.
			if len(idBytes) > 0 {
				generationId = strings.Replace(
					uuid.NewSHA1(uuid.NameSpaceDNS, idBytes).String(),
					"-", "", -1,
				)
			}
		}
	}

	return &pb.Deployment{
		Generation:  &pb.Generation{Id: generationId},
		Application: app.ref,
		Workspace:   app.workspace,
		Component:   op.Component.Info,
		Labels:      op.Component.labels,
		ArtifactId:  op.Push.Id,
		State:       pb.Operation_CREATED,
		HasEntrypointConfig: op.DeploymentConfig != nil &&
			op.DeploymentConfig.ServerAddr != "",
	}, nil
}

func (op *deployOperation) Hooks(app *App) map[string][]*config.Hook {
	return op.Component.hooks
}

func (op *deployOperation) Labels(app *App) map[string]string {
	return op.Component.labels
}

func (op *deployOperation) Upsert(
	ctx context.Context,
	client pb.WaypointClient,
	msg proto.Message,
) (proto.Message, error) {
	resp, err := client.UpsertDeployment(ctx, &pb.UpsertDeploymentRequest{
		Deployment:   msg.(*pb.Deployment),
		AutoHostname: op.autoHostname,
	})
	if err != nil {
		return nil, err
	}

	if op.id == "" {
		// Set our internal ID for the Do step
		op.id = resp.Deployment.Id

		// We need to get our token that we'll give this deployment
		resp, err := client.GenerateInviteToken(ctx, &pb.InviteTokenRequest{
			// TODO: this needs to be configurable. For now we set it
			// to long enough that it should be forever.
			Duration: "87600h", // 10 years

			// This is an entrypoint token specifically for this deployment
			Entrypoint: &pb.Token_Entrypoint{
				DeploymentId: op.id,
			},
		})
		if err != nil {
			return nil, err
		}

		// Set our token up
		op.cebToken = resp.Token
	}

	return resp.Deployment, nil
}

func (op *deployOperation) Do(ctx context.Context, log hclog.Logger, app *App, msg proto.Message) (interface{}, error) {
	deploy := msg.(*pb.Deployment)

	// Sync our config first
	if err := app.ConfigSync(ctx); err != nil {
		return nil, err
	}

	val, err := app.callDynamicFunc(ctx,
		log,
		(*component.Deployment)(nil),
		op.Component,
		op.Component.Value.(component.Platform).DeployFunc(),
		op.args()...,
	)

	if ep, ok := op.Component.Value.(component.Execer); ok && ep.ExecFunc() != nil {
		log.Debug("detected deployment uses an exec plugin, decorating deployment with info")
		deploy.HasExecPlugin = true
	} else {
		log.Debug("no exec plugin detected on platform component")
	}

	if ep, ok := op.Component.Value.(component.LogPlatform); ok && ep.LogsFunc() != nil {
		log.Debug("detected deployment uses a logs plugin, decorating deployment with info")
		deploy.HasLogsPlugin = true
	} else {
		log.Debug("no logs plugin detected on platform component")
	}

	return val, err
}

// args returns the args we send to the Deploy function call
func (op *deployOperation) args() []argmapper.Arg {
	dconfig := *op.DeploymentConfig
	dconfig.Id = op.id
	dconfig.EntrypointInviteToken = op.cebToken

	var args []argmapper.Arg

	if v := op.Push.Artifact.Artifact; v != nil {
		// This should always be non-nil but for tests we sometimes set this to nil.
		// If we don't do this we will panic so its best to protect against this
		// anyways.
		args = append(args,
			argNamedAny("artifact", op.Push.Artifact.Artifact),
		)
	}

	args = append(args, argmapper.Typed(&dconfig))
	return args
}

func (op *deployOperation) StatusPtr(msg proto.Message) **pb.Status {
	return &(msg.(*pb.Deployment).Status)
}

func (op *deployOperation) ValuePtr(msg proto.Message) **any.Any {
	return &(msg.(*pb.Deployment).Deployment)
}

var _ operation = (*deployOperation)(nil)
