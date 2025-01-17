// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  {
    type: "LogGroup",
    group: "CloudWatchLogs",
    properties: ({}) => ({
      logGroupName: "flowlog",
      retentionInDays: 1,
    }),
  },
  {
    type: "FlowLogs",
    group: "EC2",
    name: "fl4vpc",
    properties: ({}) => ({
      TrafficType: "ALL",
      MaxAggregationInterval: 60,
    }),
    dependencies: ({ config }) => ({
      subnet: `project-vpc::project-subnet-public1-${config.region}a`,
      iamRole: "flow-role",
      cloudWatchLogGroup: "flowlog",
    }),
  },
  {
    type: "Vpc",
    group: "EC2",
    name: "project-vpc",
    properties: ({}) => ({
      CidrBlock: "10.0.0.0/16",
      DnsHostnames: true,
    }),
  },
  { type: "InternetGateway", group: "EC2", name: "project-igw" },
  {
    type: "InternetGatewayAttachment",
    group: "EC2",
    dependencies: ({}) => ({
      vpc: "project-vpc",
      internetGateway: "project-igw",
    }),
  },
  {
    type: "Subnet",
    group: "EC2",
    name: ({ config }) =>
      `project-vpc::project-subnet-public1-${config.region}a`,
    properties: ({ config }) => ({
      AvailabilityZone: `${config.region}a`,
      NewBits: 4,
      NetworkNumber: 0,
    }),
    dependencies: ({}) => ({
      vpc: "project-vpc",
    }),
  },
  {
    type: "RouteTable",
    group: "EC2",
    name: "project-vpc::project-rtb-public",
    dependencies: ({}) => ({
      vpc: "project-vpc",
    }),
  },
  {
    type: "RouteTableAssociation",
    group: "EC2",
    dependencies: ({ config }) => ({
      routeTable: "project-vpc::project-rtb-public",
      subnet: `project-vpc::project-subnet-public1-${config.region}a`,
    }),
  },
  {
    type: "Route",
    group: "EC2",
    properties: ({}) => ({
      DestinationCidrBlock: "0.0.0.0/0",
    }),
    dependencies: ({}) => ({
      routeTable: "project-vpc::project-rtb-public",
      ig: "project-igw",
    }),
  },
  {
    type: "Role",
    group: "IAM",
    properties: ({}) => ({
      RoleName: "flow-role",
      AssumeRolePolicyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Effect: "Allow",
            Principal: {
              Service: `vpc-flow-logs.amazonaws.com`,
            },
            Action: "sts:AssumeRole",
          },
        ],
      },
      Policies: [
        {
          PolicyDocument: {
            Version: "2012-10-17",
            Statement: [
              {
                Action: [
                  "logs:CreateLogGroup",
                  "logs:CreateLogStream",
                  "logs:PutLogEvents",
                  "logs:DescribeLogGroups",
                  "logs:DescribeLogStreams",
                ],
                Effect: "Allow",
                Resource: `*`,
              },
            ],
          },
          PolicyName: "cloudwatchlogs",
        },
      ],
    }),
  },
];
