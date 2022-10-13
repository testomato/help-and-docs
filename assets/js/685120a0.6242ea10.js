"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[1659],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13466:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],p={title:"Project Response Times"},i=void 0,s={unversionedId:"api/project/project-response-times",id:"api/project/project-response-times",title:"Project Response Times",description:"API Endpoint",source:"@site/docs/api/project/06-project-response-times.md",sourceDirName:"api/project",slug:"/api/project/project-response-times",permalink:"/api/project/project-response-times",draft:!1,editUrl:"https://github.com/testomato/help.testomato.com/edit/master/docs/api/project/06-project-response-times.md",tags:[],version:"current",lastUpdatedAt:1665325519,formattedLastUpdatedAt:"Oct 9, 2022",sidebarPosition:6,frontMatter:{title:"Project Response Times"}},c={},u=[{value:"API Endpoint",id:"api-endpoint",level:2},{value:"Request params",id:"request-params",level:2},{value:"Call example",id:"call-example",level:2},{value:"Response",id:"response",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"api-endpoint"},"API Endpoint"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"GET /api/project/[id]/responseTimes?start=[date]&time=[date]apikey=[key]\n")),(0,o.kt)("h2",{id:"request-params"},"Request params"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Mandatory"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"id")),(0,o.kt)("td",{parentName:"tr",align:null},"Your project ID"),(0,o.kt)("td",{parentName:"tr",align:null},"required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"apikey")),(0,o.kt)("td",{parentName:"tr",align:null},"An API key unique to each project"),(0,o.kt)("td",{parentName:"tr",align:null},"required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"start")),(0,o.kt)("td",{parentName:"tr",align:null},"Date in ISO 8601"),(0,o.kt)("td",{parentName:"tr",align:null},"required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"end")),(0,o.kt)("td",{parentName:"tr",align:null},"Date in ISO 8601"),(0,o.kt)("td",{parentName:"tr",align:null},"required")))),(0,o.kt)("h2",{id:"call-example"},"Call example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Example CURL call"',title:'"Example',CURL:!0,'call"':!0},'curl "https://www.testomato.com/api/project/5e95ddf7a39e5a44428b4581/responseTimes?apikey=4PJAOwTK&start=2020-04-01T00:00:00.000+02:00&end=2020-04-30T23:59:59.999+02:00"\n')),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example JSON response"',title:'"Example',JSON:!0,'response"':!0},'[\n    [\n        "Time",\n        "DNS Lookup",\n        "Initial connection",\n        "SSL",\n        "Request",\n        "Waiting",\n        "Content download",\n        "Total"\n    ],\n    [ 1586880000, 0.1, 1, 5.8, 0, 31.1, 3.1, 42.1],\n    [ 1586885000, 0.1, 1, 5.9, 0, 32, 3, 42.3 ],\n    [ 1586890000, 0, 0.9, 5.8, 0, 33.6, 3.1, 44.3]\n    // ...\n]\n')))}d.isMDXComponent=!0}}]);