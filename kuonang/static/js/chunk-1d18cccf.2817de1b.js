(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d18cccf"],{"10ca":function(t,e,a){},"2f8e":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"branch-type-detail-page"},[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"controller"},[a("form-model",{attrs:{formModel:t.formModel,tabName:[t.$t("dt.form.BranchTypeDetail")],btnTitle:t.$t("dt.base.save")}})],1)])])},s=[],i=a("8b9a"),n={name:"BranchTypeDetail",data:function(){return{id:null,formModel:{hide:[],readonly:["*"]}}},created:function(){if(this.id=this.$GetParamsId(this),!this.id)return this.$Notice.error({title:this.$t("dt.toast.tips"),desc:this.$t("dt.toast.notExistent")}),this.$router.push({name:"admin.BranchTypeList"}),!1},mounted:function(){},components:{FormModel:i["a"]},watch:{},methods:{}},o=n,l=(a("4b49"),a("c701")),d=Object(l["a"])(o,r,s,!1,null,"321210a2",null);e["default"]=d.exports},"4b49":function(t,e,a){"use strict";a("10ca")},"8b9a":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-content-layer"},[a("Tabs",{staticClass:"tabs",attrs:{type:"card"}},[a("TabPane",{attrs:{label:t.tabName[0]}},[a("Row",{staticClass:"input-group",attrs:{type:"flex",align:"bottom",gutter:10}},[a("Col",{staticClass:"input-item",attrs:{xs:24,sm:16,md:16,lg:12,xl:8,xxl:6}},[a("Form",{ref:"form",staticClass:"form-page",attrs:{"label-position":"right","label-width":100,model:t.formData,rules:t.ruleInline}},[a("FormItem",{directives:[{name:"show",rawName:"v-show",value:!t.$FormCheck("name",t.formModel.hide),expression:"!$FormCheck('name', formModel.hide)"}],attrs:{label:t.$t("dt.form.BranchType"),prop:"name"}},[a("Input",{attrs:{readonly:t.$FormCheck("name",t.formModel.readonly),clearable:!t.$FormCheck("name",t.formModel.readonly),placeholder:t.$t("dt.base.pleaseInput",{label:t.$t("dt.form.BranchType")})},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),a("FormItem",{directives:[{name:"show",rawName:"v-show",value:!t.$FormCheck("userId",t.formModel.hide),expression:"!$FormCheck('userId', formModel.hide)"}],attrs:{label:""+t.$t("dt.form.bePerson"),prop:"userId"}},[a("Select",{attrs:{filterable:"",disabled:t.$FormCheck("userId",t.formModel.readonly),readonly:t.$FormCheck("userId",t.formModel.readonly),placeholder:t.$t("dt.base.pleaseSelect",{label:t.$t("dt.form.bePerson")})},on:{"on-query-change":t.handleUserList},model:{value:t.formData.userId,callback:function(e){t.$set(t.formData,"userId",e)},expression:"formData.userId"}},t._l(t.formTemp.users,(function(e,r){return a("Option",{key:r,attrs:{value:e.id,label:e.username}},[t._v(" "+t._s(e.username)+" ")])})),1),!t.isReadonly&&t.$isHasMenuAuth("admin.UserAdd")?a("span",{staticClass:"no-flex",on:{click:function(e){t.handleCheckHabitType({name:"admin.UserAdd",query:{dt:t.$SetDtLink(t.$route,t.$store.state)}})}}},[t._v(" "+t._s(t.$t("dt.form.add"))+" ")]):t._e()],1),a("FormItem",{directives:[{name:"show",rawName:"v-show",value:!t.$FormCheck("weight",t.formModel.hide),expression:"!$FormCheck('weight', formModel.hide)"}],attrs:{label:t.$t("dt.form.weight"),prop:"weight"}},[a("Input",{attrs:{readonly:t.$FormCheck("weight",t.formModel.readonly),clearable:!t.$FormCheck("weight",t.formModel.readonly),placeholder:t.$t("dt.base.pleaseInput",{label:t.$t("dt.form.weight")})},model:{value:t.formData.weight,callback:function(e){t.$set(t.formData,"weight",t._n(e))},expression:"formData.weight"}})],1),a("FormItem",{attrs:{label:t.$t("dt.form.status")}},[a("i-switch",{attrs:{disabled:t.$FormCheck("state",t.formModel.readonly),size:"large"},model:{value:t.formData.state,callback:function(e){t.$set(t.formData,"state",e)},expression:"formData.state"}},t._l(t.$options.filters.state([]),(function(e,r){return a("span",{key:r,attrs:{slot:1===1*e.value?"open":"close"},slot:1===1*e.value?"open":"close"},[t._v(t._s(e.label))])})),0)],1),a("FormItem",[!t.isReadonly&&t.$isHasMenuAuth("admin.BranchTypeAdd")||!t.isReadonly&&t.$isHasMenuAuth("admin.BranchTypeEdit")?a("Button",{attrs:{type:"primary",loading:t.loading},on:{click:t.handleSumbitCheck}},[t._v(" "+t._s(t.btnTitle)+" ")]):t.$isHasMenuAuth("admin.BranchTypeEdit")?a("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary"},on:{click:function(e){return t.handleCheckHabitType({name:"admin.BranchTypeEdit",params:{id:t.id}})}}},[t._v(" "+t._s(t.$t("dt.form.edit"))+" ")]):t._e(),a("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(e){return t.handleRouteGoBack("admin.BranchTypeList")}}},[t._v(t._s(t.$t("dt.base.back")))])],1)],1)],1)],1)],1),a("TabPane",{attrs:{label:t.$t("dt.base.authSetting")}},[a("Authority",{attrs:{readonly:t.isReadonly,propData:t.formData},on:{formDataSubmit:t.handleFormDataSubmit}})],1)],1)],1)},s=[],i=a("d211"),n=a("b8f9"),o=a("4ec25"),l=a("b602"),d={name:"GroupModel",mixins:[o["a"]],data:function(){return{httpTimer:null,formTemp:{auth:{},users:[],branchList:[]},ruleInline:{name:[{required:!0,message:this.$t("dt.base.pleaseInput",{label:this.$t("dt.form.BranchTypeName")}),trigger:"blur"}],userId:[{required:!0,message:this.$t("dt.base.pleaseSelect",{label:this.$t("dt.form.bePerson")}),trigger:"blur"}],weight:[{required:!0,type:"number",message:this.$t("dt.form.weightPlaceholder"),trigger:"blur"},{validator:this.$Validator("number",this.$t("dt.form.weightPlaceholder")),trigger:"blur"}]}}},created:function(){this.$isHasMenuAuth("admin.UserList")&&this.handleUserList(null),this.$isHasMenuAuth("admin.BranchList")&&this.handleBranchList(),n["a"].isEmpty(this.id)||this.handleDetail()},mounted:function(){},components:{Authority:l["a"]},watch:{},methods:{handleDetail:function(){var t=this;this.$Http.Post({mutation:this.$Model.BranchTypeDetail,variables:{id:this.id},fields:["id","name","userId","menu","feature","weight","state"]},(function(){t.$router.push({name:"admin.BranchTypeList"})})).then((function(e){var a=e.data;a.state=1===a.state||!0===a.state,t.formData=Object(i["a"])(Object(i["a"])({},t.formData),a)}))},handleUserList:function(t){var e=this;if(this.$isHasMenuAuth("admin.UserList")){if(""===t)return;this.httpTimer&&clearTimeout(this.httpTimer),this.httpTimer=setTimeout((function(){e.$Http.Post({mutation:e.$Model.Users,variables:{perPage:0,filter:{username_like:t}},fields:[{data:["id","username","phone"]}]}).then((function(t){var a=t.data;e.formTemp.users=a.data}))}),200)}},handleBranchList:function(){var t=this;this.$Http.Post({mutation:this.$Model.Branchs,variables:{perPage:0},fields:[{data:["id","name"]}]}).then((function(e){var a=e.data;t.formTemp.branchList=a.data}))},handleFormDataSubmit:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.formTemp.auth=t},handleSumbitCheck:function(){var t=Object(i["a"])(Object(i["a"])({},this.formData),this.formTemp.auth);this.handleSumbit(t)}}},m=d,h=a("c701"),c=Object(h["a"])(m,r,s,!1,null,"ea102134",null);e["a"]=c.exports}}]);