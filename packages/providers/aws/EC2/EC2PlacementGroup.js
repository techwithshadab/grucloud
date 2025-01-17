const assert = require("assert");
const { pipe, tap, get, pick, assign } = require("rubico");
const { defaultsDeep } = require("rubico/x");
const { getByNameCore } = require("@grucloud/core/Common");

const { buildTags } = require("../AwsCommon");
const { createAwsResource } = require("../AwsClient");
const { tagResource, untagResource } = require("./EC2Common");

const findId = pipe([
  get("live.GroupId"),
  tap((GroupId) => {
    assert(GroupId);
  }),
]);

const pickId = pipe([
  tap(({ GroupName }) => {
    assert(GroupName);
  }),
  pick(["GroupName"]),
]);

const createModel = ({ config }) => ({
  package: "ec2",
  client: "EC2",
  ignoreErrorCodes: ["InvalidPlacementGroup.Unknown"],
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#describePlacementGroups-property
  getById: {
    pickId: pipe([
      tap(({ GroupName }) => {
        assert(GroupName);
      }),
      ({ GroupName }) => ({ GroupNames: [GroupName] }),
    ]),
    method: "describePlacementGroups",
  },
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#describePlacementGroups-property
  getList: {
    method: "describePlacementGroups",
    getParam: "PlacementGroups",
    decorate: ({ endpoint, getById }) => pipe([assign({})]),
  },
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#createPlacementGroup-property
  create: {
    method: "createPlacementGroup",
    pickCreated: ({ payload }) => pipe([get("PlacementGroup")]),
  },
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html#deletePlacementGroup-property
  destroy: {
    method: "deletePlacementGroup",
    pickId,
  },
});

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/NetworkPlacementGroup.html
exports.EC2PlacementGroup = ({ spec, config }) =>
  createAwsResource({
    model: createModel({ config }),
    spec,
    config,
    findName: get("live.GroupName"),
    findId,
    getByName: getByNameCore,
    tagResource: tagResource,
    untagResource: untagResource,
    configDefault: ({ name, namespace, properties: { Tags, ...otherProps } }) =>
      pipe([
        () => otherProps,
        defaultsDeep({
          TagSpecifications: [
            {
              ResourceType: "placement-group",
              Tags: buildTags({ config, namespace, name, UserTags: Tags }),
            },
          ],
        }),
      ])(),
  });
