(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ede87a3a"],{"003e":function(t,e,a){},"409e":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"role-edit-page"},[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"controller"},[a("form-model",{attrs:{formModel:t.formModel,tabName:[t.$t("dt.form.roleEdit")],btnTitle:t.$t("dt.base.save")},on:{formDataSubmit:t.handleFormDataSubmit}})],1)])])},n=[],r=a("d211"),s=(a("6a61"),a("2e91")),o=a("b8f9"),d=a("d375"),c={name:"RoleEdit",data:function(){return{id:null,formModel:{hide:[],readonly:[]}}},created:function(){if(this.id=this.$GetParamsId(this),!this.id)return this.$Notice.error({title:this.$t("dt.toast.tips"),desc:this.$t("dt.toast.notExistent")}),this.$router.push({name:"admin.RoleList"}),!1},mounted:function(){},components:{FormModel:d["a"]},watch:{},methods:{handleFormDataSubmit:function(){var t=arguments,e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var i,n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(i=t.length>0&&void 0!==t[0]?t[0]:{},o["a"].isObject(i)&&o["a"].isObject(i.data)&&!o["a"].isEmpty(i.data)){a.next=4;break}return e.$Message.error(e.$t("dt.base.invalidData")),a.abrupt("return");case 4:n=Object(r["a"])({},i.data),s={id:n.id,data:Object(r["a"])({},n)},e.$Http.Post({mutation:e.$Model.RoleEdit,variables:s}).then((function(){e.$Message.success(e.$t("dt.toast.saveOk")),e.handleRouteGoBack("admin.RoleList")}));case 7:case"end":return a.stop()}}),a)})))()}}},u=c,l=(a("70b9"),a("c701")),m=Object(l["a"])(u,i,n,!1,null,"58d51cb8",null);e["default"]=m.exports},"70b9":function(t,e,a){"use strict";a("003e")}}]);