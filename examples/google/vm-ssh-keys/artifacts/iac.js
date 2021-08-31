// Generated by gcp2gc
const { get } = require("rubico");
const { GoogleProvider } = require("@grucloud/provider-google");

const createResources = ({ provider }) => {
  provider.compute.makeFirewall({
    name: get("config.compute.Firewall.firewall_22.name"),
    properties: get("config.compute.Firewall.firewall_22.properties"),
  });

  provider.compute.makeFirewall({
    name: get("config.compute.Firewall.firewallIcmp.name"),
    properties: get("config.compute.Firewall.firewallIcmp.properties"),
  });

  provider.compute.makeAddress({
    name: get("config.compute.Address.ipWebserverSshKeys.name"),
    properties: get("config.compute.Address.ipWebserverSshKeys.properties"),
  });

  provider.compute.makeVmInstance({
    name: get("config.compute.VmInstance.webserverSshKeys.name"),
    properties: get("config.compute.VmInstance.webserverSshKeys.properties"),
    dependencies: ({ resources }) => ({
      address: resources.compute.Address.ipWebserverSshKeys,
    }),
  });
};

exports.createResources = createResources;

exports.createStack = async ({ createProvider }) => {
  const provider = createProvider(GoogleProvider, {
    config: require("./config"),
  });
  createResources({
    provider,
  });

  return {
    provider,
  };
};