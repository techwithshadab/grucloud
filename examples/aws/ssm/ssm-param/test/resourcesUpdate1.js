// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

exports.createResources = () => [
  {
    type: "Parameter",
    group: "SSM",
    name: "text-param",
    properties: ({}) => ({
      Type: "String",
      Value: "my-value-updated",
      DataType: "text",
      Tags: [
        {
          Key: "TOTOKEY",
          Value: "TOTOVALUE",
        },
      ],
    }),
  },
];
