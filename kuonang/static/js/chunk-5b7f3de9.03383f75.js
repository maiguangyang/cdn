(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b7f3de9"],{"14a0":function(t,a,e){"use strict";e("60cc")},"60cc":function(t,a,e){},c82e:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"merchant-branch-edit-page"},[e("div",{staticClass:"wrapper"},[e("div",{staticClass:"controller"},[e("form-model",{attrs:{formModel:t.formModel,tabName:[t.$t("dt.form.BranchEdit")],btnTitle:t.$t("dt.base.save")},on:{formDataSubmit:t.handleFormDataSubmit}})],1)])])},s=[],n=e("d211"),o=e("b8f9"),d=e("78d7"),r={name:"BranchEdit",data:function(){return{id:null,formModel:{hide:[],readonly:[]}}},created:function(){if(this.id=this.$GetParamsId(this),!this.id)return this.$Notice.error({title:this.$t("dt.toast.tips"),desc:this.$t("dt.toast.notExistent")}),this.$router.push({name:"admin.BranchList"}),!1},mounted:function(){},components:{FormModel:d["a"]},watch:{},methods:{handleFormDataSubmit:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(o["a"].isObject(a)&&o["a"].isObject(a.data)&&!o["a"].isEmpty(a.data)){var e=Object(n["a"])({},a.data),i={id:e.id,data:Object(n["a"])({},e)};this.$Http.Post({mutation:this.$Model.BranchEdit,variables:i}).then((function(){t.$Message.success(t.$t("dt.toast.saveOk")),t.handleRouteGoBack("admin.BranchList")}))}else this.$Message.error(this.$t("dt.base.invalidData"))}}},c=r,h=(e("14a0"),e("c701")),l=Object(h["a"])(c,i,s,!1,null,"4ef24afe",null);a["default"]=l.exports}}]);