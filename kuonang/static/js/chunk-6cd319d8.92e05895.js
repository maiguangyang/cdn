(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6cd319d8"],{"19d2":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-detail-page"},[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"controller"},[a("form-model",{attrs:{formModel:t.formModel,tabName:[t.$t("dt.form.languageDetail")],btnTitle:t.$t("dt.base.save")}})],1)])])},n=[],s=a("0a88"),o={name:"LanguageDetail",data:function(){return{id:null,formModel:{hide:[],readonly:["*"]}}},created:function(){if(this.id=this.$GetParamsId(this),!this.id)return this.$Notice.error({title:this.$t("dt.toast.tips"),desc:this.$t("dt.toast.notExistent")}),this.$router.push({name:"admin.LanguageList"}),!1},mounted:function(){},components:{FormModel:s["a"]},watch:{},methods:{}},d=o,r=(a("85e0"),a("c701")),l=Object(r["a"])(d,i,n,!1,null,"50a7fd21",null);e["default"]=l.exports},"85e0":function(t,e,a){"use strict";a("977f")},"977f":function(t,e,a){}}]);