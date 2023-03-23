"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[951],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22961:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=["components"],o={title:"Incident"},p=void 0,u={unversionedId:"api/incident",id:"api/incident",title:"Incident",description:"API Endpoint",source:"@site/docs/api/06-incident.md",sourceDirName:"api",slug:"/api/incident",permalink:"/api/incident",draft:!1,editUrl:"https://github.com/testomato/help.testomato.com/edit/master/docs/api/06-incident.md",tags:[],version:"current",lastUpdatedAt:1665325519,formattedLastUpdatedAt:"Oct 9, 2022",sidebarPosition:6,frontMatter:{title:"Incident"}},c={},d=[{value:"API Endpoint",id:"api-endpoint",level:2},{value:"Request params",id:"request-params",level:2},{value:"Call example",id:"call-example",level:2},{value:"Response",id:"response",level:2}],s={toc:d},m="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"api-endpoint"},"API Endpoint"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="API endpoint"',title:'"API','endpoint"':!0},"GET /api/incident/byInterval?apikey=[key]\n")),(0,l.kt)("h2",{id:"request-params"},"Request params"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Mandatory"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"start")),(0,l.kt)("td",{parentName:"tr",align:null},"Date in ISO 8601"),(0,l.kt)("td",{parentName:"tr",align:null},"required")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"end")),(0,l.kt)("td",{parentName:"tr",align:null},"Date in ISO 8601"),(0,l.kt)("td",{parentName:"tr",align:null},"required")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"projectId")),(0,l.kt)("td",{parentName:"tr",align:null},"Your project ID"),(0,l.kt)("td",{parentName:"tr",align:null},"required")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"apikey")),(0,l.kt)("td",{parentName:"tr",align:null},"An API key unique to each project"),(0,l.kt)("td",{parentName:"tr",align:null},"required")))),(0,l.kt)("h2",{id:"call-example"},"Call example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Example CURL call"',title:'"Example',CURL:!0,'call"':!0},"curl https://www.testomato.com/api/incident/byInterval?&start=2021-06-09T00:00:00.000%2B02:00&end=2021-06-16T23:59:59.999%2B02:00&projectId=45sa648df8887fd9a87f&apikey=123456\n")),(0,l.kt)("h2",{id:"response"},"Response"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example JSON response"',title:'"Example',JSON:!0,'response"':!0},'[\n  {\n    "_id": "5d7783c7466a8b4b038b4573",\n    "created": 1568113605,\n    "status": "new",\n    "reported": true,\n    "testId": "538dd3b27c339158248b468c",\n    "projectId": "50a9f72f14db3be812000233",\n    "testName": "My Projects",\n    "message": "Authentication failure  \u2013 Failed to parse URL",\n    "shorthand": "Authentication failure",\n    "details": "Sorry, we were unable to authenticate to the password protected area (Authentication failure  \u2013 Failed to parse URL).",\n    "severity": 2,\n    "request": null,\n    "result": {\n      "status": null,\n      "httpStatus": null,\n      "baseUrl": null,\n      "contentType": null,\n      "httpHeader": null,\n      "processTime": null,\n      "size": false,\n      "timing": null,\n      "redirects": null\n    },\n    "reportedAt": 1568113607\n  } \n]\n')))}f.isMDXComponent=!0}}]);