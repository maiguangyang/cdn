(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2080eb"],{a2bf:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"Customer-add-page"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"controller"},[e("form-model",{attrs:{formModel:t.formModel,tabName:[t.$t("dt.form.CustomerAdd")],btnTitle:t.$t("dt.base.save")},on:{formDataSubmit:t.handleFormDataSubmit}})],1)])])},o=[],d=e("d211"),n=e("b8f9"),i=e("b253"),r={name:"CustomerAdd",data:function(){return{formModel:{hide:[],readonly:[]}}},created:function(){},mounted:function(){},components:{FormModel:i["a"]},watch:{},methods:{handleFormDataSubmit:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(n["a"].isObject(a)&&n["a"].isObject(a.data)&&!n["a"].isEmpty(a.data)){var e=Object(d["a"])({},a.data),s={data:Object(d["a"])({},e)};this.$Http.Post({mutation:this.$Model.CustomerAdd,variables:s}).then((function(){t.$Message.success(t.$t("dt.toast.saveOk")),t.handleRouteGoBack("admin.CustomerList")}))}else this.$Message.error(this.$t("dt.base.invalidData"))}}},c=r,l=e("c701"),m=Object(l["a"])(c,s,o,!1,null,"393a76ba",null);a["default"]=m.exports}}]);