(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21eeaa"],{d833:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"PurchaseOrder-detail-page"},[r("div",{staticClass:"wrapper"},[r("div",{staticClass:"controller"},[r("form-model",{attrs:{formModel:t.formModel,tabName:[t.$t("dt.form.PurchaseOrderDetail")],btnTitle:t.$t("dt.base.save")}})],1)])])},s=[],i=r("dc9e"),d={name:"PurchaseOrderDetail",data:function(){return{id:null,formModel:{hide:[],readonly:["*"]}}},created:function(){if(this.id=this.$GetParamsId(this),!this.id)return this.$Notice.error({title:this.$t("dt.toast.tips"),desc:this.$t("dt.toast.notExistent")}),this.$router.push({name:"admin.PurchaseOrderList"}),!1},mounted:function(){},components:{FormModel:i["a"]},watch:{},methods:{}},o=d,n=r("c701"),c=Object(n["a"])(o,a,s,!1,null,"20f73bd4",null);e["default"]=c.exports}}]);