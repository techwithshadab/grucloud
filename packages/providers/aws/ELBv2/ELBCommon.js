const { pipe, tap } = require("rubico");
const { createEndpoint } = require("../AwsCommon");

exports.createELB = createEndpoint(
  "elastic-load-balancing-v2",
  "ElasticLoadBalancingV2"
);

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ELBv2.html#addTags-property
exports.tagResource =
  ({ endpoint }) =>
  ({ id }) =>
    pipe([(Tags) => ({ ResourceArns: [id], Tags }), endpoint().addTags]);

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ELBv2.html#removeTags-property
exports.untagResource =
  ({ endpoint }) =>
  ({ id }) =>
    pipe([
      (TagKeys) => ({ ResourceArns: [id], TagKeys }),
      endpoint().removeTags,
    ]);
