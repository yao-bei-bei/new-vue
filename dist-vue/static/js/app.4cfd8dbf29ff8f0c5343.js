webpackJsonp([1],{"+skl":function(t,e){},"/JPH":function(t,e){},"/aVq":function(t,e){},"3DQU":function(t,e){},"9+mO":function(t,e){},"982D":function(t,e){},M3xk:function(t,e,n){t.exports=n.p+"static/img/error-401.98bba5b.svg"},MxJW:function(t,e,n){t.exports=n.p+"static/img/error-500.a371eab.svg"},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},o,!1,function(t){n("/aVq")},null,null).exports,i=n("/ocq"),a={name:"LoginForm",props:{userNameRules:{type:Array,default:function(){return[{required:!0,message:"账号不能为空",trigger:"blur"}]}},passwordRules:{type:Array,default:function(){return[{required:!0,message:"密码不能为空",trigger:"blur"}]}}},data:function(){return{form:{username:"",password:""}}},computed:{rules:function(){return{username:this.userNameRules,password:this.passwordRules}}},methods:{login:function(){var t=this;this.$refs.loginForm.validate(function(e){console.log(e),e&&t.$emit("on-login",{username:t.form.username,password:t.form.password})})}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Form",{ref:"loginForm",attrs:{model:t.form,rules:t.rules},nativeOn:{keydown:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.logon(e):null}}},[n("FormItem",{attrs:{prop:"userName"}},[n("Input",{attrs:{placeholder:"请输入用户名"},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}},[n("span",{attrs:{slot:"prepend"},slot:"prepend"},[n("Icon",{attrs:{size:16,type:"ios-person"}})],1)])],1),t._v(" "),n("FormItem",{attrs:{prop:"password"}},[n("Input",{attrs:{type:"password",placeholder:"请输入密码"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.login(e):null}},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}},[n("span",{attrs:{slot:"prepend"},slot:"prepend"},[n("Icon",{attrs:{size:14,type:"md-lock"}})],1)])],1),t._v(" "),n("FormItem",[n("Button",{attrs:{type:"primary",long:""},on:{click:t.login}},[t._v("登录")])],1)],1)},staticRenderFns:[]},u={name:"login",data:function(){return{spinShow:!1}},components:{LoginForm:n("VU/8")(a,c,!1,null,null,null).exports},methods:{login:function(t){var e=t.username,n=t.password;"123456"!=n&&this.$Message.success("密码输入错误"),"admin"===e&&"123456"===n?(this.$store.commit("addRoles",{roles:"admin"}),sessionStorage.setItem("roles","admin"),this.$Message.success("登录成功"),this.$router.push("/home")):"user"===e&&"123456"===n&&(this.$store.commit("addRoles",{roles:"user"}),sessionStorage.setItem("roles","user"),this.$Message.success("登录成功"),this.$router.push("/home"))}},computed:{}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"login"},[e("div",{staticClass:"login-con"},[e("Card",{attrs:{icon:"log-in",title:"欢迎登录",bordered:!1}},[e("div",{staticClass:"form-con"},[e("login-form",{on:{"on-login":this.login}}),this._v(" "),e("p",{staticClass:"login-tip"},[this._v("请输入用户名和密码")])],1)])],1)])},staticRenderFns:[]};var d=n("VU/8")(u,l,!1,function(t){n("3DQU")},null,null).exports,m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"firstChild"}},[e("div",[this._v("这是firstChild组件")]),this._v(" "),e("button",{on:{click:this.first}},[this._v("向组件传值")]),this._v(" "),e("button",{on:{click:this.box}},[this._v("向组件传值1")])])},staticRenderFns:[]};var h=n("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}},created:function(){},methods:{first:function(){this.$bus.$emit("firstclick","这是firstChild组件")},box:function(){this.$bus.$emit("boxclick","这是firstChild组件1")}}},m,!1,function(t){n("khFj")},"data-v-ff88e22a",null).exports,p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"secondChild"}},[n("div",[t._v("这是secondChild组件")]),n("br"),t._v(" "),n("div",[t._v("获取值："+t._s(t.msg)),n("br"),t._v(t._s(t.box))])])},staticRenderFns:[]};var f=n("VU/8")({name:"secondChild",data:function(){return{msg:"默认值",box:"默认值1"}},mounted:function(){var t=this;this.$bus.$on("firstclick",function(e){t.msg=e}),this.$bus.$on("boxclick",function(e){t.box=e})}},p,!1,function(t){n("mRKy")},"data-v-ed8a07ce",null).exports,v={data:function(){return{isCollapsed:!1,routeLists:[],type:["ios-navigate","ios-keypad","ios-analytics","ios-paper"],num:""}},components:{FirstChild:h,SecondChild:f},created:function(){var t=this;this.num=this.$route.query.index||0,this.$router.options.routes.some(function(e){if("/home"===e.path)return t.getRouter(e.children),!0})},computed:{rotateIcon:function(){return["menu-icon",this.isCollapsed?"rotate-icon":""]},menuitemClasses:function(){return["menu-item",this.isCollapsed?"collapsed-menu":""]}},methods:{collapsedSider:function(){this.$refs.side1.toggleCollapse()},getRouter:function(t){var e=this,n=sessionStorage.getItem("roles")||this.$store.getters.getRoles;this.routeList=[],t.map(function(t){t.meta.indexOf(n)>-1&&e.routeList.push({path:"/home/"+t.path,name:t.name,type:e.type})})},home:function(t,e){this.$router.push({path:t+"?index="+e}),this.num=e}}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout"},[n("Layout",[n("Sider",{ref:"side1",staticStyle:{"min-height":"100vh"},attrs:{"hide-trigger":"",collapsible:"","collapsed-width":78},model:{value:t.isCollapsed,callback:function(e){t.isCollapsed=e},expression:"isCollapsed"}},[n("Menu",{class:t.menuitemClasses,attrs:{"active-name":"1-2",theme:"dark",width:"auto"}},t._l(t.routeList,function(e,s){return n("MenuItem",{key:s,class:{active:s==t.num},staticStyle:{width:"100%",height:"100%","text-align":"center"},attrs:{name:s}},[n("div",{staticStyle:{padding:"14px 24px"},on:{click:function(n){t.home(e.path,s)}}},[n("Icon",{attrs:{type:e.type[s]}}),t._v(" "),n("span",[t._v(t._s(e.name))])],1)])}))],1),t._v(" "),n("Layout",[n("Header",{staticClass:"layout-header-bar",style:{padding:0}},[n("Icon",{class:t.rotateIcon,style:{margin:"0 20px"},attrs:{type:"md-menu",size:"24"},nativeOn:{click:function(e){return t.collapsedSider(e)}}})],1),t._v(" "),n("Content",{style:{margin:"20px",background:"#fff",minHeight:"260px"}},[n("router-view")],1)],1)],1)],1)},staticRenderFns:[]};var _=n("VU/8")(v,g,!1,function(t){n("/JPH")},"data-v-8f82a878",null).exports,b=n("//Fk"),x=n.n(b),k=n("mtWM"),$=n.n(k),y=n("mw3O"),C=n.n(y);$.a.defaults.baseURL="https://easy-mock.com/mock/5c7508a66ce4da08919aedef/example",$.a.defaults.timeout=1e4,$.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8";var w=function(t){return e="/mock",n=t,new x.a(function(t,s){$.a.get(e,{params:n}).then(function(e){t(e.data)}).catch(function(t){s(t.data)})});var e,n},F={name:"admin",data:function(){return{}},mounted:function(){},created:function(){this.onLoad(1)},components:{"my-component":{template:"<div>111</div>"}},methods:{onLoad:function(t){w().then(function(t){})}}},R={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"admin"}},[this._v("\n1111\n    ")])},staticRenderFns:[]};var E=n("VU/8")(F,R,!1,function(t){n("982D")},null,null).exports,I={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"guest"}},[this._v("\n  11\n  "),e("p",[this._v("这是一般用户页面，用户和管理员都可以看到")])])}]};var S=n("VU/8")({name:"guest",data:function(){return{}}},I,!1,function(t){n("djI8")},null,null).exports,V={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("该页面你无权访问")])},staticRenderFns:[]},N=n("VU/8")(null,V,!1,null,null,null).exports,U={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[t._v("这是child组件")]),t._v(" "),n("div",[t._v(t._s(t.message))]),t._v(" "),n("button",{on:{click:t.box}},[t._v("向父元素传递值")])])},staticRenderFns:[]};var O={name:"box",components:{Child:n("VU/8")({props:["message"],data:function(){return{msg:"Welcome to Your Vue.js App"}},created:function(){},methods:{box:function(){this.$emit("clickEvet","box页面")}}},U,!1,function(t){n("WIO2")},"data-v-70ce5436",null).exports,FirstChild:h,SecondChild:f},data:function(){return{msg:"Welcome to Your Vue.js App",is:!0,text:"确定"}},methods:{box:function(t){this.msg=t,console.log(t)},boxs:function(){this.is?(this.text="确定",this.is=!1):(this.text="取消",this.is=!0)}},computed:{isShow:function(){return this.$store.getters.isShow},getChangedNum:function(){return this.$store.getters.getChangedNum}},watch:{is:function(t){1==t?(this.$store.dispatch("showFooter"),this.$store.dispatch("getNewNum",1)):this.$store.dispatch("hideFooter")}}},A={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[t._v("box页面")]),t._v(" "),n("button",{on:{click:function(e){t.boxs(t.data)}}},[t._v(t._s(t.text)+t._s(t.is))]),t._v(" "),n("child",{attrs:{message:t.msg},on:{clickEvet:t.box}}),t._v(" "),t.isShow?n("first-child"):t._e(),t._v(" "),n("second-child"),t._v("\n      "+t._s(t.isShow)+"\n"+t._s(t.getChangedNum)+"\n    ")],1)},staticRenderFns:[]};var L=n("VU/8")(O,A,!1,function(t){n("iirb")},"data-v-71e03d18",null).exports,M={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n  bossbossbossboss\n")])},staticRenderFns:[]};var j=n("VU/8")({name:"boss"},M,!1,function(t){n("dA6K")},"data-v-0f01c6d0",null).exports,q=n("M3xk"),W=n.n(q),H=(n("9+mO"),{name:"backBtnGroup",data:function(){return{second:5,timer:null}},methods:{backHome:function(){this.$router.replace({name:"home"})},backPrev:function(){this.$router.go(-1)}},mounted:function(){var t=this;this.timer=setInterval(function(){0===t.second?t.backPrev():t.second--},1e3)},beforeDestroy:function(){clearInterval(this.timer)}}),z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Button",{attrs:{size:"large",type:"text"},on:{click:this.backHome}},[this._v("返回首页")]),this._v(" "),e("Button",{attrs:{size:"large",type:"text"}},[this._v("返回上一页("+this._s(this.second)+"s)")])],1)},staticRenderFns:[]},B={name:"error_content",components:{backBtnGroup:n("VU/8")(H,z,!1,null,null,null).exports},props:{code:String,desc:String,src:String}},D={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"error-page"},[n("div",{staticClass:"content-con"},[n("img",{attrs:{src:t.src,alt:"404"}}),t._v(" "),n("div",{staticClass:"text-con"},[n("h4",[t._v(t._s(t.code))]),t._v(" "),n("h5",[t._v(t._s(t.desc))])]),t._v(" "),n("back-btn-group",{staticClass:"back-btn-group"})],1)])},staticRenderFns:[]},Y=n("VU/8")(B,D,!1,null,null,null).exports,J={name:"error_401",components:{errorContent:Y},data:function(){return{src:W.a}}},K={render:function(){var t=this.$createElement;return(this._self._c||t)("error-content",{attrs:{code:"401",desc:"Oh~~您没有浏览这个页面的权限~",src:this.src}})},staticRenderFns:[]},P=n("VU/8")(J,K,!1,null,null,null).exports,G=n("MxJW"),Q=n.n(G),T={name:"error_500",components:{errorContent:Y},data:function(){return{src:Q.a}}},Z={render:function(){var t=this.$createElement;return(this._self._c||t)("error-content",{attrs:{code:"500",desc:"Oh~~鬼知道服务器经历了什么~",src:this.src}})},staticRenderFns:[]},X=n("VU/8")(T,Z,!1,null,null,null).exports,tt=n("jAYZ"),et=n.n(tt),nt={name:"error_404",components:{errorContent:Y},data:function(){return{src:et.a}}},st={render:function(){var t=this.$createElement;return(this._self._c||t)("error-content",{attrs:{code:"404",desc:"Oh~~您的页面好像飞走了~",src:this.src}})},staticRenderFns:[]},ot=n("VU/8")(nt,st,!1,null,null,null).exports;n("7t+N");s.default.use(i.a);var rt=new i.a({routes:[{path:"/",redirect:"/login",component:d,meta:["admin","user"]},{path:"/login",name:"login",component:d,meta:["admin","user"]},{path:"/tips",name:"tips",component:N},{path:"/home",name:"home",component:_,redirect:"/home/Admin",meta:["admin","user"],children:[{path:"admin",name:"用户权限管理",component:E,meta:["admin","user"]},{path:"guest",name:"Guest",component:S,meta:["admin"]},{path:"box",name:"box",component:L,meta:["admin","user"]},{path:"boss",name:"boss",component:j,meta:["admin","user"]}]},{path:"/401",name:"error_401",meta:["admin","user"],component:P},{path:"/500",name:"error_500",meta:["admin","user"],component:X},{path:"*",name:"error_404",meta:["admin","user"],component:ot}]}),it=n("NYxO");s.default.use(it.a);var at={roles:"",showFooter:!0,changableNum:0},ct={getRoles:function(t){return t.roles},isShow:function(t){return t.showFooter},getChangedNum:function(){return at.changableNum}},ut={addRoles:function(t,e){var n=e.roles;t.roles=n},show:function(t){t.showFooter=!0},hide:function(t){t.showFooter=!1},getChangedNum:function(t,e){console.log(t.changableNum+e),t.changableNum+=e}},lt=new it.a.Store({namespaced:!0,state:at,getters:ct,mutations:ut,actions:{addRoles:function(t,e){(0,t.commit)("addRoles",{roles:e.roles})},showFooter:function(t){(0,t.commit)("show")},hideFooter:function(t){(0,t.commit)("hide")},getNewNum:function(t,e){(0,t.commit)("getChangedNum",e)}}}),dt={sq:"https://easy-mock.com/mock/5c7508a66ce4da08919aedef/example",bd:"http://xxxxx22222.com/api"},mt={article:{articleList:function(){return $.a.get(dt.sq+"/mock")},articleDetail:function(t,e){return $.a.get(dt.sq+"/topic/"+t,{params:e})},login:function(t){return $.a.post(dt.sq+"/accesstoken",C.a.stringify(t))}}},ht=n("fC7K"),pt=n("BTaQ"),ft=n.n(pt);n("+skl");s.default.use(ft.a,{transfer:!0,size:"large"}),s.default.use(ht.a),s.default.prototype.$api=mt,rt.beforeEach(function(t,e,n){if(document.title=t.name,"/login"===t.path)n();else{var s=sessionStorage.getItem("roles")||rt.app.$options.store.state.roles;""===s?n("/login"):t.matched.every(function(t){return t.meta.indexOf(s)>-1})?n():n("/401")}}),new s.default({el:"#app",router:rt,store:lt,components:{App:r},template:"<App/>"})},WIO2:function(t,e){},dA6K:function(t,e){},djI8:function(t,e){},iirb:function(t,e){},jAYZ:function(t,e,n){t.exports=n.p+"static/img/error-404.94756dc.svg"},khFj:function(t,e){},mRKy:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.4cfd8dbf29ff8f0c5343.js.map