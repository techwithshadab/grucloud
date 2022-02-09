"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5638],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(t),m=i,f=l["".concat(c,".").concat(m)]||l[m]||d[m]||a;return t?r.createElement(f,o(o({ref:n},p),{},{components:t})):r.createElement(f,o({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=l;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},97976:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return l}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],s={id:"MaintenanceConfiguration",title:"MaintenanceConfiguration"},c=void 0,u={unversionedId:"azure/resources/ContainerService/MaintenanceConfiguration",id:"azure/resources/ContainerService/MaintenanceConfiguration",isDocsHomePage:!1,title:"MaintenanceConfiguration",description:"Provides a MaintenanceConfiguration from the ContainerService group",source:"@site/docs/azure/resources/ContainerService/MaintenanceConfiguration.md",sourceDirName:"azure/resources/ContainerService",slug:"/azure/resources/ContainerService/MaintenanceConfiguration",permalink:"/docs/azure/resources/ContainerService/MaintenanceConfiguration",tags:[],version:"current",frontMatter:{id:"MaintenanceConfiguration",title:"MaintenanceConfiguration"},sidebar:"docs",previous:{title:"ContainerService",permalink:"/docs/azure/resources/ContainerService/ContainerService"},next:{title:"ManagedCluster",permalink:"/docs/azure/resources/ContainerService/ManagedCluster"}},p=[{value:"Examples",id:"examples",children:[{value:"Create/Update Maintenance Configuration",id:"createupdate-maintenance-configuration",children:[],level:3}],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Swagger Schema",id:"swagger-schema",children:[],level:2},{value:"Misc",id:"misc",children:[],level:2}],d={toc:p};function l(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Provides a ",(0,a.kt)("strong",{parentName:"p"},"MaintenanceConfiguration")," from the ",(0,a.kt)("strong",{parentName:"p"},"ContainerService")," group"),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"createupdate-maintenance-configuration"},"Create/Update Maintenance Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'exports.createResources = () => [\n  {\n    type: "MaintenanceConfiguration",\n    group: "ContainerService",\n    name: "myMaintenanceConfiguration",\n    properties: () => ({\n      properties: {\n        timeInWeek: [{ day: "Monday", hourSlots: [1, 2] }],\n        notAllowedTime: [\n          { start: "2020-11-26T03:00:00Z", end: "2020-11-30T12:00:00Z" },\n        ],\n      },\n    }),\n    dependencies: ({}) => ({\n      resourceGroup: "myResourceGroup",\n      resource: "myManagedCluster",\n    }),\n  },\n];\n\n')),(0,a.kt)("h2",{id:"dependencies"},"Dependencies"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/azure/resources/ContainerService/ManagedCluster"},"ManagedCluster"))),(0,a.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{\n  allOf: [\n    {\n      properties: {\n        id: { readOnly: true, type: 'string', description: 'Resource ID.' },\n        name: {\n          readOnly: true,\n          type: 'string',\n          description: 'The name of the resource that is unique within a resource group. This name can be used to access the resource.'\n        },\n        type: {\n          readOnly: true,\n          type: 'string',\n          description: 'Resource type'\n        }\n      },\n      description: 'Reference to another subresource.',\n      'x-ms-azure-resource': true\n    }\n  ],\n  properties: {\n    systemData: {\n      readOnly: true,\n      description: 'The system metadata relating to this resource.',\n      type: 'object',\n      properties: {\n        createdBy: {\n          type: 'string',\n          description: 'The identity that created the resource.'\n        },\n        createdByType: {\n          type: 'string',\n          description: 'The type of identity that created the resource.',\n          enum: [ 'User', 'Application', 'ManagedIdentity', 'Key' ],\n          'x-ms-enum': { name: 'createdByType', modelAsString: true }\n        },\n        createdAt: {\n          type: 'string',\n          format: 'date-time',\n          description: 'The UTC timestamp of resource creation.'\n        },\n        lastModifiedBy: {\n          type: 'string',\n          description: 'The identity that last modified the resource.'\n        },\n        lastModifiedByType: {\n          type: 'string',\n          description: 'The type of identity that last modified the resource.',\n          enum: [ 'User', 'Application', 'ManagedIdentity', 'Key' ],\n          'x-ms-enum': { name: 'createdByType', modelAsString: true }\n        },\n        lastModifiedAt: {\n          type: 'string',\n          format: 'date-time',\n          description: 'The type of identity that last modified the resource.'\n        }\n      }\n    },\n    properties: {\n      description: 'Properties of a default maintenance configuration.',\n      'x-ms-client-flatten': true,\n      properties: {\n        timeInWeek: {\n          type: 'array',\n          items: {\n            properties: {\n              day: {\n                description: 'The day of the week.',\n                type: 'string',\n                enum: [\n                  'Sunday',\n                  'Monday',\n                  'Tuesday',\n                  'Wednesday',\n                  'Thursday',\n                  'Friday',\n                  'Saturday'\n                ],\n                'x-ms-enum': { name: 'WeekDay', modelAsString: true }\n              },\n              hourSlots: {\n                type: 'array',\n                items: {\n                  type: 'integer',\n                  format: 'int32',\n                  maximum: 23,\n                  minimum: 0,\n                  description: 'Hour in a day.'\n                },\n                title: 'A list of hours in the day used to identify a time range.',\n                description: 'Each integer hour represents a time range beginning at 0m after the hour ending at the next hour (non-inclusive). 0 corresponds to 00:00 UTC, 23 corresponds to 23:00 UTC. Specifying [0, 1] means the 00:00 - 02:00 UTC time range.'\n              }\n            },\n            description: 'Time in a week.'\n          },\n          title: 'Time slots during the week when planned maintenance is allowed to proceed.',\n          description: 'If two array entries specify the same day of the week, the applied configuration is the union of times in both entries.'\n        },\n        notAllowedTime: {\n          type: 'array',\n          items: {\n            properties: {\n              start: {\n                type: 'string',\n                format: 'date-time',\n                description: 'The start of a time span'\n              },\n              end: {\n                type: 'string',\n                format: 'date-time',\n                description: 'The end of a time span'\n              }\n            },\n            title: 'A time range.',\n            description: 'For example, between 2021-05-25T13:00:00Z and 2021-05-25T14:00:00Z.'\n          },\n          description: 'Time slots on which upgrade is not allowed.'\n        }\n      }\n    }\n  },\n  title: 'Planned maintenance configuration, used to configure when updates can be deployed to a Managed Cluster.',\n  description: 'See [planned maintenance](https://docs.microsoft.com/azure/aks/planned-maintenance) for more information about planned maintenance.'\n}\n")),(0,a.kt)("h2",{id:"misc"},"Misc"),(0,a.kt)("p",null,"The resource version is ",(0,a.kt)("inlineCode",{parentName:"p"},"2021-11-01-preview"),"."),(0,a.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/containerservice/resource-manager/Microsoft.ContainerService/preview/2021-11-01-preview/managedClusters.json"},"here"),"."))}l.isMDXComponent=!0}}]);