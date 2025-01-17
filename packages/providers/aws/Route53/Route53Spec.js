const assert = require("assert");
const {
  tap,
  pipe,
  assign,
  map,
  pick,
  get,
  eq,
  or,
  switchCase,
  filter,
  omit,
  not,
} = require("rubico");
const {
  append,
  prepend,
  isEmpty,
  find,
  includes,
  when,
  unless,
  callProp,
  defaultsDeep,
  first,
  pluck,
} = require("rubico/x");
const { omitIfEmpty, buildGetId } = require("@grucloud/core/Common");
const { hasDependency } = require("@grucloud/core/generatorUtils");

const {
  isOurMinion,
  compareAws,
  replaceAccountAndRegion,
  replaceRegion,
} = require("../AwsCommon");
const {
  Route53HostedZone,
  findDnsServers,
  findNsRecordByName,
} = require("./Route53HostedZone");
const { Route53ZoneVpcAssociation } = require("./Route53ZoneVpcAssociation");
const {
  Route53Record,
  compareRoute53Record,
  Route53RecordDependencies,
} = require("./Route53Record");
const {
  Route53VpcAssociationAuthorization,
} = require("./Route53VpcAssociationAuthorization");
const { Route53HealthCheck } = require("./Route53HealthCheck");

const GROUP = "Route53";

const compareRoute53 = compareAws({});

const omitHostedZoneConfigComment = pipe([
  omitIfEmpty(["HostedZoneConfig.Comment"]),
  omitIfEmpty(["HostedZoneConfig"]),
]);

