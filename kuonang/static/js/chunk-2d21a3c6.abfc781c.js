(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21a3c6"],{bb3c:function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"Stock-add-page"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"controller"},[e("form-model",{attrs:{formModel:t.formModel,tabName:[t.$t("dt.form.ProductAllocation")],btnTitle:t.$t("dt.base.save")},on:{formDataSubmit:t.handleFormDataSubmit}})],1)])])},s=[],d=e("d211"),n=e("b8f9"),i=e("b953"),c={name:"StockAdd",data:function(){return{formModel:{hide:[],readonly:[]}}},created:function(){},mounted:function(){},components:{FormModel:i["a"]},watch:{},methods:{handleFormDataSubmit:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(n["a"].isObject(a)&&n["a"].isObject(a.data)&&!n["a"].isEmpty(a.data)){var e=Object(d["a"])({},a.data),o={data:Object(d["a"])({},e)};this.$Http.Post({mutation:this.$Model.ProductAllocationAdd,variables:o}).then((function(){t.$Message.success(t.$t("dt.toast.saveOk")),t.handleRouteGoBack("admin.AllocationList")}))}else this.$Message.error(this.$t("dt.base.invalidData"))}}},r=c,l=e("c701"),u=Object(l["a"])(r,o,s,!1,null,"6e38bdfb",null);a["default"]=u.exports}}]);