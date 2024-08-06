"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[5412],{1635:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>j,contentTitle:()=>y,default:()=>A,frontMatter:()=>k,metadata:()=>f,toc:()=>b});var s=t(74848),a=t(28453),n=t(91366),l=t.n(n),r=(t(6050),t(57742)),o=t.n(r),d=(t(67792),t(27362)),p=t.n(d),c=(t(36683),t(81124),t(60674)),m=t.n(c),h=t(23397),u=t.n(h),x=(t(26651),t(51107)),g=(t(77675),t(19365));const k={id:"get-api-token",title:"Get API token",description:"Generate API Token",sidebar_label:"Get API token",hide_title:!0,hide_table_of_contents:!0,api:"eJyNVW1z4jYQ/iuqvtxlSjDJXTJzfGqaS1KTISGBXNoC0whbxgq2pEoyxsfw37srE17CtVM+GHn9rLTaffbZJVWaG+aEkmFM2/SGO3LRC4lTMy5pg8bcRkZo/O6/SgRzDxmsIY5NLW0P6UXhUi6diABAxw1q+N8Ft+5XFVe0vaSRkg4+45JpnSEMNg1eLe68pDZKec5wpQ2G5AS3+AZGkeHCVZpDCNYZIacHkT1ZbkiNXTWoZtaWysT/028DB1e+0D/2SliRQfT05xOSqsIc7HS10KJOJKm9muSZk1gRqRwxPFJ5zmVMCgufSKbgwTcetjGSwhFhCctKVlliWQJxOUXWSSSMSF5uK9McyZG8iCKuHWBzTuYsAxxhlvR+65FhDDVwAuy5ikVSkaSQER40/pg6p207CMqybOpUNyV3Qc5kwbKAy+DNr1n7IeJoJOnK/7CkVkO0dWVOWy38289Cv4CgrE2KLKvIdE2XmDBv3bBqhwuOL1ygMybeseB9AfiC5TpDE6866eQmEveiEz59D0/uRGhD+XgWXYbn4Uz//u2y86UJoO/xcwigcNF97bbuBn98uv86K0NRikl+7f7se/Cc3XyePt58ydDOnq9b4ata3A2uTsHnrPs1rJKHZj/JbhflY6ff5be316cPg89Jqbu8k3w6793PzqvOt79Y/AAMOovoOk85d6nCdtLKOop8dCm8BWy3RRoUuDfnBptnSQsDLKdv1XFQc5Uzp5rAm4BpcUC3wRuCrsa4U1QY4ao+5q8uz4UWdYce1GiQcrJx37YyiZgkE07UxEE1oGiJUTmBgMnQd0nPqERkfJ9C+4EWgAt0jTsiI6kMiQVw3wEZXGpUMU39hnjmpAJSv/Tu+4OXDcstdgjE9IJX3svWC5kLCy0yksM9iRp/9NApd8fwf+xtRySBg3NlOBESlrnvMd8y+9f2aOhIuGHneUBq8m3v91q6plDBEXiizNWExI9YOp9oeJ9wZjiqQb249seBHTakSAXUt8etEl690XijbFuKb1Vrl/Z6R3NgP7yR7w/hfDfs3eiAJWFCKlWQUhVZTDIx45hdzUBdI6FRyIX0BUkKV0C6Yj7nmdIgVI6ohMCRI2kUi3OmGwTCZhYVTX5wyBObVj+BxH2AjdXcb5xCCvA8Q2wxnUJgKG3tkbSF1sq4X/bIUieVm9zeJ31oBBHxnQY45JaHHqvk2K7BDYrNU9/zpNlqttbCwiK3l94fHe5Lg80J0odgyXwx/3P67YywfxmENUN2FA0O8X29XCvAkLJ3QzJFgQD7cjmB5D6ZbLVCM/DFwNQcwnLOjGATrPVwDPtBjmPgG0rGjAOEXtZBHQ/wdITDIADzwYxdNd486rmxg92NeLyjXticyOz1BIeZgGjDSjDis01hoXx6vOR425JmTE4LNkVsfTL+/gHLn/Bl",sidebar_class_name:"post api-method",info_path:"api/testomato-api",custom_edit_url:null},y=void 0,f={id:"api/get-api-token",title:"Get API token",description:"Generate API Token",source:"@site/docs/api/get-api-token.api.mdx",sourceDirName:"api",slug:"/api/get-api-token",permalink:"/api/get-api-token",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",lastUpdatedAt:1722945166e3,frontMatter:{id:"get-api-token",title:"Get API token",description:"Generate API Token",sidebar_label:"Get API token",hide_title:!0,hide_table_of_contents:!0,api:"eJyNVW1z4jYQ/iuqvtxlSjDJXTJzfGqaS1KTISGBXNoC0whbxgq2pEoyxsfw37srE17CtVM+GHn9rLTaffbZJVWaG+aEkmFM2/SGO3LRC4lTMy5pg8bcRkZo/O6/SgRzDxmsIY5NLW0P6UXhUi6diABAxw1q+N8Ft+5XFVe0vaSRkg4+45JpnSEMNg1eLe68pDZKec5wpQ2G5AS3+AZGkeHCVZpDCNYZIacHkT1ZbkiNXTWoZtaWysT/028DB1e+0D/2SliRQfT05xOSqsIc7HS10KJOJKm9muSZk1gRqRwxPFJ5zmVMCgufSKbgwTcetjGSwhFhCctKVlliWQJxOUXWSSSMSF5uK9McyZG8iCKuHWBzTuYsAxxhlvR+65FhDDVwAuy5ikVSkaSQER40/pg6p207CMqybOpUNyV3Qc5kwbKAy+DNr1n7IeJoJOnK/7CkVkO0dWVOWy38289Cv4CgrE2KLKvIdE2XmDBv3bBqhwuOL1ygMybeseB9AfiC5TpDE6866eQmEveiEz59D0/uRGhD+XgWXYbn4Uz//u2y86UJoO/xcwigcNF97bbuBn98uv86K0NRikl+7f7se/Cc3XyePt58ydDOnq9b4ata3A2uTsHnrPs1rJKHZj/JbhflY6ff5be316cPg89Jqbu8k3w6793PzqvOt79Y/AAMOovoOk85d6nCdtLKOop8dCm8BWy3RRoUuDfnBptnSQsDLKdv1XFQc5Uzp5rAm4BpcUC3wRuCrsa4U1QY4ao+5q8uz4UWdYce1GiQcrJx37YyiZgkE07UxEE1oGiJUTmBgMnQd0nPqERkfJ9C+4EWgAt0jTsiI6kMiQVw3wEZXGpUMU39hnjmpAJSv/Tu+4OXDcstdgjE9IJX3svWC5kLCy0yksM9iRp/9NApd8fwf+xtRySBg3NlOBESlrnvMd8y+9f2aOhIuGHneUBq8m3v91q6plDBEXiizNWExI9YOp9oeJ9wZjiqQb249seBHTakSAXUt8etEl690XijbFuKb1Vrl/Z6R3NgP7yR7w/hfDfs3eiAJWFCKlWQUhVZTDIx45hdzUBdI6FRyIX0BUkKV0C6Yj7nmdIgVI6ohMCRI2kUi3OmGwTCZhYVTX5wyBObVj+BxH2AjdXcb5xCCvA8Q2wxnUJgKG3tkbSF1sq4X/bIUieVm9zeJ31oBBHxnQY45JaHHqvk2K7BDYrNU9/zpNlqttbCwiK3l94fHe5Lg80J0odgyXwx/3P67YywfxmENUN2FA0O8X29XCvAkLJ3QzJFgQD7cjmB5D6ZbLVCM/DFwNQcwnLOjGATrPVwDPtBjmPgG0rGjAOEXtZBHQ/wdITDIADzwYxdNd486rmxg92NeLyjXticyOz1BIeZgGjDSjDis01hoXx6vOR425JmTE4LNkVsfTL+/gHLn/Bl",sidebar_class_name:"post api-method",info_path:"api/testomato-api",custom_edit_url:null},sidebar:"docs",previous:{title:"Introduction",permalink:"/api/testomato-api"},next:{title:"Verify API token",permalink:"/api/verify-api-token"}},j={},b=[];function w(e){const i={p:"p",...(0,a.R)(),...e.components},{Details:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(x.default,{as:"h1",className:"openapi__heading",children:"Get API token"}),"\n",(0,s.jsx)(o(),{method:"post",path:"/authenticate"}),"\n",(0,s.jsx)(i.p,{children:"Generate API Token"}),"\n",(0,s.jsx)(x.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,s.jsx)(p(),{className:"openapi-tabs__mime",children:(0,s.jsx)(g.default,{label:"application/json",value:"application/json-schema",children:(0,s.jsxs)(t,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,s.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:(0,s.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,s.jsx)(i.p,{children:"Body"})})}),(0,s.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,s.jsx)(m(),{collapsible:!1,name:"email",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"User email"}}),(0,s.jsx)(m(),{collapsible:!1,name:"password",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"User password"}}),(0,s.jsx)(m(),{collapsible:!1,name:"exp",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:"+1 hour",description:"Expiration string. We do not recommend using long expirations,\nit is always safer to request a new API token.\n\nAccept same values as PHP [datetime modify function](https://www.php.net/manual/en/datetime.modify.php)\n"}})]})]})})}),"\n",(0,s.jsx)("div",{children:(0,s.jsx)("div",{children:(0,s.jsx)(l(),{label:void 0,id:void 0,children:(0,s.jsxs)(g.default,{label:"200",value:"200",children:[(0,s.jsx)("div",{children:(0,s.jsx)(i.p,{children:"Successfully generated access token"})}),(0,s.jsx)("div",{children:(0,s.jsx)(p(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,s.jsx)(g.default,{label:"text/plain",value:"text/plain",children:(0,s.jsx)(u(),{className:"openapi-tabs__schema",children:(0,s.jsx)(g.default,{label:"Schema",value:"Schema",children:(0,s.jsxs)(t,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,s.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,s.jsx)("strong",{children:(0,s.jsx)(i.p,{children:"Schema"})})}),(0,s.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,s.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,s.jsx)(i.p,{children:"string"})})})]})})})})})})]})})})})]})}function A(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(w,{...e})}):w(e)}}}]);