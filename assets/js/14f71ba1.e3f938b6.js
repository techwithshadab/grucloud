"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6231],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return y}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(t),y=i,m=d["".concat(c,".").concat(y)]||d[y]||l[y]||s;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,a=new Array(s);a[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var p=2;p<s;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},92951:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=t(87462),i=t(63366),s=(t(67294),t(3905)),a=["components"],o={id:"Cluster",title:"Cluster"},c=void 0,p={unversionedId:"azure/resources/OperationalInsights/Cluster",id:"azure/resources/OperationalInsights/Cluster",isDocsHomePage:!1,title:"Cluster",description:"Provides a Cluster from the OperationalInsights group",source:"@site/docs/azure/resources/OperationalInsights/Cluster.md",sourceDirName:"azure/resources/OperationalInsights",slug:"/azure/resources/OperationalInsights/Cluster",permalink:"/docs/azure/resources/OperationalInsights/Cluster",tags:[],version:"current",frontMatter:{id:"Cluster",title:"Cluster"},sidebar:"docs",previous:{title:"TableService",permalink:"/docs/azure/resources/Storage/TableService"},next:{title:"DataCollectorLog",permalink:"/docs/azure/resources/OperationalInsights/DataCollectorLog"}},u=[{value:"Examples",id:"examples",children:[{value:"ClustersCreate",id:"clusterscreate",children:[],level:3}],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Swagger Schema",id:"swagger-schema",children:[],level:2},{value:"Misc",id:"misc",children:[],level:2}],l={toc:u};function d(e){var n=e.components,t=(0,i.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Provides a ",(0,s.kt)("strong",{parentName:"p"},"Cluster")," from the ",(0,s.kt)("strong",{parentName:"p"},"OperationalInsights")," group"),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("h3",{id:"clusterscreate"},"ClustersCreate"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'provider.OperationalInsights.makeCluster({\n  name: "myCluster",\n  properties: () => ({\n    sku: { name: "CapacityReservation", capacity: 1000 },\n    location: "australiasoutheast",\n    tags: { tag1: "val1" },\n  }),\n  dependencies: ({ resources }) => ({\n    resourceGroup: resources.Resources.ResourceGroup["myResourceGroup"],\n    managedIdentities: [\n      resources.ManagedIdentity.UserAssignedIdentity["myUserAssignedIdentity"],\n    ],\n    workspace: resources.OperationalInsights.Workspace["myWorkspace"],\n  }),\n});\n\n')),(0,s.kt)("h2",{id:"dependencies"},"Dependencies"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/azure/resources/ManagedIdentity/UserAssignedIdentity"},"UserAssignedIdentity")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/azure/resources/OperationalInsights/Workspace"},"Workspace"))),(0,s.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"{\n  properties: {\n    identity: {\n      description: 'The identity of the resource.',\n      properties: {\n        principalId: {\n          readOnly: true,\n          type: 'string',\n          description: 'The principal ID of resource identity.'\n        },\n        tenantId: {\n          readOnly: true,\n          type: 'string',\n          description: 'The tenant ID of resource.'\n        },\n        type: {\n          type: 'string',\n          description: 'Type of managed service identity.',\n          enum: [ 'SystemAssigned', 'UserAssigned', 'None' ],\n          'x-ms-enum': { name: 'IdentityType', modelAsString: false }\n        },\n        userAssignedIdentities: {\n          description: \"The list of user identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}'.\",\n          type: 'object',\n          additionalProperties: {\n            type: 'object',\n            description: 'User assigned identity properties.',\n            properties: {\n              principalId: {\n                readOnly: true,\n                description: 'The principal id of user assigned identity.',\n                type: 'string'\n              },\n              clientId: {\n                readOnly: true,\n                description: 'The client id of user assigned identity.',\n                type: 'string'\n              }\n            }\n          }\n        }\n      },\n      required: [ 'type' ]\n    },\n    sku: {\n      description: 'The sku properties.',\n      properties: {\n        capacity: {\n          description: 'The capacity value',\n          type: 'integer',\n          format: 'int64',\n          enum: [ 500, 1000, 2000, 5000 ],\n          'x-ms-enum': { name: 'Capacity' }\n        },\n        name: {\n          type: 'string',\n          description: 'The name of the SKU.',\n          enum: [ 'CapacityReservation' ],\n          'x-ms-enum': { name: 'ClusterSkuNameEnum', modelAsString: true }\n        }\n      }\n    },\n    properties: {\n      'x-ms-client-flatten': true,\n      description: 'Log Analytics cluster properties.',\n      properties: {\n        clusterId: {\n          type: 'string',\n          readOnly: true,\n          description: 'The ID associated with the cluster.'\n        },\n        provisioningState: {\n          type: 'string',\n          readOnly: true,\n          description: 'The provisioning state of the cluster.',\n          enum: [\n            'Creating',\n            'Succeeded',\n            'Failed',\n            'Canceled',\n            'Deleting',\n            'ProvisioningAccount',\n            'Updating'\n          ],\n          'x-ms-enum': { name: 'ClusterEntityStatus', modelAsString: true }\n        },\n        isDoubleEncryptionEnabled: {\n          type: 'boolean',\n          readOnly: false,\n          description: \"Configures whether cluster will use double encryption. This Property can not be modified after cluster creation. Default value is 'true'\",\n          'x-ms-mutability': [ 'create' ]\n        },\n        isAvailabilityZonesEnabled: {\n          type: 'boolean',\n          readOnly: false,\n          description: \"Sets whether the cluster will support availability zones. This can be set as true only in regions where Azure Data Explorer support Availability Zones. This Property can not be modified after cluster creation. Default value is 'true' if region supports Availability Zones.\"\n        },\n        billingType: {\n          description: \"The cluster's billing type.\",\n          type: 'string',\n          readOnly: false,\n          enum: [ 'Cluster', 'Workspaces' ],\n          'x-ms-enum': { name: 'BillingType', modelAsString: true }\n        },\n        keyVaultProperties: {\n          description: 'The associated key properties.',\n          properties: {\n            keyVaultUri: {\n              description: 'The Key Vault uri which holds they key associated with the Log Analytics cluster.',\n              type: 'string'\n            },\n            keyName: {\n              description: 'The name of the key associated with the Log Analytics cluster.',\n              type: 'string'\n            },\n            keyVersion: {\n              description: 'The version of the key associated with the Log Analytics cluster.',\n              type: 'string'\n            },\n            keyRsaSize: {\n              description: 'Selected key minimum required size.',\n              type: 'integer',\n              format: 'int32'\n            }\n          }\n        },\n        lastModifiedDate: {\n          type: 'string',\n          description: 'The last time the cluster was updated.',\n          readOnly: true\n        },\n        createdDate: {\n          type: 'string',\n          description: 'The cluster creation time',\n          readOnly: true\n        },\n        associatedWorkspaces: {\n          description: 'The list of Log Analytics workspaces associated with the cluster',\n          type: 'array',\n          items: {\n            type: 'object',\n            description: 'The list of Log Analytics workspaces associated with the cluster.',\n            properties: {\n              workspaceId: {\n                readOnly: true,\n                description: 'The id of the assigned workspace.',\n                type: 'string'\n              },\n              workspaceName: {\n                readOnly: true,\n                description: 'The name id the assigned workspace.',\n                type: 'string'\n              },\n              resourceId: {\n                readOnly: true,\n                description: 'The ResourceId id the assigned workspace.',\n                type: 'string'\n              },\n              associateDate: {\n                readOnly: true,\n                description: 'The time of workspace association.',\n                type: 'string'\n              }\n            }\n          }\n        },\n        capacityReservationProperties: {\n          description: 'Additional properties for capacity reservation',\n          properties: {\n            lastSkuUpdate: {\n              readOnly: true,\n              description: 'The last time Sku was updated.',\n              type: 'string'\n            },\n            minCapacity: {\n              readOnly: true,\n              description: 'Minimum CapacityReservation value in GB.',\n              type: 'integer',\n              format: 'int64'\n            }\n          }\n        }\n      }\n    }\n  },\n  allOf: [\n    {\n      title: 'Tracked Resource',\n      description: \"The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location'\",\n      type: 'object',\n      properties: {\n        tags: {\n          type: 'object',\n          additionalProperties: { type: 'string' },\n          'x-ms-mutability': [ 'read', 'create', 'update' ],\n          description: 'Resource tags.'\n        },\n        location: {\n          type: 'string',\n          'x-ms-mutability': [ 'read', 'create' ],\n          description: 'The geo-location where the resource lives'\n        }\n      },\n      required: [ 'location' ],\n      allOf: [\n        {\n          title: 'Resource',\n          description: 'Common fields that are returned in the response for all Azure Resource Manager resources',\n          type: 'object',\n          properties: {\n            id: {\n              readOnly: true,\n              type: 'string',\n              description: 'Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}'\n            },\n            name: {\n              readOnly: true,\n              type: 'string',\n              description: 'The name of the resource'\n            },\n            type: {\n              readOnly: true,\n              type: 'string',\n              description: 'The type of the resource. E.g. \"Microsoft.Compute/virtualMachines\" or \"Microsoft.Storage/storageAccounts\"'\n            }\n          },\n          'x-ms-azure-resource': true\n        }\n      ]\n    }\n  ],\n  description: 'The top level Log Analytics cluster resource container.'\n}\n")),(0,s.kt)("h2",{id:"misc"},"Misc"),(0,s.kt)("p",null,"The resource version is ",(0,s.kt)("inlineCode",{parentName:"p"},"2021-06-01"),"."),(0,s.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/operationalinsights/resource-manager/Microsoft.OperationalInsights/stable/2021-06-01/Clusters.json"},"here"),"."))}d.isMDXComponent=!0}}]);