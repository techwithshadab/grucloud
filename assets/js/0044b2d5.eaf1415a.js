"use strict";(self.webpackChunkgrucloud_doc=self.webpackChunkgrucloud_doc||[]).push([[6671],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||p;return t?r.createElement(y,o(o({ref:n},c),{},{components:t})):r.createElement(y,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,o=new Array(p);o[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<p;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8319:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=t(7462),a=t(3366),p=(t(7294),t(3905)),o=["components"],i={id:"GraphqlApi",title:"GraphqlApi"},l=void 0,s={unversionedId:"aws/resources/AppSync/GraphqlApi",id:"aws/resources/AppSync/GraphqlApi",isDocsHomePage:!1,title:"GraphqlApi",description:"Manages an AppSync GraphqlApi.",source:"@site/docs/aws/resources/AppSync/GraphqlApi.md",sourceDirName:"aws/resources/AppSync",slug:"/aws/resources/AppSync/GraphqlApi",permalink:"/docs/aws/resources/AppSync/GraphqlApi",tags:[],version:"current",frontMatter:{id:"GraphqlApi",title:"GraphqlApi"},sidebar:"docs",previous:{title:"DataSource",permalink:"/docs/aws/resources/AppSync/DataSource"},next:{title:"Resolver",permalink:"/docs/aws/resources/AppSync/Resolver"}},c=[{value:"Sample code",id:"sample-code",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Used By",id:"used-by",children:[],level:2},{value:"Full Examples",id:"full-examples",children:[],level:2},{value:"List",id:"list",children:[],level:2}],u={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Manages an ",(0,p.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/appsync/home?#/apis"},"AppSync GraphqlApi"),"."),(0,p.kt)("h2",{id:"sample-code"},"Sample code"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},'provider.AppSync.makeGraphqlApi({\n  name: "notes-api",\n  properties: ({ config }) => ({\n    authenticationType: "API_KEY",\n    xrayEnabled: true,\n    schemaFile: "my-api.graphql",\n    apiKeys: [{ description: "Graphql Api Keys" }],\n  }),\n});\n')),(0,p.kt)("h2",{id:"properties"},"Properties"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-appsync/interfaces/creategraphqlapicommandinput.html"},"create properties"))),(0,p.kt)("h2",{id:"used-by"},"Used By"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/docs/aws/resources/AppSync/Resolver"},"Resolver")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/docs/aws/resources/AppSync/DataSource"},"Data Source"))),(0,p.kt)("h2",{id:"full-examples"},"Full Examples"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/tree/main/examples/aws/appSync/graphql"},"Simple example"))),(0,p.kt)("h2",{id:"list"},"List"),(0,p.kt)("p",null,"The grpahql api can be filtered with the ",(0,p.kt)("em",{parentName:"p"},"GraphqlApi")," type:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"gc l -t GraphqlApi\n")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-txt"},'Listing resources on 1 provider: aws\n\u2713 aws\n  \u2713 Initialising\n  \u2713 Listing 1/1\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 1 AppSync::GraphqlApi from aws                                                    \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 name: cdk-notes-appsync-api                                                       \u2502\n\u2502 managedByUs: Yes                                                                  \u2502\n\u2502 live:                                                                             \u2502\n\u2502   name: cdk-notes-appsync-api                                                     \u2502\n\u2502   apiId: memv4evddfe6lotdew4gewoyzm                                               \u2502\n\u2502   authenticationType: API_KEY                                                     \u2502\n\u2502   arn: arn:aws:appsync:eu-west-2:840541460064:apis/memv4evddfe6lotdew4gewoyzm     \u2502\n\u2502   uris:                                                                           \u2502\n\u2502     REALTIME: wss://f3zefikzkfgx3n3tzaj7wcr2aq.appsync-realtime-api.eu-west-2.am\u2026 \u2502\n\u2502     GRAPHQL: https://f3zefikzkfgx3n3tzaj7wcr2aq.appsync-api.eu-west-2.amazonaws.\u2026 \u2502\n\u2502   tags:                                                                           \u2502\n\u2502     gc-managed-by: grucloud                                                       \u2502\n\u2502     gc-project-name: aws-appsync-graphql                                          \u2502\n\u2502     gc-data-source-lambdaDatasource: lambdaDatasource                             \u2502\n\u2502     gc-stage: dev                                                                 \u2502\n\u2502     gc-created-by-provider: aws                                                   \u2502\n\u2502     Name: cdk-notes-appsync-api                                                   \u2502\n\u2502   xrayEnabled: true                                                               \u2502\n\u2502   wafWebAclArn: null                                                              \u2502\n\u2502   schema: schema {                                                                \u2502\n\u2502   query: Query                                                                    \u2502\n\u2502   mutation: Mutation                                                              \u2502\n\u2502   subscription: Subscription                                                      \u2502\n\u2502 }                                                                                 \u2502\n\u2502                                                                                   \u2502\n\u2502 type Mutation {                                                                   \u2502\n\u2502   createNote(note: NoteInput!): Note                                              \u2502\n\u2502   deleteNote(noteId: String!): String                                             \u2502\n\u2502   updateNote(note: UpdateNoteInput!): Note                                        \u2502\n\u2502 }                                                                                 \u2502\n\u2502                                                                                   \u2502\n\u2502 type Note {                                                                       \u2502\n\u2502   completed: Boolean!                                                             \u2502\n\u2502   id: ID!                                                                         \u2502\n\u2502   name: String!                                                                   \u2502\n\u2502   title: String                                                                   \u2502\n\u2502 }                                                                                 \u2502\n\u2502                                                                                   \u2502\n\u2502 type Query {                                                                      \u2502\n\u2502   getNoteById(noteId: String!): Note                                              \u2502\n\u2502   listNotes: [Note]                                                               \u2502\n\u2502 }                                                                                 \u2502\n\u2502                                                                                   \u2502\n\u2502 type Subscription {                                                               \u2502\n\u2502   onCreateNote: Note @aws_subscribe(mutations : ["createNote"])                   \u2502\n\u2502   onDeleteNote: String @aws_subscribe(mutations : ["deleteNote"])                 \u2502\n\u2502   onUpdateNote: Note @aws_subscribe(mutations : ["updateNote"])                   \u2502\n\u2502 }                                                                                 \u2502\n\u2502                                                                                   \u2502\n\u2502 input NoteInput {                                                                 \u2502\n\u2502   completed: Boolean!                                                             \u2502\n\u2502   id: ID!                                                                         \u2502\n\u2502   name: String!                                                                   \u2502\n\u2502 }                                                                                 \u2502\n\u2502                                                                                   \u2502\n\u2502 input UpdateNoteInput {                                                           \u2502\n\u2502   completed: Boolean                                                              \u2502\n\u2502   id: ID!                                                                         \u2502\n\u2502   name: String                                                                    \u2502\n\u2502 }                                                                                 \u2502\n\u2502                                                                                   \u2502\n\u2502   apiKeys:                                                                        \u2502\n\u2502     - id: da2-xohuctlwfnhsxeu5gesxqkfl7e                                          \u2502\n\u2502       description: Graphql Api Keys                                               \u2502\n\u2502       expires: 1635004800                                                         \u2502\n\u2502       deletes: 1640188800                                                         \u2502\n\u2502                                                                                   \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nList Summary:\nProvider: aws\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aws                                                                              \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 AppSync::GraphqlApi \u2502 cdk-notes-appsync-api                                      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n1 resource, 1 type, 1 provider\nCommand "gc l -t GraphqlApi" executed in 5s\n')))}d.isMDXComponent=!0}}]);