---
id: LambdaFunction
title: Function
---

Provides an [Lambda Function](https://console.aws.amazon.com/lambda/home)

## Examples

### Create a Lambda Function

```js
const lambdaPolicy = require("./lambdaPolicy.json");
const lambdaAssumePolicy = require("./lambdaAssumePolicy.json");

const iamPolicy = provider.iam.makePolicy({
  name: "lambda-policy",
  properties: () => lambdaPolicy,
});

const iamRole = provider.iam.makeRole({
  name: "lambda-role",
  dependencies: { policies: [iamPolicy] },
  properties: () => lambdaAssumePolicy,
});

const lambda = provider.lambda.makeFunction({
  name: "lambda-hello-world", // Source must be located in the direcory 'lambda-hello-world'
  dependencies: { role: iamRole },
  properties: () => ({
    PackageType: "Zip",
    Handler: "helloworld.handler", // The handler function must de defined in lambda-hello-world/helloworkd.js
    Runtime: "nodejs14.x",
  }),
});
```

## Source Code Examples

- [hello world lambda](https://github.com/grucloud/grucloud/blob/main/example/aws/lambda/nodejs/helloworkd/iac.js)

- [lambda called by an Api gateway](https://github.com/grucloud/grucloud/blob/main/example/aws/api-gateway/lambda/iac.js)

## Properties

- [properties list](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Lambda.html#createFunction-property)

## Dependencies

- [Iam Role](../IAM/IamRole.md)

## UsedBy

- [ApiGateway Integration](../ApiGateway/Integration.md)

## List

The list of functions can be displayed and filtered with the type **Function**:

```sh
gc list -t Function
```

```txt

```