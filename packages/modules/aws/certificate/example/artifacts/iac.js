// Generated by aws2gc
const { get } = require("rubico");
const { AwsProvider } = require("@grucloud/provider-aws");

const createResources = ({ provider }) => {
  provider.acm.makeCertificate({
    name: get(
      "config.acm.Certificate.exampleModuleAwsCertificateGrucloudOrg.name"
    ),
    namespace: "Certificate",
    properties: get(
      "config.acm.Certificate.exampleModuleAwsCertificateGrucloudOrg.properties"
    ),
  });

  provider.route53Domain.useDomain({
    name: get("config.route53Domain.Domain.grucloudOrg.name"),
  });

  provider.route53.makeHostedZone({
    name: get(
      "config.route53.HostedZone.exampleModuleAwsCertificateGrucloudOrg.name"
    ),
    dependencies: ({ resources }) => ({
      domain: resources.route53Domain.Domain.grucloudOrg,
    }),
  });

  provider.route53.makeRecord({
    name: get(
      "config.route53.Record.certificateValidationExampleModuleAwsCertificateGrucloudOrg.name"
    ),
    namespace: "Certificate",
    dependencies: ({ resources }) => ({
      hostedZone:
        resources.route53.HostedZone.exampleModuleAwsCertificateGrucloudOrg,
      certificate:
        resources.acm.Certificate.exampleModuleAwsCertificateGrucloudOrg,
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
