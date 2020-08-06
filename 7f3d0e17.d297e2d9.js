(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{72:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(1),o=r(6),a=(r(0),r(91)),c={id:"dashboard",title:"Testomato Dashboard",sidebar_label:"Dashboard"},i={unversionedId:"dashboard",id:"dashboard",isDocsHomePage:!1,title:"Testomato Dashboard",description:"Dashboard is meant to help you get a basic overview of what's",source:"@site/docs/dashboard.md",permalink:"/dashboard",editUrl:"https://github.com/testomato/help.testomato.com/edit/master/docs/dashboard.md",lastUpdatedAt:1587479253,sidebar_label:"Dashboard",sidebar:"docs",previous:{title:"Introduction",permalink:"/introduction"},next:{title:"Project",permalink:"/project"}},l=[{value:"Check colors",id:"check-colors",children:[]},{value:"Compact mode",id:"compact-mode",children:[]},{value:"Open selected Project",id:"open-selected-project",children:[]}],b={rightToc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Dashboard")," is meant to help you get a basic overview of what's\ngoing on in your projects in a quick way."),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/dashboard.png",alt:"Dashboard"}))),Object(a.b)("p",null,"When you sign in to Testomato, we want you to be able to know if there\nare problems the minute you see your dashboard. That's why boxes will\nchange color according to the status of each check."),Object(a.b)("h2",{id:"check-colors"},"Check colors"),Object(a.b)("p",null,"There are only ",Object(a.b)("strong",{parentName:"p"},"4 possible colors")," for check boxes:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Green"),": This page passed all checks."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Red"),": This page failed some checks."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Orange"),": This page timed out."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Gray"),": This page has not been configured yet, has been ",Object(a.b)("em",{parentName:"li"},"turned\noff"),", or the results are not available.")),Object(a.b)("h2",{id:"compact-mode"},"Compact mode"),Object(a.b)("p",null,"There is another mode called ",Object(a.b)("em",{parentName:"p"},"compact"),", this mode is useful for long projects."),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/dashboard-compact.png",alt:"Dashboard Compact"}))),Object(a.b)("h2",{id:"open-selected-project"},"Open selected Project"),Object(a.b)("p",null,"By clicking on ",Object(a.b)("strong",{parentName:"p"},"Project Name")," or ",Object(a.b)("strong",{parentName:"p"},"Checks")," button."),Object(a.b)("p",null,Object(a.b)("img",Object(n.a)({parentName:"p"},{src:"/img/open-project.png",alt:null}))))}p.isMDXComponent=!0},91:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var b=o.a.createContext({}),p=function(e){var t=o.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},s=function(e){var t=p(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(r),u=n,m=s["".concat(c,".").concat(u)]||s[u]||d[u]||a;return r?o.a.createElement(m,i({ref:t},b,{components:r})):o.a.createElement(m,i({ref:t},b))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var b=2;b<a;b++)c[b]=r[b];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);