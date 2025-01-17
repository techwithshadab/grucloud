const assert = require("assert");
const { pipe, tap, get } = require("rubico");
const { defaultsDeep } = require("rubico/x");
const { getByNameCore } = require("@grucloud/core/Common");
const { buildTags } = require("../AwsCommon");

const { createAwsResource } = require("../AwsClient");
const {
  tagResource,
  untagResource,
  createModelWebAcls,
} = require("./WAFV2Common");

const findId = pipe([get("live.ARN")]);

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/WAFV2.html
exports.WAFV2WebACLCloudFront = ({ spec, config }) =>
  createAwsResource({
    model: createModelWebAcls({
      config,
      region: "us-east-1",
      Scope: "CLOUDFRONT",
    }),
    spec,
    config,
    findName: pipe([get("live.Name")]),
    findId,
    getByName: getByNameCore,
    tagResource: tagResource({ findId }),
    untagResource: untagResource({ findId }),
    configDefault: ({ name, namespace, properties: { Tags, ...otherProps } }) =>
      pipe([
        () => otherProps,
        defaultsDeep({
          Tags: buildTags({ name, config, namespace, userTags: Tags }),
        }),
      ])(),
  });
