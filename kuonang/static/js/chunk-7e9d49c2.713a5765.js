(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e9d49c2"],{"1d9b":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Collection-edit-page"},[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"controller"},[a("form-model",{attrs:{formModel:e.formModel,tabName:[e.$t("dt.form.CollectionEdit")],btnTitle:e.$t("dt.base.save")},on:{formDataSubmit:e.handleFormDataSubmit}})],1)])])},o=[],s=a("d211"),n=(a("6a61"),a("2e91")),i=a("b8f9"),l=a("c1ac"),m={name:"CollectionEdit",data:function(){return{id:null,formModel:{hide:[],readonly:[]}}},created:function(){if(this.id=this.$GetParamsId(this),!this.id)return this.$Notice.error({title:this.$t("dt.toast.tips"),desc:this.$t("dt.toast.notExistent")}),this.$router.push({name:"admin.CollectionList"}),!1},mounted:function(){},components:{FormModel:l["a"]},watch:{},methods:{handleFormDataSubmit:function(){var e=arguments,t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var r,o,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r=e.length>0&&void 0!==e[0]?e[0]:{},i["a"].isObject(r)&&i["a"].isObject(r.data)&&!i["a"].isEmpty(r.data)){a.next=4;break}return t.$Message.error(t.$t("dt.base.invalidData")),a.abrupt("return");case 4:o=Object(s["a"])({},r.data),n={id:o.id,data:Object(s["a"])({},o)},t.$Http.Post({mutation:t.$Model.CollectionEdit,variables:n}).then((function(){t.$Message.success(t.$t("dt.toast.saveOk")),t.handleRouteGoBack("admin.CollectionList")}));case 7:case"end":return a.stop()}}),a)})))()}}},c=m,d=a("c701"),u=Object(d["a"])(c,r,o,!1,null,"726af21c",null);t["default"]=u.exports},"38b4":function(e,t,a){},"4ec25":function(e,t,a){"use strict";a("6a61");var r=a("2e91"),o=a("d211"),s=a("5880"),n=a("b8f9"),i={data:function(){return{id:null,isReadonly:!1,formData:{branchId:this.$UserInfo.bid,state:!0,weight:1}}},props:{formData_bak:{type:Object,default:function(){return{}}},formModel:{type:Object,default:function(){return{}}},btnTitle:{type:String,default:""},tabName:{type:Array,default:function(){return[null]}}},created:function(){this.id=this.$GetParamsId(this),this.$FormCheck("*",this.formModel.readonly)&&(this.isReadonly=!0,this.ruleInline={})},computed:Object(o["a"])({},Object(s["mapState"])("base",{loading:function(e){return e.loading},isMethodList:function(e){return e.isMethodList}})),methods:{handleEmitData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.formData;this.$store.commit("popupModel/pageModal",{pageModal:!1}),this.$emit("formDataSubmit",{data:e})},handleFilterBranchChange:function(e){n["a"].isEmpty(e)||(this.formData.branchId=e)},handleSumbit:function(){var e=arguments,t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var o,s,i,l,m,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(o=e.length>0&&void 0!==e[0]?e[0]:t.formData,s=e.length>1&&void 0!==e[1]?e[1]:"form",o.state=!0===o.state||1*o.state===1?1:2,i=!0,l=!1,!n["a"].isString(s)){a.next=16;break}if(t.$refs[s]){a.next=11;break}i=!1,l=!0,a.next=14;break;case 11:return a.next=13,t.$refs[s].validate((function(e){return e}));case 13:l=a.sent;case 14:a.next=22;break;case 16:if(!n["a"].isArray(s)){a.next=22;break}return m=!0,n["a"].each(s,function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$refs[a]?t.$refs[a].validate((function(e){!1===e&&!0===m&&(m=!1)})):(i=!1,m=!0);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),a.next=21,m;case 21:l=a.sent;case 22:if(!1!==i||!0!==l){a.next=25;break}return t.handleEmitData(o),a.abrupt("return");case 25:if(!1!==l){a.next=28;break}return t.$Message.error(t.$t("dt.form.checkFormComplete")),a.abrupt("return");case 28:c=t.$store.state.popupModel.pageModal,!0===c&&t.$store.commit("popupModel/loadData",{loadData:!0}),t.handleEmitData(o);case 31:case"end":return a.stop()}}),a)})))()}}};t["a"]=i},"5fa4":function(e,t,a){"use strict";a("38b4")},c1ac:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-content-layer"},[a("Tabs",{staticClass:"tabs",attrs:{type:"card"}},[a("TabPane",{attrs:{label:e.tabName[0]}},[a("Form",{ref:"form",staticClass:"form-page",attrs:{"label-position":"right","label-width":100,model:e.formData,rules:e.ruleInline}},[a("Col",{directives:[{name:"show",rawName:"v-show",value:!e.$FormCheck("name",e.formModel.hide),expression:"!$FormCheck('name', formModel.hide)"}],staticClass:"input-item",attrs:{xs:24,sm:16,md:16,lg:12,xl:8,xxl:6}},[a("FormItem",{attrs:{label:e.$t("dt.form.Collection"),prop:"name"}},[a("Input",{attrs:{readonly:e.$FormCheck("name",e.formModel.readonly),clearable:!e.$FormCheck("name",e.formModel.readonly),placeholder:e.$t("dt.base.pleaseInput",{label:e.$t("dt.form.Collection")})},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1)],1),a("Col",{directives:[{name:"show",rawName:"v-show",value:!e.$FormCheck("username",e.formModel.hide),expression:"!$FormCheck('username', formModel.hide)"}],staticClass:"input-item",attrs:{xs:24,sm:16,md:16,lg:12,xl:8,xxl:6}},[a("FormItem",{attrs:{label:e.$t("dt.form.Username"),prop:"username"}},[a("Input",{attrs:{readonly:e.$FormCheck("username",e.formModel.readonly),clearable:!e.$FormCheck("username",e.formModel.readonly),placeholder:e.$t("dt.base.pleaseInput",{label:e.$t("dt.form.Username")})},model:{value:e.formData.username,callback:function(t){e.$set(e.formData,"username",t)},expression:"formData.username"}})],1)],1),a("Col",{directives:[{name:"show",rawName:"v-show",value:!e.$FormCheck("account",e.formModel.hide),expression:"!$FormCheck('account', formModel.hide)"}],staticClass:"input-item",attrs:{xs:24,sm:16,md:16,lg:12,xl:8,xxl:6}},[a("FormItem",{attrs:{label:e.$t("dt.form.Account"),prop:"account"}},[a("Input",{attrs:{readonly:e.$FormCheck("account",e.formModel.readonly),clearable:!e.$FormCheck("account",e.formModel.readonly),placeholder:e.$t("dt.base.pleaseInput",{label:e.$t("dt.form.Account")})},model:{value:e.formData.account,callback:function(t){e.$set(e.formData,"account",t)},expression:"formData.account"}})],1)],1),a("Col",{directives:[{name:"show",rawName:"v-show",value:!e.$FormCheck("remark",e.formModel.hide),expression:"!$FormCheck('remark', formModel.hide)"}],staticClass:"input-item",attrs:{xs:24,sm:16,md:16,lg:12,xl:8,xxl:6}},[a("FormItem",{attrs:{label:e.$t("dt.base.remark"),prop:"remark"}},[a("Input",{attrs:{readonly:e.$FormCheck("remark",e.formModel.readonly),clearable:!e.$FormCheck("remark",e.formModel.readonly),maxlength:"255","show-word-limit":"",type:"textarea",rows:4,placeholder:e.$t("dt.base.pleaseInput",{label:e.$t("dt.base.remark")})},model:{value:e.formData.remark,callback:function(t){e.$set(e.formData,"remark",t)},expression:"formData.remark"}})],1)],1),a("Col",{directives:[{name:"show",rawName:"v-show",value:!e.$FormCheck("weight",e.formModel.hide),expression:"!$FormCheck('weight', formModel.hide)"}],staticClass:"input-item",attrs:{xs:24,sm:16,md:16,lg:12,xl:8,xxl:6}},[a("FormItem",{attrs:{label:e.$t("dt.form.weight"),prop:"weight"}},[a("Input",{attrs:{readonly:e.$FormCheck("weight",e.formModel.readonly),clearable:!e.$FormCheck("weight",e.formModel.readonly),placeholder:e.$t("dt.base.pleaseInput",{label:e.$t("dt.form.weight")})},model:{value:e.formData.weight,callback:function(t){e.$set(e.formData,"weight",e._n(t))},expression:"formData.weight"}})],1)],1),a("Col",{staticClass:"input-item form-item-flex",attrs:{xs:24,sm:16,md:16,lg:12,xl:8,xxl:6}},[a("FormItem",{directives:[{name:"show",rawName:"v-show",value:!e.$FormCheck("state",e.formModel.hide),expression:"!$FormCheck('state', formModel.hide)"}],attrs:{label:e.$t("dt.form.status")}},[a("i-switch",{attrs:{disabled:e.$FormCheck("state",e.formModel.readonly),size:"large"},model:{value:e.formData.state,callback:function(t){e.$set(e.formData,"state",t)},expression:"formData.state"}},e._l(e.$options.filters.state([]),(function(t,r){return a("span",{key:r,attrs:{slot:1===1*t.value?"open":"close"},slot:1===1*t.value?"open":"close"},[e._v(e._s(t.label))])})),0)],1),a("FormItem",{directives:[{name:"show",rawName:"v-show",value:!e.$FormCheck("isDefault",e.formModel.hide),expression:"!$FormCheck('isDefault', formModel.hide)"}],attrs:{label:e.$t("dt.toast.setDefault")}},[a("i-switch",{attrs:{disabled:e.$FormCheck("isDefault",e.formModel.readonly),size:"large"},model:{value:e.formData.isDefault,callback:function(t){e.$set(e.formData,"isDefault",t)},expression:"formData.isDefault"}},e._l(e.$options.filters.healthy([]),(function(t,r){return a("span",{key:r,attrs:{slot:2===1*t.value?"open":"close"},slot:2===1*t.value?"open":"close"},[e._v(e._s(t.label))])})),0)],1)],1),a("Col",{staticClass:"input-item",attrs:{xs:24,sm:16,md:16,lg:12,xl:8,xxl:6}},[a("FormItem",[!e.isReadonly&&e.$isHasMenuAuth("admin.CollectionAdd")||!e.isReadonly&&e.$isHasMenuAuth("admin.CollectionEdit")?a("Button",{attrs:{type:"primary",loading:e.loading},on:{click:e.handleSumbitCheck}},[e._v(" "+e._s(e.btnTitle)+" ")]):e.$isHasMenuAuth("admin.CollectionEdit")?a("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary"},on:{click:function(t){return e.handleCheckHabitType({name:"admin.CollectionEdit",params:{id:e.id}})}}},[e._v(" "+e._s(e.$t("dt.form.edit"))+" ")]):e._e(),a("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(t){return e.handleRouteGoBack("admin.CollectionList")}}},[e._v(e._s(e.$t("dt.base.back")))])],1)],1)],1)],1)],1)],1)},o=[],s=a("d211"),n=a("b8f9"),i=a("4ec25"),l={name:"CollectionModel",mixins:[i["a"]],data:function(){return{formTemp:{},formData:{discount:10},ruleInline:{name:[{required:!0,message:this.$t("dt.base.pleaseInput",{label:this.$t("dt.form.Collection")}),trigger:"blur"}],username:[{required:!0,message:this.$t("dt.base.pleaseInput",{label:this.$t("dt.form.Username")}),trigger:"blur"}],account:[{required:!0,message:this.$t("dt.base.pleaseInput",{label:this.$t("dt.form.Account")}),trigger:"blur"}],weight:[{required:!0,type:"number",message:this.$t("dt.form.weightPlaceholder"),trigger:"blur"},{validator:this.$Validator("number",this.$t("dt.form.weightPlaceholder")),trigger:"blur"}]}}},created:function(){n["a"].isEmpty(this.id)||this.handleDetail()},mounted:function(){},components:{},watch:{},methods:{handleDetail:function(){var e=this;this.$Http.Post({mutation:this.$Model.CollectionDetail,variables:{id:this.id},fields:["id","name","username","account","isDefault","remark","weight","state"]},(function(){e.$router.push({name:"admin.CollectionList"})})).then((function(t){var a=t.data;a.state=1===a.state||!0===a.state,a.isDefault=2===a.isDefault||!0===a.isDefault,e.formData=Object(s["a"])(Object(s["a"])({},e.formData),a)}))},handleSumbitCheck:function(){var e=Object(s["a"])({},this.formData);e.isDefault=!0===e.isDefault?2:1,this.handleSumbit(e)}}},m=l,c=(a("5fa4"),a("c701")),d=Object(c["a"])(m,r,o,!1,null,"50c9d1a6",null);t["a"]=d.exports}}]);