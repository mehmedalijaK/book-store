(function(){"use strict";var e={5310:function(e,t,o){var r=o(6369),a=(o(560),function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("nav",[t("b-navbar",{attrs:{toggleable:"lg",type:"light",variant:"light"}},[t("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),t("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[t("b-navbar-nav",[t("b-nav-item",{staticStyle:{color:"blue"},attrs:{to:"/"}},[e._v("Home")]),e.token?t("b-nav-item",{staticStyle:{color:"green"},attrs:{to:"/create-order"}},[e._v("Create order")]):e._e(),e.token?e._e():t("b-nav-item",{staticStyle:{color:"orange"},attrs:{to:"/register"}},[e._v("Register")]),e.token?t("b-nav-item",{staticStyle:{color:"purple"},on:{click:function(t){e.logout(),e.$router.push({name:"login"})}}},[e._v("Log Out")]):t("b-nav-item",{staticStyle:{color:"red"},attrs:{to:"/login"}},[e._v("Log In")])],1)],1)],1)],1),t("router-view")],1)}),n=[],s=o(3822),i={computed:{...(0,s.rn)(["token"])},methods:{...(0,s.OI)(["removeToken","setToken"]),logout(){this.removeToken()}},mounted(){localStorage.token&&this.setToken(localStorage.token)}},l=i,u=o(1001),m=(0,u.Z)(l,a,n,!1,null,null,null),c=m.exports,d=o(2631),f=function(){var e=this;e._self._c;return e._m(0)},p=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"home"},[t("h2",[e._v("Project for RAF")]),t("p",[e._v("Mehmedalija Karisik RN4/21")])])}],b={name:"HomeView",components:{}},h=b,v=(0,u.Z)(h,f,p,!1,null,null,null),k=v.exports,g=function(){var e=this,t=e._self._c;return t("div",{staticClass:"order"},[t("Header",{attrs:{title:e.headerTitle}}),t("b-alert",{attrs:{variant:e.statusnaPorukaTip,show:null!=e.statusnaPoruka}},[e._v(" "+e._s(e.statusnaPoruka)+" ")]),t("div",{staticClass:"user-info"},[t("b-container",{attrs:{fluid:""}},[t("b-row",[t("b-col",{attrs:{sm:"3"}},[t("label",{attrs:{for:"imeprezime"}},[e._v("Your name and surname")])]),t("b-col",{attrs:{sm:"9"}},[t("b-form-input",{attrs:{id:"imeprezime",state:e.validnoImePrezime},model:{value:e.forma.ime_prezime,callback:function(t){e.$set(e.forma,"ime_prezime",t)},expression:"forma.ime_prezime"}})],1)],1),t("b-row",[t("b-col",{attrs:{sm:"3"}},[t("label",[e._v("Your address")])]),t("b-col",{attrs:{sm:"9"}},[t("b-form-input",{attrs:{id:"adresa",state:e.validnoAdresa},model:{value:e.forma.adresa,callback:function(t){e.$set(e.forma,"adresa",t)},expression:"forma.adresa"}})],1)],1),t("b-row",[t("b-col",{attrs:{sm:"3"}},[t("label",[e._v("Your phone number")])]),t("b-col",{attrs:{sm:"9"}},[t("b-form-input",{attrs:{id:"telefon",state:e.validnoBrojTelefona,rows:"4"},model:{value:e.forma.broj_telefona,callback:function(t){e.$set(e.forma,"broj_telefona",t)},expression:"forma.broj_telefona"}})],1)],1)],1)],1),t("div",{staticClass:"user-order"},[t("b-form-group",{attrs:{label:"Select Book"}},[t("b-form-select",{staticClass:"mb-3",attrs:{options:e.bookOptions},model:{value:e.selectedBook,callback:function(t){e.selectedBook=t},expression:"selectedBook"}})],1),t("b-button",{attrs:{variant:"success"},on:{click:e.addBook}},[e._v("Add Book")]),t("b-table",{attrs:{striped:"",hover:"",items:e.selectedBooks,fields:e.fields},scopedSlots:e._u([{key:"cell(quantity)",fn:function(o){return[t("b-form-input",{attrs:{type:"number",min:"0"},model:{value:o.item.quantity,callback:function(t){e.$set(o.item,"quantity",t)},expression:"data.item.quantity"}})]}},{key:"cell(total)",fn:function(t){return[e._v(" "+e._s((t.item.cena*t.item.quantity).toFixed(2))+" ")]}}])}),t("p",[e._v("Total Amount: "+e._s(e.totalAmount.toFixed(2)))]),t("b-button",{attrs:{variant:"primary"},on:{click:e.posalji}},[e._v("Send")])],1)],1)},_=[],y=function(){var e=this,t=e._self._c;return t("div",{staticClass:"header"},[t("h1",[e._v(e._s(e.title))])])},j=[],w={name:"AppHeader",props:{title:String}},T=w,S=(0,u.Z)(T,y,j,!1,null,"9e38f5f8",null),P=S.exports,O={name:"CreateOrderView",components:{Header:P},data(){return{headerTitle:"Create order",statusnaPoruka:null,statusnaPorukaTip:null,forma:{ime_prezime:null,adresa:null,broj_telefona:null},selectedBook:null,selectedBooks:[],orderDetails:[]}},computed:{validnoImePrezime(){return null==this.forma.ime_prezime?null:this.forma.ime_prezime.length>2},validnoAdresa(){return null==this.forma.adresa?null:this.forma.adresa.length>2},validnoBrojTelefona(){return null==this.forma.broj_telefona?null:this.forma.broj_telefona.length>6},...(0,s.rn)(["knjige","token"]),fields(){return[{key:"naziv",label:"Naziv"},{key:"opis",label:"Opis"},{key:"cena",label:"Cena"},{key:"quantity",label:"Quantity",sortable:!0},{key:"total",label:"Total"}]},bookOptions(){return this.knjige?this.knjige.map((e=>({value:e.id,text:e.naziv}))):[]},totalAmount(){return this.selectedBooks.reduce(((e,t)=>e+t.cena*t.quantity),0)}},mounted(){this.fetchKnjige(this.token)},methods:{...(0,s.nv)(["fetchKnjige"]),addBook(){if(!this.selectedBook)return;const e=this.knjige.find((e=>e.id===this.selectedBook));if(e){const t=this.selectedBooks.find((t=>t.id===e.id));t||this.selectedBooks.push({...e,quantity:1})}this.selectedBook=null},posalji(){this.orderDetails=this.selectedBooks.map((e=>({bookId:e.id,bookPrice:e.cena,quantity:e.quantity})));const e={status:"Novo",vreme_narucivanja:Date.now(),zakazano_vreme:Date.now(),adresa:this.forma.adresa,telefon:this.forma.broj_telefona,ime_prezime:this.forma.ime_prezime,order_details:this.orderDetails};this.validnoImePrezime&&this.validnoAdresa&&this.validnoBrojTelefona&&(fetch("http://localhost:9000/narudzbina",{headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.token}`},method:"POST",body:JSON.stringify(e)}).then((e=>e.json())).then((e=>{console.log(e),e.error?(this.statusnaPoruka=e.error,this.statusnaPorukaTip="danger"):(this.statusnaPoruka="Uspesno ste narucili knjige",this.statusnaPorukaTip="success")})),console.log(this.orderDetails))}}},x=O,B=(0,u.Z)(x,g,_,!1,null,null,null),z=B.exports,C=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("Header",{attrs:{title:"Create account"}}),t("b-form",{on:{submit:e.onSubmit}},[t("b-form-group",{attrs:{label:"Email address:","label-for":"email"}},[t("b-form-input",{attrs:{id:"email",type:"email",placeholder:"Enter email",required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),t("b-form-group",{attrs:{label:"Username:","label-for":"username"}},[t("b-form-input",{attrs:{id:"username",placeholder:"Enter username",required:""},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),t("b-form-group",{attrs:{label:"Password:","label-for":"password"}},[t("b-form-input",{attrs:{id:"password",type:"password",required:""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),t("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Register")])],1)],1)},q=[],$={name:"RegisterView",components:{Header:P},data(){return{form:{email:"",username:"",password:""}}},methods:{...(0,s.nv)(["register"]),onSubmit(e){e.preventDefault(),this.register(this.form),this.$router.push({name:"home"})}}},A=$,Z=(0,u.Z)(A,C,q,!1,null,"608b1416",null),H=Z.exports,D=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("Header",{attrs:{title:"Log In"}}),t("b-form",{on:{submit:e.onSubmit}},[t("b-form-group",{attrs:{label:"Username:","label-for":"username"}},[t("b-form-input",{attrs:{id:"username",placeholder:"Enter username",required:""},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),t("b-form-group",{attrs:{label:"Password:","label-for":"password"}},[t("b-form-input",{attrs:{id:"password",type:"password",required:""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),t("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Login")])],1)],1)},I=[],K={name:"LoginView",components:{Header:P},data(){return{form:{username:"",password:""}}},methods:{...(0,s.nv)(["login"]),onSubmit(e){e.preventDefault(),this.login(this.form),this.$router.push({name:"home"})}}},N=K,E=(0,u.Z)(N,D,I,!1,null,"3841734e",null),L=E.exports;r["default"].use(d.ZP);const R=[{path:"/",name:"home",component:k},{path:"/create-order",name:"create_order",component:z},{path:"/register",name:"register",component:H},{path:"/login",name:"login",component:L}],F=new d.ZP({mode:"history",base:"/",routes:R});var M=F;r["default"].use(s.ZP);var V=new s.ZP.Store({state:{knjige:[],token:""},getters:{},mutations:{addKnjige(e,t){e.knjige=t},setToken(e,t){e.token=t,localStorage.token=t},removeToken(e){e.token="",localStorage.token=""}},actions:{async fetchKnjige({commit:e},t){fetch("http://localhost:9000/knjiga",{headers:{Authorization:`Bearer ${t}`}}).then((e=>e.json())).then((t=>e("addKnjige",t)))},register({commit:e},t){fetch("http://localhost:9001/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>e.json())).then((t=>e("setToken",t.token)))},login({commit:e},t){fetch("http://localhost:9001/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>e.json())).then((t=>{t.msg?alert(t.msg):e("setToken",t.token)}))}},modules:{}}),J=o(6681),U=o(9425);o(7024);r["default"].use(J.XG7),r["default"].use(U.A7),r["default"].config.productionTip=!1,new r["default"]({router:M,store:V,render:e=>e(c)}).$mount("#app")}},t={};function o(r){var a=t[r];if(void 0!==a)return a.exports;var n=t[r]={exports:{}};return e[r].call(n.exports,n,n.exports,o),n.exports}o.m=e,function(){var e=[];o.O=function(t,r,a,n){if(!r){var s=1/0;for(m=0;m<e.length;m++){r=e[m][0],a=e[m][1],n=e[m][2];for(var i=!0,l=0;l<r.length;l++)(!1&n||s>=n)&&Object.keys(o.O).every((function(e){return o.O[e](r[l])}))?r.splice(l--,1):(i=!1,n<s&&(s=n));if(i){e.splice(m--,1);var u=a();void 0!==u&&(t=u)}}return t}n=n||0;for(var m=e.length;m>0&&e[m-1][2]>n;m--)e[m]=e[m-1];e[m]=[r,a,n]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,n,s=r[0],i=r[1],l=r[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(a in i)o.o(i,a)&&(o.m[a]=i[a]);if(l)var m=l(o)}for(t&&t(r);u<s.length;u++)n=s[u],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(m)},r=self["webpackChunkapp_vue"]=self["webpackChunkapp_vue"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(5310)}));r=o.O(r)})();
//# sourceMappingURL=app.85e37d2c.js.map