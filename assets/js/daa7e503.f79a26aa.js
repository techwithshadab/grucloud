"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1483],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return m}});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=t.createContext({}),u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},p=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,f=d["".concat(c,".").concat(m)]||d[m]||l[m]||o;return r?t.createElement(f,s(s({ref:n},p),{},{components:r})):t.createElement(f,s({ref:n},p))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var u=2;u<o;u++)s[u]=r[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},40893:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var t=r(87462),i=r(63366),o=(r(67294),r(3905)),s=["components"],a={id:"RoleAssignment",title:"RoleAssignment"},c=void 0,u={unversionedId:"azure/resources/Authorization/RoleAssignment",id:"azure/resources/Authorization/RoleAssignment",isDocsHomePage:!1,title:"RoleAssignment",description:"Provides a RoleAssignment from the Authorization group",source:"@site/docs/azure/resources/Authorization/RoleAssignment.md",sourceDirName:"azure/resources/Authorization",slug:"/azure/resources/Authorization/RoleAssignment",permalink:"/docs/azure/resources/Authorization/RoleAssignment",tags:[],version:"current",frontMatter:{id:"RoleAssignment",title:"RoleAssignment"},sidebar:"docs",previous:{title:"Resources List",permalink:"/docs/azure/ResourcesList"},next:{title:"RoleDefinition",permalink:"/docs/azure/resources/Authorization/RoleDefinition"}},p=[{value:"Examples",id:"examples",children:[{value:"Create role assignment for subscription",id:"create-role-assignment-for-subscription",children:[],level:3},{value:"Create role assignment for resource group",id:"create-role-assignment-for-resource-group",children:[],level:3},{value:"Create role assignment for resource",id:"create-role-assignment-for-resource",children:[],level:3}],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Swagger Schema",id:"swagger-schema",children:[],level:2},{value:"Misc",id:"misc",children:[],level:2}],l={toc:p};function d(e){var n=e.components,r=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Provides a ",(0,o.kt)("strong",{parentName:"p"},"RoleAssignment")," from the ",(0,o.kt)("strong",{parentName:"p"},"Authorization")," group"),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"create-role-assignment-for-subscription"},"Create role assignment for subscription"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'provider.Authorization.makeRoleAssignment({\n  name: "myRoleAssignment",\n  properties: () => ({\n    properties: {\n      roleDefinitionId:\n        "/subscriptions/a925f2f7-5c63-4b7b-8799-25a5f97bc3b2/providers/Microsoft.Authorization/roleDefinitions/0b5fe924-9a61-425c-96af-cfe6e287ca2d",\n      principalId: "ce2ce14e-85d7-4629-bdbc-454d0519d987",\n      principalType: "User",\n    },\n  }),\n  dependencies: ({ resources }) => ({\n    scopeResourceGroup: resources.Resources.ResourceGroup["myResourceGroup"],\n    scopeVirtualMachine: resources.Compute.VirtualMachine["myVirtualMachine"],\n    roleDefinition: resources.Authorization.RoleDefinition["myRoleDefinition"],\n    principalDiskEncryptionSet:\n      resources.Compute.DiskEncryptionSet["myDiskEncryptionSet"],\n    principalVirtualMachine:\n      resources.Compute.VirtualMachine["myVirtualMachine"],\n  }),\n});\n\n')),(0,o.kt)("h3",{id:"create-role-assignment-for-resource-group"},"Create role assignment for resource group"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'provider.Authorization.makeRoleAssignment({\n  name: "myRoleAssignment",\n  properties: () => ({\n    properties: {\n      roleDefinitionId:\n        "/subscriptions/a925f2f7-5c63-4b7b-8799-25a5f97bc3b2/providers/Microsoft.Authorization/roleDefinitions/0b5fe924-9a61-425c-96af-cfe6e287ca2d",\n      principalId: "ce2ce14e-85d7-4629-bdbc-454d0519d987",\n      principalType: "User",\n    },\n  }),\n  dependencies: ({ resources }) => ({\n    scopeResourceGroup: resources.Resources.ResourceGroup["myResourceGroup"],\n    scopeVirtualMachine: resources.Compute.VirtualMachine["myVirtualMachine"],\n    roleDefinition: resources.Authorization.RoleDefinition["myRoleDefinition"],\n    principalDiskEncryptionSet:\n      resources.Compute.DiskEncryptionSet["myDiskEncryptionSet"],\n    principalVirtualMachine:\n      resources.Compute.VirtualMachine["myVirtualMachine"],\n  }),\n});\n\n')),(0,o.kt)("h3",{id:"create-role-assignment-for-resource"},"Create role assignment for resource"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'provider.Authorization.makeRoleAssignment({\n  name: "myRoleAssignment",\n  properties: () => ({\n    properties: {\n      roleDefinitionId:\n        "/subscriptions/a925f2f7-5c63-4b7b-8799-25a5f97bc3b2/providers/Microsoft.Authorization/roleDefinitions/0b5fe924-9a61-425c-96af-cfe6e287ca2d",\n      principalId: "ce2ce14e-85d7-4629-bdbc-454d0519d987",\n      principalType: "User",\n    },\n  }),\n  dependencies: ({ resources }) => ({\n    scopeResourceGroup: resources.Resources.ResourceGroup["myResourceGroup"],\n    scopeVirtualMachine: resources.Compute.VirtualMachine["myVirtualMachine"],\n    roleDefinition: resources.Authorization.RoleDefinition["myRoleDefinition"],\n    principalDiskEncryptionSet:\n      resources.Compute.DiskEncryptionSet["myDiskEncryptionSet"],\n    principalVirtualMachine:\n      resources.Compute.VirtualMachine["myVirtualMachine"],\n  }),\n});\n\n')),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Compute/VirtualMachine"},"VirtualMachine")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Authorization/RoleDefinition"},"RoleDefinition")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Compute/DiskEncryptionSet"},"DiskEncryptionSet")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/azure/resources/Compute/VirtualMachine"},"VirtualMachine"))),(0,o.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  properties: {\n    properties: {\n      'x-ms-client-flatten': true,\n      description: 'Role assignment properties.',\n      properties: {\n        scope: {\n          readOnly: true,\n          type: 'string',\n          description: 'The role assignment scope.'\n        },\n        roleDefinitionId: { type: 'string', description: 'The role definition ID.' },\n        principalId: { type: 'string', description: 'The principal ID.' },\n        principalType: {\n          type: 'string',\n          description: 'The principal type of the assigned principal ID.',\n          enum: [\n            'User',\n            'Group',\n            'ServicePrincipal',\n            'ForeignGroup',\n            'Device'\n          ],\n          default: 'User',\n          'x-ms-enum': { name: 'PrincipalType', modelAsString: true }\n        },\n        description: {\n          type: 'string',\n          description: 'Description of role assignment'\n        },\n        condition: {\n          type: 'string',\n          description: \"The conditions on the role assignment. This limits the resources it can be assigned to. e.g.: @Resource[Microsoft.Storage/storageAccounts/blobServices/containers:ContainerName] StringEqualsIgnoreCase 'foo_storage_container'\"\n        },\n        conditionVersion: {\n          type: 'string',\n          description: \"Version of the condition. Currently accepted value is '2.0'\"\n        },\n        createdOn: {\n          readOnly: true,\n          type: 'string',\n          description: 'Time it was created',\n          format: 'date-time'\n        },\n        updatedOn: {\n          readOnly: true,\n          type: 'string',\n          description: 'Time it was updated',\n          format: 'date-time'\n        },\n        createdBy: {\n          readOnly: true,\n          type: 'string',\n          description: 'Id of the user who created the assignment'\n        },\n        updatedBy: {\n          readOnly: true,\n          type: 'string',\n          description: 'Id of the user who updated the assignment'\n        },\n        delegatedManagedIdentityResourceId: {\n          type: 'string',\n          description: 'Id of the delegated managed identity resource'\n        }\n      },\n      required: [ 'roleDefinitionId', 'principalId' ],\n      type: 'object'\n    }\n  },\n  required: [ 'properties' ],\n  type: 'object',\n  description: 'Role assignment create parameters.'\n}\n")),(0,o.kt)("h2",{id:"misc"},"Misc"),(0,o.kt)("p",null,"The resource version is ",(0,o.kt)("inlineCode",{parentName:"p"},"2021-04-01-preview"),"."),(0,o.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/authorization/resource-manager/Microsoft.Authorization/preview/2020-10-01-preview/authorization-RoleAssignmentsCalls.json"},"here"),"."))}d.isMDXComponent=!0}}]);