"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3573],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return g}});var a=r(67294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var i=a.createContext({}),c=function(e){var n=a.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},u=function(e){var n=c(e.components);return a.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),g=t,m=d["".concat(i,".").concat(g)]||d[g]||p[g]||o;return r?a.createElement(m,l(l({ref:n},u),{},{components:r})):a.createElement(m,l({ref:n},u))}));function g(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:t,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},30863:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=r(87462),t=r(63366),o=(r(67294),r(3905)),l=["components"],s={id:"Listener",title:"Listener"},i=void 0,c={unversionedId:"aws/resources/ELBv2/Listener",id:"aws/resources/ELBv2/Listener",isDocsHomePage:!1,title:"Listener",description:"Manage an ELB Listener.",source:"@site/docs/aws/resources/ELBv2/Listener.md",sourceDirName:"aws/resources/ELBv2",slug:"/aws/resources/ELBv2/Listener",permalink:"/docs/aws/resources/ELBv2/Listener",tags:[],version:"current",frontMatter:{id:"Listener",title:"Listener"},sidebar:"docs",previous:{title:"Node Group",permalink:"/docs/aws/resources/EKS/NodeGroup"},next:{title:"Load Balancer",permalink:"/docs/aws/resources/ELBv2/LoadBalancer"}},u=[{value:"Example",id:"example",children:[{value:"Http listener",id:"http-listener",children:[],level:3}],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Source Code",id:"source-code",children:[],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"List",id:"list",children:[],level:2}],p={toc:u};function d(e){var n=e.components,r=(0,t.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Manage an ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html"},"ELB Listener"),"."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("h3",{id:"http-listener"},"Http listener"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'provider.ELBv2.makeListener({\n  properties: ({ config }) => ({\n    Port: 80,\n    Protocol: "HTTP",\n  }),\n  dependencies: ({ resources }) => ({\n    loadBalancer: resources.ELBv2.LoadBalancer["load-balancer"],\n    targetGroup: resources.ELBv2.TargetGroup["target-group-web"],\n  }),\n});\n\nprovider.ELBv2.makeListener({\n  properties: ({ config }) => ({\n    Port: 443,\n    Protocol: "HTTPS",\n  }),\n  dependencies: ({ resources }) => ({\n    loadBalancer: resources.ELBv2.LoadBalancer["load-balancer"],\n    targetGroup: resources.ELBv2.TargetGroup["target-group-rest"],\n    certificate: resources.ACM.Certificate["grucloud.org"],\n  }),\n});\n')),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("p",null,"The list of properties are the parameter of ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/ELBv2.html#createTargetGroup-property"},"createTargetGroup")),(0,o.kt)("h2",{id:"source-code"},"Source Code"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/grucloud/grucloud/blob/main/examples/aws/ELBv2/load-balancer/resources.js"},"Load Balancer"))),(0,o.kt)("h2",{id:"dependencies"},"Dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/ELBv2/LoadBalancer"},"LoadBalancer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/ELBv2/TargetGroup"},"TargetGroup")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/aws/resources/ACM/Certificate"},"Certificate"))),(0,o.kt)("h2",{id:"list"},"List"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"gc l -t Listener\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},'Listing resources on 1 provider: aws\n\u2713 aws\n  \u2713 Initialising\n  \u2713 Listing 8/8\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 2 ELBv2::Listener from aws                                                  \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 name: listener::load-balancer::HTTP::80                                     \u2502\n\u2502 managedByUs: Yes                                                            \u2502\n\u2502 live:                                                                       \u2502\n\u2502   ListenerArn: arn:aws:elasticloadbalancing:us-east-1:840541460064:listene\u2026 \u2502\n\u2502   LoadBalancerArn: arn:aws:elasticloadbalancing:us-east-1:840541460064:loa\u2026 \u2502\n\u2502   Port: 80                                                                  \u2502\n\u2502   Protocol: HTTP                                                            \u2502\n\u2502   Certificates: []                                                          \u2502\n\u2502   DefaultActions:                                                           \u2502\n\u2502     - Type: forward                                                         \u2502\n\u2502       TargetGroupArn: arn:aws:elasticloadbalancing:us-east-1:840541460064:\u2026 \u2502\n\u2502       ForwardConfig:                                                        \u2502\n\u2502         TargetGroups:                                                       \u2502\n\u2502           - TargetGroupArn: arn:aws:elasticloadbalancing:us-east-1:8405414\u2026 \u2502\n\u2502             Weight: 1                                                       \u2502\n\u2502         TargetGroupStickinessConfig:                                        \u2502\n\u2502           Enabled: false                                                    \u2502\n\u2502   AlpnPolicy: []                                                            \u2502\n\u2502   Tags:                                                                     \u2502\n\u2502     - Key: gc-created-by-provider                                           \u2502\n\u2502       Value: aws                                                            \u2502\n\u2502     - Key: gc-managed-by                                                    \u2502\n\u2502       Value: grucloud                                                       \u2502\n\u2502     - Key: gc-project-name                                                  \u2502\n\u2502       Value: @grucloud/example-aws-elbv2-loadbalancer                       \u2502\n\u2502     - Key: gc-stage                                                         \u2502\n\u2502       Value: dev                                                            \u2502\n\u2502     - Key: Name                                                             \u2502\n\u2502       Value: listener::load-balancer::HTTP::80                              \u2502\n\u2502                                                                             \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 name: listener::load-balancer::HTTPS::443                                   \u2502\n\u2502 managedByUs: Yes                                                            \u2502\n\u2502 live:                                                                       \u2502\n\u2502   ListenerArn: arn:aws:elasticloadbalancing:us-east-1:840541460064:listene\u2026 \u2502\n\u2502   LoadBalancerArn: arn:aws:elasticloadbalancing:us-east-1:840541460064:loa\u2026 \u2502\n\u2502   Port: 443                                                                 \u2502\n\u2502   Protocol: HTTPS                                                           \u2502\n\u2502   Certificates:                                                             \u2502\n\u2502     - CertificateArn: arn:aws:acm:us-east-1:840541460064:certificate/bc419\u2026 \u2502\n\u2502   SslPolicy: ELBSecurityPolicy-2016-08                                      \u2502\n\u2502   DefaultActions:                                                           \u2502\n\u2502     - Type: forward                                                         \u2502\n\u2502       TargetGroupArn: arn:aws:elasticloadbalancing:us-east-1:840541460064:\u2026 \u2502\n\u2502       ForwardConfig:                                                        \u2502\n\u2502         TargetGroups:                                                       \u2502\n\u2502           - TargetGroupArn: arn:aws:elasticloadbalancing:us-east-1:8405414\u2026 \u2502\n\u2502             Weight: 1                                                       \u2502\n\u2502         TargetGroupStickinessConfig:                                        \u2502\n\u2502           Enabled: false                                                    \u2502\n\u2502   AlpnPolicy: []                                                            \u2502\n\u2502   Tags:                                                                     \u2502\n\u2502     - Key: gc-created-by-provider                                           \u2502\n\u2502       Value: aws                                                            \u2502\n\u2502     - Key: gc-managed-by                                                    \u2502\n\u2502       Value: grucloud                                                       \u2502\n\u2502     - Key: gc-project-name                                                  \u2502\n\u2502       Value: @grucloud/example-aws-elbv2-loadbalancer                       \u2502\n\u2502     - Key: gc-stage                                                         \u2502\n\u2502       Value: dev                                                            \u2502\n\u2502     - Key: Name                                                             \u2502\n\u2502       Value: listener::load-balancer::HTTPS::443                            \u2502\n\u2502                                                                             \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n\nList Summary:\nProvider: aws\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 aws                                                                        \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 ELBv2::Listener \u2502 listener::load-balancer::HTTP::80                        \u2502\n\u2502                 \u2502 listener::load-balancer::HTTPS::443                      \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n2 resources, 1 type, 1 provider\nCommand "gc l -t Listener" executed in 6s\n')))}d.isMDXComponent=!0}}]);