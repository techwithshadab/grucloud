const assert = require("assert");
const {
  pipe,
  tap,
  get,
  pick,
  any,
  omit,
  switchCase,
  assign,
} = require("rubico");
const { defaultsDeep, callProp, when } = require("rubico/x");
const { AwsClient } = require("../AwsClient");
const { buildTagsObject, omitIfEmpty } = require("@grucloud/core/Common");
const {
  createCloudWatchLogs,
  ignoreErrorCodes,
  tagResource,
  untagResource,
  LogGroupNameManagedByOther,
} = require("./CloudWatchLogsCommon");
const { getField } = require("@grucloud/core/ProviderCommon");

const findId = pipe([get("live.arn"), callProp("replace", ":*", "")]);
const pickId = pick(["logGroupName"]);
const findName = get("live.logGroupName");

exports.CloudWatchLogGroup = ({ spec, config }) => {
  const endpoint = createCloudWatchLogs(config);
  const client = AwsClient({ spec, config })(endpoint);

  const managedByOther = pipe([
    get("live.logGroupName"),
    (logGroupName) =>
      pipe([
        () => LogGroupNameManagedByOther,
        any((prefix) => logGroupName.startsWith(prefix)),
      ])(),
  ]);

  const decorate = () =>
    pipe([
      assign({
        tags: pipe([
          pick(["logGroupName"]),
          endpoint().listTagsLogGroup,
          get("tags"),
        ]),
        arn: pipe([get("arn"), callProp("replace", ":*", "")]),
      }),
      omitIfEmpty(["Tags"]),
    ]);

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CloudWatchLogs.html#describeLogGroups-property
  const getList = client.getList({
    method: "describeLogGroups",
    getParam: "logGroups",
    decorate,
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CloudWatchLogs.html#describeLogGroups-property
  const getById = client.getById({
    pickId: ({ logGroupName }) => ({ logGroupNamePrefix: logGroupName }),
    method: "describeLogGroups",
    getField: "logGroups",
    decorate,
  });

  const getByName = pipe([({ name }) => ({ logGroupName: name }), getById]);

  const putRetentionPolicy = pipe([
    tap.if(
      get("retentionInDays"),
      pipe([
        pick(["logGroupName", "retentionInDays"]),
        (params) => endpoint().putRetentionPolicy(params),
      ])
    ),
  ]);

  const deleteRetentionPolicy = pipe([
    pick(["logGroupName"]),
    (params) => endpoint().deleteRetentionPolicy(params),
  ]);

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CloudWatchLogs.html#createLogGroup-property
  const create = client.create({
    filterPayload: omit(["retentionInDays"]),
    method: "createLogGroup",
    getById,
    postCreate: pipe([get("payload"), putRetentionPolicy]),
  });

  const update = ({ payload, name, diff }) =>
    pipe([
      () => payload,
      switchCase([
        get("retentionInDays"),
        putRetentionPolicy,
        deleteRetentionPolicy,
      ]),
    ])();

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CloudWatchLogs.html#deleteLogGroup-property
  const destroy = client.destroy({
    pickId,
    method: "deleteLogGroup",
    getById,
    ignoreErrorCodes,
  });

  const configDefault = ({
    name,
    namespace,
    properties: { tags, ...otherProps },
    dependencies: { kmsKey },
  }) =>
    pipe([
      () => otherProps,
      defaultsDeep({
        tags: buildTagsObject({ config, namespace, name, userTags: tags }),
      }),
      when(() => kmsKey, defaultsDeep({ kmsKeyId: getField(kmsKey, "Arn") })),
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
    managedByOther,
    tagResource: tagResource({ endpoint }),
    untagResource: untagResource({ endpoint }),
  };
};
