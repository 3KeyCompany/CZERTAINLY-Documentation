"use strict";(self.webpackChunkczertainly=self.webpackChunkczertainly||[]).push([[355],{3905:function(t,e,r){r.d(e,{Zo:function(){return l},kt:function(){return c}});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=a.createContext({}),b=function(t){var e=a.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):u(u({},e),t)),r},l=function(t){var e=b(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,s=t.parentName,l=o(t,["components","mdxType","originalType","parentName"]),d=b(r),c=n,A=d["".concat(s,".").concat(c)]||d[c]||p[c]||i;return r?a.createElement(A,u(u({ref:e},l),{},{components:r})):a.createElement(A,u({ref:e},l))}));function c(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,u=new Array(i);u[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:n,u[1]=o;for(var b=2;b<i;b++)u[b]=r[b];return a.createElement.apply(null,u)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85162:function(t,e,r){r.d(e,{Z:function(){return u}});var a=r(67294),n=r(86010),i="tabItem_Ymn6";function u(t){var e=t.children,r=t.hidden,u=t.className;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(i,u),hidden:r},e)}},74866:function(t,e,r){r.d(e,{Z:function(){return P}});var a=r(83117),n=r(67294),i=r(86010),u=r(76775),o=r(91980),s=r(67392),b=r(50012);function l(t){return function(t){var e,r;return null!=(e=null==(r=n.Children.map(t,(function(t){if(!t||(0,n.isValidElement)(t)&&(e=t.props)&&"object"==typeof e&&"value"in e)return t;var e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?e:[]}(t).map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes,default:e.default}}))}function p(t){var e=t.values,r=t.children;return(0,n.useMemo)((function(){var t=null!=e?e:l(r);return function(t){var e=(0,s.l)(t,(function(t,e){return t.value===e.value}));if(e.length>0)throw new Error('Docusaurus error: Duplicate values "'+e.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(t),t}),[e,r])}function d(t){var e=t.value;return t.tabValues.some((function(t){return t.value===e}))}function c(t){var e=t.queryString,r=void 0!==e&&e,a=t.groupId,i=(0,u.k6)(),s=function(t){var e=t.queryString,r=void 0!==e&&e,a=t.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:r,groupId:a});return[(0,o._X)(s),(0,n.useCallback)((function(t){if(s){var e=new URLSearchParams(i.location.search);e.set(s,t),i.replace(Object.assign({},i.location,{search:e.toString()}))}}),[s,i])]}function A(t){var e,r,a,i,u=t.defaultValue,o=t.queryString,s=void 0!==o&&o,l=t.groupId,A=p(t),m=(0,n.useState)((function(){return function(t){var e,r=t.defaultValue,a=t.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!d({value:r,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+a.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var n=null!=(e=a.find((function(t){return t.default})))?e:a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:u,tabValues:A})})),f=m[0],C=m[1],y=c({queryString:s,groupId:l}),h=y[0],T=y[1],v=(e=function(t){return t?"docusaurus.tab."+t:null}({groupId:l}.groupId),r=(0,b.Nk)(e),a=r[0],i=r[1],[a,(0,n.useCallback)((function(t){e&&i.set(t)}),[e,i])]),P=v[0],g=v[1],k=function(){var t=null!=h?h:P;return d({value:t,tabValues:A})?t:null}();return(0,n.useLayoutEffect)((function(){k&&C(k)}),[k]),{selectedValue:f,selectValue:(0,n.useCallback)((function(t){if(!d({value:t,tabValues:A}))throw new Error("Can't select invalid tab value="+t);C(t),T(t),g(t)}),[T,g,A]),tabValues:A}}var m=r(12466),f=r(72389),C="tabList__CuJ",y="tabItem_LNqP";function h(t){var e=t.className,r=t.block,u=t.selectedValue,o=t.selectValue,s=t.tabValues,b=[],l=(0,m.o5)().blockElementScrollPositionUntilNextRender,p=function(t){var e=t.currentTarget,r=b.indexOf(e),a=s[r].value;a!==u&&(l(e),o(a))},d=function(t){var e,r=null;switch(t.key){case"Enter":p(t);break;case"ArrowRight":var a,n=b.indexOf(t.currentTarget)+1;r=null!=(a=b[n])?a:b[0];break;case"ArrowLeft":var i,u=b.indexOf(t.currentTarget)-1;r=null!=(i=b[u])?i:b[b.length-1]}null==(e=r)||e.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},e)},s.map((function(t){var e=t.value,r=t.label,o=t.attributes;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:u===e?0:-1,"aria-selected":u===e,key:e,ref:function(t){return b.push(t)},onKeyDown:d,onClick:p},o,{className:(0,i.Z)("tabs__item",y,null==o?void 0:o.className,{"tabs__item--active":u===e})}),null!=r?r:e)})))}function T(t){var e=t.lazy,r=t.children,a=t.selectedValue,i=(Array.isArray(r)?r:[r]).filter(Boolean);if(e){var u=i.find((function(t){return t.props.value===a}));return u?(0,n.cloneElement)(u,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},i.map((function(t,e){return(0,n.cloneElement)(t,{key:e,hidden:t.props.value!==a})})))}function v(t){var e=A(t);return n.createElement("div",{className:(0,i.Z)("tabs-container",C)},n.createElement(h,(0,a.Z)({},t,e)),n.createElement(T,(0,a.Z)({},t,e)))}function P(t){var e=(0,f.Z)();return n.createElement(v,(0,a.Z)({key:String(e)},t))}},8839:function(t,e,r){r.r(e),r.d(e,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return b},metadata:function(){return p},toc:function(){return c}});var a=r(83117),n=r(80102),i=(r(67294),r(3905)),u=r(74866),o=r(85162),s=["components"],b={},l="Examples",p={unversionedId:"contributors/attributes/examples",id:"contributors/attributes/examples",title:"Examples",description:"You can find here various examples of how to create and use attributes in different programming languages.",source:"@site/docs/60-contributors/10-attributes/13-examples.mdx",sourceDirName:"60-contributors/10-attributes",slug:"/contributors/attributes/examples",permalink:"/docs/contributors/attributes/examples",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Attributes",permalink:"/docs/contributors/attributes/attributes"},next:{title:"Database control",permalink:"/docs/contributors/database"}},d={},c=[{value:"Create <code>DataAttribute</code>",id:"create-dataattribute",level:2},{value:"Create <code>DataAttribute</code> with <code>AttributeCallback</code>",id:"create-dataattribute-with-attributecallback",level:2},{value:"Create <code>DataAttribute</code> with <code>STRING</code> content",id:"create-dataattribute-with-string-content",level:2},{value:"Create <code>DataAttribute</code> with <code>REGEXP</code> constraint",id:"create-dataattribute-with-regexp-constraint",level:2},{value:"Create <code>InfoAttribute</code> with <code>TEXT</code> content",id:"create-infoattribute-with-text-content",level:2},{value:"Create <code>GroupAttribute</code> with <code>INFO</code> and <code>DATA</code> attributes",id:"create-groupattribute-with-info-and-data-attributes",level:2},{value:"Create <code>MetadataAttribute</code> with <code>STRING</code> content",id:"create-metadataattribute-with-string-content",level:2},{value:"Create <code>CustomAttribute</code>",id:"create-customattribute",level:2}],A={toc:c};function m(t){var e=t.components,r=(0,n.Z)(t,s);return(0,i.kt)("wrapper",(0,a.Z)({},A,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"examples"},"Examples"),(0,i.kt)("p",null,"You can find here various examples of how to create and use attributes in different programming languages."),(0,i.kt)("h2",{id:"create-dataattribute"},"Create ",(0,i.kt)("inlineCode",{parentName:"h2"},"DataAttribute")),(0,i.kt)("p",null,"This example shows how to create ",(0,i.kt)("inlineCode",{parentName:"p"},"DataAttribute")," which is the attribute of type ",(0,i.kt)("inlineCode",{parentName:"p"},"DATA"),"."),(0,i.kt)(u.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Create DataAttribute\nDataAttribute dataAttribute = new DataAttribute();\ndataAttribute.setUuid("42323bd4-7ac6-11ed-a1eb-0242ac120002");\ndataAttribute.setName("myAttribute");\ndataAttribute.setContentType(AttributeContentType.STRING);\ndataAttribute.setType(AttributeType.DATA);\ndataAttribute.setDescription("This is my attribute");\n\n// Create DataAttributeProperties\nDataAttributeProperties dataAttributeProperties = new DataAttributeProperties();\ndataAttributeProperties.setRequired(true);\ndataAttributeProperties.setReadOnly(false);\ndataAttributeProperties.setVisible(true);\ndataAttributeProperties.setLabel("My Attribute");\ndataAttributeProperties.setMultiSelect(false);\ndataAttributeProperties.setGroup("My Group");\ndataAttributeProperties.setList(false);\n\n// Add DataAttributeProperties to DataAttribute\ndataAttribute.setProperties(dataAttributeProperties);\n')))),(0,i.kt)("h2",{id:"create-dataattribute-with-attributecallback"},"Create ",(0,i.kt)("inlineCode",{parentName:"h2"},"DataAttribute")," with ",(0,i.kt)("inlineCode",{parentName:"h2"},"AttributeCallback")),(0,i.kt)("p",null,"This example shows how to create ",(0,i.kt)("inlineCode",{parentName:"p"},"DataAttribute")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"AttributeCallback"),"."),(0,i.kt)(u.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Create DataAttribute\nDataAttribute dataAttribute = new DataAttribute();\ndataAttribute.setUuid("42323bd4-7ac6-11ed-a1eb-0242ac120002");\ndataAttribute.setName("myAttribute");\ndataAttribute.setType(AttributeType.DATA);\ndataAttribute.setContentType(AttributeContentType.STRING);\ndataAttribute.setDescription("This is my attribute");\n\n// Create DataAttributeProperties\nDataAttributeProperties dataAttributeProperties = new DataAttributeProperties();\ndataAttributeProperties.setRequired(true);\ndataAttributeProperties.setReadOnly(false);\ndataAttributeProperties.setVisible(true);\ndataAttributeProperties.setLabel("My Attribute");\ndataAttributeProperties.setMultiSelect(false);\ndataAttributeProperties.setGroup("My Group");\ndataAttributeProperties.setList(false);\n\n// Add DataAttributeProperties to DataAttribute\ndataAttribute.setProperties(dataAttributeProperties);\n\n// Create AttributeCallback\nAttributeCallback attributeCallback = new AttributeCallback();\nattributeCallback.setCallbackContext("/api/test");\nattributeCallback.setCallbackMethod("GET");\nSet<AttributeCallbackMapping> mappings = new HashSet<>();\nmappings.add(new AttributeCallbackMapping(\n        "credentialKind",\n        AttributeValueTarget.PATH_VARIABLE,\n        "SoftKeyStore"));\nlistCredentialCallback.setMappings(mappings);\n\n// Add AttributeCallback to DataAttribute\ndataAttribute.setAttributeCallback(listCredentialCallback);\n')))),(0,i.kt)("h2",{id:"create-dataattribute-with-string-content"},"Create ",(0,i.kt)("inlineCode",{parentName:"h2"},"DataAttribute")," with ",(0,i.kt)("inlineCode",{parentName:"h2"},"STRING")," content"),(0,i.kt)("p",null,"This example shows how to create ",(0,i.kt)("inlineCode",{parentName:"p"},"DataAttribute")," with content of type ",(0,i.kt)("inlineCode",{parentName:"p"},"STRING"),"."),(0,i.kt)(u.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Cretae DataAttribute\nDataAttribute dataAttribute = new DataAttribute();\ndataAttribute.setUuid("42323bd4-7ac6-11ed-a1eb-0242ac120002");\ndataAttribute.setName("myAttribute");\ndataAttribute.setType(AttributeType.DATA);\ndataAttribute.setContentType(AttributeContentType.STRING);\ndataAttribute.setDescription("This is my attribute");\n\n// Create DataAttributeProperties\nDataAttributeProperties dataAttributeProperties = new DataAttributeProperties();\ndataAttributeProperties.setRequired(true);\ndataAttributeProperties.setReadOnly(false);\ndataAttributeProperties.setVisible(true);\ndataAttributeProperties.setLabel("My Attribute");\ndataAttributeProperties.setMultiSelect(false);\ndataAttributeProperties.setGroup("My Group");\ndataAttributeProperties.setList(true);\n\n// Add DataAttributeProperties to DataAttribute\ndataAttribute.setProperties(dataAttributeProperties);\n\n// Create StringAttributeContent\nList<StringAttributeContent> content = new ArrayList<>();\ncontent.add(new StringAttributeContent("sampleReference1", "sampleData1"));\ncontent.add(new StringAttributeContent("sampleReference2", "sampleData2"));\ncontent.add(new StringAttributeContent("sampleReference3", "sampleData3"));\n\n// Add StringAttributeContent to DataAttribute\ndataAttribute.setContent(content);\n')))),(0,i.kt)("h2",{id:"create-dataattribute-with-regexp-constraint"},"Create ",(0,i.kt)("inlineCode",{parentName:"h2"},"DataAttribute")," with ",(0,i.kt)("inlineCode",{parentName:"h2"},"REGEXP")," constraint"),(0,i.kt)("p",null,"This example shows how to create ",(0,i.kt)("inlineCode",{parentName:"p"},"DataAttribute")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"RegExpAttributeConstraint")," for validation of the content."),(0,i.kt)(u.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Create DataAttribute\nDataAttribute dataAttribute = new DataAttribute();\ndataAttribute.setUuid("42323bd4-7ac6-11ed-a1eb-0242ac120002");\ndataAttribute.setName("myAttribute");\ndataAttribute.setType(AttributeType.DATA);\ndataAttribute.setContentType(AttributeContentType.STRING);\ndataAttribute.setDescription("This is my attribute");\n\n// Create DataAttributeProperties\nDataAttributeProperties dataAttributeProperties = new DataAttributeProperties();\ndataAttributeProperties.setRequired(true);\ndataAttributeProperties.setReadOnly(false);\ndataAttributeProperties.setVisible(true);\ndataAttributeProperties.setLabel("My Attribute");\ndataAttributeProperties.setMultiSelect(false);\ndataAttributeProperties.setGroup("My Group");\ndataAttributeProperties.setList(false);\n\n// Add DataAttributeProperties to DataAttribute\ndataAttribute.setProperties(dataAttributeProperties);\n\n// Create RegExpAttributeConstraint\nRegExpAttributeConstraint regExpAttributeConstraint = new RegExpAttributeConstraint();\nregExpAttributeConstraint.setDescription("This is a regular expression constraint");\nregExpAttributeConstraint.setErrorMessage("This is a sample error message");\nregExpAttributeConstraint.setType(AttributeConstraintType.REGEXP);\nregExpAttributeConstraint.setData("^[a-zA-Z0-9]*$");\n\n// Add RegExpAttributeConstraint to DataAttribute\ndataAttribute.setConstraint(List.of(regExpAttributeConstraint));\n')))),(0,i.kt)("h2",{id:"create-infoattribute-with-text-content"},"Create ",(0,i.kt)("inlineCode",{parentName:"h2"},"InfoAttribute")," with ",(0,i.kt)("inlineCode",{parentName:"h2"},"TEXT")," content"),(0,i.kt)("p",null,"This example shows how to create ",(0,i.kt)("inlineCode",{parentName:"p"},"InfoAttribute")," which is attribute of type ",(0,i.kt)("inlineCode",{parentName:"p"},"INFO"),"."),(0,i.kt)(u.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Create InfoAttribute\nInfoAttribute infoAttribute = new InfoAttribute();\ninfoAttribute.setUuid("42323bd4-7ac6-11ed-a1eb-0242ac120002");\ninfoAttribute.setName("myAttribute");\ninfoAttribute.setType(AttributeType.INFO);\ninfoAttribute.setContentType(AttributeContentType.STRING);\ninfoAttribute.setDescription("This is my attribute");\n\n// Create InfoAttributeProperties\nInfoAttributeProperties infoAttributeProperties = new InfoAttributeProperties();\ninfoAttributeProperties.setLabel("My Attribute");\ninfoAttributeProperties.setGroup("My Group");\ninfoAttributeProperties.setVisible(true);\n\n// Add InfoAttributeProperties to InfoAttribute\ninfoAttribute.setProperties(infoAttributeProperties);\n\n// Create TextAttributeContent\nTextAttributeContent textAttributeContent = new TextAttributeContent();\ntextAttributeContent.setReference("Sample Reference Data");\ntextAttributeContent.setData("This is a sample text that has to be displayed in the user interface. This attribute data contains additional information that helps the user to understand the context of the request.");\n\n// Add TextAttributeContent to InfoAttribute\ninfoAttribute.setContent(List.of(textAttributeContent));\n')))),(0,i.kt)("h2",{id:"create-groupattribute-with-info-and-data-attributes"},"Create ",(0,i.kt)("inlineCode",{parentName:"h2"},"GroupAttribute")," with ",(0,i.kt)("inlineCode",{parentName:"h2"},"INFO")," and ",(0,i.kt)("inlineCode",{parentName:"h2"},"DATA")," attributes"),(0,i.kt)("p",null,"This example shows how to create ",(0,i.kt)("inlineCode",{parentName:"p"},"GroupAttribute")," that is of type ",(0,i.kt)("inlineCode",{parentName:"p"},"GROUP")," with ",(0,i.kt)("inlineCode",{parentName:"p"},"DataAttribute")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"InfoAtrribute"),"."),(0,i.kt)(u.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Cretae DataAttribute\nDataAttribute dataAttribute = new DataAttribute();\ndataAttribute.setUuid("42323bd4-7ac6-11ed-a1eb-0242ac120002");\ndataAttribute.setName("myAttribute");\ndataAttribute.setType(AttributeType.DATA);\ndataAttribute.setContentType(AttributeContentType.STRING);\ndataAttribute.setDescription("This is my attribute");\n\n// Create DataAttributeProperties\nDataAttributeProperties dataAttributeProperties = new DataAttributeProperties();\ndataAttributeProperties.setRequired(true);\ndataAttributeProperties.setReadOnly(false);\ndataAttributeProperties.setVisible(true);\ndataAttributeProperties.setLabel("My Attribute");\ndataAttributeProperties.setMultiSelect(false);\ndataAttributeProperties.setGroup("My Group");\ndataAttributeProperties.setList(false);\n\n// Add DataAttributeProperties to DataAttribute\ndataAttribute.setProperties(dataAttributeProperties);\n\n// Create InfoAttribute\nInfoAttribute infoAttribute = new InfoAttribute();\ninfoAttribute.setUuid("42323bd4-7ac6-11ed-a1eb-0242ac120003");\ninfoAttribute.setName("myAttribute1");\ninfoAttribute.setType(AttributeType.INFO);\ninfoAttribute.setContentType(AttributeContentType.STRING);\ninfoAttribute.setDescription("This is my attribute 1");\n\n// Create InfoAttributeProperties\nInfoAttributeProperties infoAttributeProperties = new InfoAttributeProperties();\ninfoAttributeProperties.setLabel("My Attribute");\ninfoAttributeProperties.setGroup("My Group");\ninfoAttributeProperties.setVisible(true);\n\n// Add InfoAttributeProperties to InfoAttribute\ninfoAttribute.setProperties(infoAttributeProperties);\n\n// Create TextAttributeContent\nTextAttributeContent textAttributeContent = new TextAttributeContent();\ntextAttributeContent.setReference("Sample Reference Data");\ntextAttributeContent.setData("Reference data for info attribute");\n\n// Add TextAttributeContent to InfoAttribute\ninfoAttribute.setContent(List.of(textAttributeContent));\n\n// Create GroupAttribute\nGroupAttribute groupAttribute = new GroupAttribute();\ngroupAttribute.setUuid("42323bd4-7ac6-11ed-a1eb-0242ac120004");\ngroupAttribute.setName("groupAttribute");\ngroupAttribute.setType(AttributeType.GROUP);\ngroupAttribute.setContentType(AttributeContentType.STRING);\ngroupAttribute.setDescription("Sample Group Attribute");\n\n// Add DataAttribute and InfoAttribute to GroupAttribute\ngroupAttribute.setContent(List.of(dataAttribute, infoAttribute));\n')))),(0,i.kt)("h2",{id:"create-metadataattribute-with-string-content"},"Create ",(0,i.kt)("inlineCode",{parentName:"h2"},"MetadataAttribute")," with ",(0,i.kt)("inlineCode",{parentName:"h2"},"STRING")," content"),(0,i.kt)("p",null,"This example shows how to create ",(0,i.kt)("inlineCode",{parentName:"p"},"MetadataAttribute")," that is of type ",(0,i.kt)("inlineCode",{parentName:"p"},"META"),"."),(0,i.kt)(u.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Create MetadataAttribute\nMetadataAttribute metadataAttribute = new MetadataAttribute();\nmetadataAttribute.setUuid("42323bd4-7ac6-11ed-a1eb-0242ac120002");\nmetadataAttribute.setName("discoverySource");\nmetadataAttribute.setType(AttributeType.METADATA);\nmetadataAttribute.setContentType(AttributeContentType.STRING);\nmetadataAttribute.setDescription("Metadata describing the source of the certificate discovered");\n\n// Create MetadataAttributeProperties\nMetadataAttributeProperties metadataAttributeProperties = new MetadataAttributeProperties();\nmetadataAttributeProperties.setLabel("Discovery Source");\nmetadataAttributeProperties.setGroup("Discovery");\nmetadataAttributeProperties.setVisible(true);\n//Setting the metadata as global metadata\nmetadataAttributeProperties.setGlobal(true);\n\n// Add MetadataAttributeProperties to MetadataAttribute\nmetadataAttribute.setProperties(metadataAttributeProperties);\n\n// Create StringAttributeContent\nStringAttributeContent stringAttributeContent = new StringAttributeContent();\nstringAttributeContent.setReference("google.com");\nstringAttributeContent.setData("google.com");\n\n// Add StringAttributeContent to MetadataAttribute\nmetadataAttribute.setContent(List.of(stringAttributeContent));\n')))),(0,i.kt)("h2",{id:"create-customattribute"},"Create ",(0,i.kt)("inlineCode",{parentName:"h2"},"CustomAttribute")),(0,i.kt)("p",null,"This example shows how to create ",(0,i.kt)("inlineCode",{parentName:"p"},"CustomAttribute")," of attribute type ",(0,i.kt)("inlineCode",{parentName:"p"},"CUSTOM"),"."),(0,i.kt)(u.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Create CustomAttribute\nCustomAttribute customAttribute = new CustomAttribute();\ncustomAttribute.setUuid("42323bd4-7ac6-11ed-a1eb-0242ac120002");\ncustomAttribute.setName("myAttribute");\ncustomAttribute.setType(AttributeType.DATA);\ncustomAttribute.setContentType(AttributeContentType.STRING);\ncustomAttribute.setDescription("This is my attribute");\n\n// Create CustomAttributeProperties\nCustomAttributeProperties customAttributeProperties = new CustomAttributeProperties();\ncustomAttributeProperties.setRequired(true);\ncustomAttributeProperties.setReadOnly(false);\ncustomAttributeProperties.setVisible(true);\ncustomAttributeProperties.setLabel("My Attribute");\ncustomAttributeProperties.setMultiSelect(false);\ncustomAttributeProperties.setGroup("My Group");\ncustomAttributeProperties.setList(false);\n\n// Add CustomAttributeProperties to CustomAttribute\ncustomAttribute.setProperties(customAttributeProperties);\n')))))}m.isMDXComponent=!0}}]);