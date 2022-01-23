"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9076],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return f}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||s;return t?n.createElement(m,i(i({ref:r},c),{},{components:t})):n.createElement(m,i({ref:r},c))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=d;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var u=2;u<s;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58982:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var n=t(87462),o=t(63366),s=(t(67294),t(3905)),i=["components"],a={id:"FirewallRule",title:"FirewallRule"},l=void 0,u={unversionedId:"azure/resources/DBforPostgreSQL/FirewallRule",id:"azure/resources/DBforPostgreSQL/FirewallRule",isDocsHomePage:!1,title:"FirewallRule",description:"Provides a FirewallRule from the DBforPostgreSQL group",source:"@site/docs/azure/resources/DBforPostgreSQL/FirewallRule.md",sourceDirName:"azure/resources/DBforPostgreSQL",slug:"/azure/resources/DBforPostgreSQL/FirewallRule",permalink:"/docs/azure/resources/DBforPostgreSQL/FirewallRule",tags:[],version:"current",frontMatter:{id:"FirewallRule",title:"FirewallRule"},sidebar:"docs",previous:{title:"Database",permalink:"/docs/azure/resources/DBforPostgreSQL/Database"},next:{title:"FlexibleServer",permalink:"/docs/azure/resources/DBforPostgreSQL/FlexibleServer"}},c=[{value:"Examples",id:"examples",children:[{value:"FirewallRuleCreate",id:"firewallrulecreate",children:[],level:3}],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Swagger Schema",id:"swagger-schema",children:[],level:2},{value:"Misc",id:"misc",children:[],level:2}],p={toc:c};function d(e){var r=e.components,t=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Provides a ",(0,s.kt)("strong",{parentName:"p"},"FirewallRule")," from the ",(0,s.kt)("strong",{parentName:"p"},"DBforPostgreSQL")," group"),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("h3",{id:"firewallrulecreate"},"FirewallRuleCreate"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'provider.DBforPostgreSQL.makeFirewallRule({\n  name: "myFirewallRule",\n  properties: () => ({\n    properties: { startIpAddress: "0.0.0.0", endIpAddress: "255.255.255.255" },\n  }),\n  dependencies: ({ resources }) => ({\n    resourceGroup: resources.Resources.ResourceGroup["myResourceGroup"],\n    server: resources.DBforPostgreSQL.FlexibleServer["myFlexibleServer"],\n  }),\n});\n\n')),(0,s.kt)("h2",{id:"dependencies"},"Dependencies"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/azure/resources/DBforPostgreSQL/FlexibleServer"},"FlexibleServer"))),(0,s.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"{\n  properties: {\n    properties: {\n      'x-ms-client-flatten': true,\n      description: 'The properties of a firewall rule.',\n      properties: {\n        startIpAddress: {\n          type: 'string',\n          pattern: '^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$',\n          description: 'The start IP address of the server firewall rule. Must be IPv4 format.'\n        },\n        endIpAddress: {\n          type: 'string',\n          pattern: '^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$',\n          description: 'The end IP address of the server firewall rule. Must be IPv4 format.'\n        }\n      },\n      required: [ 'startIpAddress', 'endIpAddress' ]\n    },\n    systemData: {\n      readOnly: true,\n      description: 'The system metadata relating to this resource.',\n      type: 'object',\n      properties: {\n        createdBy: {\n          type: 'string',\n          description: 'The identity that created the resource.'\n        },\n        createdByType: {\n          type: 'string',\n          description: 'The type of identity that created the resource.',\n          enum: [ 'User', 'Application', 'ManagedIdentity', 'Key' ],\n          'x-ms-enum': { name: 'createdByType', modelAsString: true }\n        },\n        createdAt: {\n          type: 'string',\n          format: 'date-time',\n          description: 'The timestamp of resource creation (UTC).'\n        },\n        lastModifiedBy: {\n          type: 'string',\n          description: 'The identity that last modified the resource.'\n        },\n        lastModifiedByType: {\n          type: 'string',\n          description: 'The type of identity that last modified the resource.',\n          enum: [ 'User', 'Application', 'ManagedIdentity', 'Key' ],\n          'x-ms-enum': { name: 'createdByType', modelAsString: true }\n        },\n        lastModifiedAt: {\n          type: 'string',\n          format: 'date-time',\n          description: 'The timestamp of resource last modification (UTC)'\n        }\n      }\n    }\n  },\n  allOf: [\n    {\n      title: 'Proxy Resource',\n      description: 'The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location',\n      type: 'object',\n      allOf: [\n        {\n          title: 'Resource',\n          description: 'Common fields that are returned in the response for all Azure Resource Manager resources',\n          type: 'object',\n          properties: {\n            id: {\n              readOnly: true,\n              type: 'string',\n              description: 'Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}'\n            },\n            name: {\n              readOnly: true,\n              type: 'string',\n              description: 'The name of the resource'\n            },\n            type: {\n              readOnly: true,\n              type: 'string',\n              description: 'The type of the resource. E.g. \"Microsoft.Compute/virtualMachines\" or \"Microsoft.Storage/storageAccounts\"'\n            }\n          },\n          'x-ms-azure-resource': true\n        }\n      ]\n    }\n  ],\n  required: [ 'properties' ],\n  description: 'Represents a server firewall rule.'\n}\n")),(0,s.kt)("h2",{id:"misc"},"Misc"),(0,s.kt)("p",null,"The resource version is ",(0,s.kt)("inlineCode",{parentName:"p"},"2021-06-01"),"."),(0,s.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/postgresql/resource-manager/Microsoft.DBforPostgreSQL/stable/2021-06-01/postgresql.json"},"here"),"."))}d.isMDXComponent=!0}}]);