"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[4718],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(h,l(l({ref:t},s),{},{components:a})):n.createElement(h,l({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},55064:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(67294),r=a(79443);var o=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(86010),p="tabItem_1uMI",i="tabItemActive_2DSg";var c=function(e){var t,a=e.lazy,r=e.block,c=e.defaultValue,s=e.values,u=e.groupId,d=e.className,m=n.Children.toArray(e.children),h=null!=s?s:m.map((function(e){return{value:e.props.value,label:e.props.label}})),y=null!=c?c:null==(t=m.find((function(e){return e.props.default})))?void 0:t.props.value,f=o(),g=f.tabGroupChoices,k=f.setTabGroupChoices,w=(0,n.useState)(y),b=w[0],v=w[1],N=[];if(null!=u){var P=g[u];null!=P&&P!==b&&h.some((function(e){return e.value===P}))&&v(P)}var E=function(e){var t=e.currentTarget,a=N.indexOf(t),n=h[a].value;v(n),null!=u&&(k(u,n),setTimeout((function(){var e,a,n,r,o,l,p,c;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,o=e.right,l=window,p=l.innerHeight,c=l.innerWidth,a>=0&&o<=c&&r<=p&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},T=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=N.indexOf(e.target)+1;a=N[n]||N[0];break;case"ArrowLeft":var r=N.indexOf(e.target)-1;a=N[r]||N[N.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},d)},h.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,l.Z)("tabs__item",p,{"tabs__item--active":b===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:T,onFocus:E,onClick:E},null!=a?a:t)}))),a?(0,n.cloneElement)(m.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},m.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},79443:function(e,t,a){var n=(0,a(67294).createContext)(void 0);t.Z=n},81838:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return h}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),l=a(55064),p=a(58215),i=["components"],c={title:"Deploy in PadLocal"},s=void 0,u={unversionedId:"howto/deploy-padlocal",id:"howto/deploy-padlocal",isDocsHomePage:!1,title:"Deploy in PadLocal",description:"PadLocal is a most powerful Wechaty puppet provider which consumes Wechaty puppet services and includes sending or receiving files, texts individually or in a group. In this how to guide, you will learn how to deploy the bot in PadLocal locally and integrate bot from the list of examples present in starter templete.",source:"@site/docs/howto/deploy-padlocal.mdx",sourceDirName:"howto",slug:"/howto/deploy-padlocal",permalink:"/docs/howto/deploy-padlocal",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/howto/deploy-padlocal.mdx",tags:[],version:"current",lastUpdatedBy:"abhishek-iiit",lastUpdatedAt:1627570264,formattedLastUpdatedAt:"7/29/2021",frontMatter:{title:"Deploy in PadLocal"}},d=[{value:"Requirements",id:"requirements",children:[]},{value:"Deployment",id:"deployment",children:[]},{value:"Integration",id:"integration",children:[{value:"Prerequisite",id:"prerequisite",children:[]}]},{value:"References",id:"references",children:[]},{value:"Blogs",id:"blogs",children:[]}],m={toc:d};function h(e){var t=e.components,c=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"PadLocal is a most powerful Wechaty puppet provider which consumes Wechaty puppet services and includes sending or receiving files, texts individually or in a group. In this how to guide, you will learn how to deploy the bot in PadLocal locally and integrate bot from the list of examples present in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"starter templete"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Deploy in PadLocal",src:a(28522).Z})),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Your system must have ",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/"},"Node.js")," installed (version >= 12)."),(0,o.kt)("li",{parentName:"ol"},"Your system must have ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty"},"Wechaty")," (version >= 0.40)."),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/wechaty-puppet-padlocal"},"wechaty-puppet-padlocal"),".")),(0,o.kt)("h2",{id:"deployment"},"Deployment"),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"wechaty-puppet-padlocal"),":"),(0,o.kt)(l.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(p.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-padlocal\nexport WECHATY_PUPPET=wechaty-puppet-padlocal\nexport WECHATY_PUPPET_PADLOCAL_TOKEN=__TOKEN__\nnpm start\n"))),(0,o.kt)(p.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-padlocal\nexport WECHATY_PUPPET=wechaty-puppet-padlocal\nexport WECHATY_PUPPET_PADLOCAL_TOKEN=__TOKEN__\nnpm start\n"))),(0,o.kt)(p.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install wechaty-puppet-padlocal\nset WECHATY_PUPPET=wechaty-puppet-padlocal\nset WECHATY_PUPPET_PADLOCAL_TOKEN=__TOKEN__\nnpm start\n")))),(0,o.kt)("h2",{id:"integration"},"Integration"),(0,o.kt)("p",null,"Let's take up an example on how to integrate bot from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"starter templete")," to PadLocal. The step is similar for all other bots as well."),(0,o.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Official Wechaty package: ",(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/wechaty"},"package/wechaty"),"."),(0,o.kt)("li",{parentName:"ol"},"Your free trail token for 7 days: ",(0,o.kt)("a",{parentName:"li",href:"http://pad-local.com/"},"pad-local.com"),".")),(0,o.kt)("p",null,"You can follow up the steps mentioned below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Initialize the project by creating a new folder ",(0,o.kt)("inlineCode",{parentName:"li"},"my-bot"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir my-bot\ncd my-bot\nnpm init -y\nnpm install ts-node typescript -g --registry=https://r.npm.taobao.org\ntsc --init --target ES6\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Install Wechaty using the following commands:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install wechaty@latest --registry=https://r.npm.taobao.org\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Install PadLocal puppet using the following commands:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install wechaty-puppet-padlocal@latest --registry=https://r.npm.taobao.org\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Create a new folder ",(0,o.kt)("inlineCode",{parentName:"li"},"src")," and add a file ",(0,o.kt)("inlineCode",{parentName:"li"},"my-bot.ts"),". Add any of the functions from ",(0,o.kt)("a",{href:"#"}," add functionality to the bot")," section to the snippet below:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'import {PuppetPadlocal} from "wechaty-puppet-padlocal";\nimport {Contact, Message, ScanStatus, Wechaty} from "wechaty";\n\nconst token: string = ""            // padlocal token\nconst puppet = new PuppetPadlocal({ token })\nconst bot = new Wechaty({\n    name: "TestBot",\n    puppet,\n})\n/*\n *Your function goes here\n */\n')),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"After you are done with the file, you can run the bot using the following commands:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"ts-node my-bot.ts\n")),(0,o.kt)("p",null,"Now, you are ready to play with the bot!"),(0,o.kt)("p",null,"You can deploy the bot with popular container solutions as well such as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#a"},"Deploy with Heroku")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#b"},"Deploy with Docker"))),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Find out some more information about puppet from ",(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/docs/puppet-providers/"},"docs/puppet-providers"),"."),(0,o.kt)("li",{parentName:"ul"},"Find out the more bot repository from ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-getting-started"},"wechaty-getting-started"),"."),(0,o.kt)("li",{parentName:"ul"},"Find out the PadLocal repository at ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/padlocal/wechaty-puppet-padlocal"},"wechaty-puppet-padlocal"),"."),(0,o.kt)("li",{parentName:"ul"},"Find out API usage documentation at ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/padlocal/wechaty-puppet-padlocal/wiki/API-%E4%BD%BF%E7%94%A8%E6%96%87%E6%A1%A3-(TypeScript-JavaScript)"},"API usage documentation (TypeScript JavaScript)"),"."),(0,o.kt)("li",{parentName:"ul"},"Find out common questions at ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/padlocal/wechaty-puppet-padlocal/wiki/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98%E5%88%97%E8%A1%A8"},"Frequently Asked Questions List"),".")),(0,o.kt)("h2",{id:"blogs"},"Blogs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/03/08/python-wechaty-and-wechaty-puppet-padlocal/"},"A preliminary study of Python-wechaty & wechaty-puppet-padlocal"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/02/03/python-wechaty-for-padlocal-puppet-service/"},"How Python Wechaty uses PadLocal Puppet Service"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/01/28/csharp-wechaty-for-padlocal-puppet-service/"},"How .NET Wechaty uses PadLocal Puppet Service"),".")))}h.isMDXComponent=!0},28522:function(e,t,a){t.Z=a.p+"assets/images/PadLocal-ae03ecd3f4e4d446d237b6e24493fd4b.webp"}}]);