module.exports = pipe([
  () => [
    {
      type: "HealthCheck",
      dependencies: {
        cloudWatchAlarm: {
          type: "Alarm",
          group: "CloudWatch",
          dependencyId: ({ lives, config }) =>
            pipe([
              get("AlarmIdentifier.Name"),
              (name) =>
                lives.getByName({
                  name,
                  type: "Alarm",
                  group: "CloudWatch",
                  config: config.providerName,
                }),
              get("id"),
            ]),
        },
        routingControl: {
          type: "RoutingControl",
          group: "Route53RecoveryControlConfig",
          dependencyId: ({ lives, config }) =>
            get("HealthCheckConfig.RoutingControlArn"),
        },
      },
      Client: Route53HealthCheck,
      compare: compareRoute53({
        filterTarget: () => pipe([() => ({})]),
        filterLive: () => pipe([() => ({})]),
      }),
      inferName: ({ properties, dependenciesSpec: { routingControl } }) =>
        pipe([
          () => properties,
          get("HealthCheckConfig"),
          switchCase([
            ({ Type }) =>
              pipe([
                () => [
                  "HTTP",
                  "HTTPS",
                  "HTTP_STR_MATCH",
                  "HTTPS_STR_MATCH",
                  "TCP",
                ],
                includes(Type),
              ])(),
            ({ Type, FullyQualifiedDomainName, IPAddress }) =>
              `heathcheck::${Type}::${FullyQualifiedDomainName || IPAddress}`,
            //TODO
            eq(get("Type"), "CALCULATED"),
            pipe([get("ResourcePath"), prepend("heathcheck::CALCULATED::")]),
            eq(get("Type"), "CLOUDWATCH_METRIC"),
            pipe([
              get("AlarmIdentifier.Name"),
              prepend("heathcheck::CLOUDWATCH_METRIC::"),
            ]),
            eq(get("Type"), "RECOVERY_CONTROL"),
            () => `heathcheck::RECOVERY_CONTROL::${routingControl}`,
          ]),
        ])(),
      propertiesDefault: {
        HealthCheckConfig: {
          Inverted: false,
          Disabled: false,
        },
      },
      omitProperties: [
        "Id",
        "CallerReference",
        "LinkedService",
        "HealthCheckConfig.RoutingControlArn",
        "HealthCheckVersion",
      ],
    },
    {
      type: "HostedZone",
      dependencies: {
        domain: {
          type: "Domain",
          group: "Route53Domains",
          dependencyId:
            ({ lives, config }) =>
            (live) =>
              pipe([
                () =>
                  lives.getByType({
                    type: "Domain",
                    group: "Route53Domains",
                    providerName: config.providerNames,
                  }),
                find(
                  pipe([
                    get("live.DomainName"),
                    (DomainName) =>
                      pipe([
                        () => live.Name.slice(0, -1),
                        includes(DomainName),
                      ])(),
                  ])
                ),
                get("id"),
              ])(),
        },
        hostedZone: {
          type: "HostedZone",
          group: "Route53",
          ignoreOnDestroy: true,
          dependencyId:
            ({ lives, config }) =>
            (live) =>
              pipe([
                () =>
                  lives.getByType({
                    type: "HostedZone",
                    group: "Route53",
                    providerName: config.providerNames,
                  }),
                filter(not(eq(get("live.Name"), live.Name))),
                filter(
                  pipe([
                    get("live.RecordSet"),
                    findNsRecordByName(live.Name),
                    get("ResourceRecords"),
                    first,
                    get("Value"),
                    (dnsServer) => includes(dnsServer)(findDnsServers(live)),
                  ])
                ),
                pluck("id"),
              ])(),
        },
        vpc: {
          type: "Vpc",
          group: "EC2",
          parent: true,
          dependencyId: ({ lives, config }) =>
            pipe([get("VpcAssociations"), first, get("VPCId")]),
        },
      },
      Client: Route53HostedZone,
      compare: compareRoute53({
        filterAll: () =>
          pipe([
            pick(["HostedZoneConfig.Comment"]),
            omitHostedZoneConfigComment,
          ]),
      }),
      inferName: get("properties.Name"),
      filterLive: ({ lives, providerConfig }) =>
        pipe([
          pick(["Name", "HostedZoneConfig.Comment"]),
          omitHostedZoneConfigComment,
          assign({
            Name: pipe([get("Name"), replaceRegion({ lives, providerConfig })]),
          }),
        ]),
      includeDefaultDependencies: true,
    },
    {
      type: "ZoneVpcAssociation",
      Client: Route53ZoneVpcAssociation,
      dependencies: {
        hostedZone: {
          type: "HostedZone",
          group: "Route53",
          parent: true,
          dependencyId: ({ lives, config }) => get("HostedZoneId"),
        },
        vpc: {
          type: "Vpc",
          group: "EC2",
          parent: true,
          dependencyId: ({ lives, config }) => get("VPC.VPCId"),
        },
      },
      omitProperties: ["HostedZoneId", "Name", "Owner", "VPC"],
      inferName: ({ properties, dependenciesSpec: { hostedZone, vpc } }) =>
        pipe([() => `zone-assoc::${hostedZone}::${vpc}`])(),
      compare: compareRoute53({
        filterTarget: () => pipe([() => ({})]),
        filterLive: () => pipe([() => ({})]),
      }),
      // TODO region
      //filterLive: () => pick([]),
    },
    {
      type: "VpcAssociationAuthorization",
      Client: Route53VpcAssociationAuthorization,
      dependencies: {
        hostedZone: {
          type: "HostedZone",
          group: "Route53",
          parent: true,
          dependencyId: ({ lives, config }) => get("HostedZoneId"),
        },
        vpc: {
          type: "Vpc",
          group: "EC2",
          parent: true,
          dependencyId: ({ lives, config }) => get("VPC.VPCId"),
        },
      },
      omitProperties: ["HostedZoneId", "VPC"],
      inferName: ({ properties, dependenciesSpec: { hostedZone, vpc } }) =>
        pipe([() => `vpc-assoc-auth::${hostedZone}::${vpc}`])(),
      compare: compareRoute53({
        filterTarget: () => pipe([() => ({})]),
        filterLive: () => pipe([() => ({})]),
      }),
      // TODO region
      //filterLive: () => pick([]),
    },
    {
      type: "Record",
      dependencies: {
        hostedZone: {
          type: "HostedZone",
          group: "Route53",
          parent: true,
          dependencyId: ({ lives, config }) => get("HostedZoneId"),
        },
        healthCheck: {
          type: "healthCheck",
          group: "Route53",
          dependencyId: ({ lives, config }) => get("HealthCheckId"),
        },
        ...Route53RecordDependencies,
      },
      Client: Route53Record,
      isOurMinion: () => true,
      compare: compareRoute53Record,
      omitProperties: [],
      inferName: ({ properties, dependenciesSpec }) =>
        pipe([
          () => dependenciesSpec,
          tap(() => {
            assert(dependenciesSpec);
          }),
          switchCase([
            get("vpcEndpoint"),
            pipe([
              () => `EC2::VpcEndpoint::${properties.Type}::${properties.Name}`,
            ]),
            get("elasticIpAddress"),
            pipe([
              get("elasticIpAddress", "noName"),
              prepend("EC2::ElasticIpAddress::A::"),
            ]),
            get("certificate"),
            pipe([get("certificate"), prepend(`ACM::Certificate::CNAME::`)]),
            get("userPoolDomain"),
            pipe([
              get("userPoolDomain"),
              prepend("CognitoIdentityServiceProvider::UserPoolDomain::A::"),
            ]),
            get("loadBalancer"),
            pipe([
              get("loadBalancer"),
              prepend("ElasticLoadBalancingV2::LoadBalancer::A::"),
            ]),
            get("distribution"),
            pipe([
              get("distribution"),
              prepend("CloudFront::Distribution::A::"),
            ]),
            get("apiGatewayV2DomainName"),
            pipe([
              get("apiGatewayV2DomainName"),
              prepend("ApiGatewayV2::DomainName::A::"),
            ]),
            () => `${properties.Type}::${properties.Name}`,
          ]),
          prepend(`record::`),
          when(
            () => properties.SetIdentifier,
            append(`::${properties.SetIdentifier}`)
          ),
          tap((params) => {
            assert(true);
          }),
        ])(),
      filterLive: ({ lives, providerConfig }) =>
        pipe([
          unless(
            pipe([
              get("AliasTarget.DNSName", ""),
              callProp("startsWith", "s3-website"),
            ]),
            omit(["AliasTarget.DNSName", "AliasTarget.HostedZoneId"])
          ),
          assign({
            Name: pipe([
              get("Name"),
              replaceAccountAndRegion({ lives, providerConfig }),
            ]),
            ResourceRecords: pipe([
              get("ResourceRecords"),
              map((resourceRecord) =>
                pipe([
                  () => lives,
                  filter(eq(get("groupType"), "EC2::ElasticIpAddress")),
                  find(eq(get("live.PublicIp"), resourceRecord.Value)),
                  switchCase([
                    isEmpty,
                    () => resourceRecord,
                    (IPAddress) =>
                      pipe([
                        () => resourceRecord,
                        assign({
                          Value: pipe([
                            () => IPAddress,
                            buildGetId({
                              id: IPAddress.id,
                              path: "live.PublicIp",
                              providerConfig,
                            }),
                            (result) => () => result,
                          ]),
                        }),
                      ])(),
                  ]),
                ])()
              ),
            ]),
          }),
          omitIfEmpty(["ResourceRecords"]),
          omit(["HostedZoneId"]),
        ]),
      hasNoProperty: ({ lives, resource }) =>
        pipe([
          () => resource,
          or([
            //hasDependency({ type: "LoadBalancer", group: "ElasticLoadBalancingV2" }),
            hasDependency({ type: "Certificate", group: "ACM" }),
            hasDependency({ type: "Distribution", group: "CloudFront" }),
            hasDependency({ type: "DomainName", group: "ApiGatewayV2" }),
            hasDependency({
              type: "UserPoolDomain",
              group: "CognitoIdentityServiceProvider",
            }),
          ]),
        ])(),
      //TODO remove ?
      ignoreResource: () => get("cannotBeDeleted"),
    },
  ],
  map(defaultsDeep({ group: GROUP, isOurMinion })),
]);
