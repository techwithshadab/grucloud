const assert = require("assert");
const { pipe, tap, get, map } = require("rubico");
const { defaultsDeep, pluck, unless, isEmpty } = require("rubico/x");

const { createAwsResource } = require("../AwsClient");
const { tagResource, untagResource } = require("./ApiGatewayCommon");
const { getByNameCore } = require("@grucloud/core/Common");
const { getField } = require("@grucloud/core/ProviderCommon");

const findId = pipe([get("live.id")]);

const buildResourceArn = ({ config }) =>
  pipe([
    tap(({ usagePlanId, keyId }) => {
      assert(usagePlanId);
      assert(keyId);
    }),
    ({ usagePlanId, keyId }) =>
      `arn:aws:apigateway:${config.region}::/usageplans/${usagePlanId}/keys/${keyId}`,
  ]);

const pickId = pipe([
  tap(({ usagePlanId, keyId }) => {
    assert(usagePlanId);
    assert(keyId);
  }),
  ({ usagePlanId, keyId }) => ({ usagePlanId: usagePlanId, keyId: keyId }),
]);

const decorate = () =>
  pipe([
    tap((params) => {
      assert(true);
    }),
    ({ value, ...other }) => ({ keyId: value, ...other }),
  ]);

const model = ({ config }) => ({
  package: "api-gateway",
  client: "APIGateway",
  ignoreErrorCodes: ["NotFoundException"],
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/APIGateway.html#getUsagePlanKey-property
  getById: {
    method: "getUsagePlanKey",
    pickId,
    decorate,
  },
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/APIGateway.html#createUsagePlanKey-property
  create: {
    method: "createUsagePlanKey",
    pickCreated: ({ payload }) =>
      pipe([
        tap((params) => {
          assert(params);
        }),
        () => payload,
      ]),
  },
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/APIGateway.html#updateUsagePlanKey-property
  update: {
    method: "updateUsagePlanKey",
    filterParams: ({ payload, live }) =>
      pipe([() => payload, defaultsDeep({ usagePlanId: live.usagePlanId })])(),
  },
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/APIGateway.html#deleteUsagePlanKey-property
  destroy: {
    method: "deleteUsagePlanKey",
    pickId,
  },
});

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/APIGateway.html
exports.UsagePlanKey = ({ spec, config }) =>
  createAwsResource({
    model: model({ config }),
    spec,
    config,
    findName: pipe([get("live.name")]),
    findId,
    getByName: getByNameCore,
    getList: ({ client }) =>
      pipe([
        client.getListWithParent({
          parent: { type: "UsagePlan", group: "APIGateway" },
          config,
          pickKey: pipe([({ id }) => ({ usagePlanId: id })]),
          method: "getUsagePlanKeys",
          getParam: "items",
          decorate:
            ({ lives, parent: { id } }) =>
            (live) =>
              pipe([
                () => live,
                defaultsDeep({
                  usagePlanId: id,
                }),
                ({ id, type, value, ...other }) => ({
                  keyId: id,
                  keyType: type,
                  id: value,
                  ...other,
                }),
              ])(),
        }),
      ]),
    tagResource: tagResource({
      buildResourceArn: buildResourceArn({ config }),
    }),
    untagResource: untagResource({
      buildResourceArn: buildResourceArn({ config }),
    }),
    configDefault: ({ properties, dependencies: { usagePlan, apiKey } }) =>
      pipe([
        tap((params) => {
          assert(usagePlan);
          assert(apiKey);
        }),
        () => properties,
        defaultsDeep({
          usagePlanId: getField(usagePlan, "id"),
          keyId: getField(apiKey, "id"),
        }),
      ])(),
  });
