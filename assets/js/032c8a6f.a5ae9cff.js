"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2550],{3905:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return f}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=t.createContext({}),c=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,g=d["".concat(u,".").concat(f)]||d[f]||l[f]||i;return n?t.createElement(g,a(a({ref:r},p),{},{components:n})):t.createElement(g,a({ref:r},p))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73816:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var t=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],s={id:"Configuration",title:"Configuration"},u=void 0,c={unversionedId:"azure/resources/DBforPostgreSQL/Configuration",id:"azure/resources/DBforPostgreSQL/Configuration",isDocsHomePage:!1,title:"Configuration",description:"Provides a Configuration from the DBforPostgreSQL group",source:"@site/docs/azure/resources/DBforPostgreSQL/Configuration.md",sourceDirName:"azure/resources/DBforPostgreSQL",slug:"/azure/resources/DBforPostgreSQL/Configuration",permalink:"/docs/azure/resources/DBforPostgreSQL/Configuration",tags:[],version:"current",frontMatter:{id:"Configuration",title:"Configuration"},sidebar:"docs",previous:{title:"AppServiceCertificateOrderCertificate",permalink:"/docs/azure/resources/CertificateRegistration/AppServiceCertificateOrderCertificate"},next:{title:"Database",permalink:"/docs/azure/resources/DBforPostgreSQL/Database"}},p=[{value:"Examples",id:"examples",children:[{value:"Update a user configuration",id:"update-a-user-configuration",children:[],level:3}],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Swagger Schema",id:"swagger-schema",children:[],level:2},{value:"Misc",id:"misc",children:[],level:2}],l={toc:p};function d(e){var r=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Provides a ",(0,i.kt)("strong",{parentName:"p"},"Configuration")," from the ",(0,i.kt)("strong",{parentName:"p"},"DBforPostgreSQL")," group"),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"update-a-user-configuration"},"Update a user configuration"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'provider.DBforPostgreSQL.makeConfiguration({\n  name: "myConfiguration",\n  properties: () => ({ properties: { value: "on", source: "user-override" } }),\n  dependencies: ({ resources }) => ({\n    resourceGroup: resources.Resources.ResourceGroup["myResourceGroup"],\n    server: resources.DBforPostgreSQL.Server["myServer"],\n  }),\n});\n\n')),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/azure/resources/DBforPostgreSQL/Server"},"Server"))),(0,i.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  properties: {\n    properties: {\n      'x-ms-client-flatten': true,\n      description: 'The properties of a configuration.',\n      properties: {\n        value: { type: 'string', description: 'Value of the configuration.' },\n        description: {\n          type: 'string',\n          readOnly: true,\n          description: 'Description of the configuration.'\n        },\n        defaultValue: {\n          type: 'string',\n          readOnly: true,\n          description: 'Default value of the configuration.'\n        },\n        dataType: {\n          type: 'string',\n          readOnly: true,\n          description: 'Data type of the configuration.',\n          enum: [ 'Boolean', 'Numeric', 'Integer', 'Enumeration' ],\n          'x-ms-enum': { name: 'ConfigurationDataType', modelAsString: true }\n        },\n        allowedValues: {\n          type: 'string',\n          readOnly: true,\n          description: 'Allowed values of the configuration.'\n        },\n        source: { type: 'string', description: 'Source of the configuration.' },\n        isDynamicConfig: {\n          type: 'boolean',\n          readOnly: true,\n          description: 'Configuration dynamic or static.'\n        },\n        isReadOnly: {\n          type: 'boolean',\n          readOnly: true,\n          description: 'Configuration read-only or not.'\n        },\n        isConfigPendingRestart: {\n          type: 'boolean',\n          readOnly: true,\n          description: 'Configuration is pending restart or not.'\n        },\n        unit: {\n          type: 'string',\n          readOnly: true,\n          description: 'Configuration unit.'\n        },\n        documentationLink: {\n          type: 'string',\n          readOnly: true,\n          description: 'Configuration documentation link.'\n        }\n      }\n    },\n    systemData: {\n      readOnly: true,\n      description: 'The system metadata relating to this resource.',\n      type: 'object',\n      properties: {\n        createdBy: {\n          type: 'string',\n          description: 'The identity that created the resource.'\n        },\n        createdByType: {\n          type: 'string',\n          description: 'The type of identity that created the resource.',\n          enum: [ 'User', 'Application', 'ManagedIdentity', 'Key' ],\n          'x-ms-enum': { name: 'createdByType', modelAsString: true }\n        },\n        createdAt: {\n          type: 'string',\n          format: 'date-time',\n          description: 'The timestamp of resource creation (UTC).'\n        },\n        lastModifiedBy: {\n          type: 'string',\n          description: 'The identity that last modified the resource.'\n        },\n        lastModifiedByType: {\n          type: 'string',\n          description: 'The type of identity that last modified the resource.',\n          enum: [ 'User', 'Application', 'ManagedIdentity', 'Key' ],\n          'x-ms-enum': { name: 'createdByType', modelAsString: true }\n        },\n        lastModifiedAt: {\n          type: 'string',\n          format: 'date-time',\n          description: 'The timestamp of resource last modification (UTC)'\n        }\n      }\n    }\n  },\n  allOf: [\n    {\n      title: 'Proxy Resource',\n      description: 'The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location',\n      type: 'object',\n      allOf: [\n        {\n          title: 'Resource',\n          description: 'Common fields that are returned in the response for all Azure Resource Manager resources',\n          type: 'object',\n          properties: {\n            id: {\n              readOnly: true,\n              type: 'string',\n              description: 'Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}'\n            },\n            name: {\n              readOnly: true,\n              type: 'string',\n              description: 'The name of the resource'\n            },\n            type: {\n              readOnly: true,\n              type: 'string',\n              description: 'The type of the resource. E.g. \"Microsoft.Compute/virtualMachines\" or \"Microsoft.Storage/storageAccounts\"'\n            }\n          },\n          'x-ms-azure-resource': true\n        }\n      ]\n    }\n  ],\n  description: 'Represents a Configuration.'\n}\n")),(0,i.kt)("h2",{id:"misc"},"Misc"),(0,i.kt)("p",null,"The resource version is ",(0,i.kt)("inlineCode",{parentName:"p"},"2021-06-01"),"."),(0,i.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/postgresql/resource-manager/Microsoft.DBforPostgreSQL/stable/2021-06-01/postgresql.json"},"here"),"."))}d.isMDXComponent=!0}}]);