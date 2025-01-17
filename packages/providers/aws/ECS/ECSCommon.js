const { pipe, tap } = require("rubico");
const { buildTags } = require("../AwsCommon");

const { createEndpoint } = require("../AwsCommon");

exports.createECS = createEndpoint("ecs", "ECS");

exports.buildTagsEcs = ({ name, config, namespace, tags }) =>
  buildTags({
    name,
    config,
    namespace,
    UserTags: tags,
    key: "key",
    value: "value",
  });

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECS.html#tagResource-property
exports.tagResource =
  ({ ecs }) =>
  ({ id }) =>
    pipe([(tags) => ({ resourceArn: id, tags }), ecs().tagResource]);

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECS.html#untagResource-property
exports.untagResource =
  ({ ecs }) =>
  ({ id }) =>
    pipe([(tagKeys) => ({ resourceArn: id, tagKeys }), ecs().untagResource]);
