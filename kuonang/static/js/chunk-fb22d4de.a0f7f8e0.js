(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fb22d4de"],{"179e":function(t,e,a){},adb8:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"merchant-detail-page"},[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"controller"},[a("form-model",{attrs:{formModel:t.formModel,tabName:[t.$t("dt.form.MerchantDetail")],btnTitle:t.$t("dt.base.save")}})],1)])])},n=[],s=a("539e"),o={name:"MerchantDetail",data:function(){return{id:null,formModel:{hide:[],readonly:["*"]}}},created:function(){if(this.id=this.$GetParamsId(this),!this.id)return this.$Notice.error({title:this.$t("dt.toast.tips"),desc:this.$t("dt.toast.notExistent")}),this.$router.push({name:"admin.MerchantList"}),!1},mounted:function(){},components:{FormModel:s["a"]},watch:{},methods:{}},r=o,c=(a("dfc2"),a("c701")),d=Object(c["a"])(r,i,n,!1,null,"5cbe6c2a",null);e["default"]=d.exports},dfc2:function(t,e,a){"use strict";a("179e")}}]);