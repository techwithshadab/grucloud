// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  {
    type: "Vpc",
    group: "EC2",
    name: "EfsLambdaVpc",
    properties: ({}) => ({
      CidrBlock: "10.0.0.0/16",
    }),
  },
  {
    type: "Subnet",
    group: "EC2",
    name: "EfsLambdaSubnetA",
    properties: ({ config }) => ({
      AvailabilityZone: `${config.region}a`,
      NewBits: 8,
      NetworkNumber: 0,
    }),
    dependencies: ({}) => ({
      vpc: "EfsLambdaVpc",
    }),
  },
  {
    type: "Subnet",
    group: "EC2",
    name: "EfsLambdaSubnetB",
    properties: ({ config }) => ({
      AvailabilityZone: `${config.region}b`,
      NewBits: 8,
      NetworkNumber: 1,
    }),
    dependencies: ({}) => ({
      vpc: "EfsLambdaVpc",
    }),
  },
  {
    type: "SecurityGroup",
    group: "EC2",
    properties: ({}) => ({
      GroupName: "sam-app-EfsLambdaSecurityGroup-NQDR9AKM2HY",
      Description: "EFS + Lambda on SAM Security Group",
    }),
    dependencies: ({}) => ({
      vpc: "EfsLambdaVpc",
    }),
  },
  {
    type: "SecurityGroupRuleIngress",
    group: "EC2",
    properties: ({}) => ({
      FromPort: 0,
      IpProtocol: "tcp",
      IpRanges: [
        {
          CidrIp: "0.0.0.0/0",
        },
      ],
      ToPort: 65535,
    }),
    dependencies: ({}) => ({
      securityGroup:
        "sg::EfsLambdaVpc::sam-app-EfsLambdaSecurityGroup-NQDR9AKM2HY",
    }),
  },
  {
    type: "SecurityGroupRuleEgress",
    group: "EC2",
    properties: ({}) => ({
      FromPort: 0,
      IpProtocol: "tcp",
      IpRanges: [
        {
          CidrIp: "0.0.0.0/0",
        },
      ],
      ToPort: 65535,
    }),
    dependencies: ({}) => ({
      securityGroup:
        "sg::EfsLambdaVpc::sam-app-EfsLambdaSecurityGroup-NQDR9AKM2HY",
    }),
  },
  {
    type: "FileSystem",
    group: "EFS",
    name: "fs-0c95a09faadb73087",
    properties: ({}) => ({
      Encrypted: false,
      PerformanceMode: "generalPurpose",
      ThroughputMode: "bursting",
    }),
  },
  {
    type: "AccessPoint",
    group: "EFS",
    name: "fsap-0ef29121aa02af8f7",
    properties: ({}) => ({
      PosixUser: {
        Gid: 1000,
        SecondaryGids: [],
        Uid: 1000,
      },
      RootDirectory: {
        CreationInfo: {
          OwnerGid: 1000,
          OwnerUid: 1000,
          Permissions: "755",
        },
        Path: "/lambda",
      },
    }),
    dependencies: ({}) => ({
      fileSystem: "fs-0c95a09faadb73087",
    }),
  },
  {
    type: "MountTarget",
    group: "EFS",
    properties: ({ config }) => ({
      AvailabilityZoneName: `${config.region}a`,
    }),
    dependencies: ({}) => ({
      fileSystem: "fs-0c95a09faadb73087",
      subnet: "EfsLambdaVpc::EfsLambdaSubnetA",
      securityGroups: [
        "sg::EfsLambdaVpc::sam-app-EfsLambdaSecurityGroup-NQDR9AKM2HY",
      ],
    }),
  },
  {
    type: "MountTarget",
    group: "EFS",
    properties: ({ config }) => ({
      AvailabilityZoneName: `${config.region}b`,
    }),
    dependencies: ({}) => ({
      fileSystem: "fs-0c95a09faadb73087",
      subnet: "EfsLambdaVpc::EfsLambdaSubnetB",
      securityGroups: [
        "sg::EfsLambdaVpc::sam-app-EfsLambdaSecurityGroup-NQDR9AKM2HY",
      ],
    }),
  },
  {
    type: "Role",
    group: "IAM",
    properties: ({ getId }) => ({
      RoleName: "sam-app-HelloEfsFunctionRole-15LXBM09R2ILE",
      AssumeRolePolicyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Effect: "Allow",
            Principal: {
              Service: "lambda.amazonaws.com",
            },
            Action: "sts:AssumeRole",
          },
        ],
      },
      Policies: [
        {
          PolicyDocument: {
            Statement: [
              {
                Condition: {
                  StringEquals: {
                    "elasticfilesystem:AccessPointArn": `${getId({
                      type: "AccessPoint",
                      group: "EFS",
                      name: "fsap-0ef29121aa02af8f7",
                    })}`,
                  },
                },
                Action: [
                  "elasticfilesystem:ClientMount",
                  "elasticfilesystem:ClientWrite",
                ],
                Resource: `${getId({
                  type: "FileSystem",
                  group: "EFS",
                  name: "fs-0c95a09faadb73087",
                })}`,
                Effect: "Allow",
              },
            ],
          },
          PolicyName: "HelloEfsFunctionRolePolicy0",
        },
      ],
      AttachedPolicies: [
        {
          PolicyName: "AWSLambdaBasicExecutionRole",
          PolicyArn:
            "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole",
        },
        {
          PolicyName: "AWSLambdaVPCAccessExecutionRole",
          PolicyArn:
            "arn:aws:iam::aws:policy/service-role/AWSLambdaVPCAccessExecutionRole",
        },
      ],
      Tags: [
        {
          Key: "lambda:createdBy",
          Value: "SAM",
        },
      ],
    }),
    dependencies: ({}) => ({
      efsFileSystems: ["fs-0c95a09faadb73087"],
      efsAccessPoints: ["fsap-0ef29121aa02af8f7"],
    }),
  },
  {
    type: "Function",
    group: "Lambda",
    properties: ({ getId }) => ({
      Configuration: {
        FileSystemConfigs: [
          {
            Arn: `${getId({
              type: "AccessPoint",
              group: "EFS",
              name: "fsap-0ef29121aa02af8f7",
            })}`,
            LocalMountPath: "/mnt/msg",
          },
        ],
        FunctionName: "sam-app-HelloEfsFunction-kAB4qyDAUDSl",
        Handler: "app.lambda_handler",
        Runtime: "python3.8",
        Timeout: 15,
      },
      Tags: {
        "lambda:createdBy": "SAM",
      },
    }),
    dependencies: ({}) => ({
      role: "sam-app-HelloEfsFunctionRole-15LXBM09R2ILE",
      subnets: [
        "EfsLambdaVpc::EfsLambdaSubnetA",
        "EfsLambdaVpc::EfsLambdaSubnetB",
      ],
      securityGroups: [
        "sg::EfsLambdaVpc::sam-app-EfsLambdaSecurityGroup-NQDR9AKM2HY",
      ],
      efsAccessPoints: ["fsap-0ef29121aa02af8f7"],
    }),
  },
];
