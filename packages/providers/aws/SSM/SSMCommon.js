const assert = require("assert");
const { pipe, tap, get } = require("rubico");

const { createEndpoint } = require("../AwsCommon");

exports.createSSM = createEndpoint("ssm", "SSM");

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SSM.html#addTagsToResource-property
exports.tagResource =
  ({ ssm, ResourceType }) =>
  ({ id }) =>
    pipe([
      (Tags) => ({ ResourceId: id, Tags, ResourceType }),
      ssm().addTagsToResource,
    ]);

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SSM.html#removeTagsFromResource-property
exports.untagResource =
  ({ ssm, ResourceType }) =>
  ({ id }) =>
    pipe([
      (TagKeys) => ({ ResourceId: id, TagKeys, ResourceType }),
      ssm().removeTagsFromResource,
    ]);
