---
id: PublicIpAddress
title: Public Ip Address
---

Provides a Public Ip Address:

```js
const publicIpAddress = provider.makePublicIpAddress({
  name: `ip`,
  dependencies: {
    resourceGroup,
  },
  properties: () => ({
    properties: {
      publicIPAllocationMethod: "Dynamic",
    },
  }),
});
```

### Examples

- [basic example](https://github.com/grucloud/grucloud/blob/main/examples/azure/vm/iac.js#L58)

### Properties

- [all properties](https://docs.microsoft.com/en-us/rest/api/virtualnetwork/publicipaddresses/createorupdate#request-body)

### Dependencies

- [ResourceGroup](../resourceManagement/ResourceGroup.md)

### Used By

- [NetworkInterface](./NetworkInterface.md)