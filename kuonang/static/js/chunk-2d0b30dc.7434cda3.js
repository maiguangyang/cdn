(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b30dc"],{2778:function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"Program-add-page"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"controller"},[e("form-model",{attrs:{formModel:t.formModel,tabName:[t.$t("dt.form.ProgramAdd")],btnTitle:t.$t("dt.base.save")},on:{formDataSubmit:t.handleFormDataSubmit}})],1)])])},d=[],s=e("d211"),n=e("b8f9"),i=e("8caa"),r={name:"ProgramAdd",data:function(){return{formModel:{hide:[],readonly:[]}}},created:function(){},mounted:function(){},components:{FormModel:i["a"]},watch:{},methods:{handleFormDataSubmit:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(n["a"].isObject(a)&&n["a"].isObject(a.data)&&!n["a"].isEmpty(a.data)){var e=Object(s["a"])({},a.data),o={data:Object(s["a"])({},e)};this.$Http.Post({mutation:this.$Model.DividendAdd,variables:o}).then((function(){t.$Message.success(t.$t("dt.toast.saveOk")),t.handleRouteGoBack("admin.ProgramList")}))}else this.$Message.error(this.$t("dt.base.invalidData"))}}},c=r,l=e("c701"),m=Object(l["a"])(c,o,d,!1,null,"123f8ff1",null);a["default"]=m.exports}}]);