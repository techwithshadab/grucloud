// Generated by 'gc gencode'
const { pipe, tap, get, eq, and } = require("rubico");
const { find } = require("rubico/x");

const createResources = ({ provider }) => {
  provider.EC2.makeKeyPair({
    name: "kp-ec2",
  });

  provider.EC2.useDefaultVpc({
    name: "vpc-default",
  });

  provider.EC2.makeSecurityGroup({
    name: "my-security-group",
    properties: ({ config }) => ({
      Description: "my security group",
    }),
    dependencies: ({ resources }) => ({
      vpc: resources.EC2.Vpc["vpc-default"],
    }),
  });

  provider.EC2.makeSecurityGroupRuleIngress({
    name: "my-security-group-rule-ingress-tcp-22-v4",
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
      },
    }),
    dependencies: ({ resources }) => ({
      securityGroup: resources.EC2.SecurityGroup["my-security-group"],
    }),
  });

  provider.EC2.makeInstance({
    name: "my-ec2",
    properties: ({ config }) => ({
      InstanceType: "t2.micro",
      ImageId: "ami-02e136e904f3da870",
    }),
    dependencies: ({ resources }) => ({
      keyPair: resources.EC2.KeyPair["kp-ec2"],
      securityGroups: [resources.EC2.SecurityGroup["my-security-group"]],
    }),
  });
};

exports.createResources = createResources;
