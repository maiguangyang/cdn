(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b8e09"],{"310e":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Finance-edit-page"},[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"controller"},[a("form-model",{attrs:{formModel:t.formModel,tabName:[t.$t("dt.form.FinanceEdit")],btnTitle:t.$t("dt.base.save")},on:{formDataSubmit:t.handleFormDataSubmit}})],1)])])},i=[],r=a("d211"),s=(a("6a61"),a("2e91")),o=a("b8f9"),d=a("b204"),c={name:"FinanceEdit",data:function(){return{id:null,formModel:{hide:[],readonly:[]}}},created:function(){if(this.id=this.$GetParamsId(this),!this.id)return this.$Notice.error({title:this.$t("dt.toast.tips"),desc:this.$t("dt.toast.notExistent")}),this.$router.push({name:"admin.FinanceList"}),!1},mounted:function(){},components:{FormModel:d["a"]},watch:{},methods:{handleFormDataSubmit:function(){var t=arguments,e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n,i,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n=t.length>0&&void 0!==t[0]?t[0]:{},o["a"].isObject(n)&&o["a"].isObject(n.data)&&!o["a"].isEmpty(n.data)){a.next=4;break}return e.$Message.error(e.$t("dt.base.invalidData")),a.abrupt("return");case 4:i=Object(r["a"])({},n.data),s={id:i.id,data:Object(r["a"])({},i)},e.$Http.Post({mutation:e.$Model.FinanceLogEdit,variables:s}).then((function(){e.$Message.success(e.$t("dt.toast.saveOk")),e.handleRouteGoBack("admin.FinanceList")}));case 7:case"end":return a.stop()}}),a)})))()}}},u=c,l=a("c701"),m=Object(l["a"])(u,n,i,!1,null,"78240294",null);e["default"]=m.exports}}]);