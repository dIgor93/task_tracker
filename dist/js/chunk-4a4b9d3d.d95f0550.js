(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a4b9d3d"],{"0fd9":function(t,e,a){"use strict";a("99af"),a("4160"),a("caad"),a("13d5"),a("4ec9"),a("b64b"),a("d3b7"),a("ac1f"),a("2532"),a("3ca3"),a("5319"),a("159b"),a("ddb0");var n=a("ade3"),r=a("5530"),c=(a("4b85"),a("2b0e")),s=a("d9f7"),o=a("80d2"),i=["sm","md","lg","xl"],l=["start","end","center"];function u(t,e){return i.reduce((function(a,n){return a[t+Object(o["B"])(n)]=e(),a}),{})}var d=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},f=u("align",(function(){return{type:String,default:null,validator:d}})),p=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},v=u("justify",(function(){return{type:String,default:null,validator:p}})),b=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},h=u("alignContent",(function(){return{type:String,default:null,validator:b}})),g={align:Object.keys(f),justify:Object.keys(v),alignContent:Object.keys(h)},m={align:"align",justify:"justify",alignContent:"align-content"};function j(t,e,a){var n=m[t];if(null!=a){if(e){var r=e.replace(t,"");n+="-".concat(r)}return n+="-".concat(a),n.toLowerCase()}}var x=new Map;e["a"]=c["a"].extend({name:"v-row",functional:!0,props:Object(r["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},f,{justify:{type:String,default:null,validator:p}},v,{alignContent:{type:String,default:null,validator:b}},h),render:function(t,e){var a=e.props,r=e.data,c=e.children,o="";for(var i in a)o+=String(a[i]);var l=x.get(o);return l||function(){var t,e;for(e in l=[],g)g[e].forEach((function(t){var n=a[t],r=j(e,t,n);r&&l.push(r)}));l.push((t={"no-gutters":a.noGutters,"row--dense":a.dense},Object(n["a"])(t,"align-".concat(a.align),a.align),Object(n["a"])(t,"justify-".concat(a.justify),a.justify),Object(n["a"])(t,"align-content-".concat(a.alignContent),a.alignContent),t)),x.set(o,l)}(),t(a.tag,Object(s["a"])(r,{staticClass:"row",class:l}),c)}})},"19bd":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-content",{staticClass:"py-0",staticStyle:{"margin-left":"256px"}},[a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-card",{staticClass:"lighten-4 primary",attrs:{width:"100%"}},[a("v-card-title",[t._v("Ресурсы")])],1),a("v-row",[a("v-col",[a("Requirements")],1),a("v-col",[a("Tasks")],1)],1),a("v-row",[a("v-col",[a("Statistic")],1),a("v-col",[a("Comand")],1)],1)],1)],1)},r=[],c=a("e4ba"),s=a("9448"),o=a("ecef"),i=a("c390"),l={name:"Resources",components:{Statistic:i["a"],Comand:c["a"],Tasks:s["a"],Requirements:o["a"]}},u=l,d=a("2877"),f=a("6544"),p=a.n(f),v=a("b0af"),b=a("99d9"),h=a("62ad"),g=a("a523"),m=a("a75b"),j=a("0fd9"),x=Object(d["a"])(u,n,r,!1,null,"714e9d36",null);e["default"]=x.exports;p()(x,{VCard:v["a"],VCardTitle:b["c"],VCol:h["a"],VContainer:g["a"],VContent:m["a"],VRow:j["a"]})},"62ad":function(t,e,a){"use strict";a("4160"),a("caad"),a("13d5"),a("45fc"),a("4ec9"),a("a9e3"),a("b64b"),a("d3b7"),a("ac1f"),a("3ca3"),a("5319"),a("2ca0"),a("159b"),a("ddb0");var n=a("ade3"),r=a("5530"),c=(a("4b85"),a("2b0e")),s=a("d9f7"),o=a("80d2"),i=["sm","md","lg","xl"],l=function(){return i.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),u=function(){return i.reduce((function(t,e){return t["offset"+Object(o["B"])(e)]={type:[String,Number],default:null},t}),{})}(),d=function(){return i.reduce((function(t,e){return t["order"+Object(o["B"])(e)]={type:[String,Number],default:null},t}),{})}(),f={col:Object.keys(l),offset:Object.keys(u),order:Object.keys(d)};function p(t,e,a){var n=t;if(null!=a&&!1!==a){if(e){var r=e.replace(t,"");n+="-".concat(r)}return"col"!==t||""!==a&&!0!==a?(n+="-".concat(a),n.toLowerCase()):n.toLowerCase()}}var v=new Map;e["a"]=c["a"].extend({name:"v-col",functional:!0,props:Object(r["a"])({cols:{type:[Boolean,String,Number],default:!1}},l,{offset:{type:[String,Number],default:null}},u,{order:{type:[String,Number],default:null}},d,{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var a=e.props,r=e.data,c=e.children,o=(e.parent,"");for(var i in a)o+=String(a[i]);var l=v.get(o);return l||function(){var t,e;for(e in l=[],f)f[e].forEach((function(t){var n=a[t],r=p(e,t,n);r&&l.push(r)}));var r=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!r||!a.cols},Object(n["a"])(t,"col-".concat(a.cols),a.cols),Object(n["a"])(t,"offset-".concat(a.offset),a.offset),Object(n["a"])(t,"order-".concat(a.order),a.order),Object(n["a"])(t,"align-self-".concat(a.alignSelf),a.alignSelf),t)),v.set(o,l)}(),t(a.tag,Object(s["a"])(r,{class:l}),c)}})},9448:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{"min-height":"310px"}},[a("v-card-title",[t._v(" Задачи ")]),a("v-card-text",[a("v-data-table",{attrs:{headers:t.headers,items:t.tasks,"item-key":"id",height:"50%","items-per-page":"5","footer-props":{"items-per-page-options":[5,10,15,-1],"items-per-page-text":"Элементов на странице:","items-per-page-all-text":"Все"},dense:""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1)},r=[],c=(a("99af"),a("d3b7"),{name:"Tasks",props:["data"],data:function(){return{selected:[],headers:[{text:"ID",value:"id"},{text:"Наименование",value:"name"},{text:"Статус",value:"status"}],tasks:[]}},mounted:function(){var t=this;fetch("http://localhost:8000/resources/".concat(this.data.project,"/tasks/").concat(this.data.group)).then((function(t){return t.json()})).then((function(e){t.tasks=e}))}}),s=c,o=a("2877"),i=a("6544"),l=a.n(i),u=a("b0af"),d=a("99d9"),f=a("8fea"),p=Object(o["a"])(s,n,r,!1,null,"3a4cef42",null);e["a"]=p.exports;l()(p,{VCard:u["a"],VCardText:d["b"],VCardTitle:d["c"],VDataTable:f["a"]})},c390:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{"min-height":"380px"}},[a("v-card-title",[t._v(" График ")]),a("v-card-text",[a("vc-donut",{attrs:{background:"white",foreground:"grey",size:210,unit:"px",thickness:50,hasLegend:"",legendPlacement:"top",sections:t.sections,total:100}})],1)],1)},r=[],c=(a("99af"),a("d3b7"),{name:"Statistic",props:["data"],data:function(){return{sections:[]}},mounted:function(){var t=this;fetch("http://localhost:8000/resources/".concat(this.data.project,"/statistic/").concat(this.data.group)).then((function(t){return t.json()})).then((function(e){t.sections=e}))}}),s=c,o=a("2877"),i=a("6544"),l=a.n(i),u=a("b0af"),d=a("99d9"),f=Object(o["a"])(s,n,r,!1,null,"2f49c790",null);e["a"]=f.exports;l()(f,{VCard:u["a"],VCardText:d["b"],VCardTitle:d["c"]})},e4ba:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{"min-height":"380px"}},[a("v-card-title",[t._v(" Команда ")]),a("v-card-text",[a("v-data-table",{attrs:{headers:t.headers,items:t.employers,"item-key":"id",height:"50%","items-per-page":"4","footer-props":{"items-per-page-options":[4,8,12,-1],"items-per-page-text":"Элементов на странице:","items-per-page-all-text":"Все"}},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1)},r=[],c=(a("99af"),a("d3b7"),{name:"Comand",props:["data"],data:function(){return{selected:[],headers:[{text:"ID",value:"id"},{text:"ФИО",value:"name"},{text:"Должность",value:"role"}],employers:[]}},mounted:function(){var t=this;fetch("http://localhost:8000/resources/".concat(this.data.project,"/command/").concat(this.data.group)).then((function(t){return t.json()})).then((function(e){t.employers=e}))}}),s=c,o=a("2877"),i=a("6544"),l=a.n(i),u=a("b0af"),d=a("99d9"),f=a("8fea"),p=Object(o["a"])(s,n,r,!1,null,"3c37e405",null);e["a"]=p.exports;l()(p,{VCard:u["a"],VCardText:d["b"],VCardTitle:d["c"],VDataTable:f["a"]})},ecef:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{attrs:{"min-height":"310px"}},[a("v-card-title",[t._v(" Требования ")]),a("v-card-text",[a("v-data-table",{attrs:{headers:t.headers,items:t.requirements,"item-key":"id",height:"50%",dense:"","items-per-page":"5","footer-props":{"items-per-page-options":[5,10,15,-1],"items-per-page-text":"Элементов на странице:","items-per-page-all-text":"Все"}},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1)},r=[],c=(a("99af"),a("d3b7"),{name:"Requirements",props:["data"],data:function(){return{selected:[],headers:[{text:"ID",value:"id"},{text:"Наименование",value:"name"}],requirements:[]}},mounted:function(){var t=this;fetch("http://localhost:8000/resources/".concat(this.data.project,"/requirements/").concat(this.data.group)).then((function(t){return t.json()})).then((function(e){t.requirements=e}))}}),s=c,o=a("2877"),i=a("6544"),l=a.n(i),u=a("b0af"),d=a("99d9"),f=a("8fea"),p=Object(o["a"])(s,n,r,!1,null,"0f2bb01d",null);e["a"]=p.exports;l()(p,{VCard:u["a"],VCardText:d["b"],VCardTitle:d["c"],VDataTable:f["a"]})}}]);
//# sourceMappingURL=chunk-4a4b9d3d.d95f0550.js.map