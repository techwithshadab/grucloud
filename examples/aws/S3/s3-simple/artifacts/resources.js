// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  { type: "Bucket", group: "S3", name: "grucloud-simple-bucket" },
  {
    type: "Object",
    group: "S3",
    name: "grucloud-simple-file-test",
    properties: ({}) => ({
      ContentType: "text/plain",
      ServerSideEncryption: "AES256",
      source: "s3/grucloud-simple-bucket/grucloud-simple-file-test.txt",
      Tags: [
        {
          Key: "Key1",
          Value: "Value1",
        },
        {
          Key: "Key2",
          Value: "Value2",
        },
      ],
    }),
    dependencies: () => ({
      bucket: "grucloud-simple-bucket",
    }),
  },
];
