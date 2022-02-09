"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2742],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return b}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=c(n),b=o,m=d["".concat(a,".").concat(b)]||d[b]||p[b]||i;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:o,s[1]=u;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45288:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return a},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),s=["components"],u={id:"HubVirtualNetworkConnection",title:"HubVirtualNetworkConnection"},a=void 0,c={unversionedId:"azure/resources/Network/HubVirtualNetworkConnection",id:"azure/resources/Network/HubVirtualNetworkConnection",isDocsHomePage:!1,title:"HubVirtualNetworkConnection",description:"Provides a HubVirtualNetworkConnection from the Network group",source:"@site/docs/azure/resources/Network/HubVirtualNetworkConnection.md",sourceDirName:"azure/resources/Network",slug:"/azure/resources/Network/HubVirtualNetworkConnection",permalink:"/docs/azure/resources/Network/HubVirtualNetworkConnection",tags:[],version:"current",frontMatter:{id:"HubVirtualNetworkConnection",title:"HubVirtualNetworkConnection"},sidebar:"docs",previous:{title:"HubRouteTable",permalink:"/docs/azure/resources/Network/HubRouteTable"},next:{title:"InboundNatRule",permalink:"/docs/azure/resources/Network/InboundNatRule"}},l=[{value:"Examples",id:"examples",children:[{value:"HubVirtualNetworkConnectionPut",id:"hubvirtualnetworkconnectionput",children:[],level:3}],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Swagger Schema",id:"swagger-schema",children:[],level:2},{value:"Misc",id:"misc",children:[],level:2}],p={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Provides a ",(0,i.kt)("strong",{parentName:"p"},"HubVirtualNetworkConnection")," from the ",(0,i.kt)("strong",{parentName:"p"},"Network")," group"),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"hubvirtualnetworkconnectionput"},"HubVirtualNetworkConnectionPut"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'exports.createResources = () => [\n  {\n    type: "HubVirtualNetworkConnection",\n    group: "Network",\n    name: "myHubVirtualNetworkConnection",\n    properties: () => ({\n      properties: {\n        remoteVirtualNetwork: {\n          id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualNetworks/SpokeVnet1",\n        },\n        enableInternetSecurity: false,\n        routingConfiguration: {\n          associatedRouteTable: {\n            id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/virtualHub1/hubRouteTables/hubRouteTable1",\n          },\n          propagatedRouteTables: {\n            labels: ["label1", "label2"],\n            ids: [\n              {\n                id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/virtualHub1/hubRouteTables/hubRouteTable1",\n              },\n            ],\n          },\n          vnetRoutes: {\n            staticRoutes: [\n              {\n                name: "route1",\n                addressPrefixes: ["10.1.0.0/16", "10.2.0.0/16"],\n                nextHopIpAddress: "10.0.0.68",\n              },\n              {\n                name: "route2",\n                addressPrefixes: ["10.3.0.0/16", "10.4.0.0/16"],\n                nextHopIpAddress: "10.0.0.65",\n              },\n            ],\n          },\n        },\n      },\n    }),\n    dependencies: ({}) => ({\n      resourceGroup: "myResourceGroup",\n      virtualNetwork: "myVirtualNetwork",\n      routeTable: "myRouteTable",\n      virtualHub: "myVirtualHub",\n    }),\n  },\n];\n\n')),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/azure/resources/Network/VirtualNetwork"},"VirtualNetwork")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/azure/resources/Network/RouteTable"},"RouteTable")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/azure/resources/Network/VirtualHub"},"VirtualHub"))),(0,i.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  properties: {\n    properties: {\n      'x-ms-client-flatten': true,\n      description: 'Properties of the hub virtual network connection.',\n      properties: {\n        remoteVirtualNetwork: {\n          properties: { id: { type: 'string', description: 'Resource ID.' } },\n          description: 'Reference to another subresource.',\n          'x-ms-azure-resource': true\n        },\n        allowHubToRemoteVnetTransit: {\n          type: 'boolean',\n          description: 'Deprecated: VirtualHub to RemoteVnet transit to enabled or not.'\n        },\n        allowRemoteVnetToUseHubVnetGateways: {\n          type: 'boolean',\n          description: \"Deprecated: Allow RemoteVnet to use Virtual Hub's gateways.\"\n        },\n        enableInternetSecurity: { type: 'boolean', description: 'Enable internet security.' },\n        routingConfiguration: {\n          description: 'The Routing Configuration indicating the associated and propagated route tables on this connection.',\n          properties: {\n            associatedRouteTable: {\n              properties: { id: { type: 'string', description: 'Resource ID.' } },\n              description: 'Reference to another subresource.',\n              'x-ms-azure-resource': true\n            },\n            propagatedRouteTables: {\n              description: 'The list of RouteTables to advertise the routes to.',\n              properties: {\n                labels: {\n                  type: 'array',\n                  description: 'The list of labels.',\n                  items: { type: 'string' }\n                },\n                ids: {\n                  type: 'array',\n                  description: 'The list of resource ids of all the RouteTables.',\n                  items: {\n                    properties: {\n                      id: { type: 'string', description: 'Resource ID.' }\n                    },\n                    description: 'Reference to another subresource.',\n                    'x-ms-azure-resource': true\n                  }\n                }\n              }\n            },\n            vnetRoutes: {\n              description: 'List of routes that control routing from VirtualHub into a virtual network connection.',\n              properties: {\n                staticRoutes: {\n                  type: 'array',\n                  description: 'List of all Static Routes.',\n                  items: {\n                    description: 'List of all Static Routes.',\n                    properties: {\n                      name: {\n                        type: 'string',\n                        description: 'The name of the StaticRoute that is unique within a VnetRoute.'\n                      },\n                      addressPrefixes: {\n                        type: 'array',\n                        description: 'List of all address prefixes.',\n                        items: { type: 'string' }\n                      },\n                      nextHopIpAddress: {\n                        type: 'string',\n                        description: 'The ip address of the next hop.'\n                      }\n                    }\n                  }\n                },\n                bgpConnections: {\n                  type: 'array',\n                  readOnly: true,\n                  description: 'The list of references to HubBgpConnection objects.',\n                  items: {\n                    properties: {\n                      id: { type: 'string', description: 'Resource ID.' }\n                    },\n                    description: 'Reference to another subresource.',\n                    'x-ms-azure-resource': true\n                  }\n                }\n              }\n            }\n          }\n        },\n        provisioningState: {\n          readOnly: true,\n          description: 'The provisioning state of the hub virtual network connection resource.',\n          type: 'string',\n          enum: [ 'Succeeded', 'Updating', 'Deleting', 'Failed' ],\n          'x-ms-enum': { name: 'ProvisioningState', modelAsString: true }\n        }\n      }\n    },\n    name: {\n      type: 'string',\n      description: 'The name of the resource that is unique within a resource group. This name can be used to access the resource.'\n    },\n    etag: {\n      type: 'string',\n      readOnly: true,\n      description: 'A unique read-only string that changes whenever the resource is updated.'\n    }\n  },\n  allOf: [\n    {\n      properties: { id: { type: 'string', description: 'Resource ID.' } },\n      description: 'Reference to another subresource.',\n      'x-ms-azure-resource': true\n    }\n  ],\n  description: 'HubVirtualNetworkConnection Resource.'\n}\n")),(0,i.kt)("h2",{id:"misc"},"Misc"),(0,i.kt)("p",null,"The resource version is ",(0,i.kt)("inlineCode",{parentName:"p"},"2021-05-01"),"."),(0,i.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/virtualWan.json"},"here"),"."))}d.isMDXComponent=!0}}]);