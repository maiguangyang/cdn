(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a3135"],{"0142":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Finance-detail-page"},[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"controller"},[a("form-model",{attrs:{formModel:t.formModel,tabName:[t.$t("dt.form.FinanceDetail")],btnTitle:t.$t("dt.base.save")}})],1)])])},n=[],s=a("b204"),o={name:"FinanceDetail",data:function(){return{id:null,formModel:{hide:[],readonly:["*"]}}},created:function(){if(this.id=this.$GetParamsId(this),!this.id)return this.$Notice.error({title:this.$t("dt.toast.tips"),desc:this.$t("dt.toast.notExistent")}),this.$router.push({name:"admin.FinanceList"}),!1},mounted:function(){},components:{FormModel:s["a"]},watch:{},methods:{}},r=o,d=a("c701"),c=Object(d["a"])(r,i,n,!1,null,"24e76ea6",null);e["default"]=c.exports}}]);