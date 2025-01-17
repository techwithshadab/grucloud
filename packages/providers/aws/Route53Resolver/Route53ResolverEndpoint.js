const assert = require("assert");
const { pipe, tap, get, eq, assign, map, and, not, filter } = require("rubico");
const {
  defaultsDeep,
  first,
  pluck,
  callProp,
  when,
  isEmpty,
  unless,
} = require("rubico/x");
const { getField } = require("@grucloud/core/ProviderCommon");
const { ipToInt32 } = require("@grucloud/core/ipUtils");

const { buildTags, getNewCallerReference } = require("../AwsCommon");
const { createAwsResource } = require("../AwsClient");
const {
  tagResource,
  untagResource,
  assignTags,
} = require("./Route53ResolverCommon");

const pickId = pipe([({ Id }) => ({ ResolverEndpointId: Id })]);

const decorate = ({ endpoint }) =>
  pipe([
    // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Route53Resolver.html#listResolverEndpointIpAddresses-property
    assign({
      IpAddresses: pipe([
        pickId,
        endpoint().listResolverEndpointIpAddresses,
        get("IpAddresses", []),
        filter(get("Ip")),
        callProp("sort", (a, b) =>
          ipToInt32(a.Ip) > ipToInt32(b.Ip) ? 1 : -1
        ),
      ]),
    }),
    assignTags({ endpoint }),
  ]);

const model = ({ config }) => ({
  package: "route53resolver",
  client: "Route53Resolver",
  ignoreErrorCodes: ["ResourceNotFoundException"],
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Route53Resolver.html#getResolverEndpoint-property
  getById: {
    method: "getResolverEndpoint",
    getField: "ResolverEndpoint",
    pickId,
    decorate,
  },
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Route53Resolver.html#listResolverEndpoints-property
  getList: {
    method: "listResolverEndpoints",
    getParam: "ResolverEndpoints",
    decorate,
  },
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Route53Resolver.html#createResolverEndpoint-property
  create: {
    method: "createResolverEndpoint",
    pickCreated: ({ payload }) => pipe([get("ResolverEndpoint")]),
    isInstanceUp: pipe([
      and([
        eq(get("Status"), "OPERATIONAL"),
        pipe([get("IpAddresses"), pluck("Ip"), not(isEmpty)]),
      ]),
    ]),
    isInstanceError: pipe([eq(get("Status"), "ACTION_NEEDED")]),
    getErrorMessage: get("StatusMessage", "error"),
  },
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Route53Resolver.html#updateResolverEndpoint-property
  update: {
    method: "updateResolverEndpoint",
    //TODO
  },
  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Route53Resolver.html#deleteResolverEndpoint-property
  destroy: { method: "deleteResolverEndpoint", pickId },
});

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Route53Resolver.html
exports.Route53ResolverEndpoint = ({ spec, config }) =>
  createAwsResource({
    model: model({ config }),
    spec,
    config,
    findName: pipe([get("live.Name")]),
    findId: pipe([get("live.Arn")]),
    getByName: ({ getList, endpoint }) =>
      pipe([
        tap((params) => {
          assert(true);
        }),
        ({ name }) => ({ Filters: [{ Name: "Name", Values: [name] }] }),
        endpoint().listResolverEndpoints,
        get("ResolverEndpoints"),
        tap((params) => {
          assert(true);
        }),
        //TODO getList,
        first,
        unless(isEmpty, decorate({ endpoint })),
        tap((params) => {
          assert(true);
        }),
      ]),
    tagResource: tagResource,
    untagResource: untagResource,
    configDefault: ({
      name,
      namespace,
      properties: { Tags, ...otherProps },
      // TODO subnets
      dependencies: { securityGroups, subnets },
    }) =>
      pipe([
        () => otherProps,
        defaultsDeep({
          Name: name,
          CreatorRequestId: getNewCallerReference(),
          Tags: buildTags({ name, config, namespace, UserTags: Tags }),
        }),
        when(
          () => securityGroups,
          defaultsDeep({
            SecurityGroupIds: pipe([
              () => securityGroups,
              map((sg) => getField(sg, "GroupId")),
            ])(),
          })
        ),
      ])(),
  });
