(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f4726e1"],{"08d6":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ProductType-detail-page"},[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"controller"},[a("form-model",{attrs:{formModel:t.formModel,tabName:[t.$t("dt.form.ProductTypeDetail")],btnTitle:t.$t("dt.base.save")}})],1)])])},s=[],o=a("5530"),l={name:"ProductTypeDetail",data:function(){return{id:null,formModel:{hide:[],readonly:["*"]}}},created:function(){if(this.id=this.$GetParamsId(this),!this.id)return this.$Notice.error({title:this.$t("dt.toast.tips"),desc:this.$t("dt.toast.notExistent")}),this.$router.push({name:"admin.ProductTypeList"}),!1},mounted:function(){},components:{FormModel:o["a"]},watch:{},methods:{}},n=l,i=a("c701"),d=Object(i["a"])(n,r,s,!1,null,"75f015a2",null);e["default"]=d.exports},"1a38":function(t,e,a){},"4ec25":function(t,e,a){"use strict";a("6a61");var r=a("2e91"),s=a("d211"),o=a("5880"),l=a("b8f9"),n={data:function(){return{id:null,isReadonly:!1,formData:{branchId:this.$UserInfo.bid,state:!0,weight:1}}},props:{formData_bak:{type:Object,default:function(){return{}}},formModel:{type:Object,default:function(){return{}}},btnTitle:{type:String,default:""},tabName:{type:Array,default:function(){return[null]}}},created:function(){this.id=this.$GetParamsId(this),this.$FormCheck("*",this.formModel.readonly)&&(this.isReadonly=!0,this.ruleInline={})},computed:Object(s["a"])({},Object(o["mapState"])("base",{loading:function(t){return t.loading},isMethodList:function(t){return t.isMethodList}})),methods:{handleEmitData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.formData;this.$store.commit("popupModel/pageModal",{pageModal:!1}),this.$emit("formDataSubmit",{data:t})},handleFilterBranchChange:function(t){l["a"].isEmpty(t)||(this.formData.branchId=t)},handleSumbit:function(){var t=arguments,e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var s,o,n,i,d,m;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(s=t.length>0&&void 0!==t[0]?t[0]:e.formData,o=t.length>1&&void 0!==t[1]?t[1]:"form",s.state=!0===s.state||1*s.state===1?1:2,n=!0,i=!1,!l["a"].isString(o)){a.next=16;break}if(e.$refs[o]){a.next=11;break}n=!1,i=!0,a.next=14;break;case 11:return a.next=13,e.$refs[o].validate((function(t){return t}));case 13:i=a.sent;case 14:a.next=22;break;case 16:if(!l["a"].isArray(o)){a.next=22;break}return d=!0,l["a"].each(o,function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$refs[a]?e.$refs[a].validate((function(t){!1===t&&!0===d&&(d=!1)})):(n=!1,d=!0);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),a.next=21,d;case 21:i=a.sent;case 22:if(!1!==n||!0!==i){a.next=25;break}return e.handleEmitData(s),a.abrupt("return");case 25:if(!1!==i){a.next=28;break}return e.$Message.error(e.$t("dt.form.checkFormComplete")),a.abrupt("return");case 28:m=e.$store.state.popupModel.pageModal,!0===m&&e.$store.commit("popupModel/loadData",{loadData:!0}),e.handleEmitData(s);case 31:case"end":return a.stop()}}),a)})))()}}};e["a"]=n},5530:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-content-layer"},[a("Tabs",{staticClass:"tabs",attrs:{type:"card"}},[a("TabPane",{attrs:{label:t.tabName[0]}},[a("Form",{ref:"form",staticClass:"form-page",attrs:{"label-position":"right","label-width":100,model:t.formData,rules:t.ruleInline}},[a("Col",{directives:[{name:"show",rawName:"v-show",value:!t.$FormCheck("name",t.formModel.hide),expression:"!$FormCheck('name', formModel.hide)"}],staticClass:"input-item",attrs:{xs:24,sm:16,md:16,lg:12,xl:8,xxl:6}},[a("FormItem",{attrs:{label:t.$t("dt.form.ProductTypeName"),prop:"name"}},[a("Input",{attrs:{readonly:t.$FormCheck("name",t.formModel.readonly),clearable:!t.$FormCheck("name",t.formModel.readonly),placeholder:t.$t("dt.base.pleaseInput",{label:t.$t("dt.form.ProductTypeName")})},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1)],1),a("Col",{directives:[{name:"show",rawName:"v-show",value:!t.$FormCheck("attrsIds",t.formModel.hide),expression:"!$FormCheck('attrsIds', formModel.hide)"}],staticClass:"input-item",attrs:{xs:24,sm:16,md:16,lg:12,xl:8,xxl:6}},[a("FormItem",{attrs:{label:t.$t("dt.form.RelationAttr"),prop:"attrsIds"}},[a("ListSelectModal",{attrs:{title:t.$t("dt.base.pleaseSelect",{label:t.$t("dt.form.RelationAttr")}),route:"ProductAttrAdd",api:t.$Model.ProductAttrs,column:[{name:t.$t("dt.form.ProductAttrName")},{tye:t.$t("dt.form.AttrType"),filters:"productAttrType"}],attrs:{label:"name",value:"id"},placeholder:t.$t("dt.base.pleaseSelect",{label:t.$t("dt.form.RelationAttr")})},model:{value:t.formData.attrsIds,callback:function(e){t.$set(t.formData,"attrsIds",e)},expression:"formData.attrsIds"}})],1)],1),a("Col",{directives:[{name:"show",rawName:"v-show",value:!t.$FormCheck("specsIds",t.formModel.hide),expression:"!$FormCheck('specsIds', formModel.hide)"}],staticClass:"input-item",attrs:{xs:24,sm:16,md:16,lg:12,xl:8,xxl:6}},[a("FormItem",{attrs:{label:t.$t("dt.form.RelationSpec"),prop:"specsIds"}},[a("ListSelectModal",{attrs:{title:t.$t("dt.base.pleaseSelect",{label:t.$t("dt.form.RelationSpec")}),route:"ProductSpecAdd",api:t.$Model.ProductSpecs,column:[{name:t.$t("dt.form.ProductSpecName")},{specs:{value:t.$t("dt.form.SpecValue")}}],attrs:{label:"name",value:"id"},placeholder:t.$t("dt.base.pleaseSelect",{label:t.$t("dt.form.RelationSpec")})},model:{value:t.formData.specsIds,callback:function(e){t.$set(t.formData,"specsIds",e)},expression:"formData.specsIds"}})],1)],1),a("Col",{directives:[{name:"show",rawName:"v-show",value:!t.$FormCheck("brandIds",t.formModel.hide),expression:"!$FormCheck('brandIds', formModel.hide)"}],staticClass:"input-item",attrs:{xs:24,sm:16,md:16,lg:12,xl:8,xxl:6}},[a("FormItem",{attrs:{label:t.$t("dt.form.RelationBrand"),prop:"brandIds"}},[a("ListSelectModal",{attrs:{title:t.$t("dt.base.pleaseSelect",{label:t.$t("dt.form.RelationBrand")}),route:"ProductBrandAdd",api:t.$Model.ProductBrands,column:[{name:t.$t("dt.form.BrandName")}],attrs:{label:"name",value:"id"},placeholder:t.$t("dt.base.pleaseSelect",{label:t.$t("dt.form.RelationBrand")})},model:{value:t.formData.brandIds,callback:function(e){t.$set(t.formData,"brandIds",e)},expression:"formData.brandIds"}})],1)],1),a("Col",{directives:[{name:"show",rawName:"v-show",value:!t.$FormCheck("weight",t.formModel.hide),expression:"!$FormCheck('weight', formModel.hide)"}],staticClass:"input-item",attrs:{xs:24,sm:16,md:16,lg:12,xl:8,xxl:6}},[a("FormItem",{attrs:{label:t.$t("dt.form.weight"),prop:"weight"}},[a("Input",{attrs:{readonly:t.$FormCheck("weight",t.formModel.readonly),clearable:!t.$FormCheck("weight",t.formModel.readonly),placeholder:t.$t("dt.base.pleaseInput",{label:t.$t("dt.form.weight")})},model:{value:t.formData.weight,callback:function(e){t.$set(t.formData,"weight",t._n(e))},expression:"formData.weight"}})],1)],1),a("Col",{staticClass:"input-item",attrs:{xs:24,sm:16,md:16,lg:12,xl:8,xxl:6}},[a("FormItem",{attrs:{label:t.$t("dt.form.status")}},[a("i-switch",{attrs:{disabled:t.$FormCheck("state",t.formModel.readonly),size:"large"},model:{value:t.formData.state,callback:function(e){t.$set(t.formData,"state",e)},expression:"formData.state"}},t._l(t.$options.filters.state([]),(function(e,r){return a("span",{key:r,attrs:{slot:1===1*e.value?"open":"close"},slot:1===1*e.value?"open":"close"},[t._v(t._s(e.label))])})),0)],1)],1),a("Col",{staticClass:"input-item",attrs:{xs:24,sm:16,md:16,lg:12,xl:8,xxl:6}},[a("FormItem",[!t.isReadonly&&t.$isHasMenuAuth("admin.ProductTypeAdd")||!t.isReadonly&&t.$isHasMenuAuth("admin.ProductTypeEdit")?a("Button",{attrs:{type:"primary",loading:t.loading},on:{click:t.handleSumbitCheck}},[t._v(" "+t._s(t.btnTitle)+" ")]):t.$isHasMenuAuth("admin.ProductTypeEdit")?a("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary"},on:{click:function(e){return t.handleCheckHabitType({name:"admin.ProductTypeEdit",params:{id:t.id}})}}},[t._v(" "+t._s(t.$t("dt.form.edit"))+" ")]):t._e(),a("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(e){return t.handleRouteGoBack("admin.ProductTypeList")}}},[t._v(t._s(t.$t("dt.base.back")))])],1)],1)],1)],1)],1)],1)},s=[],o=a("d211"),l=a("b8f9"),n=a("494e"),i=a("4ec25"),d={name:"ProductTypeModel",mixins:[i["a"]],data:function(){return{formData:{attrsIds:[],specsIds:[],brandIds:[]},ruleInline:{name:[{required:!0,message:this.$t("dt.base.pleaseInput",{label:this.$t("dt.form.ProductTypeName")}),trigger:"blur"}],weight:[{required:!0,type:"number",message:this.$t("dt.form.weightPlaceholder"),trigger:"blur"},{validator:this.$Validator("number",this.$t("dt.form.weightPlaceholder")),trigger:"blur"}]}}},created:function(){l["a"].isEmpty(this.id)||this.handleDetail()},mounted:function(){},components:{ListSelectModal:n["a"]},watch:{},methods:{handleDetail:function(){var t=this;this.$Http.Post({mutation:this.$Model.ProductTypeDetail,variables:{id:this.id},fields:["id","name","weight","state","attrsIds","specsIds","brandIds"]},(function(){t.$router.push({name:"admin.ProductTypeList"})})).then((function(e){var a=e.data;a.state=1===a.state||!0===a.state,t.formData=Object(o["a"])(Object(o["a"])({},t.formData),a)}))},handleSumbitCheck:function(){var t=Object(o["a"])({},this.formData);this.handleSumbit(t)}}},m=d,c=(a("5b26"),a("c701")),u=Object(c["a"])(m,r,s,!1,null,"56f48ed0",null);e["a"]=u.exports},"5b26":function(t,e,a){"use strict";a("1a38")}}]);