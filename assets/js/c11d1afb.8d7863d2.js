"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[8959],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return f}});var o=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,o)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,o,r=function(t,e){if(null==t)return{};var a,o,r={},n=Object.keys(t);for(o=0;o<n.length;o++)a=n[o],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(o=0;o<n.length;o++)a=n[o],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=o.createContext({}),c=function(t){var e=o.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=c(t.components);return o.createElement(s.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(t,e){var a=t.components,r=t.mdxType,n=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=c(a),u=r,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||n;return a?o.createElement(f,i(i({ref:e},p),{},{components:a})):o.createElement(f,i({ref:e},p))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var n=a.length,i=new Array(n);i[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[d]="string"==typeof t?t:r,i[1]=l;for(var c=2;c<n;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},67062:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var o=a(87462),r=a(63366),n=(a(67294),a(3905)),i=["components"],l={id:"ddos",title:"TestomatoBot and DDoS protection",sidebar_label:"DDoS protection"},s=void 0,c={unversionedId:"bot/ddos",id:"bot/ddos",title:"TestomatoBot and DDoS protection",description:"What is DDoS (Denial-of-service attack)",source:"@site/docs/bot/02-ddos.md",sourceDirName:"bot",slug:"/bot/ddos",permalink:"/bot/ddos",draft:!1,editUrl:"https://github.com/testomato/help.testomato.com/edit/master/docs/bot/02-ddos.md",tags:[],version:"current",lastUpdatedAt:1618859174,formattedLastUpdatedAt:"Apr 19, 2021",sidebarPosition:2,frontMatter:{id:"ddos",title:"TestomatoBot and DDoS protection",sidebar_label:"DDoS protection"},sidebar:"docs",previous:{title:"About",permalink:"/bot/about"},next:{title:"Introduction",permalink:"/checks/introduction"}},p={},d=[{value:"What is DDoS (Denial-of-service attack)",id:"what-is-ddos-denial-of-service-attack",level:2},{value:"False DDoS attack by Testomato",id:"false-ddos-attack-by-testomato",level:2},{value:"Advanced DDoS Protection by Cloudflare",id:"advanced-ddos-protection-by-cloudflare",level:2},{value:"How to fix that?",id:"how-to-fix-that",level:4},{value:"Getting more information",id:"getting-more-information",level:4}],m={toc:d},u="wrapper";function f(t){var e=t.components,l=(0,r.Z)(t,i);return(0,n.kt)(u,(0,o.Z)({},m,l,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"what-is-ddos-denial-of-service-attack"},"What is DDoS (Denial-of-service attack)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Denial-of-service_attack"},"Denial-of-service attack")," (DoS attack) is a cyber-attack in\nwhich the perpetrator seeks to make a machine or network resource unavailable to its intended users by temporarily\nor indefinitely disrupting services of a host connected to the Internet. Denial of service is typically accomplished\nby flooding the targeted machine or resource with superfluous requests in an ",(0,n.kt)("strong",{parentName:"p"},"attempt to overload systems")," and\nprevent some or all legitimate requests from being fulfilled. DDoS attacks achieve effectiveness by\nutilizing ",(0,n.kt)("strong",{parentName:"p"},"multiple compromised computer")," systems as sources of attack traffic."),(0,n.kt)("h2",{id:"false-ddos-attack-by-testomato"},"False DDoS attack by Testomato"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.testomato.com/bot"},"TestomatoBot")," accesses checked websites very frequently (e.g. every minute) and\naccording to the Project settings ",(0,n.kt)("strong",{parentName:"p"},"TestomatoBot")," try download multiple URLs from same website at once that can be\ntaken as attempt to DDoS attack."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"   Read more information ",(0,n.kt)("a",{parentName:"p",href:"/bot/about"},"about TestomatoBot")," ")),(0,n.kt)("p",null,"All Testomato servers always use same IP addresses, these addresses can by whitelisted on your Firewall. "),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"   Get list of all TestomatoBot IP addresses: ",(0,n.kt)("a",{parentName:"p",href:"https://www.testomato.com/bot"},"https://www.testomato.com/bot"))),(0,n.kt)("h2",{id:"advanced-ddos-protection-by-cloudflare"},"Advanced DDoS Protection by Cloudflare"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.cloudflare.com/"},"Cloudflare")," aims to block bots and crawlers like ",(0,n.kt)("a",{parentName:"p",href:"/bot/about"},"TestomatoBot"),".\nThey assume that ",(0,n.kt)("a",{parentName:"p",href:"/bot/about"},"TestomatoBot")," is used by data scrapers so they are blocking\nit and response by ",(0,n.kt)("a",{parentName:"p",href:"https://www.google.com/search?q=Error+1020+cloudflare"},"Access denied (Error: 1020)"),". "),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(74213).Z,width:"2132",height:"910"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Access denied (Error: 1020)")," indicates that TestomatoBot violated a ",(0,n.kt)("a",{parentName:"p",href:"https://developers.cloudflare.com/firewall/cf-firewall-rules"},"Firewall Rule"),"."),(0,n.kt)("h4",{id:"how-to-fix-that"},"How to fix that?"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Login to ",(0,n.kt)("a",{parentName:"li",href:"https://dash.cloudflare.com/login"},"Cloudflare Dashboard")),(0,n.kt)("li",{parentName:"ol"},"Temporarily pause ",(0,n.kt)("a",{parentName:"li",href:"https://support.cloudflare.com/hc/en-us/articles/203118044#h_8654c523-e31e-4f40-a3c7-0674336a2753"},"Cloudflare on Site")),(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"Firewall")," page"),(0,n.kt)("li",{parentName:"ol"},"Search for the ",(0,n.kt)("strong",{parentName:"li"},"RAY ID")," or ",(0,n.kt)("a",{parentName:"li",href:"https://www.testomato.com/bot"},"Testomato IP addresses")," in the ",(0,n.kt)("strong",{parentName:"li"},"Firewall Events")),(0,n.kt)("li",{parentName:"ol"},"Once we find the exact, the next step is to make changes to the rule to make the website accessible.")),(0,n.kt)("h4",{id:"getting-more-information"},"Getting more information"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.cloudflare.com/learning/security/what-is-a-firewall/"},"What is a Firewall?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/"},"What is a DDoS Attack?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.cloudflare.com/learning/ddos/glossary/web-application-firewall-waf/"},"What is Web Application Firewall (WAF)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.cloudflare.com/learning/bots/what-is-data-scraping/"},"What is Data Scraping?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.cloudflare.com/products/bot-management/"},"Cloudflare Bot Management"))))}f.isMDXComponent=!0},74213:function(t,e,a){e.Z=a.p+"assets/images/error-1020-1fab5ab4bbe968fbabcea8c6b16105c1.png"}}]);