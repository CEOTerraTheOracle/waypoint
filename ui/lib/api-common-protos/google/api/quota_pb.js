// source: google/api/quota.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_api_annotations_pb = require('../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
goog.exportSymbol('proto.google.api.MetricRule', null, global);
goog.exportSymbol('proto.google.api.Quota', null, global);
goog.exportSymbol('proto.google.api.QuotaLimit', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.api.Quota = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.api.Quota.repeatedFields_, null);
};
goog.inherits(proto.google.api.Quota, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.api.Quota.displayName = 'proto.google.api.Quota';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.api.MetricRule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.api.MetricRule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.api.MetricRule.displayName = 'proto.google.api.MetricRule';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.api.QuotaLimit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.api.QuotaLimit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.api.QuotaLimit.displayName = 'proto.google.api.QuotaLimit';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.api.Quota.repeatedFields_ = [3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.api.Quota.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.Quota.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.Quota} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.Quota.toObject = function(includeInstance, msg) {
  var f, obj = {
    limitsList: jspb.Message.toObjectList(msg.getLimitsList(),
    proto.google.api.QuotaLimit.toObject, includeInstance),
    metricRulesList: jspb.Message.toObjectList(msg.getMetricRulesList(),
    proto.google.api.MetricRule.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.api.Quota}
 */
proto.google.api.Quota.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.Quota;
  return proto.google.api.Quota.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.Quota} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.Quota}
 */
proto.google.api.Quota.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new proto.google.api.QuotaLimit;
      reader.readMessage(value,proto.google.api.QuotaLimit.deserializeBinaryFromReader);
      msg.addLimits(value);
      break;
    case 4:
      var value = new proto.google.api.MetricRule;
      reader.readMessage(value,proto.google.api.MetricRule.deserializeBinaryFromReader);
      msg.addMetricRules(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.api.Quota.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.Quota.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.Quota} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.Quota.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLimitsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.google.api.QuotaLimit.serializeBinaryToWriter
    );
  }
  f = message.getMetricRulesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.google.api.MetricRule.serializeBinaryToWriter
    );
  }
};


/**
 * repeated QuotaLimit limits = 3;
 * @return {!Array<!proto.google.api.QuotaLimit>}
 */
proto.google.api.Quota.prototype.getLimitsList = function() {
  return /** @type{!Array<!proto.google.api.QuotaLimit>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.api.QuotaLimit, 3));
};


/**
 * @param {!Array<!proto.google.api.QuotaLimit>} value
 * @return {!proto.google.api.Quota} returns this
*/
proto.google.api.Quota.prototype.setLimitsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.google.api.QuotaLimit=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.api.QuotaLimit}
 */
proto.google.api.Quota.prototype.addLimits = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.google.api.QuotaLimit, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.api.Quota} returns this
 */
proto.google.api.Quota.prototype.clearLimitsList = function() {
  return this.setLimitsList([]);
};


/**
 * repeated MetricRule metric_rules = 4;
 * @return {!Array<!proto.google.api.MetricRule>}
 */
proto.google.api.Quota.prototype.getMetricRulesList = function() {
  return /** @type{!Array<!proto.google.api.MetricRule>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.api.MetricRule, 4));
};


/**
 * @param {!Array<!proto.google.api.MetricRule>} value
 * @return {!proto.google.api.Quota} returns this
*/
proto.google.api.Quota.prototype.setMetricRulesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.google.api.MetricRule=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.api.MetricRule}
 */
proto.google.api.Quota.prototype.addMetricRules = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.google.api.MetricRule, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.api.Quota} returns this
 */
proto.google.api.Quota.prototype.clearMetricRulesList = function() {
  return this.setMetricRulesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.api.MetricRule.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.MetricRule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.MetricRule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.MetricRule.toObject = function(includeInstance, msg) {
  var f, obj = {
    selector: jspb.Message.getFieldWithDefault(msg, 1, ""),
    metricCostsMap: (f = msg.getMetricCostsMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.api.MetricRule}
 */
proto.google.api.MetricRule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.MetricRule;
  return proto.google.api.MetricRule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.MetricRule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.MetricRule}
 */
proto.google.api.MetricRule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSelector(value);
      break;
    case 2:
      var value = msg.getMetricCostsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt64, null, "", 0);
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.api.MetricRule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.MetricRule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.MetricRule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.MetricRule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSelector();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMetricCostsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt64);
  }
};


