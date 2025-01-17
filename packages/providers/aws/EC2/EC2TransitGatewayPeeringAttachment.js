const assert = require("assert");
const { pipe, tap, get, pick, eq, fork, filter, not } = require("rubico");
const { when, isEmpty, includes } = require("rubico/x");
const { getByNameCore } = require("@grucloud/core/Common");
const { getField } = require("@grucloud/core/ProviderCommon");
const logger = require("@grucloud/core/logger")({
  prefix: "TgwPeeringAttachment",
});

const { buildTags } = require("../AwsCommon");
const { createAwsResource } = require("../AwsClient");
const { tagResource, untagResource } = require("./EC2Common");

const isInstanceDown = pipe([eq(get("State"), "deleted")]);

const managedByOther =
  ({ config }) =>
  ({ live, lives }) =>
    pipe([
      () => live,
      get("AccepterTgwInfo.TransitGatewayId"),
      (id) =>
        lives.getById({
          id,
          type: "TransitGateway",
          group: "EC2",
          providerName: config.providerName,
        }),
      eq(get("providerName"), config.providerName),
    ])();

const createModel = ({ config }) => ({
  package: "ec2",
  client: "EC2",
  ignoreErrorCodes: ["InvalidTransitGatewayAttachmentID.NotFound"],
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#describeTransitGatewayPeeringAttachments-property
  getById: {
    method: "describeTransitGatewayPeeringAttachments",
    getField: "TransitGatewayPeeringAttachments",
    pickId: pipe([
      ({ TransitGatewayAttachmentId }) => ({
        TransitGatewayAttachmentIds: [TransitGatewayAttachmentId],
      }),
    ]),
  },
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#describeTransitGatewayPeeringAttachments-property
  getList: {
    method: "describeTransitGatewayPeeringAttachments",
    getParam: "TransitGatewayPeeringAttachments",
    transformListPre: () => pipe([filter(not(isInstanceDown))]),
  },
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#createTransitGatewayPeeringAttachment-property
  create: {
    method: "createTransitGatewayPeeringAttachment",
    pickCreated: ({ payload }) =>
      pipe([get("TransitGatewayPeeringAttachment")]),
    configIsUp: { retryCount: 20 * 10, retryDelay: 5e3 },
    isInstanceError: eq(get("State"), "failed"),
    getErrorMessage: get("Status.Message", "error"),
    isInstanceUp: pipe([
      tap(({ State }) => {
        logger.debug(`TransitGatewayPeeringAttachment State: ${State}`);
      }),
      ({ State }) =>
        pipe([() => ["available", "pendingAcceptance"], includes(State)])(),
    ]),
  },
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#deleteTransitGatewayPeeringAttachment-property
  destroy: {
    method: "deleteTransitGatewayPeeringAttachment",
    pickId: pipe([pick(["TransitGatewayAttachmentId"])]),
    isInstanceDown,
  },
});

const findId = pipe([get("live.TransitGatewayAttachmentId")]);

const findNamePeeringAttachment =
  ({ config }) =>
  ({ live, lives }) =>
    pipe([
      () => live,
      fork({
        transitGatewayRequester: pipe([
          get("RequesterTgwInfo.TransitGatewayId"),
          (id) =>
            pipe([
              () =>
                lives.getById({
                  id,
                  type: "TransitGateway",
                  group: "EC2",
                  providerName: config.providerName,
                }),
              get("name", id),
            ])(),
        ]),
        transitGatewayAcceptor: pipe([
          get("AccepterTgwInfo.TransitGatewayId"),
          (id) =>
            pipe([
              () =>
                lives.getById({
                  id,
                  type: "TransitGateway",
                  group: "EC2",
                  providerName: config.providerName,
                }),
              get("name", id),
            ])(),
        ]),
      }),
      tap(({ transitGatewayRequester, transitGatewayAcceptor }) => {
        assert(transitGatewayRequester);
        assert(transitGatewayAcceptor);
      }),
      ({ transitGatewayRequester, transitGatewayAcceptor }) =>
        `tgw-peering-attach::${transitGatewayRequester}::${transitGatewayAcceptor}`,
    ])();

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html
exports.EC2TransitGatewayPeeringAttachment = ({ spec, config }) =>
  createAwsResource({
    model: createModel({ config }),
    spec,
    config,
    managedByOther: managedByOther({ config }),
    findName: findNamePeeringAttachment({ config }),
    findId,
    cannotBeDeleted: eq(get("live.State"), "deleted"),
    getByName: getByNameCore,
    tagResource: tagResource,
    untagResource: untagResource,
    configDefault: ({
      name,
      namespace,
      properties: { Tags, AccepterTgwInfo, ...otherProps },
      dependencies: { transitGateway, transitGatewayPeer },
    }) =>
      pipe([
        tap((params) => {
          assert(transitGateway);
          assert(transitGatewayPeer);
          assert(AccepterTgwInfo);
        }),
        () => ({
          PeerAccountId: AccepterTgwInfo.OwnerId,
          PeerRegion: AccepterTgwInfo.Region,
          TransitGatewayId: getField(transitGateway, "TransitGatewayId"),
          PeerTransitGatewayId: getField(
            transitGatewayPeer,
            "TransitGatewayId"
          ),
          TagSpecifications: [
            {
              ResourceType: "transit-gateway-attachment",
              Tags: buildTags({ config, namespace, name, UserTags: Tags }),
            },
          ],
        }),
      ])(),
  });
