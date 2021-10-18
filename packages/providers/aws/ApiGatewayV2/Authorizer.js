const assert = require("assert");
const { pipe, tap, get, eq, pick } = require("rubico");
const { defaultsDeep } = require("rubico/x");

const { getByNameCore } = require("@grucloud/core/Common");
const { getField } = require("@grucloud/core/ProviderCommon");
const { shouldRetryOnException } = require("../AwsCommon");
const { AwsClient } = require("../AwsClient");

const findId = get("live.AuthorizerId");
const findName = get("live.Name");
const pickId = pick(["ApiId", "AuthorizerId"]);

exports.Authorizer = ({ spec, config }) => {
  const client = AwsClient({ spec, config });

  const findDependencies = ({ live, lives }) => [
    {
      type: "Api",
      group: "ApiGatewayV2",
      ids: [live.ApiId],
    },
  ];

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ApiGatewayV2.html#getAuthorizer-property
  const getById = client.getById({
    pickId,
    method: "getAuthorizer",
    ignoreErrorCodes: ["NotFoundException"],
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ApiGatewayV2.html#getAuthorizers-property
  const getList = client.getListWithParent({
    parent: { type: "Api", group: "ApiGatewayV2" },
    pickKey: pipe([pick(["ApiId"])]),
    method: "getAuthorizers",
    getParam: "Items",
    config,
    decorate: ({ parent: { ApiId, Name: ApiName, Tags } }) =>
      pipe([defaultsDeep({ ApiId, ApiName, Tags })]),
  });

  const getByName = getByNameCore({ getList, findName });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ApiGatewayV2.html#createAuthorizer-property
  const create = client.create({
    method: "createAuthorizer",
    pickCreated:
      ({ payload }) =>
      (result) =>
        pipe([
          tap((params) => {
            assert(true);
          }),
          () => result,
          defaultsDeep({ ApiId: payload.ApiId }),
        ])(),
    pickId,
    getById,
    config,
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ApiGatewayV2.html#updateAuthorizer-property
  const update = client.update({
    pickId,
    method: "updateAuthorizer",
    getById,
    config,
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ApiGatewayV2.html#deleteAuthorizer-property
  const destroy = client.destroy({
    pickId,
    method: "deleteAuthorizer",
    getById,
    ignoreError: eq(get("code"), "NotFoundException"),
    config,
  });

  const configDefault = ({
    name,
    namespace,
    properties,
    dependencies: { api },
  }) =>
    pipe([
      tap(() => {
        assert(api, "missing 'api' dependency");
      }),
      () => properties,
      defaultsDeep({
        Name: name,
        ApiId: getField(api, "ApiId"),
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
    shouldRetryOnException,
    findDependencies,
  };
};