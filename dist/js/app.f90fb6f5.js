(function(e){function t(t){for(var n,l,o=t[0],i=t[1],u=t[2],p=0,d=[];p<o.length;p++)l=o[p],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&d.push(r[l][0]),r[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);c&&c(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,o=1;o<a.length;o++){var i=a[o];0!==r[i]&&(n=!1)}n&&(s.splice(t--,1),e=l(l.s=a[0]))}return e}var n={},r={app:0},s=[];function l(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=n,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(a,n,function(t){return e[t]}.bind(null,n));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=i;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"04ba":function(e,t,a){},"36f8":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=a("bc3a"),s=a.n(r),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"wrap"}},[a("Aside"),a("router-view")],1)])},o=[],i=(a("36f8"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",[a("div",{class:["menu-collapased",{"menu-expanded":e.menuBar}],on:{click:e.isOpen}},[a("div",{staticClass:"bar"}),a("nav",[a("ul",[a("li",[a("router-link",{attrs:{to:"/"}},[e._v("Home")])],1),a("li",[a("router-link",{attrs:{to:"/Login"}},[e._v("Login")])],1)])])])])}),u=[],c={data:function(){return{menuBar:!1}},methods:{isOpen:function(){this.menuBar=!this.menuBar}}},p=c,d=a("2877"),m=Object(d["a"])(p,i,u,!1,null,null,null),v=m.exports,f={components:{Aside:v}},h=f,b=(a("5c0b"),Object(d["a"])(h,l,o,!1,null,null,null)),g=b.exports,_=a("8c4f"),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},k=[],x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("h1",[e._v(e._s(e.msg))]),e._m(0),a("h3",[e._v("Installed CLI Plugins")]),e._m(1),a("h3",[e._v("Essential Links")]),e._m(2),a("h3",[e._v("Ecosystem")]),e._m(3)])},y=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),a("br"),e._v(" check out the "),a("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),a("li",[a("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),a("li",[a("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),a("li",[a("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],j={name:"HelloWorld",props:{msg:String}},E=j,L=(a("81e6"),Object(d["a"])(E,x,y,!1,null,"5141a303",null)),C=L.exports,O={name:"Home",components:{HelloWorld:C}},$=O,D=Object(d["a"])($,w,k,!1,null,null,null),P=D.exports,I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("loading",{attrs:{active:e.isLoading},on:{"update:active":function(t){e.isLoading=t}}}),a("form",{on:{submit:function(t){return t.preventDefault(),e.signin(t)}}},[a("div",{staticClass:"mb-3"},[a("label",{staticClass:"form-label",attrs:{for:"exampleInputEmail1"}},[e._v("Email address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"email",name:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",autocomplete:"username"},domProps:{value:e.user.email},on:{input:function(t){t.target.composing||e.$set(e.user,"email",t.target.value)}}}),a("div",{staticClass:"form-text",attrs:{id:"emailHelp"}},[e._v(" We'll never share your email with anyone else. ")])]),a("div",{staticClass:"mb-3"},[a("label",{staticClass:"form-label",attrs:{for:"exampleInputPassword1"}},[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.pwd,expression:"user.pwd"}],staticClass:"form-control",attrs:{type:"password",name:"pwd",id:"exampleInputPassword1",autocomplete:"current-password"},domProps:{value:e.user.pwd},on:{input:function(t){t.target.composing||e.$set(e.user,"pwd",t.target.value)}}})]),e._m(0),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Submit")])])],1)},S=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mb-3 form-check"},[a("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"exampleCheck1"}}),a("label",{staticClass:"form-check-label",attrs:{for:"exampleCheck1"}},[e._v("Check me out")])])}],A={data:function(){return{user:{email:"",pwd:"",timeout:null}}},methods:{signin:function(){var e="http://127.0.0.1:3000/Login",t=this;this.$store.dispatch("updateLoading",!0),this.$http.post(e,t.user).then((function(e){e.data.success&&(t.$store.dispatch("updateLoading",!1),t.$router.push({name:"Admin"}))}))}},computed:{isLoading:function(){return this.$store.state.isLoading}}},H=A,N=Object(d["a"])(H,I,S,!1,null,null,null),B=N.exports,T=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("h1",[e._v("Traffic-Control-System")]),a("button",{class:["btn btn-primary",{collapsed:!e.isEnable}],attrs:{disabled:e.isEnable,type:"button","data-toggle":"collapse","data-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample"},on:{click:e.triggerLed}},[e._v(" 開啟 ")]),a("button",{class:["btn btn-danger",{collapsed:!e.isDisable}],attrs:{disabled:e.isDisable,type:"button","data-toggle":"collapse","data-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample"},on:{click:e.closeLed}},[e._v(" 關閉 ")]),a("div",{class:["collapse",{show:e.isDisable}],attrs:{id:"collapseExample"}},[a("div",{staticClass:"card card-body"},[a("span",[e._v(e._s(e.time))])])])])},W=[],M={data:function(){return{allLed:!0,isEnable:!1,isDisable:!1,time:5}},methods:{triggerLed:function(){this.allLed=!0,this.$socket.emit("ledOnEvent",this.allLed),this.isEnable=!0},closeLed:function(){this.allLed=!1,this.$socket.emit("ledOffEvent",this.allLed),this.isDisable=!0}},watch:{isDisable:function(){var e=this;if(this.isDisable){var t=this,a=null;a=setInterval((function(){t.time--,0===e.time&&(clearInterval(a),t.time=5,t.isEnable=!1,t.isDisable=!1)}),1e3)}}}},V=M,F=Object(d["a"])(V,T,W,!1,null,null,null),G=F.exports;n["default"].use(_["a"]);var J=[{path:"/",name:"Home",component:P},{path:"/Login",name:"Login",component:B},{path:"/Admin",name:"Admin",component:G}],z=new _["a"]({mode:"history",base:"/",routes:J}),R=z,U=a("2106"),Y=a.n(U),q=a("5132"),K=a.n(q),Q=a("5f5b"),X=a("9062"),Z=a.n(X),ee=(a("f9e3"),a("2f62"));n["default"].use(ee["a"]);var te=new ee["a"].Store({strict:!0,state:{isLoading:!1},actions:{updateLoading:function(e,t){e.commit("LOADING",t)}},mutations:{LOADING:function(e,t){e.isLoading=t}}});a("e40d");n["default"].config.productionTip=!1,s.a.defaults.withCredentials=!0,n["default"].component("loading",Z.a),n["default"].use(new K.a({debug:!0,connection:"http://127.0.0.1:3000"})).use(R).use(Q["a"]).use(Y.a,s.a),new n["default"]({router:R,store:te,render:function(e){return e(g)}}).$mount("#app"),console.log("環境: ",Object({NODE_ENV:"production",BASE_URL:"/"}))},"5c0b":function(e,t,a){"use strict";a("9c0c")},"81e6":function(e,t,a){"use strict";a("04ba")},"9c0c":function(e,t,a){},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.f90fb6f5.js.map