(function(e){function t(t){for(var n,o,s=t[0],i=t[1],u=t[2],p=0,v=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&v.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);c&&c(t);while(v.length)v.shift()();return l.push.apply(l,u||[]),r()}function r(){for(var e,t=0;t<l.length;t++){for(var r=l[t],n=!0,s=1;s<r.length;s++){var i=r[s];0!==a[i]&&(n=!1)}n&&(l.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},l=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=i;l.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"04ba":function(e,t,r){},"36f8":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"wrap"}},[r("Aside"),r("router-view")],1)])},l=[],o=(r("36f8"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",[r("div",{class:["menu-collapased",{"menu-expanded":e.menuBar}],on:{click:e.isOpen}},[r("div",{staticClass:"bar"}),r("nav",[r("ul",[r("li",[r("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),r("li",[r("router-link",{attrs:{to:"/Login"}},[e._v("Login")])],1)])])])])}),s=[],i={data:function(){return{menuBar:!1}},methods:{isOpen:function(){this.menuBar=!this.menuBar}}},u=i,c=r("2877"),p=Object(c["a"])(u,o,s,!1,null,null,null),v=p.exports,f={components:{Aside:v}},h=f,d=(r("5c0b"),Object(c["a"])(h,a,l,!1,null,null,null)),m=d.exports,b=r("8c4f"),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},_=[],j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._m(0),r("h3",[e._v("Installed CLI Plugins")]),e._m(1),r("h3",[e._v("Essential Links")]),e._m(2),r("h3",[e._v("Ecosystem")]),e._m(3)])},k=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),r("br"),e._v(" check out the "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],w={name:"HelloWorld",props:{msg:String}},y=w,x=(r("81e6"),Object(c["a"])(y,j,k,!1,null,"5141a303",null)),O=x.exports,E={name:"Home",components:{HelloWorld:O}},L=E,$=Object(c["a"])(L,g,_,!1,null,null,null),C=$.exports,D=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",[e._v("Traffic-Control-System")]),r("p",[r("button",{class:["btn btn-primary",{collapsed:!e.isDisable}],attrs:{disabled:e.isDisable,type:"button","data-toggle":"collapse","data-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample"},on:{click:e.triggerLed}},[e._v(" LED ")])]),r("div",{class:["collapse",{show:e.isDisable}],attrs:{id:"collapseExample"}},[r("div",{staticClass:"card card-body"},[r("span",[e._v("交通信號燈"+e._s(e.time)+"後，才可再次使用")])])])])},P=[],S={data:function(){return{allLed:!0,time:5,isDisable:!1}},methods:{triggerLed:function(){this.$socket.emit("ledLight",this.allLed),this.allLed=!0,this.isDisable=!0,this.time--}},watch:{isDisable:function(){var e=this;if(this.isDisable){var t=this,r=null;r=setInterval((function(){t.time--,0===e.time&&(clearInterval(r),t.time=5,t.isDisable=!1)}),1e3)}}}},H=S,T=Object(c["a"])(H,D,P,!1,null,null,null),B=T.exports;n["default"].use(b["a"]);var I=[{path:"/",name:"Home",component:C},{path:"/Login",name:"Login",component:B}],M=new b["a"]({mode:"history",base:"/",routes:I}),W=M,A=r("5132"),F=r.n(A),J=r("5f5b");r("f9e3");n["default"].config.productionTip=!1,n["default"].use(new F.a({debug:!0,connection:"127.0.0.1:3000"})).use(W).use(J["a"]),new n["default"]({router:W,render:function(e){return e(m)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"81e6":function(e,t,r){"use strict";r("04ba")},"9c0c":function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.5f9539cf.js.map