const assert = require("assert");
const { pipe, tap, get, pick, eq, not } = require("rubico");
const { defaultsDeep } = require("rubico/x");
const { getByNameCore } = require("@grucloud/core/Common");

const { buildTags, findNameInTagsOrId } = require("../AwsCommon");
const { createAwsResource } = require("../AwsClient");
const { tagResource, untagResource } = require("./EC2Common");

const createModel = ({ config }) => ({
  package: "ec2",
  client: "EC2",
  ignoreErrorCodes: ["InvalidVpnGatewayID.NotFound"],
  getById: {
    method: "describeVpnGateways",
    getField: "VpnGateways",
    pickId: pipe([({ VpnGatewayId }) => ({ VpnGatewayIds: [VpnGatewayId] })]),
  },
  getList: {
    method: "describeVpnGateways",
    getParam: "VpnGateways",
    filterResource: pipe([not(eq(get("State"), "deleted"))]),
  },
  create: {
    method: "createVpnGateway",
    pickCreated: ({ payload }) => pipe([get("VpnGateway")]),
    isInstanceUp: pipe([eq(get("State"), "available")]),
  },
  destroy: {
    method: "deleteVpnGateway",
    pickId: pipe([pick(["VpnGatewayId"])]),
    isInstanceDown: pipe([eq(get("State"), "deleted")]),
  },
});

const findId = pipe([get("live.VpnGatewayId")]);

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html
exports.EC2VpnGateway = ({ spec, config }) =>
  createAwsResource({
    model: createModel({ config }),
    spec,
    config,
    findName: findNameInTagsOrId({ findId }),
    findId,
    cannotBeDeleted: eq(get("live.State"), "deleted"),
    getByName: getByNameCore,
    tagResource: tagResource,
    untagResource: untagResource,
    configDefault: ({ name, namespace, properties: { Tags, ...otherProps } }) =>
      pipe([
        () => otherProps,
        defaultsDeep({
          TagSpecifications: [
            {
              ResourceType: "vpn-gateway",
              Tags: buildTags({ config, namespace, name, UserTags: Tags }),
            },
          ],
        }),
      ])(),
  });
