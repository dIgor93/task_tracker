(function(e){function t(t){for(var r,a,c=t[0],s=t[1],l=t[2],u=0,d=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==i[c]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},i={app:0},o=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-18e12d98":"f24076bb","chunk-21c02aca":"757c33b6","chunk-43cb40ba":"b911f29f","chunk-4a4b9d3d":"d95f0550","chunk-706799cb":"05b71ba1","chunk-a01ce2c0":"34a03522"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-a01ce2c0":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-18e12d98":"31d6cfe0","chunk-21c02aca":"31d6cfe0","chunk-43cb40ba":"31d6cfe0","chunk-4a4b9d3d":"31d6cfe0","chunk-706799cb":"31d6cfe0","chunk-a01ce2c0":"b315c2ce"}[e]+".css",i=s.p+r,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var l=o[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===i))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===r||u===i)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],p.parentNode.removeChild(p),n(o)},p.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(p);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}i[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4230:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("v-app",{attrs:{id:"inspire"}},[n("v-app-bar",{attrs:{app:"",color:"primary",dark:"","clipped-left":""}},[n("router-link",{attrs:{to:"/",tag:"i"}},[n("v-icon",{attrs:{medium:"",left:""}},[e._v("mdi-home")])],1),n("v-toolbar-title",[e._v(e._s(e.title))])],1),n("v-content",[n("v-container",{attrs:{"fill-height":"",fluid:""}},[n("v-layout",{attrs:{"justify-space-between":"","align-start":""}},[n("v-flex",[n("router-view")],1)],1)],1)],1)],1)],1)},i=[],o={name:"App",components:{},data:function(){return{title:"Управление проектами"}}},c=o,s=n("2877"),l=n("6544"),u=n.n(l),d=n("7496"),p=n("40dc"),f=n("a523"),m=n("a75b"),h=n("0e8f"),v=n("132d"),b=n("a722"),g=n("2a7f"),k=Object(s["a"])(c,a,i,!1,null,null,null),y=k.exports;u()(k,{VApp:d["a"],VAppBar:p["a"],VContainer:f["a"],VContent:m["a"],VFlex:h["a"],VIcon:v["a"],VLayout:b["a"],VToolbarTitle:g["a"]});n("d3b7");var _=n("8c4f"),j=n("b4b3"),w=n.n(j),x=(n("3a93"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"project"},[n("Navigation",{attrs:{project_id:e.project}}),n("router-view",{attrs:{project_id:e.project}})],1)}),V=[],C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-navigation-drawer",{attrs:{absolute:"",dark:"",permanent:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-list",{staticClass:"py-0"},[r("v-list-item",{class:"px-3",attrs:{"two-line":""}},[r("v-list-item-avatar",[r("img",{attrs:{src:n("a5f8")}})]),r("v-list-item-content",{attrs:{align:"left"}},[r("v-list-item-title",[e._v(e._s(e.getProjectName(e.project_id,e.items)))]),r("v-list-item-subtitle",[e._v(e._s(e.project_id))])],1)],1),r("v-divider"),r("v-list-item-group",{attrs:{"active-class":"primary"}},e._l(e.menu_items,(function(t){return r("v-list-item",{key:t.name,attrs:{link:"",align:"left"}},[r("v-list-item-content",{on:{click:function(n){return e.goto(t.ref)}}},[r("v-list-item-title",[e._v(e._s(t.name))]),r("v-list-item-subtitle",[e._v(e._s(t.id))])],1)],1)})),1)],1)],1)],1)},O=[],S=(n("99af"),n("4de4"),n("b0c0"),n("25f0"),{name:"Navigation",props:["project_id"],methods:{getProjectName:function(e,t){return t.filter((function(t){return t.id.toString()===e.toString()}))[0].name},goto:function(e){this.$router.push("/main/".concat(this.project_id).concat(e))}},data:function(){return{selected:[],project:this.project_id,menu_items:[{name:"Аналитика",ref:"/analysis"},{name:"Архитектура",ref:"/architecture"},{name:"Разработка",ref:"/development"},{name:"Тестирование",ref:"/testing"},{name:"Сопровождение",ref:"/support"},{name:"Документы и ссылки",ref:"/docs"}],items:[]}},mounted:function(){var e=this;fetch("http://localhost:8000/projects").then((function(e){return e.json()})).then((function(t){e.items=t}))}}),P=S,T=n("ce7e"),E=n("8860"),I=n("da13"),L=n("8270"),A=n("5d23"),N=n("1baa"),D=n("f774"),$=Object(s["a"])(P,C,O,!1,null,"31c9d1a5",null),B=$.exports;u()($,{VDivider:T["a"],VList:E["a"],VListItem:I["a"],VListItemAvatar:L["a"],VListItemContent:A["a"],VListItemGroup:N["a"],VListItemSubtitle:A["b"],VListItemTitle:A["c"],VNavigationDrawer:D["a"]});var M={name:"Project",components:{Navigation:B},props:["project"],data:function(){return{selected:[],headers:[{text:"ID",value:"id"},{text:"Название проекта",align:"left",sortable:!1,value:"name"}]}}},F=M,q=Object(s["a"])(F,x,V,!1,null,null,null),H=q.exports,J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-app",[n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"600","min-width":"500"}},[n("v-card-title",[e._v("Выберите проект")]),n("v-card-text",[n("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),n("v-data-table",{attrs:{search:e.search,headers:e.headers,items:e.items,"single-select":!0,"item-key":"id","fixed-header":""},on:{"click:row":e.rowClick},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),n("v-card-subtitle",[n("router-link",{attrs:{to:{name:"main",path:"main",params:{project:this.selectedId}},tag:"div"}},[n("v-btn",{attrs:{depressed:"",block:"",large:"",color:"primary"}},[e._v("Выбрать ")])],1)],1)],1)],1)],1)},G=[],K={name:"SelectProj",methods:{rowClick:function(e,t){t.select(!0),this.selectedId=e.id.toString()}},data:function(){return{search:"",selected:[],selectedId:"",headers:[{text:"ID",value:"id"},{text:"Название проекта",align:"left",sortable:!1,value:"name"}],items:[]}},mounted:function(){var e=this;fetch("http://localhost:8000/projects").then((function(e){return e.json()})).then((function(t){e.items=t}))}},U=K,z=(n("cccb"),n("8336")),Q=n("b0af"),R=n("99d9"),W=n("8fea"),X=n("8654"),Y=Object(s["a"])(U,J,G,!1,null,null,null),Z=Y.exports;u()(Y,{VApp:d["a"],VBtn:z["a"],VCard:Q["a"],VCardSubtitle:R["a"],VCardText:R["b"],VCardTitle:R["c"],VDataTable:W["a"],VTextField:X["a"]}),r["a"].use(w.a),r["a"].use(_["a"]);var ee=[{path:"/",name:"Home",component:Z},{path:"/main/:project",name:"main",component:H,props:!0,children:[{name:"resources",path:"analysis",component:function(){return n.e("chunk-18e12d98").then(n.bind(null,"6458"))}},{path:"architecture",component:function(){return n.e("chunk-21c02aca").then(n.bind(null,"d418"))}},{path:"development",component:function(){return n.e("chunk-706799cb").then(n.bind(null,"470e"))}},{path:"testing",component:function(){return n.e("chunk-a01ce2c0").then(n.bind(null,"8e36"))}},{path:"support",component:function(){return n.e("chunk-43cb40ba").then(n.bind(null,"02d2"))}},{path:"docs",component:function(){return n.e("chunk-4a4b9d3d").then(n.bind(null,"19bd"))}}]}],te=new _["a"]({routes:ee}),ne=te,re=n("f309");r["a"].use(re["a"]);var ae=new re["a"]({theme:{options:{customProperties:!0}}});r["a"].config.productionTip=!1,new r["a"]({router:ne,vuetify:ae,render:function(e){return e(y)}}).$mount("#app")},a5f8:function(e,t,n){e.exports=n.p+"img/01-6_86395.f59693dc.png"},cccb:function(e,t,n){"use strict";var r=n("4230"),a=n.n(r);a.a}});
//# sourceMappingURL=app.ab73390b.js.map