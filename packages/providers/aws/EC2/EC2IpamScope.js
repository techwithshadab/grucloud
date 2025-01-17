const assert = require("assert");
const { pipe, tap, get, pick, eq, switchCase, map, not } = require("rubico");
const { defaultsDeep, find, append, prepend, isEmpty } = require("rubico/x");
const { getByNameCore } = require("@grucloud/core/Common");

const { buildTags, findNameInTags } = require("../AwsCommon");
const { createAwsResource } = require("../AwsClient");
const { tagResource, untagResource } = require("./EC2Common");
const { getField } = require("@grucloud/core/ProviderCommon");

const createModel = ({ config }) => ({
  package: "ec2",
  client: "EC2",
  ignoreErrorCodes: ["InvalidIpamScopeId.NotFound"],
  getById: {
    pickId: pipe([({ IpamScopeId }) => ({ IpamScopeIds: [IpamScopeId] })]),
    method: "describeIpamScopes",
    getField: "IpamScopes",
  },
  getList: {
    method: "describeIpamScopes",
    getParam: "IpamScopes",
  },
  create: {
    method: "createIpamScope",
    pickCreated: ({ payload }) => pipe([get("IpamScope")]),
    isInstanceUp: eq(get("State"), "create-complete"),
  },
  destroy: {
    method: "deleteIpamScope",
    pickId: pipe([pick(["IpamScopeId"])]),
  },
});

const findName = ({ live, lives, config }) =>
  pipe([
    () => [
      findNameInTags({}),
      get("live.Description"),
      // TODO add locale ?
      () => "ipam-scope",
    ],
    map((fn) => fn({ live, lives, config })),
    find(not(isEmpty)),
    tap((params) => {
      assert(true);
    }),
  ])();

const findId = pipe([get("live.IpamScopeId")]);

const managedByOther = get("live.IsDefault");

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/EC2.html
exports.EC2IpamScope = ({ spec, config }) =>
  createAwsResource({
    model: createModel({ config }),
    spec,
    config,
    findName: pipe([
      tap((params) => {
        assert(true);
      }),
      switchCase([
        get("live.IsDefault"),
        ({ live, lives }) =>
          pipe([
            () =>
              lives.getByType({
                id: live.IpamId,
                type: "Ipam",
                group: "EC2",
                providerName: config.providerName,
              }),
            find(eq(get("live.IpamArn"), live.IpamArn)),
            get("name"),
            tap((name) => {
              assert(name);
            }),
            prepend(`ipam-scope::default::`),
            append(live.IpamScopeType),
          ])(),
        findName,
      ]),
    ]),
    findId,
    cannotBeDeleted: managedByOther,
    managedByOther,
    getByName: getByNameCore,
    tagResource: tagResource,
    untagResource: untagResource,
    configDefault: ({
      name,
      namespace,
      properties: { Tags, ...otherProps },
      dependencies: { ipam },
    }) =>
      pipe([
        () => otherProps,
        defaultsDeep({
          IpamId: getField(ipam, "IpamId"),
          TagSpecifications: [
            {
              ResourceType: "ipam-scope",
              Tags: buildTags({ config, namespace, name, UserTags: Tags }),
            },
          ],
        }),
      ])(),
  });
