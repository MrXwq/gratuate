(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dd0ce352"],{abd0:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-table",{attrs:{data:t.ad}},[n("el-table-column",{attrs:{prop:"_id",label:"ID",width:"240"}}),n("el-table-column",{attrs:{prop:"title",label:"广告标题",width:"240"}}),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return t.$router.push("/ad/create/"+e.row._id)}}},[t._v("编辑")]),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return t.remove(e.row)}}},[t._v("删除")])]}}])})],1)],1)},a=[],c=(n("b0c0"),n("96cf"),n("1da1")),u={data:function(){return{ad:[]}},methods:{fetch:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("api/ad");case 2:n=e.sent,t.ad=n.data;case 4:case"end":return e.stop()}}),e)})))()},remove:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:e.$confirm("是否删除该服务,".concat(t.name),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.$http.delete("api/ad/".concat(t._id));case 2:e.$message({type:"success",message:"删除成功!"}),e.fetch();case 4:case"end":return n.stop()}}),n)}))));case 1:case"end":return n.stop()}}),n)})))()}},created:function(){this.fetch()}},i=u,o=n("2877"),s=Object(o["a"])(i,r,a,!1,null,null,null);e["default"]=s.exports},b0c0:function(t,e,n){var r=n("83ab"),a=n("9bf2").f,c=Function.prototype,u=c.toString,i=/^\s*function ([^ (]*)/,o="name";!r||o in c||a(c,o,{configurable:!0,get:function(){try{return u.call(this).match(i)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-dd0ce352.9d8ecc62.js.map