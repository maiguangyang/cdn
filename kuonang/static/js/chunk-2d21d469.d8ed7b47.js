(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21d469"],{d139:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"RevokeProduct-edit-page"},[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"controller"},[a("form-model",{attrs:{formModel:t.formModel,tabName:[t.$t("dt.form.RevokeProductEdit")],btnTitle:t.$t("dt.base.save")},on:{formDataSubmit:t.handleFormDataSubmit}})],1)])])},o=[],i=a("d211"),n=(a("6a61"),a("2e91")),s=a("b8f9"),d=a("e5f0"),c={name:"RevokeProductEdit",data:function(){return{id:null,formModel:{hide:[],readonly:[]}}},created:function(){if(this.id=this.$GetParamsId(this),!this.id)return this.$Notice.error({title:this.$t("dt.toast.tips"),desc:this.$t("dt.toast.notExistent")}),this.$router.push({name:"admin.RevokeProductList"}),!1},mounted:function(){},components:{FormModel:d["a"]},watch:{},methods:{handleFormDataSubmit:function(){var t=arguments,e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var r,o,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r=t.length>0&&void 0!==t[0]?t[0]:{},s["a"].isObject(r)&&s["a"].isObject(r.data)&&!s["a"].isEmpty(r.data)){a.next=4;break}return e.$Message.error(e.$t("dt.base.invalidData")),a.abrupt("return");case 4:o=Object(i["a"])({},r.data),n={id:o.id,data:Object(i["a"])({},o)},e.$Http.Post({mutation:e.$Model.PurchaseRevokeProductEdit,variables:n}).then((function(){e.$Message.success(e.$t("dt.toast.saveOk")),e.handleRouteGoBack("admin.RevokeProductList")}));case 7:case"end":return a.stop()}}),a)})))()}}},u=c,l=a("c701"),m=Object(l["a"])(u,r,o,!1,null,"d39af674",null);e["default"]=m.exports}}]);