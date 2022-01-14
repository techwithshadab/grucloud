"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7370],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,y=d["".concat(c,".").concat(m)]||d[m]||l[m]||o;return t?r.createElement(y,s(s({ref:n},u),{},{components:t})):r.createElement(y,s({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var p=2;p<o;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},29805:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),s=["components"],a={id:"Connection",title:"Connection"},c=void 0,p={unversionedId:"azure/resources/Web/Connection",id:"azure/resources/Web/Connection",isDocsHomePage:!1,title:"Connection",description:"Provides a Connection from the Web group",source:"@site/docs/azure/resources/Web/Connection.md",sourceDirName:"azure/resources/Web",slug:"/azure/resources/Web/Connection",permalink:"/docs/azure/resources/Web/Connection",tags:[],version:"current",frontMatter:{id:"Connection",title:"Connection"},sidebar:"docs",previous:{title:"CertificateOrderCertificate",permalink:"/docs/azure/resources/Web/CertificateOrderCertificate"},next:{title:"ConnectionGateway",permalink:"/docs/azure/resources/Web/ConnectionGateway"}},u=[{value:"Examples",id:"examples",children:[{value:"Replace a connection",id:"replace-a-connection",children:[],level:3}],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Swagger Schema",id:"swagger-schema",children:[],level:2},{value:"Misc",id:"misc",children:[],level:2}],l={toc:u};function d(e){var n=e.components,t=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Provides a ",(0,o.kt)("strong",{parentName:"p"},"Connection")," from the ",(0,o.kt)("strong",{parentName:"p"},"Web")," group"),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"replace-a-connection"},"Replace a connection"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'provider.Web.makeConnection({\n  name: "myConnection",\n  properties: () => ({\n    properties: {\n      displayName: "testManagedApi",\n      parameterValues: {},\n      customParameterValues: {},\n      api: {\n        id: "/subscriptions/f34b22a3-2202-4fb1-b040-1332bd928c84/providers/Microsoft.Web/locations/centralus/managedApis/testManagedApi",\n      },\n    },\n    id: "/subscriptions/f34b22a3-2202-4fb1-b040-1332bd928c84/resourceGroups/testResourceGroup/providers/Microsoft.Web/connections/testManagedApi-1",\n  }),\n  dependencies: ({ resources }) => ({\n    resourceGroup: resources.Resources.ResourceGroup["myResourceGroup"],\n  }),\n});\n\n')),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup"))),(0,o.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  description: 'API connection',\n  type: 'object',\n  additionalProperties: false,\n  properties: {\n    properties: {\n      properties: {\n        displayName: { description: 'Display name', type: 'string' },\n        statuses: {\n          description: 'Status of the connection',\n          type: 'array',\n          items: {\n            description: 'Connection status',\n            type: 'object',\n            properties: {\n              status: { description: 'The gateway status', type: 'string' },\n              target: { description: 'Target of the error', type: 'string' },\n              error: {\n                description: 'Connection error',\n                type: 'object',\n                allOf: [\n                  {\n                    description: 'A resource',\n                    type: 'object',\n                    additionalProperties: false,\n                    properties: {\n                      id: {\n                        description: 'Resource id',\n                        type: 'string',\n                        readOnly: true\n                      },\n                      name: {\n                        description: 'Resource name',\n                        type: 'string',\n                        readOnly: true\n                      },\n                      type: {\n                        description: 'Resource type',\n                        type: 'string',\n                        readOnly: true\n                      },\n                      location: {\n                        description: 'Resource location',\n                        type: 'string'\n                      },\n                      etag: { description: 'Resource ETag', type: 'string' },\n                      tags: {\n                        type: 'object',\n                        description: 'Resource tags',\n                        additionalProperties: { type: 'string' },\n                        example: { SampleTagName: 'SampleTagValue' }\n                      }\n                    },\n                    'x-ms-azure-resource': true\n                  }\n                ],\n                properties: {\n                  properties: {\n                    properties: {\n                      code: {\n                        description: 'Code of the status',\n                        type: 'string'\n                      },\n                      message: {\n                        description: 'Description of the status',\n                        type: 'string'\n                      }\n                    },\n                    'x-ms-client-flatten': true\n                  }\n                }\n              }\n            }\n          }\n        },\n        parameterValues: {\n          description: 'Dictionary of parameter values',\n          type: 'object',\n          additionalProperties: { type: 'string' }\n        },\n        customParameterValues: {\n          description: 'Dictionary of custom parameter values',\n          type: 'object',\n          additionalProperties: { type: 'string' }\n        },\n        nonSecretParameterValues: {\n          description: 'Dictionary of nonsecret parameter values',\n          type: 'object',\n          additionalProperties: { type: 'string' }\n        },\n        createdTime: {\n          format: 'date-time',\n          description: 'Timestamp of the connection creation',\n          type: 'string'\n        },\n        changedTime: {\n          format: 'date-time',\n          description: 'Timestamp of last connection change',\n          type: 'string'\n        },\n        api: {\n          type: 'object',\n          'x-abstract': true,\n          additionalProperties: false,\n          properties: {\n            swagger: {\n              type: 'object',\n              description: 'The JSON representation of the swagger'\n            },\n            brandColor: { type: 'string', description: 'Brand color' },\n            description: {\n              type: 'string',\n              description: 'The custom API description'\n            },\n            displayName: { type: 'string', description: 'The display name' },\n            iconUri: { type: 'string', description: 'The icon URI' },\n            name: { type: 'string', description: 'The name of the API' }\n          },\n          allOf: [\n            {\n              type: 'object',\n              'x-abstract': true,\n              additionalProperties: false,\n              properties: {\n                id: {\n                  description: 'Resource reference id',\n                  type: 'string'\n                },\n                type: {\n                  description: 'Resource reference type',\n                  type: 'string'\n                }\n              }\n            }\n          ]\n        },\n        testLinks: {\n          description: 'Links to test the API connection',\n          type: 'array',\n          items: {\n            description: 'API connection properties',\n            type: 'object',\n            additionalProperties: false,\n            properties: {\n              requestUri: { description: 'Test link request URI', type: 'string' },\n              method: { description: 'HTTP Method', type: 'string' }\n            }\n          }\n        }\n      }\n    }\n  },\n  allOf: [\n    {\n      description: 'A resource',\n      type: 'object',\n      additionalProperties: false,\n      properties: {\n        id: { description: 'Resource id', type: 'string', readOnly: true },\n        name: {\n          description: 'Resource name',\n          type: 'string',\n          readOnly: true\n        },\n        type: {\n          description: 'Resource type',\n          type: 'string',\n          readOnly: true\n        },\n        location: { description: 'Resource location', type: 'string' },\n        etag: { description: 'Resource ETag', type: 'string' },\n        tags: {\n          type: 'object',\n          description: 'Resource tags',\n          additionalProperties: { type: 'string' },\n          example: { SampleTagName: 'SampleTagValue' }\n        }\n      },\n      'x-ms-azure-resource': true\n    }\n  ]\n}\n")),(0,o.kt)("h2",{id:"misc"},"Misc"),(0,o.kt)("p",null,"The resource version is ",(0,o.kt)("inlineCode",{parentName:"p"},"2016-06-01"),"."),(0,o.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/web/resource-manager/Microsoft.Web/stable/2016-06-01/logicAppsManagementClient.json"},"here"),"."))}d.isMDXComponent=!0}}]);