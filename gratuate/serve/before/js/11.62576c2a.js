(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{164:function(t,n,o){"use strict";var a=o(89);o.n(a).a},165:function(t,n,o){(n=o(5)(!1)).push([t.i,".layout-tabbar[data-v-13877386]{font-size:0.16rem;display:flex;justify-content:space-around;position:fixed;left:0;bottom:0;width:100%;z-index:1001;background-color:#ffffff;border-top:1px solid #e7e7e7;border-bottom:1px solid #f8f8f8;align-items:center;padding:0 20px;padding-top:2px;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.layout-tabbar .iconfont[data-v-13877386]{font-size:.2rem}\n",""]),t.exports=n},277:function(t,n,o){"use strict";function a(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"layout-box"},[o("router-view"),t._v(" "),o("div",{staticClass:"layout-tabbar"},t._l(t.tabbar,(function(n,a){return o("router-link",{key:a,attrs:{tag:"div",to:n.path},nativeOn:{click:function(o){return t.selectTabbar(n.path)}}},[o("span",{staticClass:"iconfont",class:t.nowConstant===n.path?n.activeIcon:n.icon}),t._v(" "),o("p",[t._v(t._s(n.value))])])})),1)],1)}o.r(n),a._withStripped=!0;var i=o(90),e=o(88),c={data:function(){return{nowConstant:"",tabbar:[]}},created:function(){this.nowConstant=this.$route.path,this.initTabInfo()},methods:{initTabInfo:function(){this.tabbar=[{path:i.c,value:e.a.HOME,icon:"iconshouye1",activeIcon:"iconshouye"},{path:i.a,value:e.a.CART,icon:"icongouwuche",activeIcon:"icongouwucheman"},{path:i.e,value:e.a.ORDER,icon:"iconsingle",activeIcon:"icondingdan1"},{path:i.d,value:e.a.MY,icon:"icongeren3",activeIcon:"icongeren1"}]},selectTabbar:function(t){this.nowConstant=t}}},r=(o(164),o(9)),s=Object(r.a)(c,a,[],!1,null,"13877386",null);s.options.__file="src/layout/index.vue",n.default=s.exports},88:function(t,n,o){"use strict";o.d(n,"a",(function(){return a})),o.d(n,"b",(function(){return i}));var a={HOME:"首页",CART:"购物车",ORDER:"订单列表",MY:"我的淘宝"},i={INCONSISTENT:"密码不一致！",ACCOUNT_EMPTY:"账号不能为空！",PASSWORK_EMPTY:"密码不能为空！"}},89:function(t,n,o){var a=o(165);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals),(0,o(6).default)("35a07c8a",a,!1,{})},90:function(t,n,o){"use strict";o.d(n,"c",(function(){return a})),o.d(n,"a",(function(){return i})),o.d(n,"e",(function(){return e})),o.d(n,"d",(function(){return c})),o.d(n,"b",(function(){return r}));var a="/home",i="/cart",e="/order",c="/my",r="/commoditydetail"}}]);
//# sourceMappingURL=11.62576c2a.js.map