(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d229465"],{dd6e:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"Warehouse-add-page"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"controller"},[e("form-model",{attrs:{formModel:t.formModel,tabName:[t.$t("dt.form.WarehouseAdd")],btnTitle:t.$t("dt.base.save")},on:{formDataSubmit:t.handleFormDataSubmit}})],1)])])},o=[],d=e("d211"),n=e("b8f9"),i=e("fd87"),r={name:"WarehouseAdd",data:function(){return{formModel:{hide:[],readonly:[]}}},created:function(){},mounted:function(){},components:{FormModel:i["a"]},watch:{},methods:{handleFormDataSubmit:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(n["a"].isObject(a)&&n["a"].isObject(a.data)&&!n["a"].isEmpty(a.data)){var e=Object(d["a"])({},a.data),s={data:Object(d["a"])({},e)};this.$Http.Post({mutation:this.$Model.WarehouseAdd,variables:s}).then((function(){t.$Message.success(t.$t("dt.toast.saveOk")),t.handleRouteGoBack("admin.WarehouseList")}))}else this.$Message.error(this.$t("dt.base.invalidData"))}}},c=r,l=e("c701"),u=Object(l["a"])(c,s,o,!1,null,"3a4aff9f",null);a["default"]=u.exports}}]);