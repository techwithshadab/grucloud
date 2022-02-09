"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9795],{3905:function(e,n,r){r.d(n,{Zo:function(){return d},kt:function(){return g}});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=t.createContext({}),c=function(e){var n=t.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},d=function(e){var n=c(e.components);return t.createElement(a.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},l=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),l=c(r),g=i,f=l["".concat(a,".").concat(g)]||l[g]||u[g]||o;return r?t.createElement(f,s(s({ref:n},d),{},{components:r})):t.createElement(f,s({ref:n},d))}));function g(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=l;var p={};for(var a in n)hasOwnProperty.call(n,a)&&(p[a]=n[a]);p.originalType=e,p.mdxType="string"==typeof e?e:i,s[1]=p;for(var c=2;c<o;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}l.displayName="MDXCreateElement"},40946:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return p},contentTitle:function(){return a},metadata:function(){return c},toc:function(){return d},default:function(){return l}});var t=r(87462),i=r(63366),o=(r(67294),r(3905)),s=["components"],p={id:"VpnSite",title:"VpnSite"},a=void 0,c={unversionedId:"azure/resources/Network/VpnSite",id:"azure/resources/Network/VpnSite",isDocsHomePage:!1,title:"VpnSite",description:"Provides a VpnSite from the Network group",source:"@site/docs/azure/resources/Network/VpnSite.md",sourceDirName:"azure/resources/Network",slug:"/azure/resources/Network/VpnSite",permalink:"/docs/azure/resources/Network/VpnSite",tags:[],version:"current",frontMatter:{id:"VpnSite",title:"VpnSite"},sidebar:"docs",previous:{title:"VpnServerConfiguration",permalink:"/docs/azure/resources/Network/VpnServerConfiguration"},next:{title:"WebApplicationFirewallPolicy",permalink:"/docs/azure/resources/Network/WebApplicationFirewallPolicy"}},d=[{value:"Examples",id:"examples",children:[{value:"VpnSiteCreate",id:"vpnsitecreate",children:[],level:3}],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Swagger Schema",id:"swagger-schema",children:[],level:2},{value:"Misc",id:"misc",children:[],level:2}],u={toc:d};function l(e){var n=e.components,r=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Provides a ",(0,o.kt)("strong",{parentName:"p"},"VpnSite")," from the ",(0,o.kt)("strong",{parentName:"p"},"Network")," group"),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"vpnsitecreate"},"VpnSiteCreate"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'exports.createResources = () => [\n  {\n    type: "VpnSite",\n    group: "Network",\n    name: "myVpnSite",\n    properties: () => ({\n      tags: { key1: "value1" },\n      location: "West US",\n      properties: {\n        virtualWan: {\n          id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualWANs/wan1",\n        },\n        addressSpace: { addressPrefixes: ["10.0.0.0/16"] },\n        isSecuritySite: false,\n        vpnSiteLinks: [\n          {\n            name: "vpnSiteLink1",\n            properties: {\n              ipAddress: "50.50.50.56",\n              fqdn: "link1.vpnsite1.contoso.com",\n              linkProperties: {\n                linkProviderName: "vendor1",\n                linkSpeedInMbps: 0,\n              },\n              bgpProperties: { bgpPeeringAddress: "192.168.0.0", asn: 1234 },\n            },\n          },\n        ],\n        o365Policy: {\n          breakOutCategories: { allow: true, optimize: true, default: false },\n        },\n      },\n    }),\n    dependencies: ({}) => ({\n      resourceGroup: "myResourceGroup",\n      virtualWan: "myVirtualWan",\n      virtualHubIpConfiguration: "myVirtualHubIpConfiguration",\n    }),\n  },\n];\n\n')),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Network/VirtualWan"},"VirtualWan")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Network/VirtualHubIpConfiguration"},"VirtualHubIpConfiguration"))),(0,o.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  required: [ 'location' ],\n  properties: {\n    properties: {\n      'x-ms-client-flatten': true,\n      description: 'Properties of the VPN site.',\n      properties: {\n        virtualWan: {\n          properties: { id: { type: 'string', description: 'Resource ID.' } },\n          description: 'Reference to another subresource.',\n          'x-ms-azure-resource': true\n        },\n        deviceProperties: {\n          description: 'The device properties.',\n          properties: {\n            deviceVendor: {\n              type: 'string',\n              description: 'Name of the device Vendor.'\n            },\n            deviceModel: { type: 'string', description: 'Model of the device.' },\n            linkSpeedInMbps: {\n              type: 'integer',\n              format: 'int32',\n              description: 'Link speed.'\n            }\n          }\n        },\n        ipAddress: {\n          type: 'string',\n          description: 'The ip-address for the vpn-site.'\n        },\n        siteKey: {\n          type: 'string',\n          description: 'The key for vpn-site that can be used for connections.'\n        },\n        addressSpace: {\n          description: 'The AddressSpace that contains an array of IP address ranges.',\n          properties: {\n            addressPrefixes: {\n              type: 'array',\n              items: { type: 'string' },\n              description: 'A list of address blocks reserved for this virtual network in CIDR notation.'\n            }\n          }\n        },\n        bgpProperties: {\n          description: 'The set of bgp properties.',\n          properties: {\n            asn: {\n              type: 'integer',\n              format: 'int64',\n              minimum: 0,\n              maximum: 4294967295,\n              description: \"The BGP speaker's ASN.\"\n            },\n            bgpPeeringAddress: {\n              type: 'string',\n              description: 'The BGP peering address and BGP identifier of this BGP speaker.'\n            },\n            peerWeight: {\n              type: 'integer',\n              format: 'int32',\n              description: 'The weight added to routes learned from this BGP speaker.'\n            },\n            bgpPeeringAddresses: {\n              type: 'array',\n              items: {\n                properties: {\n                  ipconfigurationId: {\n                    type: 'string',\n                    description: 'The ID of IP configuration which belongs to gateway.'\n                  },\n                  defaultBgpIpAddresses: {\n                    readOnly: true,\n                    type: 'array',\n                    items: { type: 'string' },\n                    description: 'The list of default BGP peering addresses which belong to IP configuration.'\n                  },\n                  customBgpIpAddresses: {\n                    type: 'array',\n                    items: { type: 'string' },\n                    description: 'The list of custom BGP peering addresses which belong to IP configuration.'\n                  },\n                  tunnelIpAddresses: {\n                    readOnly: true,\n                    type: 'array',\n                    items: { type: 'string' },\n                    description: 'The list of tunnel public IP addresses which belong to IP configuration.'\n                  }\n                },\n                description: 'Properties of IPConfigurationBgpPeeringAddress.'\n              },\n              description: 'BGP peering address with IP configuration ID for virtual network gateway.'\n            }\n          }\n        },\n        provisioningState: {\n          readOnly: true,\n          description: 'The provisioning state of the VPN site resource.',\n          type: 'string',\n          enum: [ 'Succeeded', 'Updating', 'Deleting', 'Failed' ],\n          'x-ms-enum': { name: 'ProvisioningState', modelAsString: true }\n        },\n        isSecuritySite: { type: 'boolean', description: 'IsSecuritySite flag.' },\n        vpnSiteLinks: {\n          type: 'array',\n          description: 'List of all vpn site links.',\n          items: {\n            properties: {\n              properties: {\n                'x-ms-client-flatten': true,\n                description: 'Properties of the VPN site link.',\n                properties: {\n                  linkProperties: {\n                    description: 'The link provider properties.',\n                    properties: {\n                      linkProviderName: {\n                        type: 'string',\n                        description: 'Name of the link provider.'\n                      },\n                      linkSpeedInMbps: {\n                        type: 'integer',\n                        format: 'int32',\n                        description: 'Link speed.'\n                      }\n                    }\n                  },\n                  ipAddress: {\n                    type: 'string',\n                    description: 'The ip-address for the vpn-site-link.'\n                  },\n                  fqdn: {\n                    type: 'string',\n                    description: 'FQDN of vpn-site-link.'\n                  },\n                  bgpProperties: {\n                    description: 'The set of bgp properties.',\n                    properties: {\n                      asn: {\n                        type: 'integer',\n                        format: 'int64',\n                        description: \"The BGP speaker's ASN.\"\n                      },\n                      bgpPeeringAddress: {\n                        type: 'string',\n                        description: 'The BGP peering address and BGP identifier of this BGP speaker.'\n                      }\n                    }\n                  },\n                  provisioningState: {\n                    readOnly: true,\n                    description: 'The provisioning state of the VPN site link resource.',\n                    type: 'string',\n                    enum: [ 'Succeeded', 'Updating', 'Deleting', 'Failed' ],\n                    'x-ms-enum': { name: 'ProvisioningState', modelAsString: true }\n                  }\n                }\n              },\n              etag: {\n                type: 'string',\n                readOnly: true,\n                description: 'A unique read-only string that changes whenever the resource is updated.'\n              },\n              name: {\n                type: 'string',\n                description: 'The name of the resource that is unique within a resource group. This name can be used to access the resource.'\n              },\n              type: {\n                readOnly: true,\n                type: 'string',\n                description: 'Resource type.'\n              }\n            },\n            allOf: [\n              {\n                properties: { id: { type: 'string', description: 'Resource ID.' } },\n                description: 'Reference to another subresource.',\n                'x-ms-azure-resource': true\n              }\n            ],\n            description: 'VpnSiteLink Resource.'\n          }\n        },\n        o365Policy: {\n          readOnly: false,\n          description: 'Office365 Policy.',\n          properties: {\n            breakOutCategories: {\n              readOnly: false,\n              description: 'Office365 breakout categories.',\n              properties: {\n                allow: {\n                  type: 'boolean',\n                  readOnly: false,\n                  description: 'Flag to control allow category.'\n                },\n                optimize: {\n                  type: 'boolean',\n                  readOnly: false,\n                  description: 'Flag to control optimize category.'\n                },\n                default: {\n                  type: 'boolean',\n                  readOnly: false,\n                  description: 'Flag to control default category.'\n                }\n              }\n            }\n          }\n        }\n      }\n    },\n    etag: {\n      type: 'string',\n      readOnly: true,\n      description: 'A unique read-only string that changes whenever the resource is updated.'\n    }\n  },\n  allOf: [\n    {\n      properties: {\n        id: { type: 'string', description: 'Resource ID.' },\n        name: {\n          readOnly: true,\n          type: 'string',\n          description: 'Resource name.'\n        },\n        type: {\n          readOnly: true,\n          type: 'string',\n          description: 'Resource type.'\n        },\n        location: { type: 'string', description: 'Resource location.' },\n        tags: {\n          type: 'object',\n          additionalProperties: { type: 'string' },\n          description: 'Resource tags.'\n        }\n      },\n      description: 'Common resource representation.',\n      'x-ms-azure-resource': true\n    }\n  ],\n  description: 'VpnSite Resource.'\n}\n")),(0,o.kt)("h2",{id:"misc"},"Misc"),(0,o.kt)("p",null,"The resource version is ",(0,o.kt)("inlineCode",{parentName:"p"},"2021-05-01"),"."),(0,o.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/virtualWan.json"},"here"),"."))}l.isMDXComponent=!0}}]);