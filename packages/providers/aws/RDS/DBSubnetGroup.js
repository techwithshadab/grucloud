const assert = require("assert");
const { map, pipe, tap, get, eq, not, assign, pick, omit } = require("rubico");
const { defaultsDeep } = require("rubico/x");

const { buildTags } = require("../AwsCommon");
const { getField } = require("@grucloud/core/ProviderCommon");
const { AwsClient } = require("../AwsClient");
const { createRDS, tagResource, untagResource } = require("./RDSCommon");

const findId = get("live.DBSubnetGroupArn");
const findName = get("live.DBSubnetGroupName");
const pickId = pipe([pick(["DBSubnetGroupName"])]);

const ignoreErrorCodes = ["DBSubnetGroupNotFoundFault"];

const decorate = ({ endpoint }) =>
  pipe([
    assign({
      Tags: pipe([
        ({ DBSubnetGroupArn }) => ({ ResourceName: DBSubnetGroupArn }),
        endpoint().listTagsForResource,
        get("TagList"),
      ]),
    }),
  ]);

exports.DBSubnetGroup = ({ spec, config }) => {
  const rds = createRDS(config);
  const client = AwsClient({ spec, config })(rds);

  const isDefault = pipe([eq(get("live.DBSubnetGroupName"), "default")]);

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/RDS.html#describeDBSubnetGroups-property
  const getList = client.getList({
    method: "describeDBSubnetGroups",
    getParam: "DBSubnetGroups",
    decorate,
  });

  const getById = client.getById({
    pickId,
    method: "describeDBSubnetGroups",
    getField: "DBSubnetGroups",
    ignoreErrorCodes,
  });

  const getByName = pipe([
    ({ name }) => ({ DBSubnetGroupName: name }),
    getById,
  ]);

  const isInstanceUp = pipe([eq(get("SubnetGroupStatus"), "Complete")]);

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/RDS.html#createDBSubnetGroup-property
  const configDefault = ({
    name,
    namespace,
    properties: { Tags, ...otherProps },
    dependencies: { subnets },
  }) =>
    pipe([
      () => otherProps,
      defaultsDeep({
        DBSubnetGroupName: name,
        SubnetIds: map((subnet) => getField(subnet, "SubnetId"))(subnets),
        Tags: buildTags({ config, namespace, name, UserTags: Tags }),
      }),
    ])();

  const create = client.create({
    pickCreated: () => get("DBSubnetGroup"),
    method: "createDBSubnetGroup",
    getById,
    isInstanceUp,
    config: { ...config, retryCount: 100 },
    configIsUp: { ...config, retryCount: 500 },
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/RDS.html#modifyDBSubnetGroup-property
  const update = client.update({
    pickId,
    method: "modifyDBSubnetGroup",
    filterParams: () => omit(["Tags"]),
    getById,
  });

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/RDS.html#deleteDBSubnetGroup-property
  const destroy = client.destroy({
    pickId,
    method: "deleteDBSubnetGroup",
    getById,
    ignoreErrorCodes: ["DBSubnetGroupNotFoundFault"],
  });

  return {
    spec,
    findName,
    findId,
    create,
    update,
    destroy,
    getByName,
    getList,
    configDefault,
    isDefault,
    managedByOther: isDefault,
    tagResource: tagResource({ endpoint: rds }),
    untagResource: untagResource({ endpoint: rds }),
  };
};
