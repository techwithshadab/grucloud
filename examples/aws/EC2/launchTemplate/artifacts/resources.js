// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  { type: "KeyPair", group: "EC2", name: "kp-ecs" },
  {
    type: "Vpc",
    group: "EC2",
    name: "Vpc",
    properties: ({}) => ({
      CidrBlock: "10.0.0.0/16",
      DnsHostnames: true,
    }),
  },
  {
    type: "Subnet",
    group: "EC2",
    name: "Vpc::subnet-public",
    properties: ({ config }) => ({
      AvailabilityZone: `${config.region}a`,
      NewBits: 8,
      NetworkNumber: 0,
    }),
    dependencies: ({}) => ({
      vpc: "Vpc",
    }),
  },
  {
    type: "SecurityGroup",
    group: "EC2",
    properties: ({}) => ({
      GroupName: "EcsSecurityGroup",
      Description: "Managed By GruCloud",
    }),
    dependencies: ({}) => ({
      vpc: "Vpc",
    }),
  },
  {
    type: "SecurityGroupRuleIngress",
    group: "EC2",
    properties: ({}) => ({
      IpPermission: {
        FromPort: 80,
        IpProtocol: "tcp",
        IpRanges: [
          {
            CidrIp: "0.0.0.0/0",
          },
        ],
        ToPort: 80,
      },
    }),
    dependencies: ({}) => ({
      securityGroup: "sg::Vpc::EcsSecurityGroup",
    }),
  },
  {
    type: "Instance",
    group: "EC2",
    name: "ec2-template-subnet",
    properties: ({ config, getId }) => ({
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
              name: "sg::Vpc::EcsSecurityGroup",
            })}`,
          ],
          SubnetId: `${getId({
            type: "Subnet",
            group: "EC2",
            name: "Vpc::subnet-public",
          })}`,
        },
      ],
      LaunchTemplate: {
        LaunchTemplateId: `${getId({
          type: "LaunchTemplate",
          group: "EC2",
          name: "lt-ec2-micro",
        })}`,
        Version: "1",
      },
    }),
    dependencies: ({}) => ({
      subnets: ["Vpc::subnet-public"],
      keyPair: "kp-ecs",
      iamInstanceProfile: "role-ecs",
      securityGroups: ["sg::Vpc::EcsSecurityGroup"],
      launchTemplate: "lt-ec2-micro",
    }),
  },
  {
    type: "LaunchTemplate",
    group: "EC2",
    name: "lt-ec2-micro",
    properties: ({ getId }) => ({
      LaunchTemplateData: {
        NetworkInterfaces: [
          {
            DeviceIndex: 0,
            Groups: [
              `${getId({
                type: "SecurityGroup",
                group: "EC2",
                name: "sg::Vpc::EcsSecurityGroup",
              })}`,
            ],
            SubnetId: `${getId({
              type: "Subnet",
              group: "EC2",
              name: "Vpc::subnet-public",
            })}`,
          },
        ],
        InstanceType: "t2.micro",
        UserData:
          "#!/bin/sh\nyum update -y\namazon-linux-extras install docker\nservice docker start\nusermod -a -G docker ec2-user\nchkconfig docker on",
        Image: {
          Description: "Amazon Linux 2 AMI 2.0.20211001.1 x86_64 HVM gp2",
        },
      },
    }),
    dependencies: ({}) => ({
      subnets: ["Vpc::subnet-public"],
      keyPair: "kp-ecs",
      iamInstanceProfile: "role-ecs",
      securityGroups: ["sg::Vpc::EcsSecurityGroup"],
    }),
  },
  {
    type: "Role",
    group: "IAM",
    name: "role-ecs",
    properties: ({}) => ({
      AssumeRolePolicyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Effect: "Allow",
            Principal: {
              Service: `ec2.amazonaws.com`,
            },
            Action: "sts:AssumeRole",
          },
        ],
      },
    }),
  },
  {
    type: "InstanceProfile",
    group: "IAM",
    name: "role-ecs",
    properties: ({}) => ({
      Tags: [
        {
          Key: "mykey",
          Value: "value",
        },
      ],
    }),
    dependencies: ({}) => ({
      roles: ["role-ecs"],
    }),
  },
];
