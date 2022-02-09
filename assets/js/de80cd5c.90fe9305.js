"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6090],{3905:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return m}});var t=n(67294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=t.createContext({}),s=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},p=function(e){var r=s(e.components);return t.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,y=d["".concat(u,".").concat(m)]||d[m]||l[m]||o;return n?t.createElement(y,a(a({ref:r},p),{},{components:n})):t.createElement(y,a({ref:r},p))}));function m(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88631:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var t=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],c={id:"SecurityPartnerProvider",title:"SecurityPartnerProvider"},u=void 0,s={unversionedId:"azure/resources/Network/SecurityPartnerProvider",id:"azure/resources/Network/SecurityPartnerProvider",isDocsHomePage:!1,title:"SecurityPartnerProvider",description:"Provides a SecurityPartnerProvider from the Network group",source:"@site/docs/azure/resources/Network/SecurityPartnerProvider.md",sourceDirName:"azure/resources/Network",slug:"/azure/resources/Network/SecurityPartnerProvider",permalink:"/docs/azure/resources/Network/SecurityPartnerProvider",tags:[],version:"current",frontMatter:{id:"SecurityPartnerProvider",title:"SecurityPartnerProvider"},sidebar:"docs",previous:{title:"Security Group",permalink:"/docs/azure/resources/Network/SecurityGroup"},next:{title:"ServiceEndpointPolicy",permalink:"/docs/azure/resources/Network/ServiceEndpointPolicy"}},p=[{value:"Examples",id:"examples",children:[{value:"Create Security Partner Provider",id:"create-security-partner-provider",children:[],level:3}],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Swagger Schema",id:"swagger-schema",children:[],level:2},{value:"Misc",id:"misc",children:[],level:2}],l={toc:p};function d(e){var r=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Provides a ",(0,o.kt)("strong",{parentName:"p"},"SecurityPartnerProvider")," from the ",(0,o.kt)("strong",{parentName:"p"},"Network")," group"),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"create-security-partner-provider"},"Create Security Partner Provider"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'exports.createResources = () => [\n  {\n    type: "SecurityPartnerProvider",\n    group: "Network",\n    name: "mySecurityPartnerProvider",\n    properties: () => ({\n      tags: { key1: "value1" },\n      location: "West US",\n      properties: {\n        securityProviderName: "ZScaler",\n        virtualHub: {\n          id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/hub1",\n        },\n      },\n    }),\n    dependencies: ({}) => ({\n      resourceGroup: "myResourceGroup",\n      virtualHub: "myVirtualHub",\n    }),\n  },\n];\n\n')),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Network/VirtualHub"},"VirtualHub"))),(0,o.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  properties: {\n    properties: {\n      'x-ms-client-flatten': true,\n      description: 'Properties of the Security Partner Provider.',\n      properties: {\n        provisioningState: {\n          readOnly: true,\n          description: 'The provisioning state of the Security Partner Provider resource.',\n          type: 'string',\n          enum: [ 'Succeeded', 'Updating', 'Deleting', 'Failed' ],\n          'x-ms-enum': { name: 'ProvisioningState', modelAsString: true }\n        },\n        securityProviderName: {\n          description: 'The security provider name.',\n          type: 'string',\n          enum: [ 'ZScaler', 'IBoss', 'Checkpoint' ],\n          'x-ms-enum': { name: 'SecurityProviderName', modelAsString: true }\n        },\n        connectionStatus: {\n          readOnly: true,\n          description: 'The connection status with the Security Partner Provider.',\n          type: 'string',\n          enum: [\n            'Unknown',\n            'PartiallyConnected',\n            'Connected',\n            'NotConnected'\n          ],\n          'x-ms-enum': {\n            name: 'SecurityPartnerProviderConnectionStatus',\n            modelAsString: true\n          }\n        },\n        virtualHub: {\n          description: 'The virtualHub to which the Security Partner Provider belongs.',\n          properties: { id: { type: 'string', description: 'Resource ID.' } },\n          'x-ms-azure-resource': true\n        }\n      }\n    },\n    etag: {\n      type: 'string',\n      readOnly: true,\n      description: 'A unique read-only string that changes whenever the resource is updated.'\n    }\n  },\n  allOf: [\n    {\n      properties: {\n        id: { type: 'string', description: 'Resource ID.' },\n        name: {\n          readOnly: true,\n          type: 'string',\n          description: 'Resource name.'\n        },\n        type: {\n          readOnly: true,\n          type: 'string',\n          description: 'Resource type.'\n        },\n        location: { type: 'string', description: 'Resource location.' },\n        tags: {\n          type: 'object',\n          additionalProperties: { type: 'string' },\n          description: 'Resource tags.'\n        }\n      },\n      description: 'Common resource representation.',\n      'x-ms-azure-resource': true\n    }\n  ],\n  description: 'Security Partner Provider resource.'\n}\n")),(0,o.kt)("h2",{id:"misc"},"Misc"),(0,o.kt)("p",null,"The resource version is ",(0,o.kt)("inlineCode",{parentName:"p"},"2021-05-01"),"."),(0,o.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/securityPartnerProvider.json"},"here"),"."))}d.isMDXComponent=!0}}]);