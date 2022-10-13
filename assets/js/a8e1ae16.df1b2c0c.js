"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[4622],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),m=s(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||l[f]||a;return n?r.createElement(d,i(i({ref:e},u),{},{components:n})):r.createElement(d,i({ref:e},u))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var c in e)hasOwnProperty.call(e,c)&&(p[c]=e[c]);p.originalType=t,p.mdxType="string"==typeof t?t:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46247:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return l}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],p={id:"introduction",title:"Testomato REST API",sidebar_label:"Introduction"},c=void 0,s={unversionedId:"api/introduction",id:"api/introduction",title:"Testomato REST API",description:"Testomato REST",source:"@site/docs/api/01-introduction.md",sourceDirName:"api",slug:"/api/introduction",permalink:"/api/introduction",draft:!1,editUrl:"https://github.com/testomato/help.testomato.com/edit/master/docs/api/01-introduction.md",tags:[],version:"current",lastUpdatedAt:1665667103,formattedLastUpdatedAt:"Oct 13, 2022",sidebarPosition:1,frontMatter:{id:"introduction",title:"Testomato REST API",sidebar_label:"Introduction"},sidebar:"docs",previous:{title:"Notifications and alerts",permalink:"/checks/notifications"},next:{title:"Create Project",permalink:"/api/create-project"}},u={},l=[],m={toc:l};function f(t){var e=t.components,n=(0,o.Z)(t,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Testomato ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Representational_state_transfer"},"REST"),"\nAPI provides simple interfaces for all important Testomato functionality. To use a\n",(0,a.kt)("strong",{parentName:"p"},"REST API"),", your application makes an HTTP request and parses the ",(0,a.kt)("strong",{parentName:"p"},"JSON"),"\nformatted response."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Download our ",(0,a.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/testomato/help.testomato.com/master/src/testomato.yaml"},"API documentation")," in ",(0,a.kt)("a",{parentName:"p",href:"https://www.openapis.org/"},"OpenAPI")," format.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/common-responses"},"Common responses")," - common responses"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/api-key"},"Get API key")," - how to get API key")))}f.isMDXComponent=!0}}]);