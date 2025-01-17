const assert = require("assert");
const {
  pipe,
  tap,
  get,
  eq,
  fork,
  and,
  tryCatch,
  pick,
  switchCase,
} = require("rubico");
const { defaultsDeep, callProp, last, when } = require("rubico/x");
const logger = require("@grucloud/core/logger")({
  prefix: "IntegrationV2",
});

const { tos } = require("@grucloud/core/tos");
const { getByNameCore } = require("@grucloud/core/Common");
const { throwIfNotAwsError } = require("../AwsCommon");
const { getField } = require("@grucloud/core/ProviderCommon");
const { AwsClient } = require("../AwsClient");
const { createApiGatewayV2, ignoreErrorCodes } = require("./ApiGatewayCommon");
const { createLambda } = require("../Lambda/LambdaCommon");

const findId = get("live.IntegrationId");

const lambdaUriToName = pipe([
  callProp("split", ":"),
  last,
  callProp("replace", "/invocations", ""),
]);

// IntegrationUri:'arn:aws:elasticloadbalancing:us-east-1:00000000:listener/app/sam-a-LoadB-EC9ZTKNG2RSH/3c8adf5c996cb063/fe8cc6c608b3208e'
const listenerUriToName = ({ lives, config }) =>
  pipe([
    tap((params) => {
      assert(true);
    }),
    get("IntegrationUri"),
    (id) =>
      lives.getById({
        id,
        type: "Listener",
        group: "ElasticLoadBalancingV2",
        providerName: config.providerName,
      }),
    get("name"),
    tap((name) => {
      assert(name);
    }),
  ]);

const eventBusUriToName = pipe([callProp("split", "/"), last]);

const pickId = pick(["ApiId", "IntegrationId"]);

exports.Integration = ({ spec, config }) => {
  const apiGateway = createApiGatewayV2(config);
  const lambda = createLambda(config);
  const client = AwsClient({ spec, config })(apiGateway);

  const findName = ({ live, lives }) =>
    pipe([
      () => live,
      fork({
        apiName: pipe([({ ApiName }) => `integration::${ApiName}::`]),
        integration: switchCase([
          get("IntegrationUri"),
          pipe([
            switchCase([
              eq(get("ConnectionType"), "VPC_LINK"),
              pipe([listenerUriToName({ lives, config })]),
              pipe([get("IntegrationUri"), lambdaUriToName]),
            ]),
          ]),
          get("RequestParameters.EventBusName"),
          pipe([get("RequestParameters.EventBusName"), eventBusUriToName]),
          () => "NO-INTEGRATION",
        ]),
      }),
      ({ apiName, integration }) => `${apiName}${integration}`,
    ])();

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ApiGatewayV2.html#getIntegration-property
  const getById = client.getById({
    pickId,
    method: "getIntegration",
    ignoreErrorCodes,
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ApiGatewayV2.html#getIntegrations-property
  const getList = client.getListWithParent({
    parent: { type: "Api", group: "ApiGatewayV2" },
    pickKey: pipe([pick(["ApiId"])]),
    method: "getIntegrations",
    getParam: "Items",
    config,
    decorate:
      ({ parent: { ApiId, Name, Tags } }) =>
      (live) =>
        pipe([() => live, defaultsDeep({ ApiId, ApiName: Name })])(),
  });

  const getByName = getByNameCore({ getList, findName });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ApiGatewayV2.html#createIntegration-property
  const create = client.create({
    method: "createIntegration",
    pickCreated: ({ payload }) =>
      pipe([defaultsDeep({ ApiId: payload.ApiId })]),
    getById,
  });

  const update = client.update({
    pickId,
    method: "updateIntegration",
    getById,
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Lambda.html#removePermission-property
  const lambdaRemovePermission = ({ live }) =>
    pipe([
      () => live,
      tap.if(
        and([
          eq(get("IntegrationType"), "AWS_PROXY"),
          get("IntegrationUri"),
          get("IntegrationId"),
        ]),
        pipe([
          ({ IntegrationUri, IntegrationId }) => ({
            FunctionName: IntegrationUri,
            StatementId: IntegrationId,
          }),
          tryCatch(lambda().removePermission, (error) =>
            pipe([
              tap(() => {
                logger.info(`lambdaRemovePermission ${tos(error)}`);
              }),
              () => error,
              throwIfNotAwsError("ResourceNotFoundException"),
            ])()
          ),
        ])
      ),
    ])();

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ApiGatewayV2.html#deleteIntegration-property
  const destroy = client.destroy({
    preDestroy: lambdaRemovePermission,
    pickId,
    method: "deleteIntegration",
    getById,
    ignoreErrorCodes,
  });

  const configDefault = ({
    name,
    namespace,
    properties: { Tags, ...otherProps },
    dependencies: { api, lambdaFunction, eventBus, role, listener, vpcLink },
  }) =>
    pipe([
      tap(() => {
        assert(api, "missing 'api' dependency");
      }),
      () => otherProps,
      defaultsDeep({
        ApiId: getField(api, "ApiId"),
      }),
      when(
        () => vpcLink,
        defaultsDeep({
          ConnectionId: getField(vpcLink, "VpcLinkId"),
        })
      ),
      when(
        () => listener,
        defaultsDeep({
          IntegrationUri: getField(listener, "ListenerArn"),
        })
      ),
      when(
        () => lambdaFunction,
        defaultsDeep({
          IntegrationUri: getField(lambdaFunction, "Configuration.FunctionArn"),
        })
      ),
      when(
        () => eventBus,
        defaultsDeep({
          RequestParameters: { EventBusName: getField(eventBus, "Arn") },
        })
      ),
      when(
        () => role,
        defaultsDeep({
          CredentialsArn: getField(role, "Arn"),
        })
      ),
    ])();

  return {
    spec,
    findName,
    findId,
    getById,
    create,
    update,
    destroy,
    getByName,
    getList,
    configDefault,
  };
};
