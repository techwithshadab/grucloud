// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  {
    type: "Vpc",
    group: "EC2",
    name: "vpc",
    properties: ({}) => ({
      CidrBlock: "10.0.0.0/16",
      DnsHostnames: true,
    }),
  },
  {
    type: "Subnet",
    group: "EC2",
    name: ({ config }) => `subnet-private1-${config.region}a`,
    properties: ({ config }) => ({
      AvailabilityZone: `${config.region}a`,
      NewBits: 4,
      NetworkNumber: 8,
    }),
    dependencies: ({}) => ({
      vpc: "vpc",
    }),
  },
  {
    type: "RouteTable",
    group: "EC2",
    name: ({ config }) => `rtb-private1-${config.region}a`,
    dependencies: ({}) => ({
      vpc: "vpc",
    }),
  },
  {
    type: "RouteTableAssociation",
    group: "EC2",
    dependencies: ({ config }) => ({
      routeTable: `vpc::rtb-private1-${config.region}a`,
      subnet: `vpc::subnet-private1-${config.region}a`,
    }),
  },
  {
    type: "SecurityGroup",
    group: "EC2",
    properties: ({}) => ({
      GroupName: "ssm",
      Description: "ssm",
    }),
    dependencies: ({}) => ({
      vpc: "vpc",
    }),
  },
  {
    type: "SecurityGroupRuleIngress",
    group: "EC2",
    properties: ({}) => ({
      IpProtocol: "icmp",
      IpRanges: [
        {
          CidrIp: "0.0.0.0/0",
        },
      ],
    }),
    dependencies: ({}) => ({
      securityGroup: "sg::vpc::ssm",
    }),
  },
  {
    type: "SecurityGroupRuleIngress",
    group: "EC2",
    properties: ({}) => ({
      FromPort: 443,
      IpProtocol: "tcp",
      IpRanges: [
        {
          CidrIp: "0.0.0.0/0",
        },
      ],
      ToPort: 443,
    }),
    dependencies: ({}) => ({
      securityGroup: "sg::vpc::ssm",
    }),
  },
  {
    type: "Instance",
    group: "EC2",
    name: "my-machine",
    properties: ({ config, getId }) => ({
      InstanceType: "t2.micro",
      Placement: {
        AvailabilityZone: `${config.region}a`,
      },
      NetworkInterfaces: [
        {
          DeviceIndex: 0,
          Groups: [
            `${getId({
              type: "SecurityGroup",
              group: "EC2",
              name: "sg::vpc::ssm",
            })}`,
          ],
          SubnetId: `${getId({
            type: "Subnet",
            group: "EC2",
            name: `vpc::subnet-private1-${config.region}a`,
          })}`,
        },
      ],
      Image: {
        Description:
          "Amazon Linux 2 Kernel 5.10 AMI 2.0.20220805.0 x86_64 HVM gp2",
      },
    }),
    dependencies: ({ config }) => ({
      subnets: [`vpc::subnet-private1-${config.region}a`],
      iamInstanceProfile: "role-ec2-ssm",
      securityGroups: ["sg::vpc::ssm"],
    }),
  },
  {
    type: "VpcEndpoint",
    group: "EC2",
    name: "vpce-ec2-messages",
    properties: ({ config }) => ({
      PolicyDocument: {
        Statement: [
          {
            Action: "*",
            Effect: "Allow",
            Principal: "*",
            Resource: "*",
          },
        ],
      },
      PrivateDnsEnabled: true,
      RequesterManaged: false,
      VpcEndpointType: "Interface",
      ServiceName: `com.amazonaws.${config.region}.ec2messages`,
    }),
    dependencies: ({ config }) => ({
      vpc: "vpc",
      subnets: [`vpc::subnet-private1-${config.region}a`],
      securityGroups: ["sg::vpc::ssm"],
    }),
  },
  {
    type: "VpcEndpoint",
    group: "EC2",
    name: "vpce-ssm",
    properties: ({ config }) => ({
      PolicyDocument: {
        Statement: [
          {
            Action: "*",
            Effect: "Allow",
            Principal: "*",
            Resource: "*",
          },
        ],
      },
      PrivateDnsEnabled: true,
      RequesterManaged: false,
      VpcEndpointType: "Interface",
      ServiceName: `com.amazonaws.${config.region}.ssm`,
    }),
    dependencies: ({ config }) => ({
      vpc: "vpc",
      subnets: [`vpc::subnet-private1-${config.region}a`],
      securityGroups: ["sg::vpc::ssm"],
    }),
  },
  {
    type: "VpcEndpoint",
    group: "EC2",
    name: "vpce-ssm-messages",
    properties: ({ config }) => ({
      PolicyDocument: {
        Statement: [
          {
            Action: "*",
            Effect: "Allow",
            Principal: "*",
            Resource: "*",
          },
        ],
      },
      PrivateDnsEnabled: true,
      RequesterManaged: false,
      VpcEndpointType: "Interface",
      ServiceName: `com.amazonaws.${config.region}.ssmmessages`,
    }),
    dependencies: ({ config }) => ({
      vpc: "vpc",
      subnets: [`vpc::subnet-private1-${config.region}a`],
      securityGroups: ["sg::vpc::ssm"],
    }),
  },
  {
    type: "Role",
    group: "IAM",
    properties: ({}) => ({
      RoleName: "role-ec2-ssm",
      Description: "Allows EC2 instances to call AWS services on your behalf.",
      AssumeRolePolicyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Effect: "Allow",
            Principal: {
              Service: "ec2.amazonaws.com",
            },
            Action: "sts:AssumeRole",
          },
        ],
      },
      AttachedPolicies: [
        {
          PolicyName: "AmazonSSMManagedInstanceCore",
          PolicyArn: "arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore",
        },
      ],
    }),
  },
  {
    type: "InstanceProfile",
    group: "IAM",
    name: "role-ec2-ssm",
    dependencies: ({}) => ({
      roles: ["role-ec2-ssm"],
    }),
  },
];
