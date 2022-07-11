// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  {
    type: "HostedZone",
    group: "Route53",
    name: "grucloud.org.",
    dependencies: ({}) => ({
      domain: "grucloud.org",
    }),
  },
  {
    type: "Record",
    group: "Route53",
    properties: ({}) => ({
      Name: "latency.grucloud.org.",
      Type: "A",
      SetIdentifier: "eu-west-2",
      Region: "eu-west-2",
      TTL: 300,
      ResourceRecords: [
        {
          Value: "192.168.1.10",
        },
      ],
    }),
    dependencies: ({}) => ({
      hostedZone: "grucloud.org.",
    }),
  },
  {
    type: "Record",
    group: "Route53",
    properties: ({}) => ({
      Name: "latency.grucloud.org.",
      Type: "A",
      SetIdentifier: "us-east-1",
      Region: "us-east-1",
      TTL: 300,
      ResourceRecords: [
        {
          Value: "192.168.0.12",
        },
      ],
    }),
    dependencies: ({}) => ({
      hostedZone: "grucloud.org.",
    }),
  },
  {
    type: "Record",
    group: "Route53",
    properties: ({}) => ({
      Name: "weighted.grucloud.org.",
      Type: "A",
      SetIdentifier: "weighted-1",
      Weight: 128,
      TTL: 300,
      ResourceRecords: [
        {
          Value: "192.168.1.10",
        },
      ],
    }),
    dependencies: ({}) => ({
      hostedZone: "grucloud.org.",
    }),
  },
  {
    type: "Record",
    group: "Route53",
    properties: ({}) => ({
      Name: "weighted.grucloud.org.",
      Type: "A",
      SetIdentifier: "weighted-2",
      Weight: 128,
      TTL: 300,
      ResourceRecords: [
        {
          Value: "192.168.1.11",
        },
      ],
    }),
    dependencies: ({}) => ({
      hostedZone: "grucloud.org.",
    }),
  },
  {
    type: "Domain",
    group: "Route53Domains",
    name: "grucloud.org",
    readOnly: true,
  },
];
