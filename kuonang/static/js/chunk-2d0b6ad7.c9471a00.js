(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b6ad7"],{"1dd2":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"Finance-add-page"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"controller"},[e("form-model",{attrs:{formModel:t.formModel,tabName:[t.$t("dt.form.FinanceAdd")],btnTitle:t.$t("dt.base.save")},on:{formDataSubmit:t.handleFormDataSubmit}})],1)])])},d=[],s=e("d211"),i=e("b8f9"),o=e("b204"),c={name:"FinanceAdd",data:function(){return{formModel:{hide:[],readonly:[]}}},created:function(){},mounted:function(){},components:{FormModel:o["a"]},watch:{},methods:{handleFormDataSubmit:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(i["a"].isObject(a)&&i["a"].isObject(a.data)&&!i["a"].isEmpty(a.data)){var e=Object(s["a"])({},a.data),n={data:Object(s["a"])({},e)};this.$Http.Post({mutation:this.$Model.FinanceLogAdd,variables:n}).then((function(){t.$Message.success(t.$t("dt.toast.saveOk")),t.handleRouteGoBack("admin.FinanceList")}))}else this.$Message.error(this.$t("dt.base.invalidData"))}}},r=c,l=e("c701"),m=Object(l["a"])(r,n,d,!1,null,"9022dff6",null);a["default"]=m.exports}}]);