(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2a8f3197"],{"08b9":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"commodity-create-box"},[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"分类")]),r("el-form",{ref:"categoriesForm",staticClass:"demo-categoriesForm",attrs:{model:e.categoriesForm,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"父类"}},[r("el-select",{model:{value:e.categoriesForm.parent,callback:function(t){e.$set(e.categoriesForm,"parent",t)},expression:"categoriesForm.parent"}},e._l(e.parents,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{label:"分类"}},[r("el-input",{model:{value:e.categoriesForm.name,callback:function(t){e.$set(e.categoriesForm,"name",t)},expression:"categoriesForm.name"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("categoriesForm")}}},[e._v("添加")]),r("el-button",{on:{click:function(t){return e.resetForm("categoriesForm")}}},[e._v("重置")])],1)],1)],1)},n=[],o=(r("96cf"),r("1da1")),s={data:function(){return{categoriesForm:{},parents:[],categories:[],id:this.$route.params.id}},created:function(){this.id&&this.fetch(),this.fetchParents()},methods:{fetch:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("api/category/".concat(e.id));case 2:r=t.sent,e.categoriesForm=r.data;case 4:case"end":return t.stop()}}),t)})))()},fetchParents:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("api/category");case 2:r=t.sent,e.parents=r.data;case 4:case"end":return t.stop()}}),t)})))()},handleChange:function(e){console.log(e)},postCategories:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.id){t.next=5;break}return t.next=3,e.$http.put("/api/category/".concat(e.id),e.categoriesForm);case 3:t.next=7;break;case 5:return t.next=7,e.$http.post("/api/category",e.categoriesForm);case 7:e.$message({type:"success",message:"添加成功"}),e.$router.push("/categories/list");case 9:case"end":return t.stop()}}),t)})))()},submitForm:function(e){this.postCategories()},resetForm:function(e){this.$refs[e].resetFields()}}},i=s,c=(r("e9a8"),r("2877")),u=Object(c["a"])(i,a,n,!1,null,"5f46d2c0",null);t["default"]=u.exports},9137:function(e,t,r){},e9a8:function(e,t,r){"use strict";var a=r("9137"),n=r.n(a);n.a}}]);
//# sourceMappingURL=chunk-2a8f3197.8d13c8f1.js.map