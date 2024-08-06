"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[7477],{16421:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>a,toc:()=>o});var s=r(74848),n=r(28453);const d={title:"Starting Project"},c=void 0,a={id:"api/project/project-start",title:"Starting Project",description:"API Endpoint",source:"@site/docs/api/project/02-project-start.md",sourceDirName:"api/project",slug:"/api/project/project-start",permalink:"/api/project/project-start",draft:!1,unlisted:!1,editUrl:"https://github.com/testomato/help.testomato.com/edit/master/docs/api/project/02-project-start.md",tags:[],version:"current",lastUpdatedAt:1665325519e3,sidebarPosition:2,frontMatter:{title:"Starting Project"}},i={},o=[{value:"API Endpoint",id:"api-endpoint",level:2},{value:"Request params",id:"request-params",level:2},{value:"Call example",id:"call-example",level:2},{value:"Response",id:"response",level:2},{value:"Response Parameters",id:"response-parameters",level:3}];function l(e){const t={code:"code",h2:"h2",h3:"h3",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"api-endpoint",children:"API Endpoint"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"GET /api/project/[id]/start?apikey=[key]\n"})}),"\n",(0,s.jsx)(t.h2,{id:"request-params",children:"Request params"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Mandatory"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"id"})}),(0,s.jsx)(t.td,{children:"Your project ID"}),(0,s.jsx)(t.td,{children:"required"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"apikey"})}),(0,s.jsx)(t.td,{children:"An API key unique to each project"}),(0,s.jsx)(t.td,{children:"required"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"call-example",children:"Call example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",metastring:'title="Example CURL call"',children:'curl "https://www.testomato.com/api/project/5e95ddf7a39e5a44428b4581/start?apikey=4PJAOwTK"\n'})}),"\n",(0,s.jsx)(t.h2,{id:"response",children:"Response"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",metastring:'title="Example JSON response"',children:'{\n\t"projectId": "5e95ddf7a39e5a44428b4581",\n\t"jobId": "5e9602e7a39e5a46428b457f",\n\t"start": "ok",\n\t"results": "https:\\/\\/www.testomato.com\\/api\\/project\\/5e95ddf7a39e5a44428b4581\\/job\\/5e9602e7a39e5a46428b457f\\/results?apikey=4PJAOwTK"\n}\n'})}),"\n",(0,s.jsx)(t.h3,{id:"response-parameters",children:"Response Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"projectId"})}),(0,s.jsx)(t.td,{children:"A unique project ID"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"jobId"})}),(0,s.jsx)(t.td,{children:"A unique ID for each project job"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"start"})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.code,{children:"ok"})," means your tests have successfully started"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"results"})}),(0,s.jsx)(t.td,{children:"The URL where you can view your results"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>c,x:()=>a});var s=r(96540);const n={},d=s.createContext(n);function c(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);