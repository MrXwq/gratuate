(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2bbe6068"],{"159b":function(e,t,r){var o=r("da84"),i=r("fdbc"),n=r("17c2"),a=r("9112");for(var c in i){var s=o[c],u=s&&s.prototype;if(u&&u.forEach!==n)try{a(u,"forEach",n)}catch(m){u.forEach=n}}},1723:function(e,t,r){"use strict";var o=r("4d52"),i=r.n(o);i.a},"17c2":function(e,t,r){"use strict";var o=r("b727").forEach,i=r("a640"),n=r("ae40"),a=i("forEach"),c=n("forEach");e.exports=a&&c?[].forEach:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}},"1dde":function(e,t,r){var o=r("d039"),i=r("b622"),n=r("2d00"),a=i("species");e.exports=function(e){return n>=51||!o((function(){var t=[],r=t.constructor={};return r[a]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},4160:function(e,t,r){"use strict";var o=r("23e7"),i=r("17c2");o({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},"4d52":function(e,t,r){},"65f0":function(e,t,r){var o=r("861d"),i=r("e8b5"),n=r("b622"),a=n("species");e.exports=function(e,t){var r;return i(e)&&(r=e.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?o(r)&&(r=r[a],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},a640:function(e,t,r){"use strict";var o=r("d039");e.exports=function(e,t){var r=[][e];return!!r&&o((function(){r.call(null,t||function(){throw 1},1)}))}},ae40:function(e,t,r){var o=r("83ab"),i=r("d039"),n=r("5135"),a=Object.defineProperty,c={},s=function(e){throw e};e.exports=function(e,t){if(n(c,e))return c[e];t||(t={});var r=[][e],u=!!n(t,"ACCESSORS")&&t.ACCESSORS,m=n(t,0)?t[0]:s,l=n(t,1)?t[1]:void 0;return c[e]=!!r&&!i((function(){if(u&&!o)return!0;var e={length:-1};u?a(e,1,{enumerable:!0,get:s}):e[1]=1,r.call(e,m,l)}))}},b727:function(e,t,r){var o=r("0366"),i=r("44ad"),n=r("7b0b"),a=r("50c4"),c=r("65f0"),s=[].push,u=function(e){var t=1==e,r=2==e,u=3==e,m=4==e,l=6==e,d=5==e||l;return function(f,p,g,h){for(var y,v,b=n(f),F=i(b),x=o(p,g,3),L=a(F.length),w=0,S=h||c,k=t?S(f,L):r?S(f,0):void 0;L>w;w++)if((d||w in F)&&(y=F[w],v=x(y,w,b),e))if(t)k[w]=v;else if(v)switch(e){case 3:return!0;case 5:return y;case 6:return w;case 2:s.call(k,y)}else if(m)return!1;return l?-1:u||m?m:k}};e.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},d81d:function(e,t,r){"use strict";var o=r("23e7"),i=r("b727").map,n=r("1dde"),a=r("ae40"),c=n("map"),s=a("map");o({target:"Array",proto:!0,forced:!c||!s},{map:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},e8b5:function(e,t,r){var o=r("c6b6");e.exports=Array.isArray||function(e){return"Array"==o(e)}},eced:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"commodity-create-box"},[r("el-form",{ref:"commodityForm",staticClass:"demo-commodityForm",attrs:{model:e.commodityForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"商品标题"}},[r("el-input",{model:{value:e.commodityForm.title,callback:function(t){e.$set(e.commodityForm,"title",t)},expression:"commodityForm.title"}})],1),r("el-form-item",{attrs:{label:"商品原价"}},[r("el-input",{model:{value:e.commodityForm.price,callback:function(t){e.$set(e.commodityForm,"price",t)},expression:"commodityForm.price"}})],1),r("el-form-item",{attrs:{label:"商品现价"}},[r("el-input",{model:{value:e.commodityForm.preferential,callback:function(t){e.$set(e.commodityForm,"preferential",t)},expression:"commodityForm.preferential"}})],1),r("el-form-item",{attrs:{label:"商品运费"}},[r("el-input",{model:{value:e.commodityForm.freight,callback:function(t){e.$set(e.commodityForm,"freight",t)},expression:"commodityForm.freight"}})],1),r("el-form-item",{attrs:{label:"寄出地"}},[r("el-cascader",{attrs:{options:e.origins,props:{expandTrigger:"hover"}},on:{change:e.handleChange},model:{value:e.commodityForm.origin,callback:function(t){e.$set(e.commodityForm,"origin",t)},expression:"commodityForm.origin"}})],1),r("el-form-item",{attrs:{label:"分类"}},[r("el-select",{attrs:{multiple:""},model:{value:e.commodityForm.categories,callback:function(t){e.$set(e.commodityForm,"categories",t)},expression:"commodityForm.categories"}},e._l(e.categories,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("commodityForm")}}},[e._v("立即创建")]),r("el-button",{on:{click:function(t){return e.resetForm("commodityForm")}}},[e._v("重置")])],1)],1)],1)},i=[],n=(r("4160"),r("d81d"),r("159b"),r("96cf"),r("1da1")),a={data:function(){return{commodityForm:{},rules:{name:[{required:!0,message:"请输入活动名称",trigger:"blur"},{min:3,max:5,message:"长度在 3 到 5 个字符",trigger:"blur"}],region:[{required:!0,message:"请选择活动区域",trigger:"change"}],date1:[{type:"date",required:!0,message:"请选择日期",trigger:"change"}],date2:[{type:"date",required:!0,message:"请选择时间",trigger:"change"}],type:[{type:"array",required:!0,message:"请至少选择一个活动性质",trigger:"change"}],resource:[{required:!0,message:"请选择活动资源",trigger:"change"}],desc:[{required:!0,message:"请填写活动形式",trigger:"blur"}]},origins:[],originValue:"",categories:[],id:this.$route.params.id}},created:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.id&&e.fetchCommodityForm(),t.next=3,e.getOrigins();case 3:return t.next=5,e.fetchCategories();case 5:case"end":return t.stop()}}),t)})))()},methods:{fetchCommodityForm:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("api/commodity/".concat(e.id));case 2:r=t.sent,e.commodityForm=r.data;case 4:case"end":return t.stop()}}),t)})))()},fetchCategories:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("api/category");case 2:r=t.sent,e.categories=r.data;case 4:case"end":return t.stop()}}),t)})))()},handleChange:function(e){this.commodityForm.origin=e[1]},getOrigins:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/api/origin");case 2:r=t.sent,r.data.forEach((function(t,r){e.origins.push({value:t.pinyin,label:t.pinyin,children:t.placeName.map((function(e){return{value:e,label:e}}))})}));case 4:case"end":return t.stop()}}),t)})))()},submitForm:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.id){e.next=5;break}return e.next=3,t.$http.put("/api/commodity/".concat(t.id),t.commodityForm);case 3:e.next=7;break;case 5:return e.next=7,t.$http.post("/api/commodity",t.commodityForm);case 7:t.$message({type:"success",message:"添加成功"}),t.$router.push("/commodity");case 9:case"end":return e.stop()}}),e)})))()},resetForm:function(e){this.$refs[e].resetFields()}}},c=a,s=(r("1723"),r("2877")),u=Object(s["a"])(c,o,i,!1,null,"61894ff7",null);t["default"]=u.exports},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-2bbe6068.d3b30712.js.map