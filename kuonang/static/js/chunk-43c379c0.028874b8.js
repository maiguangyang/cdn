(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43c379c0"],{"0d2f":function(e,t,a){},"4ec25":function(e,t,a){"use strict";a("6a61");var r=a("2e91"),n=a("d211"),s=a("5880"),i=a("b8f9"),o={data:function(){return{id:null,isReadonly:!1,formData:{branchId:this.$UserInfo.bid,state:!0,weight:1}}},props:{formData_bak:{type:Object,default:function(){return{}}},formModel:{type:Object,default:function(){return{}}},btnTitle:{type:String,default:""},tabName:{type:Array,default:function(){return[null]}}},created:function(){this.id=this.$GetParamsId(this),this.$FormCheck("*",this.formModel.readonly)&&(this.isReadonly=!0,this.ruleInline={})},computed:Object(n["a"])({},Object(s["mapState"])("base",{loading:function(e){return e.loading},isMethodList:function(e){return e.isMethodList}})),methods:{handleEmitData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.formData;this.$store.commit("popupModel/pageModal",{pageModal:!1}),this.$emit("formDataSubmit",{data:e})},handleFilterBranchChange:function(e){i["a"].isEmpty(e)||(this.formData.branchId=e)},handleSumbit:function(){var e=arguments,t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var n,s,o,l,d,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n=e.length>0&&void 0!==e[0]?e[0]:t.formData,s=e.length>1&&void 0!==e[1]?e[1]:"form",n.state=!0===n.state||1*n.state===1?1:2,o=!0,l=!1,!i["a"].isString(s)){a.next=16;break}if(t.$refs[s]){a.next=11;break}o=!1,l=!0,a.next=14;break;case 11:return a.next=13,t.$refs[s].validate((function(e){return e}));case 13:l=a.sent;case 14:a.next=22;break;case 16:if(!i["a"].isArray(s)){a.next=22;break}return d=!0,i["a"].each(s,function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$refs[a]?t.$refs[a].validate((function(e){!1===e&&!0===d&&(d=!1)})):(o=!1,d=!0);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),a.next=21,d;case 21:l=a.sent;case 22:if(!1!==o||!0!==l){a.next=25;break}return t.handleEmitData(n),a.abrupt("return");case 25:if(!1!==l){a.next=28;break}return t.$Message.error(t.$t("dt.form.checkFormComplete")),a.abrupt("return");case 28:c=t.$store.state.popupModel.pageModal,!0===c&&t.$store.commit("popupModel/loadData",{loadData:!0}),t.handleEmitData(n);case 31:case"end":return a.stop()}}),a)})))()}}};t["a"]=o},"6b9c":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Select",{attrs:{clearable:e.clearable,multiple:e.multiple,disabled:e.disabled,readonly:e.readonly,placeholder:e.$t("dt.base.pleaseSelect",{label:e.$t("dt.form.ParentBranch")})},on:{"on-change":e.handleFilterChange},model:{value:e.branchId,callback:function(t){e.branchId=t},expression:"branchId"}},e._l(e.formTemp.data,(function(t,r){return a("Option",{key:r,attrs:{value:t.id}},[e._v(e._s(t.name))])})),1)},n=[],s=(a("422c"),a("1f90"),a("4c09")),i=(a("6a61"),a("2e91")),o=a("b8f9"),l={name:"Address",data:function(){return{branchId:null,formTemp:{data:[]}}},props:{clearable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},value:null,callback:null},computed:{},created:function(){this.$isHasMenuAuth("admin.BranchList")&&this.handleBranchList()},mounted:function(){this.branchId=this.value},watch:{},methods:{handleBranchTypeList:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$Http.Post({mutation:e.$Model.BranchTypes,variables:{perPage:0,filter:{userId:e.$UserInfo.id}},fields:[{data:["id","branchs.id","branchs.name"]}]}).then((function(e){var t=e.data||{},a=[];return t.data.forEach((function(e){var t;return(t=a).push.apply(t,Object(s["a"])(e.branchs))})),a=o["a"].uniqBy(a,"id"),{data:a}}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},handleBranchList:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=[],2!==e.$UserInfo.super||!0!==e.$UserInfo.admin){t.next=7;break}return t.next=4,e.$Http.Post({mutation:e.$Model.Branchs,variables:{perPage:0},fields:[{data:["id","name"]}]}).then((function(e){return e.data}));case 4:a=t.sent,t.next=11;break;case 7:if(!0!==e.$UserInfo.tyeAdmin){t.next=11;break}return t.next=10,e.handleBranchTypeList();case 10:a=t.sent;case 11:e.formTemp.data=a.data;case 12:case"end":return t.stop()}}),t)})))()},handleFilterChange:function(e){this.$emit("input",e),!o["a"].isEmpty(this.callback)&&o["a"].isFunction(this.callback)&&this.callback(e)}}},d=l,c=a("c701"),m=Object(c["a"])(d,r,n,!1,null,"3f3d2be0",null);t["a"]=m.exports},"9c5a":function(e,t,a){"use strict";a("0d2f")},b7fe:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"WarehouseType-detail-page"},[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"controller"},[a("form-model",{attrs:{formModel:e.formModel,tabName:[e.$t("dt.form.TypeDetail")],btnTitle:e.$t("dt.base.save")}})],1)])])},n=[],s=a("be11"),i={name:"WarehouseTypeDetail",data:function(){return{id:null,formModel:{hide:[],readonly:["*"]}}},created:function(){if(this.id=this.$GetParamsId(this),!this.id)return this.$Notice.error({title:this.$t("dt.toast.tips"),desc:this.$t("dt.toast.notExistent")}),this.$router.push({name:"admin.WarehouseTypeList"}),!1},mounted:function(){},components:{FormModel:s["a"]},watch:{},methods:{}},o=i,l=a("c701"),d=Object(l["a"])(o,r,n,!1,null,"694d380f",null);t["default"]=d.exports},be11:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-content-layer"},[a("Tabs",{staticClass:"tabs",attrs:{type:"card"}},[a("TabPane",{attrs:{label:e.tabName[0]}},[a("Form",{ref:"form",staticClass:"form-page",attrs:{"label-position":"right","label-width":100,model:e.formData,rules:e.ruleInline}},[a("Col",{directives:[{name:"show",rawName:"v-show",value:!e.$FormCheck("name",e.formModel.hide),expression:"!$FormCheck('name', formModel.hide)"}],staticClass:"input-item",attrs:{xs:24,sm:16,md:16,lg:12,xl:8,xxl:6}},[a("FormItem",{attrs:{label:e.$t("dt.form.TypeName"),prop:"name"}},[a("Input",{attrs:{readonly:e.$FormCheck("name",e.formModel.readonly),clearable:!e.$FormCheck("name",e.formModel.readonly),placeholder:e.$t("dt.base.pleaseInput",{label:e.$t("dt.form.TypeName")})},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1)],1),a("Col",{directives:[{name:"show",rawName:"v-show",value:!e.$FormCheck("branchId",e.formModel.hide)&&!0===e.$UserInfo.admin,expression:"!$FormCheck('branchId', formModel.hide) && $UserInfo.admin === true"}],staticClass:"input-item",attrs:{xs:24,sm:16,md:16,lg:12,xl:8,xxl:6}},[a("FormItem",{attrs:{label:""+e.$t("dt.form.ParentBranch"),prop:"branchId"}},[a("e-branch",{attrs:{clearable:!1,readonly:void 0!==e.id,disabled:void 0!==e.id,multiple:!1},on:{callback:e.handleFilterBranchChange},model:{value:e.formData.branchId,callback:function(t){e.$set(e.formData,"branchId",t)},expression:"formData.branchId"}}),e.isReadonly||!e.$isHasMenuAuth("admin.BranchAdd")||e.id?e._e():a("span",{staticClass:"no-flex",on:{click:function(t){e.handleCheckHabitType({name:"admin.BranchAdd",query:{dt:e.$SetDtLink(e.$route,e.$store.state)}})}}},[e._v(" "+e._s(e.$t("dt.form.add"))+" ")])],1)],1),a("Col",{directives:[{name:"show",rawName:"v-show",value:!e.$FormCheck("remark",e.formModel.hide),expression:"!$FormCheck('remark', formModel.hide)"}],staticClass:"input-item",attrs:{xs:24,sm:16,md:16,lg:12,xl:8,xxl:6}},[a("FormItem",{attrs:{label:e.$t("dt.base.remark"),prop:"remark"}},[a("Input",{attrs:{readonly:e.$FormCheck("remark",e.formModel.readonly),clearable:!e.$FormCheck("remark",e.formModel.readonly),maxlength:"255","show-word-limit":"",type:"textarea",rows:4,placeholder:e.$t("dt.base.pleaseInput",{label:e.$t("dt.base.remark")})},model:{value:e.formData.remark,callback:function(t){e.$set(e.formData,"remark",t)},expression:"formData.remark"}})],1)],1),a("Col",{directives:[{name:"show",rawName:"v-show",value:!e.$FormCheck("weight",e.formModel.hide),expression:"!$FormCheck('weight', formModel.hide)"}],staticClass:"input-item",attrs:{xs:24,sm:16,md:16,lg:12,xl:8,xxl:6}},[a("FormItem",{attrs:{label:e.$t("dt.form.weight"),prop:"weight"}},[a("Input",{attrs:{readonly:e.$FormCheck("weight",e.formModel.readonly),clearable:!e.$FormCheck("weight",e.formModel.readonly),placeholder:e.$t("dt.base.pleaseInput",{label:e.$t("dt.form.weight")})},model:{value:e.formData.weight,callback:function(t){e.$set(e.formData,"weight",e._n(t))},expression:"formData.weight"}})],1)],1),a("Col",{staticClass:"input-item",attrs:{xs:24,sm:16,md:16,lg:12,xl:8,xxl:6}},[a("FormItem",{attrs:{label:e.$t("dt.form.status")}},[a("i-switch",{attrs:{disabled:e.$FormCheck("state",e.formModel.readonly),size:"large"},model:{value:e.formData.state,callback:function(t){e.$set(e.formData,"state",t)},expression:"formData.state"}},e._l(e.$options.filters.state([]),(function(t,r){return a("span",{key:r,attrs:{slot:1===1*t.value?"open":"close"},slot:1===1*t.value?"open":"close"},[e._v(e._s(t.label))])})),0)],1)],1),a("Col",{staticClass:"input-item",attrs:{xs:24,sm:16,md:16,lg:12,xl:8,xxl:6}},[a("FormItem",[!e.isReadonly&&e.$isHasMenuAuth("admin.WarehouseTypeAdd")||!e.isReadonly&&e.$isHasMenuAuth("admin.WarehouseTypeEdit")?a("Button",{attrs:{type:"primary",loading:e.loading},on:{click:e.handleSumbitCheck}},[e._v(" "+e._s(e.btnTitle)+" ")]):e.$isHasMenuAuth("admin.WarehouseTypeEdit")?a("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary"},on:{click:function(t){return e.handleCheckHabitType({name:"admin.WarehouseTypeEdit",params:{id:e.id}})}}},[e._v(" "+e._s(e.$t("dt.form.edit"))+" ")]):e._e(),a("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(t){return e.handleRouteGoBack("admin.WarehouseTypeList")}}},[e._v(e._s(e.$t("dt.base.back")))])],1)],1)],1)],1)],1)],1)},n=[],s=a("d211"),i=a("b8f9"),o=a("4ec25"),l=a("6b9c"),d={name:"WarehouseTypeModel",mixins:[o["a"]],data:function(){return{formTemp:{},formData:{},ruleInline:{name:[{required:!0,message:this.$t("dt.base.pleaseInput",{label:this.$t("dt.form.WarehouseTypeName")}),trigger:"blur"}],branchId:[{required:!0,message:this.$t("dt.base.pleaseSelect",{label:this.$t("dt.form.ParentBranch")}),trigger:"blur"}],weight:[{required:!0,type:"number",message:this.$t("dt.form.weightPlaceholder"),trigger:"blur"},{validator:this.$Validator("number",this.$t("dt.form.weightPlaceholder")),trigger:"blur"}]}}},created:function(){i["a"].isEmpty(this.id)||this.handleDetail()},mounted:function(){},components:{EBranch:l["a"]},watch:{},methods:{handleDetail:function(){var e=this;this.$Http.Post({mutation:this.$Model.WarehouseTypeDetail,variables:{id:this.id},fields:["id","name","remark","weight","state"]},(function(){e.$router.push({name:"admin.WarehouseTypeList"})})).then((function(t){var a=t.data;a.state=1===a.state||!0===a.state,e.formData=Object(s["a"])(Object(s["a"])({},e.formData),a)}))},handleSumbitCheck:function(){var e=Object(s["a"])({},this.formData);this.handleSumbit(e)}}},c=d,m=(a("9c5a"),a("c701")),u=Object(m["a"])(c,r,n,!1,null,"88781502",null);t["a"]=u.exports}}]);