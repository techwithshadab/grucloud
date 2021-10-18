// Generated by aws2gc
const { AwsProvider } = require("@grucloud/provider-aws");

const createResources = ({ provider }) => {
  provider.CognitoIdentityServiceProvider.makeUserPool({
    name: "userpool-test",
    properties: ({ config }) => ({
      Id: "eu-west-2_HFx1O33SF",
      Name: "userpool-test",
      Policies: {
        PasswordPolicy: {
          MinimumLength: 8,
          RequireUppercase: true,
          RequireLowercase: true,
          RequireNumbers: true,
          RequireSymbols: true,
          TemporaryPasswordValidityDays: 7,
        },
      },
      LambdaConfig: {},
      LastModifiedDate: "2021-09-03T22:38:06.297Z",
      CreationDate: "2021-09-03T22:38:06.297Z",
      SchemaAttributes: [
        {
          Name: "sub",
          AttributeDataType: "String",
          DeveloperOnlyAttribute: false,
          Mutable: false,
          Required: true,
          StringAttributeConstraints: {
            MinLength: "1",
            MaxLength: "2048",
          },
        },
        {
          Name: "name",
          AttributeDataType: "String",
          DeveloperOnlyAttribute: false,
          Mutable: true,
          Required: false,
          StringAttributeConstraints: {
            MinLength: "0",
            MaxLength: "2048",
          },
        },
        {
          Name: "given_name",
          AttributeDataType: "String",
          DeveloperOnlyAttribute: false,
          Mutable: true,
          Required: false,
          StringAttributeConstraints: {
            MinLength: "0",
            MaxLength: "2048",
          },
        },
        {
          Name: "family_name",
          AttributeDataType: "String",
          DeveloperOnlyAttribute: false,
          Mutable: true,
          Required: false,
          StringAttributeConstraints: {
            MinLength: "0",
            MaxLength: "2048",
          },
        },
        {
          Name: "middle_name",
          AttributeDataType: "String",
          DeveloperOnlyAttribute: false,
          Mutable: true,
          Required: false,
          StringAttributeConstraints: {
            MinLength: "0",
            MaxLength: "2048",
          },
        },
        {
          Name: "nickname",
          AttributeDataType: "String",
          DeveloperOnlyAttribute: false,
          Mutable: true,
          Required: false,
          StringAttributeConstraints: {
            MinLength: "0",
            MaxLength: "2048",
          },
        },
        {
          Name: "preferred_username",
          AttributeDataType: "String",
          DeveloperOnlyAttribute: false,
          Mutable: true,
          Required: false,
          StringAttributeConstraints: {
            MinLength: "0",
            MaxLength: "2048",
          },
        },
        {
          Name: "profile",
          AttributeDataType: "String",
          DeveloperOnlyAttribute: false,
          Mutable: true,
          Required: false,
          StringAttributeConstraints: {
            MinLength: "0",
            MaxLength: "2048",
          },
        },
        {
          Name: "picture",
          AttributeDataType: "String",
          DeveloperOnlyAttribute: false,
          Mutable: true,
          Required: false,
          StringAttributeConstraints: {
            MinLength: "0",
            MaxLength: "2048",
          },
        },
        {
          Name: "website",
          AttributeDataType: "String",
          DeveloperOnlyAttribute: false,
          Mutable: true,
          Required: false,
          StringAttributeConstraints: {
            MinLength: "0",
            MaxLength: "2048",
          },
        },
        {
          Name: "email",
          AttributeDataType: "String",
          DeveloperOnlyAttribute: false,
          Mutable: true,
          Required: false,
          StringAttributeConstraints: {
            MinLength: "0",
            MaxLength: "2048",
          },
        },
        {
          Name: "email_verified",
          AttributeDataType: "Boolean",
          DeveloperOnlyAttribute: false,
          Mutable: true,
          Required: false,
        },
        {
          Name: "gender",
          AttributeDataType: "String",
          DeveloperOnlyAttribute: false,
          Mutable: true,
          Required: false,
          StringAttributeConstraints: {
            MinLength: "0",
            MaxLength: "2048",
          },
        },
        {
          Name: "birthdate",
          AttributeDataType: "String",
          DeveloperOnlyAttribute: false,
          Mutable: true,
          Required: false,
          StringAttributeConstraints: {
            MinLength: "10",
            MaxLength: "10",
          },
        },
        {
          Name: "zoneinfo",
          AttributeDataType: "String",
          DeveloperOnlyAttribute: false,
          Mutable: true,
          Required: false,
          StringAttributeConstraints: {
            MinLength: "0",
            MaxLength: "2048",
          },
        },
        {
          Name: "locale",
          AttributeDataType: "String",
          DeveloperOnlyAttribute: false,
          Mutable: true,
          Required: false,
          StringAttributeConstraints: {
            MinLength: "0",
            MaxLength: "2048",
          },
        },
        {
          Name: "phone_number",
          AttributeDataType: "String",
          DeveloperOnlyAttribute: false,
          Mutable: true,
          Required: false,
          StringAttributeConstraints: {
            MinLength: "0",
            MaxLength: "2048",
          },
        },
        {
          Name: "phone_number_verified",
          AttributeDataType: "Boolean",
          DeveloperOnlyAttribute: false,
          Mutable: true,
          Required: false,
        },
        {
          Name: "address",
          AttributeDataType: "String",
          DeveloperOnlyAttribute: false,
          Mutable: true,
          Required: false,
          StringAttributeConstraints: {
            MinLength: "0",
            MaxLength: "2048",
          },
        },
        {
          Name: "updated_at",
          AttributeDataType: "Number",
          DeveloperOnlyAttribute: false,
          Mutable: true,
          Required: false,
          NumberAttributeConstraints: {
            MinValue: "0",
          },
        },
      ],
      VerificationMessageTemplate: {
        DefaultEmailOption: "CONFIRM_WITH_CODE",
      },
      MfaConfiguration: "OFF",
      EstimatedNumberOfUsers: 0,
      EmailConfiguration: {
        EmailSendingAccount: "COGNITO_DEFAULT",
      },
      UserPoolTags: {
        Name: "userpool-test",
        "gc-created-by-provider": "aws",
        "gc-managed-by": "grucloud",
        "gc-project-name": "@grucloud/example-aws-cognito",
        "gc-stage": "dev",
      },
      AdminCreateUserConfig: {
        AllowAdminCreateUserOnly: false,
        UnusedAccountValidityDays: 7,
      },
      Arn: "arn:aws:cognito-idp:eu-west-2:840541460064:userpool/eu-west-2_HFx1O33SF",
    }),
  });
};

exports.createResources = createResources;

exports.createStack = async ({ createProvider }) => {
  const provider = createProvider(AwsProvider, { config: require("./config") });
  createResources({
    provider,
  });

  return {
    provider,
  };
};
