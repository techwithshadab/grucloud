// Generated by 'gc gencode'
const {} = require("rubico");
const {} = require("rubico/x");

const createResources = ({ provider }) => {
  provider.Compute.makeSshPublicKey({
    properties: ({}) => ({
      name: "my-key-pair",
      properties: {
        publicKey:
          "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDhnfm727z+WSZ2hwIUoE/oiAB1wT/oIG75RmHeNLgq6R0oVEf0nMFv2HiqZeZPXBARsHwbtGC/RaQ6p/ccTD/4AJLZ0daZDLZ6y48BPzMpwS92xfAAJLP2ot656m5x/O/46wLyOvKzrgztIZrxs4Bfjzu1z3ScKXo/U2CI1sfmCzVyy2zTBWywv4JghRu1VZvm9w7/itCgSP214FDgkzphybReCejmizHH4SEz4cBb4RPznYY+B5TJmVLRGi01OAjENzhx0Wn28WisY6tCTipZqM4y4z9PPIEDPI4EMhVYBMfB+pIEEyPKlcUnO7yMtdaFakNC/Mb9VoA8AfghUS6Ya/ssfjA4nlJx6w51ceflCPlaY0mzg5zMlL/RAyAlstfHqfBLHES66LuxKYpICle7cae6tgmZjZp/cIC4C8dajYJ6q0ir2l8dYs+Ov5s7NGqbJIOvn8O51RulyaGtfWy+1UwpoV/fiksm36yhfynfkNZ3GpOMetKvs47sZtKFIqU=\n",
      },
    }),
    dependencies: () => ({
      resourceGroup: "rg-ssh-public-key",
    }),
  });

  provider.Resources.makeResourceGroup({
    properties: ({}) => ({
      name: "rg-ssh-public-key",
    }),
  });
};

exports.createResources = createResources;
