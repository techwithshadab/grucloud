const assert = require("assert");
const { map, pipe, tap, get, not, flatMap, filter } = require("rubico");
const { defaultsDeep, isEmpty, unless, callProp, when } = require("rubico/x");

const logger = require("@grucloud/core/logger")({
  prefix: "ECSTask",
});
const { tos } = require("@grucloud/core/tos");
const { getByNameCore } = require("@grucloud/core/Common");
const { AwsClient } = require("../AwsClient");

const {
  createEndpoint,
  shouldRetryOnException,
  findNameInTagsOrId,
} = require("../AwsCommon");
const { getField } = require("@grucloud/core/ProviderCommon");
const { buildTagsEcs, findDependenciesCluster } = require("./ECSCommon");

const findId = get("live.taskArn");
const findName = findNameInTagsOrId({ findId });

const pickId = pipe([
  tap(({ taskArn, clusterArn }) => {
    assert(taskArn);
    assert(clusterArn);
  }),
  ({ taskArn, clusterArn }) => ({
    task: taskArn,
    cluster: clusterArn,
  }),
]);

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECS.html

exports.ECSTask = ({ spec, config }) => {
  const client = AwsClient({ spec, config });
  const ecs = () => createEndpoint({ endpointName: "ECS" })(config);

  // findDependencies for ECSTask
  const findDependencies = ({ live, lives }) => [
    findDependenciesCluster({ live }),
    {
      type: "TaskDefinition",
      group: "ECS",
      ids: [live.taskDefinitionArn],
    },
    {
      type: "ContainerInstance",
      group: "ECS",
      ids: [live.containerInstanceArn],
    },
    {
      type: "Service",
      group: "ECS",
      ids: [
        pipe([
          () => live,
          get("group"),
          tap((params) => {
            assert(true);
          }),
          when(
            callProp("startsWith", "service:"),
            pipe([
              tap((params) => {
                assert(true);
              }),
              callProp("replace", "service:", ""),
              (name) =>
                lives.getByName({
                  name,
                  type: "Service",
                  group: "ECS",
                  providerName: config.providerName,
                }),
              get("id"),
            ])
          ),
        ])(),
      ],
    },
  ];

  const findNamespace = pipe([
    tap((params) => {
      assert(true);
    }),
    () => "",
  ]);

  const managedByOther = ({ live }) =>
    pipe([() => live, get("group"), callProp("startsWith", "service:")])();

  const ignoreErrorCodes = [
    "ClusterNotFoundException",
    "InvalidParameterException",
  ];

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECS.html#describeTasks-property
  const describeTasks = pipe([
    tap(({ tasks, cluster }) => {
      assert(Array.isArray(tasks));
      assert(cluster);
    }),
    defaultsDeep({ include: ["TAGS"] }),
    ecs().describeTasks,
    get("tasks"),
    tap((tasks) => {
      logger.debug(`describeTasks ${tos(tasks)}`);
    }),
  ]);

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECS.html#listTasks-property
  const getList = client.getListWithParent({
    parent: { type: "Cluster", group: "ECS" },
    pickKey: pipe([({ id }) => ({ cluster: id })]),
    method: "listTasks",
    getParam: "taskArns",
    config,
    decorate: ({ lives, parent: { id: cluster, Tags } }) =>
      unless(isEmpty, pipe([(tasks) => ({ cluster, tasks }), describeTasks])),
  });

  const getByName = getByNameCore({ getList, findName });

  const getById = client.getById({
    pickId,
    method: "describeTasks",
    getField: "tasks",
    extraParams: { include: ["TAGS"] },
    ignoreErrorCodes,
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECS.html#runTask-property
  const create = ({ payload, name, namespace }) =>
    pipe([() => payload, ecs().runTask])();

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ECS.html#stopTask-property
  const destroy = client.destroy({
    pickId,
    method: "stopTask",
    getById,
    ignoreErrorCodes,
    config,
  });

  const configDefault = ({
    name,
    namespace,
    properties: { Tags, ...otherProps },
    dependencies: { cluster, taskDefinition, subnets, securityGroups = [] },
  }) =>
    pipe([
      tap(() => {
        assert(cluster, "missing 'cluster' dependency");
        assert(taskDefinition, "missing 'taskDefinition' dependency");
      }),
      () => otherProps,
      defaultsDeep({
        referenceId: name,
        cluster: getField(cluster, "clusterArn"),
        taskDefinition: `${getField(taskDefinition, "family")}:${getField(
          taskDefinition,
          "revision"
        )}`,
        tags: buildTagsEcs({
          name,
          config,
          namespace,
          Tags,
        }),
      }),
    ])();

  return {
    spec,
    findId,
    findNamespace,
    findDependencies,
    managedByOther,
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
