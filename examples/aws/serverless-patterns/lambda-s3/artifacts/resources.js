// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  {
    type: "Role",
    group: "IAM",
    name: "sam-app-PutObjectFunctionRole-TFR4FTCB12K2",
    properties: ({}) => ({
      AssumeRolePolicyDocument: {
        Version: "2012-10-17",
        Statement: [
          {
            Effect: "Allow",
            Principal: {
              Service: `lambda.amazonaws.com`,
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
                Action: [
                  "s3:GetObject",
                  "s3:ListBucket",
                  "s3:GetBucketLocation",
                  "s3:GetObjectVersion",
                  "s3:PutObject",
                  "s3:PutObjectAcl",
                  "s3:GetLifecycleConfiguration",
                  "s3:PutLifecycleConfiguration",
                  "s3:DeleteObject",
                ],
                Resource: [
                  `arn:aws:s3:::gc-destination-example`,
                  `arn:aws:s3:::gc-destination-example/*`,
                ],
                Effect: "Allow",
              },
            ],
          },
          PolicyName: "PutObjectFunctionRolePolicy0",
        },
      ],
      AttachedPolicies: [
        {
          PolicyName: "AWSLambdaBasicExecutionRole",
          PolicyArn:
            "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole",
        },
      ],
      Tags: [
        {
          Key: "lambda:createdBy",
          Value: "SAM",
        },
      ],
    }),
  },
  {
    type: "Function",
    group: "Lambda",
    properties: ({ getId }) => ({
      Configuration: {
        Environment: {
          Variables: {
            DestinationBucketName: `${getId({
              type: "Bucket",
              group: "S3",
              name: "gc-destination-example",
            })}`,
          },
        },
        FunctionName: "sam-app-PutObjectFunction-UHg0AjQBqco2",
        Handler: "app.lambda_handler",
        Runtime: "python3.8",
      },
      Tags: {
        "lambda:createdBy": "SAM",
      },
    }),
    dependencies: ({}) => ({
      role: "sam-app-PutObjectFunctionRole-TFR4FTCB12K2",
      s3Buckets: ["gc-destination-example"],
    }),
  },
  { type: "Bucket", group: "S3", name: "gc-destination-example" },
];
