"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1369],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return y}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(t),y=o,m=d["".concat(s,".").concat(y)]||d[y]||l[y]||a;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},16539:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],c={id:"ConnectionGateway",title:"ConnectionGateway"},s=void 0,p={unversionedId:"azure/resources/Web/ConnectionGateway",id:"azure/resources/Web/ConnectionGateway",isDocsHomePage:!1,title:"ConnectionGateway",description:"Provides a ConnectionGateway from the Web group",source:"@site/docs/azure/resources/Web/ConnectionGateway.md",sourceDirName:"azure/resources/Web",slug:"/azure/resources/Web/ConnectionGateway",permalink:"/docs/azure/resources/Web/ConnectionGateway",tags:[],version:"current",frontMatter:{id:"ConnectionGateway",title:"ConnectionGateway"},sidebar:"docs",previous:{title:"Connection",permalink:"/docs/azure/resources/Web/Connection"},next:{title:"ContainerApp",permalink:"/docs/azure/resources/Web/ContainerApp"}},u=[{value:"Examples",id:"examples",children:[{value:"Replace a connection gateway definition",id:"replace-a-connection-gateway-definition",children:[],level:3}],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Swagger Schema",id:"swagger-schema",children:[],level:2},{value:"Misc",id:"misc",children:[],level:2}],l={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Provides a ",(0,a.kt)("strong",{parentName:"p"},"ConnectionGateway")," from the ",(0,a.kt)("strong",{parentName:"p"},"Web")," group"),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"replace-a-connection-gateway-definition"},"Replace a connection gateway definition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'exports.createResources = () => [\n  {\n    type: "ConnectionGateway",\n    group: "Web",\n    name: "myConnectionGateway",\n    properties: () => ({\n      properties: {\n        connectionGatewayInstallation: {\n          id: "/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/providers/Microsoft.Web/locations/westus/connectionGatewayInstallations/865dccd1-5d5c-45fe-b5a0-249d4de4134c",\n        },\n        contactInformation: ["test123@microsoft.com"],\n        displayName: "test123",\n        machineName: "TEST123",\n        status: "Installed",\n        backendUri: "https://WABI-WEST-US-redirect.analysis.windows.net",\n      },\n      id: "/subscriptions/34adfa4f-cedf-4dc0-ba29-b6d1a69ab345/resourceGroups/testResourceGroup/providers/Microsoft.Web/connectionGateways/test123",\n    }),\n    dependencies: ({}) => ({ resourceGroup: "myResourceGroup" }),\n  },\n];\n\n')),(0,a.kt)("h2",{id:"dependencies"},"Dependencies"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup"))),(0,a.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{\n  description: 'The gateway definition',\n  type: 'object',\n  additionalProperties: false,\n  properties: {\n    properties: {\n      properties: {\n        connectionGatewayInstallation: {\n          description: 'The gateway installation reference',\n          type: 'object',\n          properties: {\n            location: {\n              description: 'Resource reference location',\n              type: 'string'\n            },\n            name: { description: 'Resource reference name', type: 'string' }\n          },\n          allOf: [\n            {\n              type: 'object',\n              'x-abstract': true,\n              additionalProperties: false,\n              properties: {\n                id: {\n                  description: 'Resource reference id',\n                  type: 'string'\n                },\n                type: {\n                  description: 'Resource reference type',\n                  type: 'string'\n                }\n              }\n            }\n          ]\n        },\n        contactInformation: {\n          description: 'The gateway admin',\n          type: 'array',\n          items: { type: 'string' }\n        },\n        displayName: { description: 'The gateway display name', type: 'string' },\n        description: { description: 'The gateway description', type: 'string' },\n        machineName: {\n          description: 'The machine name of the gateway',\n          type: 'string'\n        },\n        status: { description: 'The gateway status', type: 'object' },\n        backendUri: { description: 'The URI of the backend', type: 'string' }\n      }\n    }\n  },\n  allOf: [\n    {\n      description: 'A resource',\n      type: 'object',\n      additionalProperties: false,\n      properties: {\n        id: { description: 'Resource id', type: 'string', readOnly: true },\n        name: {\n          description: 'Resource name',\n          type: 'string',\n          readOnly: true\n        },\n        type: {\n          description: 'Resource type',\n          type: 'string',\n          readOnly: true\n        },\n        location: { description: 'Resource location', type: 'string' },\n        etag: { description: 'Resource ETag', type: 'string' },\n        tags: {\n          type: 'object',\n          description: 'Resource tags',\n          additionalProperties: { type: 'string' },\n          example: { SampleTagName: 'SampleTagValue' }\n        }\n      },\n      'x-ms-azure-resource': true\n    }\n  ]\n}\n")),(0,a.kt)("h2",{id:"misc"},"Misc"),(0,a.kt)("p",null,"The resource version is ",(0,a.kt)("inlineCode",{parentName:"p"},"2016-06-01"),"."),(0,a.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/web/resource-manager/Microsoft.Web/stable/2016-06-01/logicAppsManagementClient.json"},"here"),"."))}d.isMDXComponent=!0}}]);