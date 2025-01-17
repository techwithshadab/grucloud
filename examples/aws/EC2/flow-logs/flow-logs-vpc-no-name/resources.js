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
    name: "flowlog::vpc-default",
    properties: ({}) => ({
      TrafficType: "ALL",
      MaxAggregationInterval: 600,
    }),
    dependencies: ({}) => ({
      vpc: "vpc-default",
      iamRole: "cloudwatchlogs",
      cloudWatchLogGroup: "flowlog",
    }),
  },
  { type: "Vpc", group: "EC2", name: "vpc-default", isDefault: true },
  {
    type: "Role",
    group: "IAM",
    properties: ({}) => ({
      RoleName: "cloudwatchlogs",
      AssumeRolePolicyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Effect: "Allow",
            Principal: {
              Service: "vpc-flow-logs.amazonaws.com",
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
                Resource: "*",
              },
            ],
          },
          PolicyName: "endpoint_vpc_flow_logs",
        },
      ],
    }),
  },
];
