const assert = require("assert");
const { pipe, tap, get, eq } = require("rubico");
const { defaultsDeep, when, last } = require("rubico/x");
const { getByNameCore } = require("@grucloud/core/Common");
const { getField } = require("@grucloud/core/ProviderCommon");

const { buildTags, findNameInTagsOrId } = require("../AwsCommon");
const { createAwsResource } = require("../AwsClient");
const { tagResource, untagResource } = require("./EC2Common");

const logger = require("@grucloud/core/logger")({ prefix: "VpnConnection" });

const createModel = ({ config }) => ({
  package: "ec2",
  client: "EC2",
  ignoreErrorCodes: ["InvalidVpnConnectionID.NotFound"],
  getById: {
    method: "describeVpnConnections",
    getField: "VpnConnections",
    pickId: pipe([
      tap(({ VpnConnectionId }) => {
        assert(VpnConnectionId);
      }),
      ({ VpnConnectionId }) => ({ VpnConnectionIds: [VpnConnectionId] }),
    ]),
  },
  getList: {
    method: "describeVpnConnections",
    getParam: "VpnConnections",
    decorate: ({ endpoint, getById }) =>
      pipe([
        tap((params) => {
          assert(getById);
          assert(endpoint);
        }),
      ]),
  },
  create: {
    method: "createVpnConnection",
    pickCreated: ({ payload }) => pipe([get("VpnConnection")]),
    isInstanceUp: pipe([
      tap(({ State }) => {
        assert(State);
        logger.debug(`createVpnConnection state: ${State}`);
      }),
      eq(get("State"), "available"),
    ]),
    configIsUp: { retryCount: 20 * 10, retryDelay: 5e3 },
  },
  destroy: {
    method: "deleteVpnConnection",
    isInstanceDown: pipe([eq(get("State"), "deleted")]),
  },
});

const findId = pipe([get("live.VpnConnectionId")]);

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html
exports.EC2VpnConnection = ({ spec, config }) =>
  createAwsResource({
    model: createModel({ config }),
    spec,
    config,
    findDependencies: ({ live }) => [
      { type: "CustomerGateway", group: "EC2", ids: [live.CustomerGatewayId] },
      {
        type: "VpnGateway",
        group: "EC2",
        ids: [live.VpnGatewayId],
      },
      {
        type: "TransitGateway",
        group: "EC2",
        ids: [live.TransitGatewayId],
      },
    ],
    findName: findNameInTagsOrId({ findId }),
    pickId: pipe([
      tap((params) => {
        assert(true);
      }),
    ]),
    findId,
    cannotBeDeleted: eq(get("live.State"), "deleted"),
    getByName: getByNameCore,
    tagResource: tagResource,
    untagResource: untagResource,
    configDefault: ({
      name,
      namespace,
      properties: { Tags, ...otherProps },
      dependencies: { customerGateway, vpnGateway, transitGateway },
    }) =>
      pipe([
        tap((params) => {
          assert(customerGateway);
          assert(
            vpnGateway || transitGateway,
            "either vpnGateway or transitGateway is required"
          );
        }),
        () => otherProps,
        defaultsDeep({
          CustomerGatewayId: getField(customerGateway, "CustomerGatewayId"),
          TagSpecifications: [
            {
              ResourceType: "vpn-connection",
              Tags: buildTags({ config, namespace, name, UserTags: Tags }),
            },
          ],
        }),
        when(
          () => vpnGateway,
          defaultsDeep({
            VpnGatewayId: getField(vpnGateway, "VpnGatewayId"),
          })
        ),
        when(
          () => transitGateway,
          defaultsDeep({
            TransitGatewayId: getField(transitGateway, "TransitGatewayId"),
          })
        ),
      ])(),
  });
