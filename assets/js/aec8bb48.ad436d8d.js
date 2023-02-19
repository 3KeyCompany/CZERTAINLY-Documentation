"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[668],{99342:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return C},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return k}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=n(92814),l=n(51436),c=["components"],s={},p="Register Connectors",m={unversionedId:"quick-start/certificate-management/register-connectors",id:"quick-start/certificate-management/register-connectors",title:"Register Connectors",description:"In order to start using the platform with any specific technology, we must register the Connector.",source:"@site/docs/05-quick-start/03-certificate-management/01-register-connectors.mdx",sourceDirName:"05-quick-start/03-certificate-management",slug:"/quick-start/certificate-management/register-connectors",permalink:"/docs/quick-start/certificate-management/register-connectors",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/quick-start/overview"},next:{title:"Create Credential",permalink:"/docs/quick-start/certificate-management/create-credential"}},d={},k=[{value:"Register <code>Connectors</code> using the API",id:"register-connectors-using-the-api",level:2},{value:"Register <code>Common Credential Provider</code>",id:"register-common-credential-provider",level:3},{value:"Register <code>MS ADCS Connector</code>",id:"register-ms-adcs-connector",level:3},{value:"Register <code>Connectors</code> using the Web Interface",id:"register-connectors-using-the-web-interface",level:2},{value:"Register <code>Common Credential Provider</code>",id:"register-common-credential-provider-1",level:3},{value:"Register <code>MS ADCS Connector</code>",id:"register-ms-adcs-connector-1",level:3}],u={toc:k};function C(e){var t=e.components,n=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"register-connectors"},"Register Connectors"),(0,o.kt)("p",null,"In order to start using the platform with any specific technology, we must register the ",(0,o.kt)("inlineCode",{parentName:"p"},"Connector"),".\nWe need two ",(0,o.kt)("inlineCode",{parentName:"p"},"Connectors"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"for basic ",(0,o.kt)("inlineCode",{parentName:"li"},"Credential")," we use the ",(0,o.kt)("inlineCode",{parentName:"li"},"Common Credential Provider")," implementing ",(0,o.kt)("inlineCode",{parentName:"li"},"Credential Provider")," function group"),(0,o.kt)("li",{parentName:"ul"},"for CA ",(0,o.kt)("inlineCode",{parentName:"li"},"MS ADCS")," we use the ",(0,o.kt)("inlineCode",{parentName:"li"},"MS ADCS Connector")," implementing ",(0,o.kt)("inlineCode",{parentName:"li"},"Authority Provider")," function group")),(0,o.kt)("h2",{id:"register-connectors-using-the-api"},"Register ",(0,o.kt)("inlineCode",{parentName:"h2"},"Connectors")," using the API"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Connectors")," can be registered using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Connector")," API."),(0,o.kt)("h3",{id:"register-common-credential-provider"},"Register ",(0,o.kt)("inlineCode",{parentName:"h3"},"Common Credential Provider")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\\n  --cacert [ca-cert] \\\n  --cert [client-cert] \\\n  --cert-type [type] \\\n  -H "Content-Type: application/json" \\\n  -H "Accept: application/json" \\\n  --data \'\n  {\n    "name": "Common Credential Provider",\n    "url", "https://common-credential-provider-service:8080"",\n    "authType": "none"\n  }\' \\\n  https://[domain]:[port]/api/v1/connectors\n')),(0,o.kt)("p",null,"When there is no error, ",(0,o.kt)("inlineCode",{parentName:"p"},"Connector")," is successfully registered, and its ",(0,o.kt)("inlineCode",{parentName:"p"},"uuid")," is sent back:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "93f74f2d-1bc7-4c15-a33e-0bf773b3955a"\n}\n')),(0,o.kt)("h3",{id:"register-ms-adcs-connector"},"Register ",(0,o.kt)("inlineCode",{parentName:"h3"},"MS ADCS Connector")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\\n  --cacert [ca-cert] \\\n  --cert [client-cert] \\\n  --cert-type [type] \\\n  -H "Content-Type: application/json" \\\n  -H "Accept: application/json" \\\n  --data \'\n  {\n    "name": "MS ADCS Connector",\n    "url", "https://ms-adcs-conector-service:8080"",\n    "authType": "none"\n  }\' \\\n  https://[domain]:[port]/api/v1/connectors\n')),(0,o.kt)("p",null,"When there is no error, ",(0,o.kt)("inlineCode",{parentName:"p"},"Connector")," is successfully registered, and its ",(0,o.kt)("inlineCode",{parentName:"p"},"uuid")," is sent back:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "uuid": "04cb011f-4497-4e45-b4b9-4975db9df0a0"\n}\n')),(0,o.kt)("h2",{id:"register-connectors-using-the-web-interface"},"Register ",(0,o.kt)("inlineCode",{parentName:"h2"},"Connectors")," using the Web Interface"),(0,o.kt)("h3",{id:"register-common-credential-provider-1"},"Register ",(0,o.kt)("inlineCode",{parentName:"h3"},"Common Credential Provider")),(0,o.kt)("p",null,"Follow these steps to register new ",(0,o.kt)("inlineCode",{parentName:"p"},"Common Credential Provider"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Log in to the Administration Interface ",(0,o.kt)("inlineCode",{parentName:"li"},"https://[domain]:[port]/administrator")),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Connectors")," in the left menu"),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Add new connector")," (plus symbol ",(0,o.kt)("span",{style:{color:"#1473b5"}},(0,o.kt)(a.G,{icon:l.r8p,mdxType:"FontAwesomeIcon"})),")"),(0,o.kt)("li",{parentName:"ol"},"Fill the columns with the attributes:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"URL: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://common-credential-provider-service:8080")),(0,o.kt)("li",{parentName:"ul"},"Authentication Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"No Auth")))),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Connect"))),(0,o.kt)("p",null,"Now you can see the details of the connected ",(0,o.kt)("inlineCode",{parentName:"p"},"Connector"),"."),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Fill in the ",(0,o.kt)("inlineCode",{parentName:"li"},"Connector")," name: ",(0,o.kt)("inlineCode",{parentName:"li"},"Common Credential Provider")),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create")," to make the ",(0,o.kt)("inlineCode",{parentName:"li"},"Connector")," available to other components")),(0,o.kt)("p",null,"You have registered ",(0,o.kt)("inlineCode",{parentName:"p"},"Common Credential Provider"),"."),(0,o.kt)("h3",{id:"register-ms-adcs-connector-1"},"Register ",(0,o.kt)("inlineCode",{parentName:"h3"},"MS ADCS Connector")),(0,o.kt)("p",null,"Follow these steps to register new ",(0,o.kt)("inlineCode",{parentName:"p"},"MS ADCS Connector"),". "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Log in to the Administration Interface ",(0,o.kt)("inlineCode",{parentName:"li"},"https://[domain]:[port]/administrator")),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Connectors")," in the left menu"),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Add new connector")," (plus symbol ",(0,o.kt)("span",{style:{color:"#1473b5"}},(0,o.kt)(a.G,{icon:l.r8p,mdxType:"FontAwesomeIcon"})),")"),(0,o.kt)("li",{parentName:"ol"},"Fill the columns with the attributes:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"URL: ",(0,o.kt)("inlineCode",{parentName:"li"},"https://ms-adcs-connector-service:8080")),(0,o.kt)("li",{parentName:"ul"},"Authentication Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"No Auth")))),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Connect"),"  ")),(0,o.kt)("p",null,"Now you can see the details of the connected ",(0,o.kt)("inlineCode",{parentName:"p"},"Connector"),". "),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Fill in the ",(0,o.kt)("inlineCode",{parentName:"li"},"Connector")," name: ",(0,o.kt)("inlineCode",{parentName:"li"},"MS ADCS Connector")),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Create")," to make the ",(0,o.kt)("inlineCode",{parentName:"li"},"Connector")," available to other components")),(0,o.kt)("p",null,"You have registered ",(0,o.kt)("inlineCode",{parentName:"p"},"MS ADCS Connector"),"."))}C.isMDXComponent=!0}}]);