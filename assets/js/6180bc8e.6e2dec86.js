"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4183],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return m}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):u(u({},n),e)),r},p=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,g=d["".concat(c,".").concat(m)]||d[m]||l[m]||i;return r?t.createElement(g,u(u({ref:n},p),{},{components:r})):t.createElement(g,u({ref:n},p))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,u=new Array(i);u[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,u[1]=a;for(var s=2;s<i;s++)u[s]=r[s];return t.createElement.apply(null,u)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},70540:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var t=r(87462),o=r(63366),i=(r(67294),r(3905)),u=["components"],a={id:"VirtualHubBgpConnection",title:"VirtualHubBgpConnection"},c=void 0,s={unversionedId:"azure/resources/Network/VirtualHubBgpConnection",id:"azure/resources/Network/VirtualHubBgpConnection",isDocsHomePage:!1,title:"VirtualHubBgpConnection",description:"Provides a VirtualHubBgpConnection from the Network group",source:"@site/docs/azure/resources/Network/VirtualHubBgpConnection.md",sourceDirName:"azure/resources/Network",slug:"/azure/resources/Network/VirtualHubBgpConnection",permalink:"/docs/azure/resources/Network/VirtualHubBgpConnection",tags:[],version:"current",frontMatter:{id:"VirtualHubBgpConnection",title:"VirtualHubBgpConnection"},sidebar:"docs",previous:{title:"VirtualHub",permalink:"/docs/azure/resources/Network/VirtualHub"},next:{title:"VirtualHubIpConfiguration",permalink:"/docs/azure/resources/Network/VirtualHubIpConfiguration"}},p=[{value:"Examples",id:"examples",children:[{value:"VirtualHubRouteTableV2Put",id:"virtualhubroutetablev2put",children:[],level:3}],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Swagger Schema",id:"swagger-schema",children:[],level:2},{value:"Misc",id:"misc",children:[],level:2}],l={toc:p};function d(e){var n=e.components,r=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Provides a ",(0,i.kt)("strong",{parentName:"p"},"VirtualHubBgpConnection")," from the ",(0,i.kt)("strong",{parentName:"p"},"Network")," group"),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h3",{id:"virtualhubroutetablev2put"},"VirtualHubRouteTableV2Put"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'exports.createResources = () => [\n  {\n    type: "VirtualHubBgpConnection",\n    group: "Network",\n    name: "myVirtualHubBgpConnection",\n    properties: () => ({\n      properties: {\n        peerIp: "192.168.1.5",\n        peerAsn: 20000,\n        hubVirtualNetworkConnection: {\n          id: "/subscriptions/subid/resourceGroups/rg1/providers/Microsoft.Network/virtualHubs/hub1/hubVirtualNetworkConnections/hubVnetConn1",\n        },\n      },\n    }),\n    dependencies: ({}) => ({\n      resourceGroup: "myResourceGroup",\n      hubVirtualNetworkConnection: "myHubVirtualNetworkConnection",\n      virtualHub: "myVirtualHub",\n    }),\n  },\n];\n\n')),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/azure/resources/Network/HubVirtualNetworkConnection"},"HubVirtualNetworkConnection")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/azure/resources/Network/VirtualHub"},"VirtualHub"))),(0,i.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"{\n  properties: {\n    properties: {\n      'x-ms-client-flatten': true,\n      description: 'The properties of the Bgp connections.',\n      properties: {\n        peerAsn: {\n          type: 'integer',\n          readOnly: false,\n          format: 'int64',\n          minimum: 0,\n          maximum: 4294967295,\n          description: 'Peer ASN.'\n        },\n        peerIp: { type: 'string', readOnly: false, description: 'Peer IP.' },\n        hubVirtualNetworkConnection: {\n          properties: { id: { type: 'string', description: 'Resource ID.' } },\n          description: 'Reference to another subresource.',\n          'x-ms-azure-resource': true,\n          readOnly: false\n        },\n        provisioningState: {\n          description: 'The provisioning state of the resource.',\n          readOnly: true,\n          type: 'string',\n          enum: [ 'Succeeded', 'Updating', 'Deleting', 'Failed' ],\n          'x-ms-enum': { name: 'ProvisioningState', modelAsString: true }\n        },\n        connectionState: {\n          type: 'string',\n          description: 'The current state of the VirtualHub to Peer.',\n          readOnly: true,\n          enum: [ 'Unknown', 'Connecting', 'Connected', 'NotConnected' ],\n          'x-ms-enum': { name: 'HubBgpConnectionStatus', modelAsString: true }\n        }\n      }\n    },\n    name: { type: 'string', description: 'Name of the connection.' },\n    etag: {\n      type: 'string',\n      readOnly: true,\n      description: 'A unique read-only string that changes whenever the resource is updated.'\n    },\n    type: { type: 'string', readOnly: true, description: 'Connection type.' }\n  },\n  allOf: [\n    {\n      properties: { id: { type: 'string', description: 'Resource ID.' } },\n      description: 'Reference to another subresource.',\n      'x-ms-azure-resource': true\n    }\n  ],\n  description: 'Virtual Appliance Site resource.'\n}\n")),(0,i.kt)("h2",{id:"misc"},"Misc"),(0,i.kt)("p",null,"The resource version is ",(0,i.kt)("inlineCode",{parentName:"p"},"2021-05-01"),"."),(0,i.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/virtualWan.json"},"here"),"."))}d.isMDXComponent=!0}}]);