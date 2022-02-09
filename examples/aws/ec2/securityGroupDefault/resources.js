// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  { type: "Vpc", group: "EC2", name: "vpc-default", isDefault: true },
  {
    type: "SecurityGroup",
    group: "EC2",
    name: "sg-default-vpc-default",
    isDefault: true,
    dependencies: () => ({
      vpc: "vpc-default",
    }),
  },
  {
    type: "SecurityGroupRuleIngress",
    group: "EC2",
    name: "sg-rule-ingress-test",
    properties: ({}) => ({
      IpPermission: {
        IpProtocol: "tcp",
        FromPort: 22,
        ToPort: 22,
        IpRanges: [
          {
            CidrIp: "0.0.0.0/0",
          },
        ],
        Ipv6Ranges: [
          {
            CidrIpv6: "::/0",
          },
        ],
      },
    }),
    dependencies: () => ({
      securityGroup: "sg-default-vpc-default",
    }),
  },
  {
    type: "SecurityGroupRuleEgress",
    group: "EC2",
    name: "sg-rule-egress-test",
    properties: ({}) => ({
      IpPermission: {
        IpProtocol: "tcp",
        FromPort: 1024,
        ToPort: 65535,
        IpRanges: [
          {
            CidrIp: "0.0.0.0/0",
          },
        ],
        Ipv6Ranges: [
          {
            CidrIpv6: "::/0",
          },
        ],
      },
    }),
    dependencies: () => ({
      securityGroup: "sg-default-vpc-default",
    }),
  },
];
