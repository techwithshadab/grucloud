const assert = require("assert");
const { pipe, tap, get, eq, filter, pick } = require("rubico");
const { pluck, defaultsDeep } = require("rubico/x");

const { getByNameCore } = require("@grucloud/core/Common");
const { getField } = require("@grucloud/core/ProviderCommon");
const { AwsClient } = require("../AwsClient");
const { createApiGatewayV2, ignoreErrorCodes } = require("./ApiGatewayCommon");

const findId = get("live.DeploymentId");
const pickId = pick(["ApiId", "DeploymentId"]);
const findName = pipe([
  get("live"),
  //TODO Stage ?
  ({ ApiName }) => `deployment::${ApiName}`,
]);

exports.Deployment = ({ spec, config }) => {
  const apiGateway = createApiGatewayV2(config);
  const client = AwsClient({ spec, config })(apiGateway);

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ApiGatewayV2.html#getDeployment-property
  const getById = client.getById({
    pickId,
    method: "getDeployment",
    ignoreErrorCodes,
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ApiGatewayV2.html#getDeployments-property
  const getList = client.getListWithParent({
    parent: { type: "Api", group: "ApiGatewayV2" },
    pickKey: pipe([pick(["ApiId"])]),
    method: "getDeployments",
    getParam: "Items",
    config,
    decorate: ({ parent: { ApiId, Name: ApiName } }) =>
      pipe([defaultsDeep({ ApiId, ApiName })]),
  });

  const getByName = getByNameCore({ getList, findName });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ApiGatewayV2.html#createDeployment-property
  const create = client.create({
    method: "createDeployment",
    shouldRetryOnExceptionMessages: [
      "Unable to deploy API because no routes exist in this API",
    ],
    pickCreated: ({ payload }) =>
      pipe([defaultsDeep({ ApiId: payload.ApiId })]),
    getById,
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ApiGatewayV2.html#updateDeployment-property
  const update = client.update({
    pickId,
    method: "updateDeployment",
    getById,
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ApiGatewayV2.html#deleteDeployment-property
  const destroy = client.destroy({
    pickId,
    method: "deleteDeployment",
    getById,
    ignoreErrorCodes: ["NotFoundException", "BadRequestException"],
  });

  const configDefault = ({
    name,
    namespace,
    properties: { Tags, ...otherProps },
    dependencies: { api, stage },
  }) =>
    pipe([
      tap(() => {
        assert(api, "missing 'api' dependency");
      }),
      () => otherProps,
      defaultsDeep({
        ApiId: getField(api, "ApiId"),
        //TODO is StageName required ?
        StageName: getField(stage, "StageName"),
      }),
    ])();

  return {
    spec,
    findName,
    findId,
    create,
    update,
    destroy,
    getByName,
    getById,
    getList,
    configDefault,
  };
};
