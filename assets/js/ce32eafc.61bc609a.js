"use strict";(self.webpackChunkpidan_moe_blog=self.webpackChunkpidan_moe_blog||[]).push([[664],{49613:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var r=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=m(n),c=i,k=u["".concat(p,".").concat(c)]||u[c]||s[c]||a;return n?r.createElement(k,l(l({ref:t},d),{},{components:n})):r.createElement(k,l({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var m=2;m<a;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},51090:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return a},metadata:function(){return o},toc:function(){return m}});var r=n(37579),i=(n(59496),n(49613));const a={sidebar_position:3,sidebar_label:"\u5947\u6280\u6deb\u5de7"},l="\u5947\u6280\u6deb\u5de7",o={unversionedId:"Tech/IDE/Vim/tricks",id:"Tech/IDE/Vim/tricks",title:"\u5947\u6280\u6deb\u5de7",description:"Vim \u7684\u5b66\u4e60\u66f2\u7ebf\u662f\u5728\u4f7f\u7528\u4e2d\u4e0d\u65ad\u9047\u5230\u95ee\u9898\uff0c\u7136\u540e\u627e\u5230\u66f4\u7b80\u5316\u7684\u89e3\u51b3\u65b9\u6848\u3002",source:"@site/docs/Tech/IDE/Vim/tricks.md",sourceDirName:"Tech/IDE/Vim",slug:"/Tech/IDE/Vim/tricks",permalink:"/Tech/IDE/Vim/tricks",draft:!1,editUrl:"https://github.com/pidanmeng/pidanmeng.github.io/docs/Tech/IDE/Vim/tricks.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"\u5947\u6280\u6deb\u5de7"},sidebar:"IDE",previous:{title:"\u5feb\u6377\u952e\u6620\u5c04",permalink:"/Tech/IDE/Vim/shortcut-key-mapping"},next:{title:"VSC\u63d2\u4ef6",permalink:"/Tech/IDE/plugins"}},p={},m=[{value:"\u6d4f\u89c8\u4ee3\u7801",id:"\u6d4f\u89c8\u4ee3\u7801",level:2},{value:"\u5206\u5c4f\u5e76\u8df3\u8f6c\u5230\u6e90\u7801",id:"\u5206\u5c4f\u5e76\u8df3\u8f6c\u5230\u6e90\u7801",level:3},{value:"\u7f16\u8f91\u4ee3\u7801",id:"\u7f16\u8f91\u4ee3\u7801",level:2},{value:"\u4f7f\u7528\u5b57\u7b26\u5305\u88f9\u5b57\u7b26\u4e32",id:"\u4f7f\u7528\u5b57\u7b26\u5305\u88f9\u5b57\u7b26\u4e32",level:3},{value:"\u5feb\u901f\u9009\u62e9\u4ee3\u7801\u5757",id:"\u5feb\u901f\u9009\u62e9\u4ee3\u7801\u5757",level:3}],d={toc:m};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5947\u6280\u6deb\u5de7"},"\u5947\u6280\u6deb\u5de7"),(0,i.kt)("admonition",{title:"\u5907\u6ce8",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Vim \u7684\u5b66\u4e60\u66f2\u7ebf\u662f\u5728\u4f7f\u7528\u4e2d\u4e0d\u65ad\u9047\u5230\u95ee\u9898\uff0c\u7136\u540e\u627e\u5230\u66f4\u7b80\u5316\u7684\u89e3\u51b3\u65b9\u6848\u3002\n\u672c\u7ae0\u8282\u4f1a\u6301\u7eed\u66f4\u65b0\uff0c\u8bb0\u5f55\u6211\u5728\u4f7f\u7528 Vim \u7684\u8fc7\u7a0b\u4e2d\u9047\u5230\u7684\u9ebb\u70e6\u548c\u89e3\u6cd5\u3002")),(0,i.kt)("h2",{id:"\u6d4f\u89c8\u4ee3\u7801"},"\u6d4f\u89c8\u4ee3\u7801"),(0,i.kt)("h3",{id:"\u5206\u5c4f\u5e76\u8df3\u8f6c\u5230\u6e90\u7801"},"\u5206\u5c4f\u5e76\u8df3\u8f6c\u5230\u6e90\u7801"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.catbox.moe/wbpiyp.gif",alt:"\u5206\u5c4f\u5e76\u8df3\u8f6c\u5230\u6e90\u7801"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vim",metastring:'title=".vimrc"',title:'".vimrc"'},'// add-start\n" \u5b9a\u4e49\u5feb\u901f\u8df3\u8f6c\nnmap <Leader>t <C-]>\n" \u5b9a\u4e49\u5feb\u901f\u8df3\u8f6c\u56de\u9000\nnmap <Leader>T <C-t>\n// add-end\n" \u5206\u5c4f\nnmap <Leader>sv :vsplit<CR>\nnmap <Leader>sh :split<CR>\n')),(0,i.kt)("h2",{id:"\u7f16\u8f91\u4ee3\u7801"},"\u7f16\u8f91\u4ee3\u7801"),(0,i.kt)("h3",{id:"\u4f7f\u7528\u5b57\u7b26\u5305\u88f9\u5b57\u7b26\u4e32"},(0,i.kt)("a",{parentName:"h3",href:"https://github.com/VSCodeVim/Vim#vim-surround"},"\u4f7f\u7528\u5b57\u7b26\u5305\u88f9\u5b57\u7b26\u4e32")),(0,i.kt)("p",null,"\u57fa\u4e8e ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tpope/vim-surround"},"surround.vim"),"\uff0c\u7528\u4e8e\u5904\u7406\u62ec\u53f7\u3001\u65b9\u62ec\u53f7\u3001\u5f15\u53f7\u548c XML \u6807\u7b7e\u7b49\u5468\u56f4\u5b57\u7b26\u3002"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"surround"),(0,i.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ys <motion> <desired>")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5728 ",(0,i.kt)("inlineCode",{parentName:"td"},"<motion>")," \u5b9a\u4e49\u7684\u6587\u672c\u5468\u56f4\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"td"},"desired")," \u73af\u7ed5")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ds <existing>")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5220\u9664",(0,i.kt)("inlineCode",{parentName:"td"},"existing"),"\u73af\u7ed5")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"cs <existing> <desired>")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5c06 ",(0,i.kt)("inlineCode",{parentName:"td"},"existing")," \u73af\u7ed5\u66f4\u6539\u4e3a ",(0,i.kt)("inlineCode",{parentName:"td"},"desired"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"S <desired>")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5728 Visual \u6a21\u5f0f\u4e0b surround")))),(0,i.kt)("p",null,"\u4e00\u4e9b\u4f8b\u5b50\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test")," \u5149\u6807\u5728\u5355\u8bcd\u524d\uff0c\u8f93\u5165",(0,i.kt)("inlineCode",{parentName:"li"},'ysw"'),"\u4ee5",(0,i.kt)("inlineCode",{parentName:"li"},'"test"'),"\u7ed3\u675f"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"test"')," \u5149\u6807\u5728\u5f15\u53f7\u5185\uff0c\u8f93\u5165 ",(0,i.kt)("inlineCode",{parentName:"li"},"cs\"'")," \u4ee5 ",(0,i.kt)("inlineCode",{parentName:"li"},"'test'")," \u7ed3\u675f"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"test"')," \u5149\u6807\u5728\u5f15\u53f7\u5185\uff0c\u8f93\u5165 ",(0,i.kt)("inlineCode",{parentName:"li"},'ds"')," \u4ee5 ",(0,i.kt)("inlineCode",{parentName:"li"},"test")," \u7ed3\u675f"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"test")," Visual \u6a21\u5f0f\u4e0b\uff0c\u5149\u6807\u9009\u4e2d",(0,i.kt)("inlineCode",{parentName:"li"},"test"),"\uff0c\u8f93\u5165 ",(0,i.kt)("inlineCode",{parentName:"li"},"St")," \u5e76\u8f93\u5165 ",(0,i.kt)("inlineCode",{parentName:"li"},"123>")," \u4ee5 ",(0,i.kt)("inlineCode",{parentName:"li"},"<123>test</123>")," \u7ed3\u675f")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.catbox.moe/1vk8t6.gif",alt:"vim-surround"})),(0,i.kt)("h3",{id:"\u5feb\u901f\u9009\u62e9\u4ee3\u7801\u5757"},"\u5feb\u901f\u9009\u62e9\u4ee3\u7801\u5757"),(0,i.kt)("p",null,"\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"Enter"),"\u952e\u5feb\u901f\u9009\u62e9\u4ee3\u7801\u5757"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.catbox.moe/e3og2k.gif",alt:"\u5feb\u901f\u9009\u62e9\u4ee3\u7801\u5757"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="keybindings.json"',title:'"keybindings.json"'},' [\n    {\n        "key": "enter",\n        "command": "vim.remap",\n        "when": "vim.mode == \'Normal\' && !suggestWidgetVisible && !inQuickOpen && editorTextFocus ",\n        "args": {\n            "after": [\n                "v",\n                "a",\n                "f"\n            ],\n        }\n    },\n    {\n        "key": "enter",\n        "command": "vim.remap",\n        "when": "vim.mode == \'Visual\' && !suggestWidgetVisible && !inQuickOpen && editorTextFocus  ",\n        "args": {\n            "after": [\n                "a",\n                "f"\n            ],\n        }\n    },\n ]\n')))}s.isMDXComponent=!0}}]);