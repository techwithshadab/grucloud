"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8620],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return m}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},p=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,h=d["".concat(c,".").concat(m)]||d[m]||l[m]||s;return r?t.createElement(h,i(i({ref:n},p),{},{components:r})):t.createElement(h,i({ref:n},p))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<s;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},91317:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var t=r(87462),a=r(63366),s=(r(67294),r(3905)),i=["components"],o={id:"FileShare",title:"FileShare"},c=void 0,u={unversionedId:"azure/resources/Storage/FileShare",id:"azure/resources/Storage/FileShare",isDocsHomePage:!1,title:"FileShare",description:"Provides a FileShare from the Storage group",source:"@site/docs/azure/resources/Storage/FileShare.md",sourceDirName:"azure/resources/Storage",slug:"/azure/resources/Storage/FileShare",permalink:"/docs/azure/resources/Storage/FileShare",tags:[],version:"current",frontMatter:{id:"FileShare",title:"FileShare"},sidebar:"docs",previous:{title:"FileService",permalink:"/docs/azure/resources/Storage/FileService"},next:{title:"LocalUser",permalink:"/docs/azure/resources/Storage/LocalUser"}},p=[{value:"Examples",id:"examples",children:[{value:"PutShares",id:"putshares",children:[],level:3},{value:"Create NFS Shares",id:"create-nfs-shares",children:[],level:3},{value:"PutShares with Access Tier",id:"putshares-with-access-tier",children:[],level:3}],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Swagger Schema",id:"swagger-schema",children:[],level:2},{value:"Misc",id:"misc",children:[],level:2}],l={toc:p};function d(e){var n=e.components,r=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Provides a ",(0,s.kt)("strong",{parentName:"p"},"FileShare")," from the ",(0,s.kt)("strong",{parentName:"p"},"Storage")," group"),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("h3",{id:"putshares"},"PutShares"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'exports.createResources = () => [\n  {\n    type: "FileShare",\n    group: "Storage",\n    name: "myFileShare",\n    dependencies: ({}) => ({\n      resourceGroup: "myResourceGroup",\n      account: "myStorageAccount",\n    }),\n  },\n];\n\n')),(0,s.kt)("h3",{id:"create-nfs-shares"},"Create NFS Shares"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'exports.createResources = () => [\n  {\n    type: "FileShare",\n    group: "Storage",\n    name: "myFileShare",\n    properties: () => ({ properties: { enabledProtocols: "NFS" } }),\n    dependencies: ({}) => ({\n      resourceGroup: "myResourceGroup",\n      account: "myStorageAccount",\n    }),\n  },\n];\n\n')),(0,s.kt)("h3",{id:"putshares-with-access-tier"},"PutShares with Access Tier"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'exports.createResources = () => [\n  {\n    type: "FileShare",\n    group: "Storage",\n    name: "myFileShare",\n    properties: () => ({ properties: { accessTier: "Hot" } }),\n    dependencies: ({}) => ({\n      resourceGroup: "myResourceGroup",\n      account: "myStorageAccount",\n    }),\n  },\n];\n\n')),(0,s.kt)("h2",{id:"dependencies"},"Dependencies"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/azure/resources/Storage/StorageAccount"},"StorageAccount"))),(0,s.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"{\n  properties: {\n    properties: {\n      'x-ms-client-flatten': true,\n      'x-ms-client-name': 'FileShareProperties',\n      description: 'Properties of the file share.',\n      properties: {\n        lastModifiedTime: {\n          type: 'string',\n          format: 'date-time',\n          readOnly: true,\n          description: 'Returns the date and time the share was last modified.'\n        },\n        metadata: {\n          type: 'object',\n          additionalProperties: { type: 'string' },\n          description: 'A name-value pair to associate with the share as metadata.'\n        },\n        shareQuota: {\n          type: 'integer',\n          minimum: 1,\n          maximum: 102400,\n          description: 'The maximum size of the share, in gigabytes. Must be greater than 0, and less than or equal to 5TB (5120). For Large File Shares, the maximum size is 102400.'\n        },\n        enabledProtocols: {\n          type: 'string',\n          enum: [ 'SMB', 'NFS' ],\n          'x-ms-enum': { name: 'EnabledProtocols', modelAsString: true },\n          description: 'The authentication protocol that is used for the file share. Can only be specified when creating a share.',\n          'x-ms-mutability': [ 'create', 'read' ]\n        },\n        rootSquash: {\n          type: 'string',\n          enum: [ 'NoRootSquash', 'RootSquash', 'AllSquash' ],\n          'x-ms-enum': { name: 'RootSquashType', modelAsString: true },\n          description: 'The property is for NFS share only. The default is NoRootSquash.'\n        },\n        version: {\n          type: 'string',\n          readOnly: true,\n          description: 'The version of the share.'\n        },\n        deleted: {\n          type: 'boolean',\n          readOnly: true,\n          description: 'Indicates whether the share was deleted.'\n        },\n        deletedTime: {\n          type: 'string',\n          format: 'date-time',\n          readOnly: true,\n          description: 'The deleted time if the share was deleted.'\n        },\n        remainingRetentionDays: {\n          type: 'integer',\n          readOnly: true,\n          description: 'Remaining retention days for share that was soft deleted.'\n        },\n        accessTier: {\n          type: 'string',\n          enum: [ 'TransactionOptimized', 'Hot', 'Cool', 'Premium' ],\n          'x-ms-enum': { name: 'ShareAccessTier', modelAsString: true },\n          description: 'Access tier for specific share. GpV2 account can choose between TransactionOptimized (default), Hot, and Cool. FileStorage account can choose Premium.'\n        },\n        accessTierChangeTime: {\n          type: 'string',\n          format: 'date-time',\n          readOnly: true,\n          description: 'Indicates the last modification time for share access tier.'\n        },\n        accessTierStatus: {\n          type: 'string',\n          readOnly: true,\n          description: 'Indicates if there is a pending transition for access tier.'\n        },\n        shareUsageBytes: {\n          type: 'integer',\n          format: 'int64',\n          readOnly: true,\n          description: 'The approximate size of the data stored on the share. Note that this value may not include all recently created or recently resized files.'\n        },\n        leaseStatus: {\n          type: 'string',\n          readOnly: true,\n          enum: [ 'Locked', 'Unlocked' ],\n          'x-ms-enum': { name: 'LeaseStatus', modelAsString: true },\n          description: 'The lease status of the share.'\n        },\n        leaseState: {\n          type: 'string',\n          readOnly: true,\n          enum: [ 'Available', 'Leased', 'Expired', 'Breaking', 'Broken' ],\n          'x-ms-enum': { name: 'LeaseState', modelAsString: true },\n          description: 'Lease state of the share.'\n        },\n        leaseDuration: {\n          type: 'string',\n          readOnly: true,\n          enum: [ 'Infinite', 'Fixed' ],\n          'x-ms-enum': { name: 'LeaseDuration', modelAsString: true },\n          description: 'Specifies whether the lease on a share is of infinite or fixed duration, only when the share is leased.'\n        },\n        signedIdentifiers: {\n          type: 'array',\n          items: {\n            properties: {\n              id: {\n                type: 'string',\n                description: 'An unique identifier of the stored access policy.'\n              },\n              accessPolicy: {\n                description: 'Access policy',\n                properties: {\n                  startTime: {\n                    type: 'string',\n                    format: 'date-time',\n                    description: 'Start time of the access policy'\n                  },\n                  expiryTime: {\n                    type: 'string',\n                    format: 'date-time',\n                    description: 'Expiry time of the access policy'\n                  },\n                  permission: {\n                    type: 'string',\n                    description: 'List of abbreviated permissions.'\n                  }\n                }\n              }\n            }\n          },\n          description: 'List of stored access policies specified on the share.'\n        },\n        snapshotTime: {\n          type: 'string',\n          format: 'date-time',\n          readOnly: true,\n          description: 'Creation time of share snapshot returned in the response of list shares with expand param \"snapshots\".'\n        }\n      }\n    }\n  },\n  allOf: [\n    {\n      'x-ms-client-name': 'AzureEntityResource',\n      title: 'Entity Resource',\n      description: 'The resource model definition for an Azure Resource Manager resource with an etag.',\n      type: 'object',\n      properties: {\n        etag: {\n          type: 'string',\n          readOnly: true,\n          description: 'Resource Etag.'\n        }\n      },\n      allOf: [\n        {\n          title: 'Resource',\n          description: 'Common fields that are returned in the response for all Azure Resource Manager resources',\n          type: 'object',\n          properties: {\n            id: {\n              readOnly: true,\n              type: 'string',\n              description: 'Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}'\n            },\n            name: {\n              readOnly: true,\n              type: 'string',\n              description: 'The name of the resource'\n            },\n            type: {\n              readOnly: true,\n              type: 'string',\n              description: 'The type of the resource. E.g. \"Microsoft.Compute/virtualMachines\" or \"Microsoft.Storage/storageAccounts\"'\n            }\n          },\n          'x-ms-azure-resource': true\n        }\n      ]\n    }\n  ],\n  description: 'Properties of the file share, including Id, resource name, resource type, Etag.'\n}\n")),(0,s.kt)("h2",{id:"misc"},"Misc"),(0,s.kt)("p",null,"The resource version is ",(0,s.kt)("inlineCode",{parentName:"p"},"2021-08-01"),"."),(0,s.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/storage/resource-manager/Microsoft.Storage/stable/2021-08-01/file.json"},"here"),"."))}d.isMDXComponent=!0}}]);