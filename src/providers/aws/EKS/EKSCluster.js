const assert = require("assert");
const AWS = require("aws-sdk");
const {
  map,
  pipe,
  tap,
  tryCatch,
  get,
  switchCase,
  pick,
  filter,
  eq,
} = require("rubico");
const {
  first,
  defaultsDeep,
  isEmpty,
  forEach,
  pluck,
  flatten,
} = require("rubico/x");

const logger = require("../../../logger")({ prefix: "EKSCluster" });
const { retryCall } = require("../../Retry");
const { tos } = require("../../../tos");
const { getByNameCore, isUpByIdCore, isDownByIdCore } = require("../../Common");
const {
  EKSNew,
  buildTagsObject,
  shouldRetryOnException,
} = require("../AwsCommon");

const findName = get("name");
const findId = findName;

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EKS.html
exports.EKSCluster = ({ spec, config }) => {
  assert(spec);
  assert(config);

  const eks = EKSNew(config);

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EKS.html#listClusters-property
  const getList = async ({ params } = {}) =>
    pipe([
      tap(() => {
        logger.info(`getList cluster ${tos(params)}`);
      }),
      () => eks().listClusters(params),
      get("clusters"),
      map(
        pipe([
          (name) =>
            eks().describeCluster({
              name,
            }),
          get("cluster"),
        ])
      ),
      (clusters) => ({
        total: clusters.length,
        items: clusters,
      }),
      tap((clusters) => {
        logger.info(`getList #clusters : ${clusters.length}`);
        logger.debug(`getList clusters result: ${tos(clusters)}`);
      }),
    ])();

  const getByName = ({ name }) => getByNameCore({ name, getList, findName });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EKS.html#describeCluster-property
  const getById = pipe([
    tap(({ id }) => {
      logger.info(`getById ${id}`);
    }),
    tryCatch(
      ({ id }) => eks().describeCluster({ name: id }),
      switchCase([
        eq(get("code"), "ResourceNotFoundException"),
        (error, { id }) => {
          logger.debug(`getById ${id} ResourceNotFoundException`);
        },
        (error) => {
          logger.debug(`getById error: ${tos(error)}`);
          throw error;
        },
      ])
    ),
    tap((result) => {
      logger.debug(`getById result: ${tos(result)}`);
    }),
  ]);

  const isInstanceUp = eq(get("status"), "ACTIVE");

  const isUpById = isUpByIdCore({ isInstanceUp, getById });
  const isDownById = isDownByIdCore({ getById });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EKS.html#createCluster-property
  const create = async ({
    name,
    payload = {},
    resolvedDependencies: { subnets, securityGroups, role },
  }) =>
    pipe([
      tap(() => {
        assert(name);
        assert(payload);
        logger.info(`create cluster: ${name}, ${tos(payload)}`);
        assert(Array.isArray(subnets), "subnets");
        assert(Array.isArray(securityGroups), "securityGroups");
        assert(role, "role");
        assert(role.live.Arn, "role.live.Arn");
      }),
      () =>
        defaultsDeep({
          resourcesVpcConfig: {
            securityGroupIds: pluck("live.GroupId")(securityGroups),
            subnetIds: pluck("live.SubnetId")(subnets),
          },
          roleArn: role.live.Arn,
        })(payload),
      tap((params) => {
        logger.debug(`create cluster: ${name}, params: ${tos(params)}`);
      }),
      (params) => eks().createCluster(params),
      get("cluster"),
      tap((result) => {
        logger.debug(`created cluster: ${name}, result: ${tos(result)}`);
      }),
      ({ arn }) =>
        retryCall({
          name: `cluster isUpById: ${name} arn: ${arn}`,
          fn: () => isUpById({ name, id: arn }),
        }),
      tap(() => {
        logger.info(`cluster created: ${name}`);
      }),
    ])();

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EKS.html#deleteCluster-property
  const destroy = async ({ id }) =>
    pipe([
      tap(() => {
        logger.info(`destroy cluster ${tos({ id })}`);
      }),
      () =>
        eks().deleteCluster({
          name: id,
        }),
      tap(() =>
        retryCall({
          name: `cluster isDownById:  id: ${id}`,
          fn: () => isDownById({ id }),
          config,
        })
      ),
      tap(() => {
        logger.info(`cluster destroyed ${tos({ id })}`);
      }),
    ])();

  const configDefault = async ({ name, properties, dependencies }) =>
    defaultsDeep({ name, tags: buildTagsObject({ config, name }) })(properties);

  return {
    type: "EKSCluster",
    spec,
    isUpById,
    isDownById,
    findId,
    getByName,
    getById,
    findName,
    create,
    destroy,
    getList,
    configDefault,
    shouldRetryOnException,
  };
};
