// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  {
    type: "LogGroup",
    group: "CloudWatchLogs",
    name: "flowlog",
    properties: ({}) => ({
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
      subnet: `project-subnet-public1-${config.region}a`,
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
    name: ({ config }) => `project-subnet-public1-${config.region}a`,
    properties: ({ config }) => ({
      AvailabilityZone: `${config.region}a`,
      CidrBlock: "10.0.0.0/20",
    }),
    dependencies: ({}) => ({
      vpc: "project-vpc",
    }),
  },
  {
    type: "RouteTable",
    group: "EC2",
    name: "project-rtb-public",
    dependencies: ({}) => ({
      vpc: "project-vpc",
    }),
  },
  {
    type: "RouteTableAssociation",
    group: "EC2",
    dependencies: ({ config }) => ({
      routeTable: "project-rtb-public",
      subnet: `project-subnet-public1-${config.region}a`,
    }),
  },
  {
    type: "Route",
    group: "EC2",
    properties: ({}) => ({
      DestinationCidrBlock: "0.0.0.0/0",
    }),
    dependencies: ({}) => ({
      routeTable: "project-rtb-public",
      ig: "project-igw",
    }),
  },
  {
    type: "Role",
    group: "IAM",
    name: "flow-role",
    properties: ({}) => ({
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
