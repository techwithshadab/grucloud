// Generated by 'gc gencode'
const { pipe, tap, get, eq, and } = require("rubico");
const { find } = require("rubico/x");

const createResources = ({ provider }) => {
  provider.ACM.makeCertificate({
    name: "grucloud.org",
  });

  provider.Route53.makeHostedZone({
    name: "grucloud.org.",
    dependencies: ({ resources }) => ({
      domain: resources.Route53Domains.Domain["grucloud.org"],
    }),
  });

  provider.Route53.makeRecord({
    dependencies: ({ resources }) => ({
      hostedZone: resources.Route53.HostedZone["grucloud.org."],
      certificate: resources.ACM.Certificate["grucloud.org"],
    }),
  });

  provider.Route53Domains.useDomain({
    name: "grucloud.org",
  });
};

exports.createResources = createResources;
