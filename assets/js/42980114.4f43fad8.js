"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6268],{3905:function(e,r,n){n.d(r,{Zo:function(){return l},kt:function(){return g}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),p=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},l=function(e){var r=p(e.components);return t.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),g=o,y=d["".concat(c,".").concat(g)]||d[g]||u[g]||a;return n?t.createElement(y,i(i({ref:r},l),{},{components:n})):t.createElement(y,i({ref:r},l))}));function g(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87542:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var t=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={id:"LocalNetworkGateway",title:"LocalNetworkGateway"},c=void 0,p={unversionedId:"azure/resources/Network/LocalNetworkGateway",id:"azure/resources/Network/LocalNetworkGateway",isDocsHomePage:!1,title:"LocalNetworkGateway",description:"Provides a LocalNetworkGateway from the Network group",source:"@site/docs/azure/resources/Network/LocalNetworkGateway.md",sourceDirName:"azure/resources/Network",slug:"/azure/resources/Network/LocalNetworkGateway",permalink:"/docs/azure/resources/Network/LocalNetworkGateway",tags:[],version:"current",frontMatter:{id:"LocalNetworkGateway",title:"LocalNetworkGateway"},sidebar:"docs",previous:{title:"LoadBalancerBackendAddressPool",permalink:"/docs/azure/resources/Network/LoadBalancerBackendAddressPool"},next:{title:"NatGateway",permalink:"/docs/azure/resources/Network/NatGateway"}},l=[{value:"Examples",id:"examples",children:[{value:"CreateLocalNetworkGateway",id:"createlocalnetworkgateway",children:[],level:3}],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Swagger Schema",id:"swagger-schema",children:[],level:2},{value:"Misc",id:"misc",children:[],level:2}],u={toc:l};function d(e){var r=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Provides a ",(0,a.kt)("strong",{parentName:"p"},"LocalNetworkGateway")," from the ",(0,a.kt)("strong",{parentName:"p"},"Network")," group"),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"createlocalnetworkgateway"},"CreateLocalNetworkGateway"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'exports.createResources = () => [\n  {\n    type: "LocalNetworkGateway",\n    group: "Network",\n    name: "myLocalNetworkGateway",\n    properties: () => ({\n      properties: {\n        localNetworkAddressSpace: { addressPrefixes: ["10.1.0.0/16"] },\n        gatewayIpAddress: "11.12.13.14",\n        fqdn: "site1.contoso.com",\n      },\n      location: "Central US",\n    }),\n    dependencies: ({}) => ({\n      resourceGroup: "myResourceGroup",\n      virtualHubIpConfiguration: "myVirtualHubIpConfiguration",\n    }),\n  },\n];\n\n')),(0,a.kt)("h2",{id:"dependencies"},"Dependencies"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/azure/resources/Network/VirtualHubIpConfiguration"},"VirtualHubIpConfiguration"))),(0,a.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{\n  properties: {\n    properties: {\n      'x-ms-client-flatten': true,\n      description: 'Properties of the local network gateway.',\n      properties: {\n        localNetworkAddressSpace: {\n          description: 'Local network site address space.',\n          properties: {\n            addressPrefixes: {\n              type: 'array',\n              items: { type: 'string' },\n              description: 'A list of address blocks reserved for this virtual network in CIDR notation.'\n            }\n          }\n        },\n        gatewayIpAddress: {\n          type: 'string',\n          description: 'IP address of local network gateway.'\n        },\n        fqdn: {\n          type: 'string',\n          description: 'FQDN of local network gateway.'\n        },\n        bgpSettings: {\n          description: \"Local network gateway's BGP speaker settings.\",\n          properties: {\n            asn: {\n              type: 'integer',\n              format: 'int64',\n              minimum: 0,\n              maximum: 4294967295,\n              description: \"The BGP speaker's ASN.\"\n            },\n            bgpPeeringAddress: {\n              type: 'string',\n              description: 'The BGP peering address and BGP identifier of this BGP speaker.'\n            },\n            peerWeight: {\n              type: 'integer',\n              format: 'int32',\n              description: 'The weight added to routes learned from this BGP speaker.'\n            },\n            bgpPeeringAddresses: {\n              type: 'array',\n              items: {\n                properties: {\n                  ipconfigurationId: {\n                    type: 'string',\n                    description: 'The ID of IP configuration which belongs to gateway.'\n                  },\n                  defaultBgpIpAddresses: {\n                    readOnly: true,\n                    type: 'array',\n                    items: { type: 'string' },\n                    description: 'The list of default BGP peering addresses which belong to IP configuration.'\n                  },\n                  customBgpIpAddresses: {\n                    type: 'array',\n                    items: { type: 'string' },\n                    description: 'The list of custom BGP peering addresses which belong to IP configuration.'\n                  },\n                  tunnelIpAddresses: {\n                    readOnly: true,\n                    type: 'array',\n                    items: { type: 'string' },\n                    description: 'The list of tunnel public IP addresses which belong to IP configuration.'\n                  }\n                },\n                description: 'Properties of IPConfigurationBgpPeeringAddress.'\n              },\n              description: 'BGP peering address with IP configuration ID for virtual network gateway.'\n            }\n          }\n        },\n        resourceGuid: {\n          readOnly: true,\n          type: 'string',\n          description: 'The resource GUID property of the local network gateway resource.'\n        },\n        provisioningState: {\n          readOnly: true,\n          description: 'The provisioning state of the local network gateway resource.',\n          type: 'string',\n          enum: [ 'Succeeded', 'Updating', 'Deleting', 'Failed' ],\n          'x-ms-enum': { name: 'ProvisioningState', modelAsString: true }\n        }\n      }\n    },\n    etag: {\n      readOnly: true,\n      type: 'string',\n      description: 'A unique read-only string that changes whenever the resource is updated.'\n    }\n  },\n  allOf: [\n    {\n      properties: {\n        id: { type: 'string', description: 'Resource ID.' },\n        name: {\n          readOnly: true,\n          type: 'string',\n          description: 'Resource name.'\n        },\n        type: {\n          readOnly: true,\n          type: 'string',\n          description: 'Resource type.'\n        },\n        location: { type: 'string', description: 'Resource location.' },\n        tags: {\n          type: 'object',\n          additionalProperties: { type: 'string' },\n          description: 'Resource tags.'\n        }\n      },\n      description: 'Common resource representation.',\n      'x-ms-azure-resource': true\n    }\n  ],\n  required: [ 'properties' ],\n  description: 'A common class for general resource information.'\n}\n")),(0,a.kt)("h2",{id:"misc"},"Misc"),(0,a.kt)("p",null,"The resource version is ",(0,a.kt)("inlineCode",{parentName:"p"},"2021-05-01"),"."),(0,a.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/virtualNetworkGateway.json"},"here"),"."))}d.isMDXComponent=!0}}]);