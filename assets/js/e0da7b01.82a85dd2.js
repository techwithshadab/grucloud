"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4236],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=u(r),h=o,m=d["".concat(c,".").concat(h)]||d[h]||l[h]||i;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},99140:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),s=["components"],a={id:"Webhook",title:"Webhook"},c=void 0,u={unversionedId:"azure/resources/ContainerRegistry/Webhook",id:"azure/resources/ContainerRegistry/Webhook",isDocsHomePage:!1,title:"Webhook",description:"Provides a Webhook from the ContainerRegistry group",source:"@site/docs/azure/resources/ContainerRegistry/Webhook.md",sourceDirName:"azure/resources/ContainerRegistry",slug:"/azure/resources/ContainerRegistry/Webhook",permalink:"/docs/azure/resources/ContainerRegistry/Webhook",tags:[],version:"current",frontMatter:{id:"Webhook",title:"Webhook"},sidebar:"docs",previous:{title:"Token",permalink:"/docs/azure/resources/ContainerRegistry/Token"},next:{title:"Key",permalink:"/docs/azure/resources/KeyVault/Key"}},p=[{value:"Examples",id:"examples",children:[{value:"WebhookCreate",id:"webhookcreate",children:[],level:3}],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Swagger Schema",id:"swagger-schema",children:[],level:2},{value:"Misc",id:"misc",children:[],level:2}],l={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Provides a ",(0,i.kt)("strong",{parentName:"p"},"Webhook")," from the ",(0,i.kt)("strong",{parentName:"p"},"ContainerRegistry")," group"),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"webhookcreate"},"WebhookCreate"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'provider.ContainerRegistry.makeWebhook({\n  name: "myWebhook",\n  properties: () => ({\n    location: "westus",\n    tags: { key: "value" },\n    properties: {\n      serviceUri: "http://myservice.com",\n      customHeaders: {\n        Authorization:\n          "Basic 000000000000000000000000000000000000000000000000000",\n      },\n      status: "enabled",\n      scope: "myRepository",\n      actions: ["push"],\n    },\n  }),\n  dependencies: ({ resources }) => ({\n    resourceGroup: resources.Resources.ResourceGroup["myResourceGroup"],\n    registry: resources.ContainerRegistry.Registry["myRegistry"],\n  }),\n});\n\n')),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/azure/resources/ContainerRegistry/Registry"},"Registry"))),(0,i.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  description: 'The parameters for creating a webhook.',\n  required: [ 'location' ],\n  type: 'object',\n  properties: {\n    tags: {\n      description: 'The tags for the webhook.',\n      type: 'object',\n      additionalProperties: { type: 'string' }\n    },\n    location: {\n      description: 'The location of the webhook. This cannot be changed after the resource is created.',\n      type: 'string'\n    },\n    properties: {\n      description: 'The properties that the webhook will be created with.',\n      'x-ms-client-flatten': true,\n      required: [ 'serviceUri', 'actions' ],\n      type: 'object',\n      properties: {\n        serviceUri: {\n          description: 'The service URI for the webhook to post notifications.',\n          type: 'string',\n          'x-ms-secret': true\n        },\n        customHeaders: {\n          description: 'Custom headers that will be added to the webhook notifications.',\n          type: 'object',\n          additionalProperties: { type: 'string' },\n          'x-ms-secret': true\n        },\n        status: {\n          description: 'The status of the webhook at the time the operation was called.',\n          enum: [ 'enabled', 'disabled' ],\n          type: 'string',\n          'x-ms-enum': { name: 'WebhookStatus', modelAsString: true }\n        },\n        scope: {\n          description: \"The scope of repositories where the event can be triggered. For example, 'foo:*' means events for all tags under repository 'foo'. 'foo:bar' means events for 'foo:bar' only. 'foo' is equivalent to 'foo:latest'. Empty means all events.\",\n          type: 'string'\n        },\n        actions: {\n          description: 'The list of actions that trigger the webhook to post notifications.',\n          type: 'array',\n          items: {\n            enum: [\n              'push',\n              'delete',\n              'quarantine',\n              'chart_push',\n              'chart_delete'\n            ],\n            type: 'string',\n            'x-ms-enum': { name: 'WebhookAction', modelAsString: true }\n          }\n        }\n      }\n    }\n  }\n}\n")),(0,i.kt)("h2",{id:"misc"},"Misc"),(0,i.kt)("p",null,"The resource version is ",(0,i.kt)("inlineCode",{parentName:"p"},"2021-09-01"),"."),(0,i.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/containerregistry/resource-manager/Microsoft.ContainerRegistry/stable/2021-09-01/containerregistry.json"},"here"),"."))}d.isMDXComponent=!0}}]);