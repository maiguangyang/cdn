(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74689714"],{"368d9":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"PutStock-detail-page"},[i("div",{staticClass:"wrapper"},[i("div",{staticClass:"controller"},[i("form-model",{attrs:{formModel:t.formModel,tabName:[t.$t("dt.form.PutStockDetail")],btnTitle:t.$t("dt.base.save")}})],1)])])},s=[],a=i("104d"),n={name:"PutStockDetail",data:function(){return{id:null,formModel:{hide:[],readonly:["*"]}}},created:function(){if(this.id=this.$GetParamsId(this),!this.id)return this.$Notice.error({title:this.$t("dt.toast.tips"),desc:this.$t("dt.toast.notExistent")}),this.$router.push({name:"admin.PutStockList"}),!1},mounted:function(){},components:{FormModel:a["a"]},watch:{},methods:{}},r=n,d=i("c701"),c=Object(d["a"])(r,o,s,!1,null,"3f76c32a",null);e["default"]=c.exports}}]);