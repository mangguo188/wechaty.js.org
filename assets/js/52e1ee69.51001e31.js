"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[6034],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(a),d=l,f=m["".concat(i,".").concat(d)]||m[d]||p[d]||o;return a?n.createElement(f,r(r({ref:t},c),{},{components:a})):n.createElement(f,r({ref:t},c))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,r=new Array(o);r[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var u=2;u<o;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:l},t)}},55064:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(67294),l=a(79443);var o=function(){var e=(0,n.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=a(86010),s="tabItem_1uMI",i="tabItemActive_2DSg";var u=function(e){var t,a=e.lazy,l=e.block,u=e.defaultValue,c=e.values,p=e.groupId,m=e.className,d=n.Children.toArray(e.children),f=null!=c?c:d.map((function(e){return{value:e.props.value,label:e.props.label}})),h=null!=u?u:null==(t=d.find((function(e){return e.props.default})))?void 0:t.props.value,g=o(),y=g.tabGroupChoices,v=g.setTabGroupChoices,b=(0,n.useState)(h),k=b[0],w=b[1],x=[];if(null!=p){var T=y[p];null!=T&&T!==k&&f.some((function(e){return e.value===T}))&&w(T)}var N=function(e){var t=e.currentTarget,a=x.indexOf(t),n=f[a].value;w(n),null!=p&&(v(p,n),setTimeout((function(){var e,a,n,l,o,r,s,u;(e=t.getBoundingClientRect(),a=e.top,n=e.left,l=e.bottom,o=e.right,r=window,s=r.innerHeight,u=r.innerWidth,a>=0&&o<=u&&l<=s&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},O=function(e){var t,a=null;switch(e.key){case"ArrowRight":var n=x.indexOf(e.target)+1;a=x[n]||x[0];break;case"ArrowLeft":var l=x.indexOf(e.target)-1;a=x[l]||x[x.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},m)},f.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,r.Z)("tabs__item",s,{"tabs__item--active":k===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:O,onFocus:N,onClick:N},null!=a?a:t)}))),a?(0,n.cloneElement)(d.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},d.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,a){var n=(0,a(67294).createContext)(void 0);t.Z=n},34641:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var n=a(87462),l=a(63366),o=(a(67294),a(3905)),r=a(55064),s=a(58215),i=["components"],u={title:"Send and receive files"},c=void 0,p={unversionedId:"howto/file-box",id:"howto/file-box",isDocsHomePage:!1,title:"Send and receive files",description:"Use the guide to help you integrate additional functions to an existing project which is present at Github/Media Bot or check that your existing local system will run on Wechaty. If, you wish to learn on how to build the bot on your own, please visit one of our Building the bot section.",source:"@site/docs/howto/file-box.mdx",sourceDirName:"howto",slug:"/howto/file-box",permalink:"/docs/howto/file-box",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/howto/file-box.mdx",tags:[],version:"current",lastUpdatedBy:"abhishek-iiit",lastUpdatedAt:1627120815,formattedLastUpdatedAt:"7/24/2021",frontMatter:{title:"Send and receive files"},sidebar:"docs",previous:{title:"Making friends",permalink:"/docs/howto/friendship"},next:{title:"Writing tests",permalink:"/docs/howto/testing"}},m=[{value:"Prerequisites",id:"prerequisites",children:[{value:"If you don&#39;t know where to start from",id:"if-you-dont-know-where-to-start-from",children:[]}]},{value:"Send File - defines how to send files",id:"send-file---defines-how-to-send-files",children:[]},{value:"Receive File - defines how to receive files",id:"receive-file---defines-how-to-receive-files",children:[]},{value:"References",id:"references",children:[]}],d={toc:m};function f(e){var t=e.components,a=(0,l.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Use the guide to help you integrate additional functions to an existing project which is present at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started/blob/master/examples/advanced/media-file-bot.js"},"Github/Media Bot")," or check that your existing local system will run on Wechaty. If, you wish to learn on how to build the bot on your own, please visit one of our ",(0,o.kt)("a",{parentName:"p",href:"https://wechaty.js.org/docs/examples/advanced/media-file-bot"},"Building the bot")," section."),(0,o.kt)("p",null,"The steps outlined here mainly focus on working with Javascript, but the user is free to switch between any languages. All wechaty contacts are encapsulated as a Contact."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Your system must have ",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/"},"Node.js")," installed (version >= 12)."),(0,o.kt)("li",{parentName:"ul"},"Your system must have ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty"},"Wechaty")," (version >= 0.40)."),(0,o.kt)("li",{parentName:"ul"},"You need to be familiar with the basics of Wechaty platform. If not, follow our ",(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/docs/tutorials/"},"tutorials")," section."),(0,o.kt)("li",{parentName:"ul"},"You need to have at least a minimal application ready to work, follow one of our ",(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/docs/examples/advanced/media-file-bot"},"Example/Media file bot"),"."),(0,o.kt)("li",{parentName:"ul"},"You need to have some basic knowledge of ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/huan/file-box"},"FileBox")," module.")),(0,o.kt)("h3",{id:"if-you-dont-know-where-to-start-from"},"If you don't know where to start from"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://wechaty.js.org/docs/getting-started/quick-start"},"Running our first ding-dong bot"),"."),(0,o.kt)("h2",{id:"send-file---defines-how-to-send-files"},"Send File - defines how to send files"),(0,o.kt)("p",null,"This section helps you send files like Attachment, Audio, Image, Video to the desired user. Here, ",(0,o.kt)("inlineCode",{parentName:"p"},"FileBox.fromUrl")," helps you send URL as a attachment to the user."),(0,o.kt)(r.Z,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { FileBox } from 'wechaty'\n\nasync function onMessage (message) {\n  const fileBox = FileBox.fromUrl('https://wechaty.js.org/img/icon.png')\n  await bot.say(fileBox)\n}\n\nbot.on('message', onMessage)\n"))),(0,o.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { FileBox } = require('wechaty')\n\nasync function onMessage (message) {\n  const fileBox = FileBox.fromUrl('https://wechaty.js.org/img/icon.png')\n  await bot.say(fileBox)\n}\n\nbot.on('message', onMessage)\n"))),(0,o.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"from wechaty import FileBox\n\nfileBox = FileBox.from_url('https://wechaty.js.org/img/icon.png')\nawait bot.say(fileBox)\n"))),(0,o.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(s.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(s.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(s.Z,{value:"csharp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(s.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"// TODO: Pull Request is welcome!\n")))),(0,o.kt)("h2",{id:"receive-file---defines-how-to-receive-files"},"Receive File - defines how to receive files"),(0,o.kt)("p",null,"This section helps you receive files like Attachment, Audio, Image, Video. Here, ",(0,o.kt)("inlineCode",{parentName:"p"},"message.toFileBox")," helps you save all the files to a specified location."),(0,o.kt)(r.Z,{groupId:"programming-languages",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"},{label:"Python",value:"py"},{label:"Go",value:"go"},{label:"Java",value:"java"},{label:"PHP",value:"php"},{label:"Scala",value:"scala"},{label:"C#",value:"csharp"},{label:"Rust",value:"rust"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Message } from 'wechaty'\n\nasync function onMessage (message: Message) {\n  const fileTypeList = [\n    Message.Type.Attachment,\n    Message.Type.Audio,\n    Message.Type.Image,\n    Message.Type.Video,\n  ]\n  if (fileTypeList.includes(message.type())) {\n    const fileBox = await message.toFileBox()\n    console.info(`Saving file {$fileBox.name}...`)\n    await fileBox.toFile()\n  }\n}\n\nbot.on('message', onMessage)\n"))),(0,o.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const { Message } = require('wechaty')\n\nasync function onMessage (message) {\n  const fileTypeList = [\n    Message.Type.Attachment,\n    Message.Type.Audio,\n    Message.Type.Image,\n    Message.Type.Video,\n  ]\n  if (fileTypeList.includes(message.type())) {\n    const fileBox = await message.toFileBox()\n    console.info(`Saving file {$fileBox.name}...`)\n    await fileBox.toFile()\n  }\n}\n\nbot.on('message', onMessage)\n"))),(0,o.kt)(s.Z,{value:"py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"from wechaty_puppet import FileBox\nfrom wechaty import Wechaty, Contact, Message\n\nclass MyBot(Wechaty):\n    async def on_message(self, msg: Message):\n        if msg.type() == MessageType.MESSAGE_TYPE_IMAGE:\n            image_file_box = await msg.to_file_box()\n            print(f'saving file<{image_file_box.name}>')\n            await image_file_box.to_file('/path/to/local/file')\n"))),(0,o.kt)(s.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(s.Z,{value:"java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(s.Z,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(s.Z,{value:"scala",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(s.Z,{value:"csharp",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"// TODO: Pull Request is welcome!\n"))),(0,o.kt)(s.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"// TODO: Pull Request is welcome!\n")))),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty-getting-started"},"Wechaty Getting Started GitHub repository"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/tree/1523c5e02be46ebe2cc172a744b2fbe53351540e/examples"},"Wechaty Bot Example"),".")))}f.isMDXComponent=!0}}]);