/**
 * optional string selector = 1;
 * @return {string}
 */
proto.google.api.MetricRule.prototype.getSelector = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.api.MetricRule} returns this
 */
proto.google.api.MetricRule.prototype.setSelector = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, int64> metric_costs = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.google.api.MetricRule.prototype.getMetricCostsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.google.api.MetricRule} returns this
 */
proto.google.api.MetricRule.prototype.clearMetricCostsMap = function() {
  this.getMetricCostsMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.api.QuotaLimit.prototype.toObject = function(opt_includeInstance) {
  return proto.google.api.QuotaLimit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.api.QuotaLimit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.QuotaLimit.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 6, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    defaultLimit: jspb.Message.getFieldWithDefault(msg, 3, 0),
    maxLimit: jspb.Message.getFieldWithDefault(msg, 4, 0),
    freeTier: jspb.Message.getFieldWithDefault(msg, 7, 0),
    duration: jspb.Message.getFieldWithDefault(msg, 5, ""),
    metric: jspb.Message.getFieldWithDefault(msg, 8, ""),
    unit: jspb.Message.getFieldWithDefault(msg, 9, ""),
    valuesMap: (f = msg.getValuesMap()) ? f.toObject(includeInstance, undefined) : [],
    displayName: jspb.Message.getFieldWithDefault(msg, 12, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.api.QuotaLimit}
 */
proto.google.api.QuotaLimit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.api.QuotaLimit;
  return proto.google.api.QuotaLimit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.api.QuotaLimit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.api.QuotaLimit}
 */
proto.google.api.QuotaLimit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDefaultLimit(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMaxLimit(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFreeTier(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDuration(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setMetric(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setUnit(value);
      break;
    case 10:
      var value = msg.getValuesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt64, null, "", 0);
         });
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.api.QuotaLimit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.api.QuotaLimit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.api.QuotaLimit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.api.QuotaLimit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDefaultLimit();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getMaxLimit();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getFreeTier();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getDuration();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getMetric();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getUnit();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getValuesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(10, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt64);
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional string name = 6;
 * @return {string}
 */
proto.google.api.QuotaLimit.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.api.QuotaLimit} returns this
 */
proto.google.api.QuotaLimit.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.google.api.QuotaLimit.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.api.QuotaLimit} returns this
 */
proto.google.api.QuotaLimit.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 default_limit = 3;
 * @return {number}
 */
proto.google.api.QuotaLimit.prototype.getDefaultLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.api.QuotaLimit} returns this
 */
proto.google.api.QuotaLimit.prototype.setDefaultLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 max_limit = 4;
 * @return {number}
 */
proto.google.api.QuotaLimit.prototype.getMaxLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.api.QuotaLimit} returns this
 */
proto.google.api.QuotaLimit.prototype.setMaxLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 free_tier = 7;
 * @return {number}
 */
proto.google.api.QuotaLimit.prototype.getFreeTier = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.api.QuotaLimit} returns this
 */
proto.google.api.QuotaLimit.prototype.setFreeTier = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string duration = 5;
 * @return {string}
 */
proto.google.api.QuotaLimit.prototype.getDuration = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.api.QuotaLimit} returns this
 */
proto.google.api.QuotaLimit.prototype.setDuration = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string metric = 8;
 * @return {string}
 */
proto.google.api.QuotaLimit.prototype.getMetric = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.api.QuotaLimit} returns this
 */
proto.google.api.QuotaLimit.prototype.setMetric = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string unit = 9;
 * @return {string}
 */
proto.google.api.QuotaLimit.prototype.getUnit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.api.QuotaLimit} returns this
 */
proto.google.api.QuotaLimit.prototype.setUnit = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * map<string, int64> values = 10;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.google.api.QuotaLimit.prototype.getValuesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 10, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.google.api.QuotaLimit} returns this
 */
proto.google.api.QuotaLimit.prototype.clearValuesMap = function() {
  this.getValuesMap().clear();
  return this;};


/**
 * optional string display_name = 12;
 * @return {string}
 */
proto.google.api.QuotaLimit.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.api.QuotaLimit} returns this
 */
proto.google.api.QuotaLimit.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


goog.object.extend(exports, proto.google.api);
