(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35b898dc"],{"4ec25":function(e,t,a){"use strict";a("6a61");var r=a("2e91"),n=a("d211"),o=a("5880"),i=a("b8f9"),l={data:function(){return{id:null,isReadonly:!1,formData:{branchId:this.$UserInfo.bid,state:!0,weight:1}}},props:{formData_bak:{type:Object,default:function(){return{}}},formModel:{type:Object,default:function(){return{}}},btnTitle:{type:String,default:""},tabName:{type:Array,default:function(){return[null]}}},created:function(){this.id=this.$GetParamsId(this),this.$FormCheck("*",this.formModel.readonly)&&(this.isReadonly=!0,this.ruleInline={})},computed:Object(n["a"])({},Object(o["mapState"])("base",{loading:function(e){return e.loading},isMethodList:function(e){return e.isMethodList}})),methods:{handleEmitData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.formData;this.$store.commit("popupModel/pageModal",{pageModal:!1}),this.$emit("formDataSubmit",{data:e})},handleFilterBranchChange:function(e){i["a"].isEmpty(e)||(this.formData.branchId=e)},handleSumbit:function(){var e=arguments,t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var n,o,l,s,d,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n=e.length>0&&void 0!==e[0]?e[0]:t.formData,o=e.length>1&&void 0!==e[1]?e[1]:"form",n.state=!0===n.state||1*n.state===1?1:2,l=!0,s=!1,!i["a"].isString(o)){a.next=16;break}if(t.$refs[o]){a.next=11;break}l=!1,s=!0,a.next=14;break;case 11:return a.next=13,t.$refs[o].validate((function(e){return e}));case 13:s=a.sent;case 14:a.next=22;break;case 16:if(!i["a"].isArray(o)){a.next=22;break}return d=!0,i["a"].each(o,function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(a){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$refs[a]?t.$refs[a].validate((function(e){!1===e&&!0===d&&(d=!1)})):(l=!1,d=!0);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),a.next=21,d;case 21:s=a.sent;case 22:if(!1!==l||!0!==s){a.next=25;break}return t.handleEmitData(n),a.abrupt("return");case 25:if(!1!==s){a.next=28;break}return t.$Message.error(t.$t("dt.form.checkFormComplete")),a.abrupt("return");case 28:c=t.$store.state.popupModel.pageModal,!0===c&&t.$store.commit("popupModel/loadData",{loadData:!0}),t.handleEmitData(n);case 31:case"end":return a.stop()}}),a)})))()}}};t["a"]=l},"6b9c":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("Select",{attrs:{clearable:e.clearable,multiple:e.multiple,disabled:e.disabled,readonly:e.readonly,placeholder:e.$t("dt.base.pleaseSelect",{label:e.$t("dt.form.ParentBranch")})},on:{"on-change":e.handleFilterChange},model:{value:e.branchId,callback:function(t){e.branchId=t},expression:"branchId"}},e._l(e.formTemp.data,(function(t,r){return a("Option",{key:r,attrs:{value:t.id}},[e._v(e._s(t.name))])})),1)},n=[],o=(a("422c"),a("1f90"),a("4c09")),i=(a("6a61"),a("2e91")),l=a("b8f9"),s={name:"Address",data:function(){return{branchId:null,formTemp:{data:[]}}},props:{clearable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},value:null,callback:null},computed:{},created:function(){this.$isHasMenuAuth("admin.BranchList")&&this.handleBranchList()},mounted:function(){this.branchId=this.value},watch:{},methods:{handleBranchTypeList:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$Http.Post({mutation:e.$Model.BranchTypes,variables:{perPage:0,filter:{userId:e.$UserInfo.id}},fields:[{data:["id","branchs.id","branchs.name"]}]}).then((function(e){var t=e.data||{},a=[];return t.data.forEach((function(e){var t;return(t=a).push.apply(t,Object(o["a"])(e.branchs))})),a=l["a"].uniqBy(a,"id"),{data:a}}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},handleBranchList:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=[],2!==e.$UserInfo.super||!0!==e.$UserInfo.admin){t.next=7;break}return t.next=4,e.$Http.Post({mutation:e.$Model.Branchs,variables:{perPage:0},fields:[{data:["id","name"]}]}).then((function(e){return e.data}));case 4:a=t.sent,t.next=11;break;case 7:if(!0!==e.$UserInfo.tyeAdmin){t.next=11;break}return t.next=10,e.handleBranchTypeList();case 10:a=t.sent;case 11:e.formTemp.data=a.data;case 12:case"end":return t.stop()}}),t)})))()},handleFilterChange:function(e){this.$emit("input",e),!l["a"].isEmpty(this.callback)&&l["a"].isFunction(this.callback)&&this.callback(e)}}},d=s,c=a("c701"),u=Object(c["a"])(d,r,n,!1,null,"3f3d2be0",null);t["a"]=u.exports},b953:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-content-layer"},[a("Tabs",{staticClass:"tabs",attrs:{type:"card"}},[a("TabPane",{attrs:{label:e.tabName[0]}},[a("Form",{ref:"form",staticClass:"form-page",attrs:{"label-position":"right","label-width":100,model:e.formData,rules:e.ruleInline}},[a("Col",{staticClass:"input-item form-item-flex",attrs:{xs:24,sm:24,md:20,lg:16,xl:14,xxl:12}},[a("FormItem",{directives:[{name:"show",rawName:"v-show",value:!e.$FormCheck("name",e.formModel.hide),expression:"!$FormCheck('name', formModel.hide)"}],style:{flex:e.$UserInfo.admin?1:.5},attrs:{label:e.$t("dt.form.AllocationName"),prop:"name"}},[a("Input",{attrs:{readonly:e.$FormCheck("name",e.formModel.readonly),clearable:!e.$FormCheck("name",e.formModel.readonly),placeholder:e.$t("dt.base.pleaseInput",{label:e.$t("dt.form.AllocationName")})},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),a("FormItem",{directives:[{name:"show",rawName:"v-show",value:!e.$FormCheck("branchId",e.formModel.hide)&&!0===e.$UserInfo.admin,expression:"!$FormCheck('branchId', formModel.hide) && $UserInfo.admin === true"}],attrs:{label:""+e.$t("dt.form.ParentBranch"),prop:"branchId"}},[a("e-branch",{attrs:{clearable:!1,readonly:void 0!==e.id,disabled:void 0!==e.id,multiple:!1},on:{callback:e.handleFilterBranchChange},model:{value:e.formData.branchId,callback:function(t){e.$set(e.formData,"branchId",t)},expression:"formData.branchId"}})],1)],1),a("Col",{staticClass:"input-item form-item-flex",attrs:{xs:24,sm:24,md:20,lg:16,xl:14,xxl:12}},[a("FormItem",{directives:[{name:"show",rawName:"v-show",value:!e.$FormCheck("oldId",e.formModel.hide),expression:"!$FormCheck('oldId', formModel.hide)"}],attrs:{label:""+e.$t("dt.form.CallOutWarehouse"),prop:"oldId"}},[a("Select",{attrs:{disabled:e.$FormCheck("oldId",e.formModel.readonly),readonly:e.$FormCheck("oldId",e.formModel.readonly),placeholder:e.$t("dt.base.pleaseSelect",{label:e.$t("dt.form.CallOutWarehouse")})},on:{"on-change":e.handleCallOutDataFunc},model:{value:e.formData.oldId,callback:function(t){e.$set(e.formData,"oldId",t)},expression:"formData.oldId"}},e._l(e.formTemp.warehouseList,(function(t){return a("Option",{key:t.id,attrs:{disabled:t.disabled,value:t.id,label:t.name}},[e._v(" "+e._s(t.name)+" ")])})),1)],1),a("FormItem",{directives:[{name:"show",rawName:"v-show",value:!e.$FormCheck("newId",e.formModel.hide),expression:"!$FormCheck('newId', formModel.hide)"}],attrs:{label:""+e.$t("dt.form.CallInWarehouse"),prop:"newId"}},[a("Select",{attrs:{disabled:e.$FormCheck("newId",e.formModel.readonly),readonly:e.$FormCheck("newId",e.formModel.readonly),placeholder:e.$t("dt.base.pleaseSelect",{label:e.$t("dt.form.CallInWarehouse")})},on:{"on-change":e.handleWarehouseChange},model:{value:e.formData.newId,callback:function(t){e.$set(e.formData,"newId",t)},expression:"formData.newId"}},e._l(e.formTemp.warehouseList,(function(t){return a("Option",{key:t.id,attrs:{disabled:t.disabled,value:t.id,label:t.name}},[e._v(" "+e._s(t.name)+" ")])})),1)],1)],1),a("Col",{directives:[{name:"show",rawName:"v-show",value:!e.$FormCheck("remark",e.formModel.hide),expression:"!$FormCheck('remark', formModel.hide)"}],staticClass:"input-item",attrs:{xs:24,sm:24,md:20,lg:16,xl:14,xxl:12}},[a("FormItem",{attrs:{label:e.$t("dt.base.remark"),prop:"remark"}},[a("Input",{attrs:{readonly:e.$FormCheck("remark",e.formModel.readonly),clearable:!e.$FormCheck("remark",e.formModel.readonly),maxlength:"255","show-word-limit":"",type:"textarea",rows:4,placeholder:e.$t("dt.base.pleaseInput",{label:e.$t("dt.base.remark")})},model:{value:e.formData.remark,callback:function(t){e.$set(e.formData,"remark",t)},expression:"formData.remark"}})],1)],1),e.formData.newId?a("Col",{staticClass:"input-item",attrs:{xs:24,sm:24,md:24,lg:24,xl:22,xxl:22}},[a("FormItem",{attrs:{label:""+e.$t("dt.form.WarehouseProduct")}},[a("Table",{ref:"selection",staticClass:"table-body",attrs:{border:"",loading:e.loading&&e.isMethodList,"max-height":500,columns:e.columns,data:e.formTemp.data},on:{"on-select-cancel":e.handleTableOnSelectCancel,"on-selection-change":e.handleTableSelectionChange}})],1)],1):e._e(),a("Col",{staticClass:"input-item",attrs:{xs:24,sm:16,md:16,lg:12,xl:8,xxl:6}},[a("FormItem",[!e.isReadonly&&e.$isHasMenuAuth("admin.AllocationAdd")||!e.isReadonly&&e.$isHasMenuAuth("admin.AllocationEdit")?a("Button",{attrs:{type:"primary",loading:e.loading},on:{click:e.handleSumbitCheck}},[e._v(" "+e._s(e.$t("dt.form.ConfirmAllocation"))+" ")]):e.$isHasMenuAuth("admin.AllocationEdit")&&1===e.formData.status?a("Button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary"},on:{click:function(t){return e.handleCheckHabitType({name:"admin.AllocationEdit",params:{id:e.id}})}}},[e._v(" "+e._s(e.$t("dt.form.edit"))+" ")]):e._e(),a("Button",{staticStyle:{"margin-left":"8px"},on:{click:function(t){return e.handleRouteGoBack("admin.AllocationList")}}},[e._v(e._s(e.$t("dt.base.back")))])],1)],1)],1)],1)],1)],1)},n=[],o=(a("2d38"),a("2c78"),a("1b8a"),a("9953"),a("90d4"),a("5c4c"),a("d211")),i=a("b8f9"),l=a("4ec25"),s=a("6b9c"),d={name:"PutStockModel",mixins:[l["a"]],data:function(){var e=this;return{currentProduct:[],currentOrder:{},tableMultipleSelect:[],formTemp:{data:[],oldData:[],productList:[],warehouseList:[]},formData:{newId:null,userId:this.$UserInfo.id},columns:[{type:"selection",width:60,align:"center",fixed:"left"},{title:this.$t("dt.form.index"),type:"index",width:80,align:"center"},{title:this.$t("dt.form.ProductName"),key:"label",width:200,align:"center"},{title:this.$t("dt.form.ProductSpec"),key:"name",width:200,align:"center",render:function(t,a){return t("span",a.row.name||e.$t("dt.base.Nothing"))}},{title:this.$t("dt.form.SkuPicture"),key:"skuPicture",width:100,align:"center",render:function(t,a){var r=t("Avatar",{props:{shape:"square",icon:"ios-images"}});return i["a"].isEmpty(e.formTemp.data[a.index][a.column.key])||(r=t("Avatar",{props:{shape:"square",src:e.$options.filters.formatImage(e.formTemp.data[a.index][a.column.key])}})),r}},{title:this.$t("dt.form.PutStockInfo"),align:"center",children:[{title:this.$t("dt.form.Warehouse"),minWidth:150,align:"center",render:function(e,t){var a=t.row.warehouse||{};return e("span",a.name)}},{title:this.$t("dt.form.Location"),key:"locationId",minWidth:150,align:"center",render:function(t,a){return i["a"].isEmpty(a.row.warehouse)?t("span",e.$t("dt.base.pleaseSelect",{label:e.$t("dt.form.Warehouse")})):i["a"].isEmpty(a.row.locationId)&&e.isReadonly?t("span",e.$t("dt.base.Nothing")):t("div",[t("e-select",{props:{open:!0,disabled:e.isReadonly,current:a.row.locationId,name:"name",value:"id",dataList:a.row.locations},on:{handleSelectChange:function(t){var r=a.row.locations.find((function(e){return e.id===t}))||{};e.formTemp.data[a.index].articles=r.article||[],e.formTemp.data[a.index].locationId=t}}})])}},{title:this.$t("dt.form.ArticleNo"),key:"articleIds",minWidth:150,align:"center",render:function(t,a){return i["a"].isEmpty(a.row.locationId)?t("span",e.$t("dt.base.pleaseSelect",{label:e.$t("dt.form.Location")})):i["a"].isEmpty(a.row.articleIds)&&e.isReadonly?t("span",e.$t("dt.base.Nothing")):t("div",[t("e-select",{props:{open:!0,multiple:!0,disabled:e.isReadonly,current:a.row.articleIds,name:"name",value:"id",dataList:a.row.articles},on:{handleSelectChange:function(t){e.formTemp.data[a.index].articleIds=t}}})])}}]},{title:this.$t("dt.form.StockNumber"),key:"putStockNumber",width:120,align:"center",fixed:"right"},{title:this.$t("dt.form.AllocationNumber"),key:"number",width:120,align:"center",fixed:"right",renderHeader:function(t,a){var r=a.column;return e.isReadonly?t("span",r.title):t("div",[t("span",r.title),t("span",{style:{marginLeft:"5px",backgroundColor:"#ecf5ff",color:"#409EFF",cursor:"pointer",display:e.tableMultipleSelect.length>0&&!e.isReadonly?"inline-block":"none"},on:{click:function(){e.handleBatchAllMoney()}}},e.$t("dt.base.All"))])},render:function(t,a){var r=a.row.number;return e.id?t("span",r):t("InputNumber",{props:{value:r,size:"small",min:0,max:a.row.putStockNumber,readonly:e.isReadonly,clearable:!0,placeholder:e.$t("dt.base.pleaseInput",{label:e.$t("dt.form.AllocationNumber")})},on:{input:function(t){e.handleCheckMoney(t,a.index,a.column.key)}}},r)}}],ruleInline:{name:[{required:!0,message:this.$t("dt.base.pleaseSelect",{label:this.$t("dt.form.AllocationName")}),trigger:"blur"}],oldId:[{required:!0,message:this.$t("dt.base.pleaseSelect",{label:this.$t("dt.form.CallOutWarehouse")}),trigger:"blur"}],newId:[{required:!0,message:this.$t("dt.base.pleaseSelect",{label:this.$t("dt.form.CallInWarehouse")}),trigger:"blur"}],branchId:[{required:!0,message:this.$t("dt.base.pleaseSelect",{label:this.$t("dt.form.ParentBranch")}),trigger:"blur"}],purchaseId:[{required:!0,message:this.$t("dt.base.pleaseSelect",{label:this.$t("dt.form.PurchaseOrder")}),trigger:"blur"}]}}},created:function(){this.handleWarehouseList(),i["a"].isEmpty(this.id)||(this.columns.splice(6,1),this.columns.splice(0,1),this.handleDetail())},mounted:function(){window.aa=this},destroyed:function(){},components:{EBranch:s["a"]},watch:{},methods:{handleDetail:function(){var e=this;this.$Http.Post({mutation:this.$Model.ProductAllocationDetail,variables:{id:this.id},fields:["id","name","branchId","remark","weight","state","oldId","newId","putStock.id","putStock.number","putStock.sku.id","putStock.sku.label","putStock.sku.skuPicture","putStock.sku.product.id","putStock.sku.product.name","putStock.warehouseId","putStock.locationId","putStock.articleIds"]},(function(){e.$router.push({name:"admin.AllocationList"})})).then((function(t){var a=t.data;a.state=1===a.state||!0===a.state;var r=[];i["a"].each(a.putStock,(function(t,a){var n=e.formTemp.warehouseList.find((function(e){return e.id===t.warehouseId}))||{},o=n.location.find((function(e){return e.id===t.locationId}))||{};r.push({index:a+1,skuId:t.sku.id,label:t.sku.product.name,name:t.sku.label,skuPicture:t.sku.skuPicture,number:t.number,locationId:t.locationId,articleIds:t.articleIds,warehouse:n,locations:n.location,articles:o.article})})),e.formTemp.data=r,e.tableMultipleSelect=e.formTemp.data,e.formData=Object(o["a"])(Object(o["a"])({},e.formData),a)}))},handleWarehouseList:function(){var e=this;if(this.$isHasMenuAuth("admin.WarehouseList")){var t={perPage:0};this.$UserInfo.admin||(t.filter={branchId:this.formData.branchId}),this.$Http.Post({mutation:this.$Model.Warehouses,variables:t,fields:[{data:["id","name","location.id","location.name","location.article.id","location.article.name","sku.id","sku.warehouseId","sku.locationId","sku.articleIds","sku.skuId"]}]}).then((function(t){var a=t.data;e.formTemp.warehouseList=a.data}))}},handleCallOutDataFunc:function(e){var t=this;if(this.formData.newId=null,this.formTemp.data=[],this.currentOrder={},!i["a"].isEmpty(e)){var a=["id","stock","lockStock","skuId","sku.id","sku.label","sku.skuPicture","sku.skuCode","sku.safetyStock","sku.updatedAt","product.id","product.name","putStock.id","putStock.supplyId","putStock.createdAt"],r=this.variables||{};r.perPage=0,r.filter={warehouseId:e},this.$Http.Post({mutation:this.$Model.WarehouseProducts,variables:r,fields:[{data:a}]}).then((function(e){var a=e.data,r=a.data.filter((function(e){return e.stock>0})),n=[];i["a"].each(r,(function(e,a){i["a"].sortBy(e.putStock,{key:"createdAt",type:"max"});var r=null;i["a"].isEmpty(e.putStock)||(r=e.putStock[0].supplyId),n.push({index:a+1,skuId:e.skuId,label:e.product.name,name:e.sku.label,skuPicture:e.sku.skuPicture,putStockNumber:e.stock-e.lockStock,number:0,locationId:null,articleIds:[],locations:[],articles:[],supplyId:r,branchId:t.formData.branchId})})),t.formTemp.data=n,t.currentOrder=t.formTemp.data}))}i["a"].each(this.formTemp.warehouseList,(function(t){t.disabled=!1,i["a"].isEmpty(e)||t.id!==e||(t.disabled=!0)}))},handleWarehouseChange:function(e){var t=this.formTemp.warehouseList.find((function(t){return t.id===e}))||{};i["a"].each(this.formTemp.data,(function(e){var a=t.sku.find((function(a){return a.warehouseId===t.id&&a.skuId===e.skuId}))||{};e.locationId=null,e.articleIds=[];var r=t.location.find((function(e){return e.id===a.locationId}))||{};e.skuId===a.skuId&&(e.locationId=a.locationId,e.articleIds=a.articleIds,e.articles=r.article||[]),i["a"].each(t.location,(function(t){t.disabled=!1,!i["a"].isEmpty(r)&&e.locationId&&t.id!==e.locationId&&(t.disabled=!0)})),e.warehouse=t,e.warehouseId=t.id,e.locations=t.location||[]}))},handleCheckMoney:function(e,t,a){var r=this.$refs.selection.getSelection().filter((function(e){return e.putStockNumber>0}));i["a"].each(this.formTemp.data,(function(e){var t=r.findIndex((function(t){return t.id===e.id}));-1===t&&(e._checked=!1)})),"number"===a&&e>this.formTemp.data[t].putStockNumber?this.$Message.warning(this.$t("dt.api.AllocationNumberNotMaxPutStock")):(this.formTemp.data[t][a]=e,this.formTemp.data[t].number>0?this.formTemp.data[t]._checked=!0:this.formTemp.data[t]._checked=!1,this.tableMultipleSelect=this.formTemp.data.filter((function(e){return!0===e._checked})))},handleBatchAllMoney:function(){var e=this.$refs.selection.getSelection().filter((function(e){return e.putStockNumber>0}));i["a"].each(this.formTemp.data,(function(t){var a=e.findIndex((function(e){return e.skuId===t.skuId}));-1!==a?t.number=t.putStockNumber:t._checked=!1}))},handleTableOnSelectCancel:function(e,t){this.handleTableRowCancelChecked(t)},handleTableRowCancelChecked:function(e){if(!i["a"].isEmpty(e)){var t=this.formTemp.data.findIndex((function(t){return t.skuId===e.skuId}));-1!==t&&this.$set(this.formTemp.data,t,Object(o["a"])(Object(o["a"])({},this.formTemp.data[t]),{},{_checked:!1}));var a=this.formTemp.data.filter((function(e){return!0===e._checked}));this.tableMultipleSelect=a}},handleTableSelectionChange:function(e){var t=this;this.tableMultipleSelect=e,i["a"].each(this.formTemp.data,(function(a,r){var n=e.findIndex((function(e){return e.skuId===a.skuId}));-1!==n?a._checked=!0:t.$set(t.formTemp.data,r,Object(o["a"])(Object(o["a"])({},t.formTemp.data[r]),{},{_checked:!1}))}))},handleSumbitCheck:function(){var e=this,t=Object(o["a"])({},this.formData);if(i["a"].isEmpty(this.currentOrder))this.$Notice.warning({title:this.$t("dt.toast.tips"),desc:"".concat(this.$t("dt.base.pleaseSelect",{label:this.$t("dt.form.WarehouseProduct")}))});else{var a=[];i["a"].each(this.formTemp.data,(function(r){var n=e.tableMultipleSelect.findIndex((function(e){return e.skuId===r.skuId}));-1!==n&&r.number>0&&a.push({number:r.number,skuId:r.skuId,warehouseId:r.warehouseId,locationId:r.locationId,articleIds:r.articleIds,supplyId:r.supplyId,branchId:t.branchId})})),i["a"].isEmpty(a)?this.$Notice.warning({title:this.$t("dt.toast.tips"),desc:"".concat(this.$t("dt.form.WarehouseProduct")).concat(this.$t("dt.api.notEmpty"))}):(t.putStock=a,this.handleSumbit(t))}}}},c=d,u=(a("ce6d"),a("c701")),m=Object(u["a"])(c,r,n,!1,null,"6acfa62c",null);t["a"]=m.exports},ce6d:function(e,t,a){"use strict";a("d77e")},d77e:function(e,t,a){}}]);