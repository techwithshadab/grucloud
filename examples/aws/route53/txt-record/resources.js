// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  {
    type: "HostedZone",
    group: "Route53",
    name: "grucloud.org.",
    properties: ({}) => ({
      Tags: [{ Key: "mykey", Value: "value" }],
    }),
    dependencies: () => ({
      domain: "grucloud.org",
    }),
  },
  {
    type: "Record",
    group: "Route53",
    properties: ({}) => ({
      Name: "gcrun.grucloud.org.",
      Type: "TXT",
      TTL: 300,
      ResourceRecords: [
        {
          Value:
            '"google-site-verification=DPVEQ54F8sKTj__itc4iAXA4my_hB-bzUlMYFqx6gCI"',
        },
      ],
    }),
    dependencies: () => ({
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
