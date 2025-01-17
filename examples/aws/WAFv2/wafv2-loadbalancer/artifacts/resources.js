// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  {
    type: "Vpc",
    group: "EC2",
    name: "wafv2-vpc",
    properties: ({}) => ({
      CidrBlock: "10.0.0.0/16",
      DnsHostnames: true,
    }),
  },
  { type: "InternetGateway", group: "EC2", name: "wafv2-igw" },
  {
    type: "InternetGatewayAttachment",
    group: "EC2",
    dependencies: ({}) => ({
      vpc: "wafv2-vpc",
      internetGateway: "wafv2-igw",
    }),
  },
  {
    type: "Subnet",
    group: "EC2",
    name: ({ config }) => `wafv2-vpc::wafv2-subnet-public1-${config.region}a`,
    properties: ({ config }) => ({
      AvailabilityZone: `${config.region}a`,
      NewBits: 4,
      NetworkNumber: 0,
    }),
    dependencies: ({}) => ({
      vpc: "wafv2-vpc",
    }),
  },
  {
    type: "Subnet",
    group: "EC2",
    name: ({ config }) => `wafv2-vpc::wafv2-subnet-public2-${config.region}b`,
    properties: ({ config }) => ({
      AvailabilityZone: `${config.region}b`,
      NewBits: 4,
      NetworkNumber: 1,
    }),
    dependencies: ({}) => ({
      vpc: "wafv2-vpc",
    }),
  },
  {
    type: "RouteTable",
    group: "EC2",
    name: "wafv2-vpc::wafv2-rtb-public",
    dependencies: ({}) => ({
      vpc: "wafv2-vpc",
    }),
  },
  {
    type: "RouteTableAssociation",
    group: "EC2",
    dependencies: ({ config }) => ({
      routeTable: "wafv2-vpc::wafv2-rtb-public",
      subnet: `wafv2-vpc::wafv2-subnet-public1-${config.region}a`,
    }),
  },
  {
    type: "RouteTableAssociation",
    group: "EC2",
    dependencies: ({ config }) => ({
      routeTable: "wafv2-vpc::wafv2-rtb-public",
      subnet: `wafv2-vpc::wafv2-subnet-public2-${config.region}b`,
    }),
  },
  {
    type: "Route",
    group: "EC2",
    properties: ({}) => ({
      DestinationCidrBlock: "0.0.0.0/0",
    }),
    dependencies: ({}) => ({
      routeTable: "wafv2-vpc::wafv2-rtb-public",
      ig: "wafv2-igw",
    }),
  },
  {
    type: "SecurityGroup",
    group: "EC2",
    name: "sg::wafv2-vpc::default",
    isDefault: true,
    dependencies: ({}) => ({
      vpc: "wafv2-vpc",
    }),
  },
  {
    type: "LoadBalancer",
    group: "ElasticLoadBalancingV2",
    name: "alb",
    properties: ({}) => ({
      Scheme: "internet-facing",
      Type: "application",
      IpAddressType: "ipv4",
    }),
    dependencies: ({ config }) => ({
      subnets: [
        `wafv2-vpc::wafv2-subnet-public1-${config.region}a`,
        `wafv2-vpc::wafv2-subnet-public2-${config.region}b`,
      ],
      securityGroups: ["sg::wafv2-vpc::default"],
    }),
  },
  {
    type: "TargetGroup",
    group: "ElasticLoadBalancingV2",
    name: "tg1",
    properties: ({}) => ({
      Protocol: "HTTP",
      Port: 80,
      HealthCheckProtocol: "HTTP",
      TargetType: "ip",
    }),
    dependencies: ({}) => ({
      vpc: "wafv2-vpc",
    }),
  },
  {
    type: "Listener",
    group: "ElasticLoadBalancingV2",
    properties: ({}) => ({
      Port: 80,
      Protocol: "HTTP",
    }),
    dependencies: ({}) => ({
      loadBalancer: "alb",
      targetGroup: "tg1",
    }),
  },
  {
    type: "WebACL",
    group: "WAFv2",
    name: "my-webacl",
    properties: ({}) => ({
      Capacity: 0,
      DefaultAction: {
        Allow: {},
      },
      ManagedByFirewallManager: false,
      Name: "my-webacl",
      Rules: [],
      VisibilityConfig: {
        CloudWatchMetricsEnabled: true,
        MetricName: "my-webacl",
        SampledRequestsEnabled: true,
      },
      Scope: "REGIONAL",
    }),
  },
  {
    type: "WebACLAssociation",
    group: "WAFv2",
    dependencies: ({}) => ({
      webAcl: "my-webacl",
      loadBalancer: "alb",
    }),
  },
];
