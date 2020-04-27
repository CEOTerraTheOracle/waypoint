// Package k8s contains components for deploying to Kubernetes.
package k8s

import (
	"github.com/hashicorp/waypoint/sdk"
)

//go:generate sh -c "protoc -I ./ ./*.proto --go_out=plugins=grpc:./"

// Options are the SDK options to use for instantiation for
// the Google Cloud Run plugin.
var Options = []sdk.Option{
	sdk.WithComponents(&Platform{}, &Releaser{}),
}