// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  {
    type: "Certificate",
    group: "ACM",
    name: "grucloud.org",
    properties: ({}) => ({
      SubjectAlternativeNames: ["grucloud.org", "*.grucloud.org"],
    }),
  },
  {
    type: "AutoScalingGroup",
    group: "AutoScaling",
    name: "ag",
    properties: ({}) => ({
      MinSize: 1,
      MaxSize: 1,
      DesiredCapacity: 1,
    }),
    dependencies: ({}) => ({
      subnets: ["subnet-a", "subnet-b"],
      launchTemplate: "my-template",
    }),
  },
  {
    type: "AutoScalingAttachment",
    group: "AutoScaling",
    dependencies: ({}) => ({
      autoScalingGroup: "ag",
      targetGroup: "target-group-rest",
    }),
  },
  {
    type: "AutoScalingAttachment",
    group: "AutoScaling",
    dependencies: ({}) => ({
      autoScalingGroup: "ag",
      targetGroup: "target-group-web",
    }),
  },
  {
    type: "Vpc",
    group: "EC2",
    name: "vpc",
    properties: ({}) => ({
      CidrBlock: "192.168.0.0/16",
    }),
  },
  { type: "InternetGateway", group: "EC2", name: "internet-gateway" },
  {
    type: "InternetGatewayAttachment",
    group: "EC2",
    dependencies: ({}) => ({
      vpc: "vpc",
      internetGateway: "internet-gateway",
    }),
  },
  {
    type: "Subnet",
    group: "EC2",
    name: "subnet-a",
    properties: ({ config }) => ({
      AvailabilityZone: `${config.region}a`,
      CidrBlock: "192.168.0.0/19",
    }),
    dependencies: ({}) => ({
      vpc: "vpc",
    }),
  },
  {
    type: "Subnet",
    group: "EC2",
    name: "subnet-b",
    properties: ({ config }) => ({
      AvailabilityZone: `${config.region}b`,
      CidrBlock: "192.168.32.0/19",
    }),
    dependencies: ({}) => ({
      vpc: "vpc",
    }),
  },
  {
    type: "RouteTable",
    group: "EC2",
    name: "rt-default-vpc",
    isDefault: true,
    dependencies: ({}) => ({
      vpc: "vpc",
    }),
  },
  {
    type: "RouteTableAssociation",
    group: "EC2",
    dependencies: ({}) => ({
      routeTable: "rt-default-vpc",
      subnet: "subnet-a",
    }),
  },
  {
    type: "RouteTableAssociation",
    group: "EC2",
    dependencies: ({}) => ({
      routeTable: "rt-default-vpc",
      subnet: "subnet-b",
    }),
  },
  {
    type: "Route",
    group: "EC2",
    properties: ({}) => ({
      DestinationCidrBlock: "0.0.0.0/0",
    }),
    dependencies: ({}) => ({
      routeTable: "rt-default-vpc",
      ig: "internet-gateway",
    }),
  },
  {
    type: "SecurityGroup",
    group: "EC2",
    name: "sg::vpc::default",
    isDefault: true,
    dependencies: ({}) => ({
      vpc: "vpc",
    }),
  },
  {
    type: "LaunchTemplate",
    group: "EC2",
    name: "my-template",
    properties: ({}) => ({
      LaunchTemplateData: {
        InstanceType: "t2.micro",
        Image: {
          Description: "Amazon Linux 2 AMI 2.0.20211001.1 x86_64 HVM gp2",
        },
      },
    }),
  },
  {
    type: "LoadBalancer",
    group: "ELBv2",
    name: "load-balancer",
    properties: ({}) => ({
      Scheme: "internet-facing",
      Type: "application",
      IpAddressType: "ipv4",
      Tags: [
        {
          Key: "mykey",
          Value: "value",
        },
      ],
    }),
    dependencies: ({}) => ({
      subnets: ["subnet-a", "subnet-b"],
      securityGroups: ["sg::vpc::default"],
    }),
  },
  {
    type: "TargetGroup",
    group: "ELBv2",
    name: "target-group-rest",
    properties: ({}) => ({
      Protocol: "HTTP",
      Port: 30020,
      HealthCheckProtocol: "HTTP",
      Tags: [
        {
          Key: "mykey",
          Value: "value",
        },
      ],
    }),
    dependencies: ({}) => ({
      vpc: "vpc",
    }),
  },
  {
    type: "TargetGroup",
    group: "ELBv2",
    name: "target-group-web",
    properties: ({}) => ({
      Protocol: "HTTP",
      Port: 30010,
      HealthCheckProtocol: "HTTP",
    }),
    dependencies: ({}) => ({
      vpc: "vpc",
    }),
  },
  {
    type: "Listener",
    group: "ELBv2",
    properties: ({}) => ({
      Port: 80,
      Protocol: "HTTP",
      Tags: [
        {
          Key: "mykey",
          Value: "value",
        },
      ],
    }),
    dependencies: ({}) => ({
      loadBalancer: "load-balancer",
      targetGroup: "target-group-web",
    }),
  },
  {
    type: "Listener",
    group: "ELBv2",
    properties: ({}) => ({
      Port: 443,
      Protocol: "HTTPS",
    }),
    dependencies: ({}) => ({
      loadBalancer: "load-balancer",
      targetGroup: "target-group-rest",
      certificate: "grucloud.org",
    }),
  },
  {
    type: "Rule",
    group: "ELBv2",
    properties: ({}) => ({
      Priority: "1",
      Conditions: [
        {
          Field: "path-pattern",
          Values: ["/*"],
        },
      ],
      Actions: [
        {
          Type: "redirect",
          Order: 1,
          RedirectConfig: {
            Protocol: "HTTPS",
            Port: "443",
            Host: "#{host}",
            Path: "/#{path}",
            Query: "#{query}",
            StatusCode: "HTTP_301",
          },
        },
      ],
      Tags: [
        {
          Key: "mykey",
          Value: "value",
        },
      ],
    }),
    dependencies: ({}) => ({
      listener: "listener::load-balancer::HTTP::80",
    }),
  },
  {
    type: "Rule",
    group: "ELBv2",
    properties: ({}) => ({
      Priority: "1",
      Conditions: [
        {
          Field: "path-pattern",
          Values: ["/api/*"],
        },
      ],
    }),
    dependencies: ({}) => ({
      listener: "listener::load-balancer::HTTPS::443",
      targetGroup: "target-group-rest",
    }),
  },
  {
    type: "Rule",
    group: "ELBv2",
    properties: ({}) => ({
      Priority: "2",
      Conditions: [
        {
          Field: "path-pattern",
          Values: ["/*"],
        },
      ],
    }),
    dependencies: ({}) => ({
      listener: "listener::load-balancer::HTTPS::443",
      targetGroup: "target-group-web",
    }),
  },
  {
    type: "HostedZone",
    group: "Route53",
    name: "grucloud.org.",
    dependencies: ({}) => ({
      domain: "grucloud.org",
    }),
  },
  {
    type: "Record",
    group: "Route53",
    dependencies: ({}) => ({
      hostedZone: "grucloud.org.",
      loadBalancer: "load-balancer",
    }),
  },
  {
    type: "Domain",
    group: "Route53Domains",
    name: "grucloud.org",
    readOnly: true,
  },
];
