(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a01ce2c0"],{"0fd9":function(t,e,i){"use strict";i("99af"),i("4160"),i("caad"),i("13d5"),i("4ec9"),i("b64b"),i("d3b7"),i("ac1f"),i("2532"),i("3ca3"),i("5319"),i("159b"),i("ddb0");var n=i("ade3"),s=i("5530"),r=(i("4b85"),i("2b0e")),a=i("d9f7"),o=i("80d2"),c=["sm","md","lg","xl"],l=["start","end","center"];function u(t,e){return c.reduce((function(i,n){return i[t+Object(o["B"])(n)]=e(),i}),{})}var h=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},d=u("align",(function(){return{type:String,default:null,validator:h}})),f=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},v=u("justify",(function(){return{type:String,default:null,validator:f}})),p=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},g=u("alignContent",(function(){return{type:String,default:null,validator:p}})),m={align:Object.keys(d),justify:Object.keys(v),alignContent:Object.keys(g)},b={align:"align",justify:"justify",alignContent:"align-content"};function w(t,e,i){var n=b[t];if(null!=i){if(e){var s=e.replace(t,"");n+="-".concat(s)}return n+="-".concat(i),n.toLowerCase()}}var x=new Map;e["a"]=r["a"].extend({name:"v-row",functional:!0,props:Object(s["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h}},d,{justify:{type:String,default:null,validator:f}},v,{alignContent:{type:String,default:null,validator:p}},g),render:function(t,e){var i=e.props,s=e.data,r=e.children,o="";for(var c in i)o+=String(i[c]);var l=x.get(o);return l||function(){var t,e;for(e in l=[],m)m[e].forEach((function(t){var n=i[t],s=w(e,t,n);s&&l.push(s)}));l.push((t={"no-gutters":i.noGutters,"row--dense":i.dense},Object(n["a"])(t,"align-".concat(i.align),i.align),Object(n["a"])(t,"justify-".concat(i.justify),i.justify),Object(n["a"])(t,"align-content-".concat(i.alignContent),i.alignContent),t)),x.set(o,l)}(),t(i.tag,Object(a["a"])(s,{staticClass:"row",class:l}),r)}})},"13b3":function(t,e,i){},"1bfb":function(t,e,i){},"608c":function(t,e,i){},"62ad":function(t,e,i){"use strict";i("4160"),i("caad"),i("13d5"),i("45fc"),i("4ec9"),i("a9e3"),i("b64b"),i("d3b7"),i("ac1f"),i("3ca3"),i("5319"),i("2ca0"),i("159b"),i("ddb0");var n=i("ade3"),s=i("5530"),r=(i("4b85"),i("2b0e")),a=i("d9f7"),o=i("80d2"),c=["sm","md","lg","xl"],l=function(){return c.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),u=function(){return c.reduce((function(t,e){return t["offset"+Object(o["B"])(e)]={type:[String,Number],default:null},t}),{})}(),h=function(){return c.reduce((function(t,e){return t["order"+Object(o["B"])(e)]={type:[String,Number],default:null},t}),{})}(),d={col:Object.keys(l),offset:Object.keys(u),order:Object.keys(h)};function f(t,e,i){var n=t;if(null!=i&&!1!==i){if(e){var s=e.replace(t,"");n+="-".concat(s)}return"col"!==t||""!==i&&!0!==i?(n+="-".concat(i),n.toLowerCase()):n.toLowerCase()}}var v=new Map;e["a"]=r["a"].extend({name:"v-col",functional:!0,props:Object(s["a"])({cols:{type:[Boolean,String,Number],default:!1}},l,{offset:{type:[String,Number],default:null}},u,{order:{type:[String,Number],default:null}},h,{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var i=e.props,s=e.data,r=e.children,o=(e.parent,"");for(var c in i)o+=String(i[c]);var l=v.get(o);return l||function(){var t,e;for(e in l=[],d)d[e].forEach((function(t){var n=i[t],s=f(e,t,n);s&&l.push(s)}));var s=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!s||!i.cols},Object(n["a"])(t,"col-".concat(i.cols),i.cols),Object(n["a"])(t,"offset-".concat(i.offset),i.offset),Object(n["a"])(t,"order-".concat(i.order),i.order),Object(n["a"])(t,"align-self-".concat(i.alignSelf),i.alignSelf),t)),v.set(o,l)}(),t(i.tag,Object(a["a"])(s,{class:l}),r)}})},"8e36":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-content",{staticClass:"py-0",staticStyle:{"margin-left":"256px"}},[i("v-container",{attrs:{fluid:"","fill-height":""}},[i("v-card",{staticClass:"lighten-4 primary",attrs:{width:"100%"}},[i("v-card-title",[t._v("Ресурсы")])],1),i("v-tabs",{attrs:{"background-color":"transparent",color:"basil",grow:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.testings,(function(e){return i("v-tab",{key:e.id},[t._v(" "+t._s(e.name)+" ")])})),1),i("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.testings,(function(e){return i("v-tab-item",{key:e.id},[i("v-content",{staticClass:"py-0"},[i("v-container",{attrs:{fluid:"","fill-height":""}},[i("v-row",[i("v-col",[i("Requirements",{attrs:{data:{project:t.project_id,group:"testing",id:e.id}}})],1),i("v-col",[i("Tasks",{attrs:{data:{project:t.project_id,group:"testing",id:e.id}}})],1)],1),i("v-row",[i("v-col",[i("Statistic",{attrs:{data:{project:t.project_id,group:"testing",id:e.id}}})],1),i("v-col",[i("Comand",{attrs:{data:{project:t.project_id,group:"testing",id:e.id}}})],1)],1)],1)],1)],1)})),1)],1)],1)},s=[],r=i("ecef"),a=i("9448"),o=i("c390"),c=i("e4ba"),l={name:"Testing",components:{Comand:c["a"],Statistic:o["a"],Tasks:a["a"],Requirements:r["a"]},props:["project_id"],data:function(){return{tab:null,testings:[{id:1,name:"Функциональное"},{id:2,name:"Регрессионное"},{id:3,name:"и др"}]}}},u=l,h=i("2877"),d=i("6544"),f=i.n(d),v=i("b0af"),p=i("99d9"),g=i("62ad"),m=i("a523"),b=i("a75b"),w=i("0fd9"),x=(i("c975"),i("ac1f"),i("5319"),i("5530")),y=i("4e82"),C=i("1c87"),O=i("7560"),$=i("80d2"),T=i("58df"),j=Object(T["a"])(C["a"],Object(y["a"])("tabsBar"),O["a"]),S=j.extend().extend().extend({name:"v-tab",props:{ripple:{type:[Boolean,Object],default:!0}},data:function(){return{proxyClass:"v-tab--active"}},computed:{classes:function(){return Object(x["a"])({"v-tab":!0},C["a"].options.computed.classes.call(this),{"v-tab--disabled":this.disabled},this.groupClasses)},value:function(){var t=this.to||this.href||"";if(this.$router&&this.to===Object(this.to)){var e=this.$router.resolve(this.to,this.$route,this.append);t=e.href}return t.replace("#","")}},mounted:function(){this.onRouteChange()},methods:{click:function(t){this.href&&this.href.indexOf("#")>-1&&t.preventDefault(),t.detail&&this.$el.blur(),this.$emit("click",t),this.to||this.toggle()}},render:function(t){var e=this,i=this.generateRouteLink(),n=i.tag,s=i.data;return s.attrs=Object(x["a"])({},s.attrs,{"aria-selected":String(this.isActive),role:"tab",tabindex:0}),s.on=Object(x["a"])({},s.on,{keydown:function(t){t.keyCode===$["u"].enter&&e.click(t),e.$emit("keydown",t)}}),t(n,s,this.$slots.default)}}),k=i("9d65"),I=i("c3f0"),B=Object(T["a"])(k["a"],Object(y["a"])("windowGroup","v-window-item","v-window")),_=B.extend().extend().extend({name:"v-window-item",directives:{Touch:I["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object($["g"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object($["g"])(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}}),A=_.extend({name:"v-tab-item",props:{id:String},methods:{genWindowItem:function(){var t=_.options.methods.genWindowItem.call(this);return t.data.domProps=t.data.domProps||{},t.data.domProps.id=this.id||this.value,t}}}),V=(i("b0c0"),i("a9e3"),i("1bfb"),i("b85c")),R=(i("99af"),i("fb6a"),i("608c"),i("9d26")),N=i("0789"),E=i("604c"),P=i("dc22"),W=Object(T["a"])(E["a"]).extend({name:"base-slide-group",directives:{Resize:P["a"],Touch:I["a"]},props:{activeClass:{type:String,default:"v-slide-item--active"},centerActive:Boolean,nextIcon:{type:String,default:"$next"},mobileBreakPoint:{type:[Number,String],default:1264,validator:function(t){return!isNaN(parseInt(t))}},prevIcon:{type:String,default:"$prev"},showArrows:Boolean},data:function(){return{internalItemsLength:0,isOverflowing:!1,resizeTimeout:0,startX:0,scrollOffset:0,widths:{content:0,wrapper:0}}},computed:{__cachedNext:function(){return this.genTransition("next")},__cachedPrev:function(){return this.genTransition("prev")},classes:function(){return Object(x["a"])({},E["a"].options.computed.classes.call(this),{"v-slide-group":!0,"v-slide-group--has-affixes":this.hasAffixes,"v-slide-group--is-overflowing":this.isOverflowing})},hasAffixes:function(){return(this.showArrows||!this.isMobile)&&this.isOverflowing},hasNext:function(){if(!this.hasAffixes)return!1;var t=this.widths,e=t.content,i=t.wrapper;return e>Math.abs(this.scrollOffset)+i},hasPrev:function(){return this.hasAffixes&&0!==this.scrollOffset},isMobile:function(){return this.$vuetify.breakpoint.width<this.mobileBreakPoint}},watch:{internalValue:"setWidths",isOverflowing:"setWidths",scrollOffset:function(t){this.$refs.content.style.transform="translateX(".concat(-t,"px)")}},beforeUpdate:function(){this.internalItemsLength=(this.$children||[]).length},updated:function(){this.internalItemsLength!==(this.$children||[]).length&&this.setWidths()},methods:{genNext:function(){var t=this;if(!this.hasAffixes)return null;var e=this.$scopedSlots.next?this.$scopedSlots.next({}):this.$slots.next||this.__cachedNext;return this.$createElement("div",{staticClass:"v-slide-group__next",class:{"v-slide-group__next--disabled":!this.hasNext},on:{click:function(){return t.onAffixClick("next")}},key:"next"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-slide-group__content",ref:"content"},this.$slots.default)},genData:function(){return{class:this.classes,directives:[{name:"resize",value:this.onResize}]}},genIcon:function(t){var e=t;this.$vuetify.rtl&&"prev"===t?e="next":this.$vuetify.rtl&&"next"===t&&(e="prev");var i="".concat(t[0].toUpperCase()).concat(t.slice(1)),n=this["has".concat(i)];return this.showArrows||n?this.$createElement(R["a"],{props:{disabled:!n}},this["".concat(e,"Icon")]):null},genPrev:function(){var t=this,e=this.$scopedSlots.prev?this.$scopedSlots.prev({}):this.$slots.prev||this.__cachedPrev;return this.$createElement("div",{staticClass:"v-slide-group__prev",class:{"v-slide-group__prev--disabled":!this.hasPrev},on:{click:function(){return t.onAffixClick("prev")}},key:"prev"},[e])},genTransition:function(t){return this.$createElement(N["c"],[this.genIcon(t)])},genWrapper:function(){var t=this;return this.$createElement("div",{staticClass:"v-slide-group__wrapper",directives:[{name:"touch",value:{start:function(e){return t.overflowCheck(e,t.onTouchStart)},move:function(e){return t.overflowCheck(e,t.onTouchMove)},end:function(e){return t.overflowCheck(e,t.onTouchEnd)}}}],ref:"wrapper"},[this.genContent()])},calculateNewOffset:function(t,e,i,n){var s=i?-1:1,r=s*n+("prev"===t?-1:1)*e.wrapper;return s*Math.max(Math.min(r,e.content-e.wrapper),0)},onAffixClick:function(t){this.$emit("click:".concat(t)),this.scrollTo(t)},onResize:function(){this._isDestroyed||this.setWidths()},onTouchStart:function(t){var e=this.$refs.content;this.startX=this.scrollOffset+t.touchstartX,e.style.setProperty("transition","none"),e.style.setProperty("willChange","transform")},onTouchMove:function(t){this.scrollOffset=this.startX-t.touchmoveX},onTouchEnd:function(){var t=this.$refs,e=t.content,i=t.wrapper,n=e.clientWidth-i.clientWidth;e.style.setProperty("transition",null),e.style.setProperty("willChange",null),this.$vuetify.rtl?this.scrollOffset>0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset<=-n&&(this.scrollOffset=-n):this.scrollOffset<0||!this.isOverflowing?this.scrollOffset=0:this.scrollOffset>=n&&(this.scrollOffset=n)},overflowCheck:function(t,e){t.stopPropagation(),this.isOverflowing&&e(t)},scrollIntoView:function(){this.selectedItem&&(0===this.selectedIndex||!this.centerActive&&!this.isOverflowing?this.scrollOffset=0:this.centerActive?this.scrollOffset=this.calculateCenteredOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl):this.isOverflowing&&(this.scrollOffset=this.calculateUpdatedOffset(this.selectedItem.$el,this.widths,this.$vuetify.rtl,this.scrollOffset)))},calculateUpdatedOffset:function(t,e,i,n){var s=t.clientWidth,r=i?e.content-t.offsetLeft-s:t.offsetLeft;i&&(n=-n);var a=e.wrapper+n,o=s+r,c=.4*s;return r<n?n=Math.max(r-c,0):a<o&&(n=Math.min(n-(a-o-c),e.content-e.wrapper)),i?-n:n},calculateCenteredOffset:function(t,e,i){var n=t.offsetLeft,s=t.clientWidth;if(i){var r=e.content-n-s/2-e.wrapper/2;return-Math.min(e.content-e.wrapper,Math.max(0,r))}var a=n+s/2-e.wrapper/2;return Math.min(e.content-e.wrapper,Math.max(0,a))},scrollTo:function(t){this.scrollOffset=this.calculateNewOffset(t,{content:this.$refs.content?this.$refs.content.clientWidth:0,wrapper:this.$refs.wrapper?this.$refs.wrapper.clientWidth:0},this.$vuetify.rtl,this.scrollOffset)},setWidths:function(){var t=this;window.requestAnimationFrame((function(){var e=t.$refs,i=e.content,n=e.wrapper;t.widths={content:i?i.clientWidth:0,wrapper:n?n.clientWidth:0},t.isOverflowing=t.widths.wrapper<t.widths.content,t.scrollIntoView()}))}},render:function(t){return t("div",this.genData(),[this.genPrev(),this.genWrapper(),this.genNext()])}}),D=(W.extend({name:"v-slide-group",provide:function(){return{slideGroup:this}}}),i("d10f")),z=Object(T["a"])(W,D["a"],O["a"]).extend({name:"v-tabs-bar",provide:function(){return{tabsBar:this}},computed:{classes:function(){return Object(x["a"])({},W.options.computed.classes.call(this),{"v-tabs-bar":!0,"v-tabs-bar--is-mobile":this.isMobile,"v-tabs-bar--show-arrows":this.showArrows},this.themeClasses)}},watch:{items:"callSlider",internalValue:"callSlider",$route:"onRouteChange"},methods:{callSlider:function(){this.isBooted&&this.$emit("call:slider")},genContent:function(){var t=W.options.methods.genContent.call(this);return t.data=t.data||{},t.data.staticClass+=" v-tabs-bar__content",t},onRouteChange:function(t,e){if(!this.mandatory){var i,n=this.items,s=t.path,r=e.path,a=!1,o=!1,c=Object(V["a"])(n);try{for(c.s();!(i=c.n()).done;){var l=i.value;if(l.to===s?a=!0:l.to===r&&(o=!0),a&&o)break}}catch(u){c.e(u)}finally{c.f()}!a&&o&&(this.internalValue=void 0)}}},render:function(t){var e=W.options.render.call(this,t);return e.data.attrs={role:"tablist"},e}}),G=(i("7db0"),i("c740"),i("13b3"),i("afdd")),L=E["a"].extend({name:"v-window",provide:function(){return{windowGroup:this}},directives:{Touch:I["a"]},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:{type:Boolean,default:void 0},showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive:function(){return this.transitionCount>0},classes:function(){return Object(x["a"])({},E["a"].options.computed.classes.call(this),{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=this.$vuetify.rtl&&"x"===t?!this.internalReverse:this.internalReverse,i=e?"-reverse":"";return"v-window-".concat(t).concat(i,"-transition")},hasActiveItems:function(){return Boolean(this.items.find((function(t){return!t.disabled})))},hasNext:function(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev:function(){return this.continuous||this.internalIndex>0},internalIndex:function(){var t=this;return this.items.findIndex((function(e,i){return t.internalValue===t.getValue(e,i)}))},internalReverse:function(){return this.reverse?!this.isReverse:this.isReverse}},watch:{internalIndex:"updateReverse"},mounted:function(){var t=this;window.requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{genContainer:function(){var t=[this.$slots.default];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon:function(t,e,i){var n=this;return this.$createElement("div",{staticClass:"v-window__".concat(t)},[this.$createElement(G["a"],{props:{icon:!0},attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(t))},on:{click:function(){n.changedByDelimiters=!0,i()}}},[this.$createElement(R["a"],{props:{large:!0}},e)])])},genControlIcons:function(){var t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){var i=this.genIcon("prev",e,this.prev);i&&t.push(i)}var n=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&n&&"string"===typeof n){var s=this.genIcon("next",n,this.next);s&&t.push(s)}return t},getNextIndex:function(t){var e=(t+1)%this.items.length,i=this.items[e];return i.disabled?this.getNextIndex(e):e},getPrevIndex:function(t){var e=(t+this.items.length-1)%this.items.length,i=this.items[e];return i.disabled?this.getPrevIndex(e):e},next:function(){if(this.isReverse=this.$vuetify.rtl,this.hasActiveItems&&this.hasNext){var t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},prev:function(){if(this.isReverse=!this.$vuetify.rtl,this.hasActiveItems&&this.hasPrev){var t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},updateReverse:function(t,e){this.changedByDelimiters?this.changedByDelimiters=!1:this.isReverse=t<e}},render:function(t){var e=this,i={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var n=this.touch||{left:function(){e.$vuetify.rtl?e.prev():e.next()},right:function(){e.$vuetify.rtl?e.next():e.prev()},end:function(t){t.stopPropagation()},start:function(t){t.stopPropagation()}};i.directives.push({name:"touch",value:n})}return t("div",i,[this.genContainer()])}}),M=L.extend({name:"v-tabs-items",props:{mandatory:{type:Boolean,default:!1}},computed:{classes:function(){return Object(x["a"])({},L.options.computed.classes.call(this),{"v-tabs-items":!0})},isDark:function(){return this.rootIsDark}},methods:{getValue:function(t,e){return t.id||E["a"].options.methods.getValue.call(this,t,e)}}}),q=i("a9ad"),H=Object(T["a"])(q["a"]).extend({name:"v-tabs-slider",render:function(t){return t("div",this.setBackgroundColor(this.color,{staticClass:"v-tabs-slider"}))}}),X=i("a452"),U=Object(T["a"])(q["a"],X["a"],O["a"]),F=U.extend().extend({name:"v-tabs",directives:{Resize:P["a"]},props:{activeClass:{type:String,default:""},alignWithTitle:Boolean,backgroundColor:String,centerActive:Boolean,centered:Boolean,fixedTabs:Boolean,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,iconsAndText:Boolean,mobileBreakPoint:{type:[Number,String],default:1264},nextIcon:{type:String,default:"$next"},optional:Boolean,prevIcon:{type:String,default:"$prev"},right:Boolean,showArrows:Boolean,sliderColor:String,sliderSize:{type:[Number,String],default:2},vertical:Boolean},data:function(){return{resizeTimeout:0,slider:{height:null,left:null,right:null,top:null,width:null},transitionTime:300}},computed:{classes:function(){return Object(x["a"])({"v-tabs--align-with-title":this.alignWithTitle,"v-tabs--centered":this.centered,"v-tabs--fixed-tabs":this.fixedTabs,"v-tabs--grow":this.grow,"v-tabs--icons-and-text":this.iconsAndText,"v-tabs--right":this.right,"v-tabs--vertical":this.vertical},this.themeClasses)},isReversed:function(){return this.$vuetify.rtl&&this.vertical},sliderStyles:function(){return{height:Object($["g"])(this.slider.height),left:this.isReversed?void 0:Object($["g"])(this.slider.left),right:this.isReversed?Object($["g"])(this.slider.right):void 0,top:this.vertical?Object($["g"])(this.slider.top):void 0,transition:null!=this.slider.left?null:"none",width:Object($["g"])(this.slider.width)}},computedColor:function(){return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"}},watch:{alignWithTitle:"callSlider",centered:"callSlider",centerActive:"callSlider",fixedTabs:"callSlider",grow:"callSlider",right:"callSlider",showArrows:"callSlider",vertical:"callSlider","$vuetify.application.left":"onResize","$vuetify.application.right":"onResize","$vuetify.rtl":"onResize"},mounted:function(){var t=this;this.$nextTick((function(){window.setTimeout(t.callSlider,30)}))},methods:{callSlider:function(){var t=this;return!this.hideSlider&&this.$refs.items&&this.$refs.items.selectedItems.length?(this.$nextTick((function(){var e=t.$refs.items.selectedItems[0];if(!e||!e.$el)return t.slider.width=0,void(t.slider.left=0);var i=e.$el;t.slider={height:t.vertical?i.scrollHeight:Number(t.sliderSize),left:t.vertical?0:i.offsetLeft,right:t.vertical?0:i.offsetLeft+i.offsetWidth,top:i.offsetTop,width:t.vertical?Number(t.sliderSize):i.scrollWidth}})),!0):(this.slider.width=0,!1)},genBar:function(t,e){var i=this,n={style:{height:Object($["g"])(this.height)},props:{activeClass:this.activeClass,centerActive:this.centerActive,dark:this.dark,light:this.light,mandatory:!this.optional,mobileBreakPoint:this.mobileBreakPoint,nextIcon:this.nextIcon,prevIcon:this.prevIcon,showArrows:this.showArrows,value:this.internalValue},on:{"call:slider":this.callSlider,change:function(t){i.internalValue=t}},ref:"items"};return this.setTextColor(this.computedColor,n),this.setBackgroundColor(this.backgroundColor,n),this.$createElement(z,n,[this.genSlider(e),t])},genItems:function(t,e){var i=this;return t||(e.length?this.$createElement(M,{props:{value:this.internalValue},on:{change:function(t){i.internalValue=t}}},e):null)},genSlider:function(t){return this.hideSlider?null:(t||(t=this.$createElement(H,{props:{color:this.sliderColor}})),this.$createElement("div",{staticClass:"v-tabs-slider-wrapper",style:this.sliderStyles},[t]))},onResize:function(){this._isDestroyed||(clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.callSlider,0))},parseNodes:function(){for(var t=null,e=null,i=[],n=[],s=this.$slots.default||[],r=s.length,a=0;a<r;a++){var o=s[a];if(o.componentOptions)switch(o.componentOptions.Ctor.options.name){case"v-tabs-slider":e=o;break;case"v-tabs-items":t=o;break;case"v-tab-item":i.push(o);break;default:n.push(o)}else n.push(o)}return{tab:n,slider:e,items:t,item:i}}},render:function(t){var e=this.parseNodes(),i=e.tab,n=e.slider,s=e.items,r=e.item;return t("div",{staticClass:"v-tabs",class:this.classes,directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]},[this.genBar(i,n),this.genItems(s,r)])}}),J=Object(h["a"])(u,n,s,!1,null,"5951d2c4",null);e["default"]=J.exports;f()(J,{VCard:v["a"],VCardTitle:p["c"],VCol:g["a"],VContainer:m["a"],VContent:b["a"],VRow:w["a"],VTab:S,VTabItem:A,VTabs:F,VTabsItems:M})},9448:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{attrs:{"min-height":"310px"}},[i("v-card-title",[t._v(" Задачи ")]),i("v-card-text",[i("v-data-table",{attrs:{headers:t.headers,items:t.tasks,"item-key":"id",height:"50%","items-per-page":"5","footer-props":{"items-per-page-options":[5,10,15,-1],"items-per-page-text":"Элементов на странице:","items-per-page-all-text":"Все"},dense:""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1)},s=[],r=(i("99af"),i("d3b7"),{name:"Tasks",props:["data"],data:function(){return{selected:[],headers:[{text:"ID",value:"id"},{text:"Наименование",value:"name"},{text:"Статус",value:"status"}],tasks:[]}},mounted:function(){var t=this;fetch("http://localhost:8000/resources/".concat(this.data.project,"/tasks/").concat(this.data.group)).then((function(t){return t.json()})).then((function(e){t.tasks=e}))}}),a=r,o=i("2877"),c=i("6544"),l=i.n(c),u=i("b0af"),h=i("99d9"),d=i("8fea"),f=Object(o["a"])(a,n,s,!1,null,"3a4cef42",null);e["a"]=f.exports;l()(f,{VCard:u["a"],VCardText:h["b"],VCardTitle:h["c"],VDataTable:d["a"]})},c390:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{attrs:{"min-height":"380px"}},[i("v-card-title",[t._v(" График ")]),i("v-card-text",[i("vc-donut",{attrs:{background:"white",foreground:"grey",size:210,unit:"px",thickness:50,hasLegend:"",legendPlacement:"top",sections:t.sections,total:100}})],1)],1)},s=[],r=(i("99af"),i("d3b7"),{name:"Statistic",props:["data"],data:function(){return{sections:[]}},mounted:function(){var t=this;fetch("http://localhost:8000/resources/".concat(this.data.project,"/statistic/").concat(this.data.group)).then((function(t){return t.json()})).then((function(e){t.sections=e}))}}),a=r,o=i("2877"),c=i("6544"),l=i.n(c),u=i("b0af"),h=i("99d9"),d=Object(o["a"])(a,n,s,!1,null,"2f49c790",null);e["a"]=d.exports;l()(d,{VCard:u["a"],VCardText:h["b"],VCardTitle:h["c"]})},e4ba:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{attrs:{"min-height":"380px"}},[i("v-card-title",[t._v(" Команда ")]),i("v-card-text",[i("v-data-table",{attrs:{headers:t.headers,items:t.employers,"item-key":"id",height:"50%","items-per-page":"4","footer-props":{"items-per-page-options":[4,8,12,-1],"items-per-page-text":"Элементов на странице:","items-per-page-all-text":"Все"}},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1)},s=[],r=(i("99af"),i("d3b7"),{name:"Comand",props:["data"],data:function(){return{selected:[],headers:[{text:"ID",value:"id"},{text:"ФИО",value:"name"},{text:"Должность",value:"role"}],employers:[]}},mounted:function(){var t=this;fetch("http://localhost:8000/resources/".concat(this.data.project,"/command/").concat(this.data.group)).then((function(t){return t.json()})).then((function(e){t.employers=e}))}}),a=r,o=i("2877"),c=i("6544"),l=i.n(c),u=i("b0af"),h=i("99d9"),d=i("8fea"),f=Object(o["a"])(a,n,s,!1,null,"3c37e405",null);e["a"]=f.exports;l()(f,{VCard:u["a"],VCardText:h["b"],VCardTitle:h["c"],VDataTable:d["a"]})},ecef:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{attrs:{"min-height":"310px"}},[i("v-card-title",[t._v(" Требования ")]),i("v-card-text",[i("v-data-table",{attrs:{headers:t.headers,items:t.requirements,"item-key":"id",height:"50%",dense:"","items-per-page":"5","footer-props":{"items-per-page-options":[5,10,15,-1],"items-per-page-text":"Элементов на странице:","items-per-page-all-text":"Все"}},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1)},s=[],r=(i("99af"),i("d3b7"),{name:"Requirements",props:["data"],data:function(){return{selected:[],headers:[{text:"ID",value:"id"},{text:"Наименование",value:"name"}],requirements:[]}},mounted:function(){var t=this;fetch("http://localhost:8000/resources/".concat(this.data.project,"/requirements/").concat(this.data.group)).then((function(t){return t.json()})).then((function(e){t.requirements=e}))}}),a=r,o=i("2877"),c=i("6544"),l=i.n(c),u=i("b0af"),h=i("99d9"),d=i("8fea"),f=Object(o["a"])(a,n,s,!1,null,"0f2bb01d",null);e["a"]=f.exports;l()(f,{VCard:u["a"],VCardText:h["b"],VCardTitle:h["c"],VDataTable:d["a"]})}}]);
//# sourceMappingURL=chunk-a01ce2c0.34a03522.js.map