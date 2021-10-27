const assert = require("assert");
const hooks = [require("./hook")];
exports.hooks = hooks;

const NamespaceDefault = "Certificate";

const makeDomainName = ({ domainName, stage }) =>
  `${stage == "production" ? "" : `${stage}.`}${domainName}`;

exports.makeDomainName = makeDomainName;

const createResources = ({
  provider,
  resources: { hostedZone },
  namespace = NamespaceDefault,
}) => {
  const { config } = provider;
  assert(config.certificate);
  assert(config.certificate.domainName);

  const { domainName } = config.certificate;

  const certificate = provider.ACM.makeCertificate({
    name: domainName,
    namespace,
  });

  const certificateRecordValidation = provider.Route53.makeRecord({
    namespace,
    dependencies: { hostedZone, certificate },
  });

  return { certificate, certificateRecordValidation };
};

exports.createResources = createResources;
