(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-161ea5b9"],{"11fa":function(t,e,a){},"39b5":function(t,e,a){"use strict";a("11fa")},"4ec25":function(t,e,a){"use strict";a("6a61");var r=a("2e91"),n=a("d211"),i=a("5880"),o=a("b8f9"),s={data:function(){return{id:null,isReadonly:!1,formData:{branchId:this.$UserInfo.bid,state:!0,weight:1}}},props:{formData_bak:{type:Object,default:function(){return{}}},formModel:{type:Object,default:function(){return{}}},btnTitle:{type:String,default:""},tabName:{type:Array,default:function(){return[null]}}},created:function(){this.id=this.$GetParamsId(this),this.$FormCheck("*",this.formModel.readonly)&&(this.isReadonly=!0,this.ruleInline={})},computed:Object(n["a"])({},Object(i["mapState"])("base",{loading:function(t){return t.loading},isMethodList:function(t){return t.isMethodList}})),methods:{handleEmitData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.formData;this.$store.commit("popupModel/pageModal",{pageModal:!1}),this.$emit("formDataSubmit",{data:t})},handleFilterBranchChange:function(t){o["a"].isEmpty(t)||(this.formData.branchId=t)},handleSumbit:function(){var t=arguments,e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var n,i,s,l,d,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n=t.length>0&&void 0!==t[0]?t[0]:e.formData,i=t.length>1&&void 0!==t[1]?t[1]:"form",n.state=!0===n.state||1*n.state===1?1:2,s=!0,l=!1,!o["a"].isString(i)){a.next=16;break}if(e.$refs[i]){a.next=11;break}s=!1,l=!0,a.next=14;break;case 11:return a.next=13,e.$refs[i].validate((function(t){return t}));case 13:l=a.sent;case 14:a.next=22;break;case 16:if(!o["a"].isArray(i)){a.next=22;break}return d=!0,o["a"].each(i,function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$refs[a]?e.$refs[a].validate((function(t){!1===t&&!0===d&&(d=!1)})):(s=!1,d=!0);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),a.next=21,d;case 21:l=a.sent;case 22:if(!1!==s||!0!==l){a.next=25;break}return e.handleEmitData(n),a.abrupt("return");case 25:if(!1!==l){a.next=28;break}return e.$Message.error(e.$t("dt.form.checkFormComplete")),a.abrupt("return");case 28:c=e.$store.state.popupModel.pageModal,!0===c&&e.$store.commit("popupModel/loadData",{loadData:!0}),e.handleEmitData(n);case 31:case"end":return a.stop()}}),a)})))()}}};e["a"]=s},"5b2e":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ProductUnit-detail-page"},[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"controller"},[a("form-model",{attrs:{formModel:t.formModel,tabName:[t.$t("dt.form.ProductUnitDetail")],btnTitle:t.$t("dt.base.save")}})],1)])])},n=[],i=a("ec8c"),o={name:"ProductUnitDetail",data:function(){return{id:null,formModel:{hide:[],readonly:["*"]}}},created:function(){if(this.id=this.$GetParamsId(this),!this.id)return this.$Notice.error({title:this.$t("dt.toast.tips"),desc:this.$t("dt.toast.notExistent")}),this.$router.push({name:"admin.ProductUnitList"}),!1},mounted:function(){},components:{FormModel:i["a"]},watch:{},methods:{}},s=o,l=a("c701"),d=Object(l["a"])(s,r,n,!1,null,"7e237ae2",null);e["default"]=d.exports},ec8c:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-content-layer"},[a("Tabs",{staticClass:"tabs",attrs:{type:"card"}},[a("TabPane",{attrs:{label:t.tabName[0]}},[a("Form",{ref:"form",staticClass:"form-page",attrs:{"label-position":"right","label-width":100,model:t.formData,rules:t.ruleInline}},[a("Col",{directives:[{name:"show",rawName:"v-show",value:!t.$FormCheck("name",t.formModel.hide),expression:"!$FormCheck('name', formModel.hide)"}],staticClass:"input-item",attrs:{xs:24,sm:16,md:16,lg:12,xl:8,xxl:6}},[a("FormItem",{attrs:{label:t.$t("dt.form.ProductUnitName"),prop:"name"}},[a("Input",{attrs:{readonly:t.$FormCheck("name",t.formModel.readonly),clearable:!t.$FormCheck("name",t.formModel.readonly),placeholder:t.$t("dt.base.pleaseInput",{label:t.$t("dt.form.ProductUnitName")})},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1)],1),a("Col",{directives:[{name:"show",rawName:"v-show",value:!t.$FormCheck("weight",t.formModel.hide),expression:"!$FormCheck('weight', formModel.hide)"}],staticClass:"input-item",attrs:{xs:24,sm:16,md:16,lg:12,xl:8,xxl:6}},[a("FormItem",{attrs:{label:t.$t("dt.form.weight"),prop:"weight"}},[a("Input",{attrs:{readonly:t.$FormCheck("weight",t.formModel.readonly),clearable:!t.$FormCheck("weight",t.formModel.readonly),placeholder:t.$t("dt.base.pleaseInput",{label:t.$t("dt.form.weight")})},model:{value:t.formData.weight,callback:function(e){t.$set(t.formData,"weight",t._n(e))},expression:"formData.weight"}})],1)],1),a("Col",{staticClass:"input-item",attrs:{xs:24,sm:16,md:16,lg:12,xl:8,xxl:6}},[a("FormItem",{attrs:{label:t.$t("dt.form.status")}},[a("i-switch",{attrs:{disabled:t.$FormCheck("state",t.formModel.readonly),size:"large"},model:{value:t.formData.state,callback:function(e){t.$set(t.formData,"state",e)},expression:"formData.state"}},t._l(t.$options.filters.state([]),(function(e,r){return a("span",{key:r,attrs:{slot:1===1*e.value?"open":"close"},slot:1===1*e.value?"open":"close"},[t._v(t._s(e.label))])})),0)],1)],1),a("Col",{staticClass:"input-item",attrs:{xs:24,sm:16,md:16,lg:12,xl:8,xxl:6}},[a("FormItem",[!t.isReadonly&&t.$isHasMenuAuth("admin.ProductUnitAdd")||!t.isReadonly&&t.$isHasMenuAuth("admin.ProductUnitEdit")?a("Button",{attrs:{type:"primary",loading:t.loading},on:{click:t.handleSumbitCheck}},[t._v(" "+t._s(t.btnTitle)+" ")]):t.$isHasMenuAuth("admin.ProductUnitEdit")?a("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary"},on:{click:function(e){return t.handleCheckHabitType({name:"admin.ProductUnitEdit",params:{id:t.id}})}}},[t._v(" "+t._s(t.$t("dt.form.edit"))+" ")]):t._e(),a("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(e){return t.handleRouteGoBack("admin.ProductUnitList")}}},[t._v(t._s(t.$t("dt.base.back")))])],1)],1)],1)],1)],1)],1)},n=[],i=a("d211"),o=a("b8f9"),s=a("4ec25"),l={name:"ProductUnitModel",mixins:[s["a"]],data:function(){return{formData:{},ruleInline:{name:[{required:!0,message:this.$t("dt.base.pleaseInput",{label:this.$t("dt.form.ProductUnitName")}),trigger:"blur"}],weight:[{required:!0,type:"number",message:this.$t("dt.form.weightPlaceholder"),trigger:"blur"},{validator:this.$Validator("number",this.$t("dt.form.weightPlaceholder")),trigger:"blur"}]}}},created:function(){o["a"].isEmpty(this.id)||this.handleDetail()},mounted:function(){},components:{},watch:{},methods:{handleDetail:function(){var t=this;this.$Http.Post({mutation:this.$Model.ProductUnitDetail,variables:{id:this.id},fields:["id","name","weight","state"]},(function(){t.$router.push({name:"admin.ProductUnitList"})})).then((function(e){var a=e.data;a.state=1===a.state||!0===a.state,t.formData=Object(i["a"])(Object(i["a"])({},t.formData),a)}))},handleSumbitCheck:function(){var t=Object(i["a"])({},this.formData);this.handleSumbit(t)}}},d=l,c=(a("39b5"),a("c701")),m=Object(c["a"])(d,r,n,!1,null,"ae8d261c",null);e["a"]=m.exports}}]);