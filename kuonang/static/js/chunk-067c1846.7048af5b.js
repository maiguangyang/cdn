(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-067c1846"],{2780:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"office-add-page"},[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"controller"},[a("form-model",{attrs:{formModel:t.formModel,tabName:[t.$t("dt.form.OfficeAdd")],btnTitle:t.$t("dt.base.save")},on:{formDataSubmit:t.handleFormDataSubmit}})],1)])])},r=[],s=a("d211"),n=a("b8f9"),o=a("3d78"),l={name:"OfficeAdd",data:function(){return{formModel:{hide:[],readonly:[]}}},created:function(){},mounted:function(){},components:{FormModel:o["a"]},watch:{},methods:{handleFormDataSubmit:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(n["a"].isObject(e)&&n["a"].isObject(e.data)&&!n["a"].isEmpty(e.data)){var a=Object(s["a"])({},e.data),i={data:Object(s["a"])({},a)};this.$Http.Post({mutation:this.$Model.OfficeAdd,variables:i}).then((function(){t.$Message.success(t.$t("dt.toast.saveOk")),t.handleRouteGoBack("admin.OfficeList")}))}else this.$Message.error(this.$t("dt.base.invalidData"))}}},c=l,d=a("c701"),m=Object(d["a"])(c,i,r,!1,null,"1a2f643e",null);e["default"]=m.exports},"3d78":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-content-layer"},[a("Tabs",{staticClass:"tabs",attrs:{type:"card"}},[a("TabPane",{attrs:{label:t.tabName[0]}},[a("Form",{ref:"form",staticClass:"form-page",attrs:{"label-position":"right","label-width":100,model:t.formData,rules:t.ruleInline}},[a("Col",{directives:[{name:"show",rawName:"v-show",value:!t.$FormCheck("name",t.formModel.hide),expression:"!$FormCheck('name', formModel.hide)"}],staticClass:"input-item",attrs:{xs:24,sm:16,md:16,lg:12,xl:8,xxl:6}},[a("FormItem",{attrs:{label:t.$t("dt.form.OfficeName"),prop:"name"}},[a("Input",{attrs:{readonly:t.$FormCheck("name",t.formModel.readonly),clearable:!t.$FormCheck("name",t.formModel.readonly),placeholder:t.$t("dt.base.pleaseInput",{label:t.$t("dt.form.OfficeName")})},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1)],1),a("Col",{directives:[{name:"show",rawName:"v-show",value:!t.$FormCheck("weight",t.formModel.hide),expression:"!$FormCheck('weight', formModel.hide)"}],staticClass:"input-item",attrs:{xs:24,sm:16,md:16,lg:12,xl:8,xxl:6}},[a("FormItem",{attrs:{label:t.$t("dt.form.weight"),prop:"weight"}},[a("Input",{attrs:{readonly:t.$FormCheck("weight",t.formModel.readonly),clearable:!t.$FormCheck("weight",t.formModel.readonly),placeholder:t.$t("dt.base.pleaseInput",{label:t.$t("dt.form.weight")})},model:{value:t.formData.weight,callback:function(e){t.$set(t.formData,"weight",t._n(e))},expression:"formData.weight"}})],1)],1),a("Col",{staticClass:"input-item form-item-flex",attrs:{xs:24,sm:16,md:16,lg:12,xl:8,xxl:6}},[a("FormItem",{attrs:{label:t.$t("dt.base.IsLogin")}},[a("i-switch",{attrs:{disabled:t.$FormCheck("login",t.formModel.readonly),size:"large"},model:{value:t.formData.login,callback:function(e){t.$set(t.formData,"login",e)},expression:"formData.login"}},t._l(t.$options.filters.switchStatus([]),(function(e,i){return a("span",{key:i,attrs:{slot:1===1*e.value?"open":"close"},slot:1===1*e.value?"open":"close"},[t._v(t._s(e.label))])})),0)],1),a("FormItem",{attrs:{label:t.$t("dt.base.IsCheck")}},[a("i-switch",{attrs:{disabled:t.$FormCheck("isCheck",t.formModel.readonly),size:"large"},model:{value:t.formData.isCheck,callback:function(e){t.$set(t.formData,"isCheck",e)},expression:"formData.isCheck"}},t._l(t.$options.filters.switchStatus([]),(function(e,i){return a("span",{key:i,attrs:{slot:1===1*e.value?"open":"close"},slot:1===1*e.value?"open":"close"},[t._v(t._s(e.label))])})),0)],1)],1),a("Col",{staticClass:"input-item",attrs:{xs:24,sm:16,md:16,lg:12,xl:8,xxl:6}},[a("FormItem",{attrs:{label:t.$t("dt.form.status")}},[a("i-switch",{attrs:{disabled:t.$FormCheck("state",t.formModel.readonly),size:"large"},model:{value:t.formData.state,callback:function(e){t.$set(t.formData,"state",e)},expression:"formData.state"}},t._l(t.$options.filters.state([]),(function(e,i){return a("span",{key:i,attrs:{slot:1===1*e.value?"open":"close"},slot:1===1*e.value?"open":"close"},[t._v(t._s(e.label))])})),0)],1)],1),a("Col",{staticClass:"input-item",attrs:{xs:24,sm:16,md:16,lg:12,xl:8,xxl:6}},[a("FormItem",[!t.isReadonly&&t.$isHasMenuAuth("admin.OfficeAdd")||!t.isReadonly&&t.$isHasMenuAuth("admin.OfficeEdit")?a("Button",{attrs:{type:"primary",loading:t.loading},on:{click:t.handleSumbitCheck}},[t._v(" "+t._s(t.btnTitle)+" ")]):t.$isHasMenuAuth("admin.OfficeEdit")?a("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary"},on:{click:function(e){return t.handleCheckHabitType({name:"admin.OfficeEdit",params:{id:t.id}})}}},[t._v(" "+t._s(t.$t("dt.form.edit"))+" ")]):t._e(),a("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(e){return t.handleRouteGoBack("admin.OfficeList")}}},[t._v(t._s(t.$t("dt.base.back")))])],1)],1)],1)],1)],1)],1)},r=[],s=a("d211"),n=a("b8f9"),o=a("4ec25"),l={name:"RoleModel",mixins:[o["a"]],data:function(){return{index:1,formTemp:{branchList:[]},formData:{login:!0,isCheck:!0},ruleInline:{name:[{required:!0,message:this.$t("dt.base.pleaseInput",{label:this.$t("dt.form.OfficeName")}),trigger:"blur"}],weight:[{required:!0,type:"number",message:this.$t("dt.form.weightPlaceholder"),trigger:"blur"},{validator:this.$Validator("number",this.$t("dt.form.weightPlaceholder")),trigger:"blur"}]}}},created:function(){n["a"].isEmpty(this.id)||this.handleDetail()},mounted:function(){},components:{},watch:{},methods:{handleDetail:function(){var t=this;this.$Http.Post({mutation:this.$Model.OfficeDetail,variables:{id:this.id},fields:["id","name","isCheck","login","weight","state"]},(function(){t.$router.push({name:"admin.OfficeList"})})).then((function(e){var a=e.data;a.login=1===a.login||!0===a.login,a.isCheck=1===a.isCheck||!0===a.isCheck,a.state=1===a.state||!0===a.state,t.formData=Object(s["a"])(Object(s["a"])({},t.formData),a)}))},handleSumbitCheck:function(){var t=Object(s["a"])({},this.formData);t.login=!0===t.login?1:2,t.isCheck=!0===t.isCheck?1:2,this.handleSumbit(t)}}},c=l,d=(a("a083"),a("c701")),m=Object(d["a"])(c,i,r,!1,null,"e8c3a806",null);e["a"]=m.exports},"4ec25":function(t,e,a){"use strict";a("6a61");var i=a("2e91"),r=a("d211"),s=a("5880"),n=a("b8f9"),o={data:function(){return{id:null,isReadonly:!1,formData:{branchId:this.$UserInfo.bid,state:!0,weight:1}}},props:{formData_bak:{type:Object,default:function(){return{}}},formModel:{type:Object,default:function(){return{}}},btnTitle:{type:String,default:""},tabName:{type:Array,default:function(){return[null]}}},created:function(){this.id=this.$GetParamsId(this),this.$FormCheck("*",this.formModel.readonly)&&(this.isReadonly=!0,this.ruleInline={})},computed:Object(r["a"])({},Object(s["mapState"])("base",{loading:function(t){return t.loading},isMethodList:function(t){return t.isMethodList}})),methods:{handleEmitData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.formData;this.$store.commit("popupModel/pageModal",{pageModal:!1}),this.$emit("formDataSubmit",{data:t})},handleFilterBranchChange:function(t){n["a"].isEmpty(t)||(this.formData.branchId=t)},handleSumbit:function(){var t=arguments,e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,s,o,l,c,d;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(r=t.length>0&&void 0!==t[0]?t[0]:e.formData,s=t.length>1&&void 0!==t[1]?t[1]:"form",r.state=!0===r.state||1*r.state===1?1:2,o=!0,l=!1,!n["a"].isString(s)){a.next=16;break}if(e.$refs[s]){a.next=11;break}o=!1,l=!0,a.next=14;break;case 11:return a.next=13,e.$refs[s].validate((function(t){return t}));case 13:l=a.sent;case 14:a.next=22;break;case 16:if(!n["a"].isArray(s)){a.next=22;break}return c=!0,n["a"].each(s,function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$refs[a]?e.$refs[a].validate((function(t){!1===t&&!0===c&&(c=!1)})):(o=!1,c=!0);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),a.next=21,c;case 21:l=a.sent;case 22:if(!1!==o||!0!==l){a.next=25;break}return e.handleEmitData(r),a.abrupt("return");case 25:if(!1!==l){a.next=28;break}return e.$Message.error(e.$t("dt.form.checkFormComplete")),a.abrupt("return");case 28:d=e.$store.state.popupModel.pageModal,!0===d&&e.$store.commit("popupModel/loadData",{loadData:!0}),e.handleEmitData(r);case 31:case"end":return a.stop()}}),a)})))()}}};e["a"]=o},a083:function(t,e,a){"use strict";a("d2f4")},d2f4:function(t,e,a){}}]);