// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  {
    type: "LoadBalancer",
    group: "ElasticLoadBalancingV2",
    properties: ({}) => ({
      Name: "load-balancer",
      Scheme: "internet-facing",
      Type: "application",
      IpAddressType: "ipv4",
      Tags: [{ Key: "mykey1", Value: "value" }],
    }),
    dependencies: () => ({
      subnets: ["vpc::subnet-a", "vpc::subnet-b"],
      securityGroups: ["sg::vpc::default"],
    }),
  },
  {
    type: "TargetGroup",
    group: "ElasticLoadBalancingV2",
    properties: ({}) => ({
      Name: "target-group-rest",
      Protocol: "HTTP",
      Port: 30020,
      HealthCheckProtocol: "HTTP",
      HealthCheckPort: "traffic-port",
      HealthCheckEnabled: true,
      HealthCheckIntervalSeconds: 30,
      HealthCheckTimeoutSeconds: 5,
      HealthyThresholdCount: 5,
      HealthCheckPath: "/",
      Matcher: {
        HttpCode: "200",
      },
      TargetType: "instance",
      ProtocolVersion: "HTTP1",
      Tags: [{ Key: "mykey1", Value: "value" }],
    }),
    dependencies: () => ({
      vpc: "vpc",
    }),
  },
  {
    type: "TargetGroup",
    group: "ElasticLoadBalancingV2",
    properties: ({}) => ({
      Name: "target-group-web",
      Protocol: "HTTP",
      Port: 30010,
      HealthCheckProtocol: "HTTP",
      HealthCheckPort: "traffic-port",
      HealthCheckEnabled: true,
      HealthCheckIntervalSeconds: 30,
      HealthCheckTimeoutSeconds: 5,
      HealthyThresholdCount: 5,
      HealthCheckPath: "/",
      Matcher: {
        HttpCode: "200",
      },
      TargetType: "instance",
      ProtocolVersion: "HTTP1",
    }),
    dependencies: () => ({
      vpc: "vpc",
    }),
  },
  {
    type: "Listener",
    group: "ElasticLoadBalancingV2",
    properties: ({}) => ({
      Port: 80,
      Protocol: "HTTP",
      Tags: [{ Key: "mykey1", Value: "value" }],
    }),
    dependencies: () => ({
      loadBalancer: "load-balancer",
      targetGroup: "target-group-web",
    }),
  },
  {
    type: "Listener",
    group: "ElasticLoadBalancingV2",
    properties: ({}) => ({
      Port: 443,
      Protocol: "HTTPS",
    }),
    dependencies: () => ({
      loadBalancer: "load-balancer",
      targetGroup: "target-group-rest",
      certificate: "grucloud.org",
    }),
  },
  {
    type: "Rule",
    group: "ElasticLoadBalancingV2",
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
      Tags: [{ Key: "mykey1", Value: "value" }],
    }),
    dependencies: () => ({
      listener: "listener::load-balancer::HTTP::80",
    }),
  },
];
