(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a3555"],{"0274":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"RevokeProduct-add-page"},[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"controller"},[a("form-model",{attrs:{formModel:t.formModel,tabName:[t.$t("dt.form.RevokeProductAdd")],btnTitle:t.$t("dt.base.save")},on:{formDataSubmit:t.handleFormDataSubmit}})],1)])])},d=[],s=a("d211"),n=a("b8f9"),i=a("e5f0"),r={name:"RevokeProductAdd",data:function(){return{formModel:{hide:[],readonly:[]}}},created:function(){},mounted:function(){},components:{FormModel:i["a"]},watch:{},methods:{handleFormDataSubmit:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(n["a"].isObject(e)&&n["a"].isObject(e.data)&&!n["a"].isEmpty(e.data)){var a=Object(s["a"])({},e.data),o={data:Object(s["a"])({},a)};this.$Http.Post({mutation:this.$Model.PurchaseRevokeProductAdd,variables:o}).then((function(){t.$Message.success(t.$t("dt.toast.saveOk")),t.handleRouteGoBack("admin.RevokeProductList")}))}else this.$Message.error(this.$t("dt.base.invalidData"))}}},c=r,u=a("c701"),l=Object(u["a"])(c,o,d,!1,null,"614e7cc2",null);e["default"]=l.exports}}]);