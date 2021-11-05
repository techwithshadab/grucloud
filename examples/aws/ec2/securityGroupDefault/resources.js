// Generated by 'gc gencode'
const { pipe, tap, get, eq, and } = require("rubico");
const { find } = require("rubico/x");

const createResources = ({ provider }) => {
  provider.EC2.useVpc({
    name: "vpc-default",
  });

  provider.EC2.useDefaultSecurityGroup({
    name: "sg-default-vpc-default",
    dependencies: ({ resources }) => ({
      vpc: resources.EC2.Vpc["vpc-default"],
    }),
  });

  provider.EC2.makeSecurityGroupRuleIngress({
    name: "sg-rule-ingress-test",
    properties: ({ config }) => ({
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
    dependencies: ({ resources }) => ({
      securityGroup: resources.EC2.SecurityGroup["sg-default-vpc-default"],
    }),
  });

  provider.EC2.makeSecurityGroupRuleEgress({
    name: "sg-rule-egress-test",
    properties: ({ config }) => ({
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
    dependencies: ({ resources }) => ({
      securityGroup: resources.EC2.SecurityGroup["sg-default-vpc-default"],
    }),
  });
};

exports.createResources = createResources;
