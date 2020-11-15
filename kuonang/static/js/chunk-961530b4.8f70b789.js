(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-961530b4"],{"6b9c":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Select",{attrs:{clearable:t.clearable,multiple:t.multiple,disabled:t.disabled,readonly:t.readonly,placeholder:t.$t("dt.base.pleaseSelect",{label:t.$t("dt.form.ParentBranch")})},on:{"on-change":t.handleFilterChange},model:{value:t.branchId,callback:function(e){t.branchId=e},expression:"branchId"}},t._l(t.formTemp.data,(function(e,n){return a("Option",{key:n,attrs:{value:e.id}},[t._v(t._s(e.name))])})),1)},i=[],s=(a("422c"),a("1f90"),a("4c09")),r=(a("6a61"),a("2e91")),l=a("b8f9"),o={name:"Address",data:function(){return{branchId:null,formTemp:{data:[]}}},props:{clearable:{type:Boolean,default:!0},multiple:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},value:null,callback:null},computed:{},created:function(){this.$isHasMenuAuth("admin.BranchList")&&this.handleBranchList()},mounted:function(){this.branchId=this.value},watch:{},methods:{handleBranchTypeList:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$Http.Post({mutation:t.$Model.BranchTypes,variables:{perPage:0,filter:{userId:t.$UserInfo.id}},fields:[{data:["id","branchs.id","branchs.name"]}]}).then((function(t){var e=t.data||{},a=[];return e.data.forEach((function(t){var e;return(e=a).push.apply(e,Object(s["a"])(t.branchs))})),a=l["a"].uniqBy(a,"id"),{data:a}}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},handleBranchList:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=[],2!==t.$UserInfo.super||!0!==t.$UserInfo.admin){e.next=7;break}return e.next=4,t.$Http.Post({mutation:t.$Model.Branchs,variables:{perPage:0},fields:[{data:["id","name"]}]}).then((function(t){return t.data}));case 4:a=e.sent,e.next=11;break;case 7:if(!0!==t.$UserInfo.tyeAdmin){e.next=11;break}return e.next=10,t.handleBranchTypeList();case 10:a=e.sent;case 11:t.formTemp.data=a.data;case 12:case"end":return e.stop()}}),e)})))()},handleFilterChange:function(t){this.$emit("input",t),!l["a"].isEmpty(this.callback)&&l["a"].isFunction(this.callback)&&this.callback(t)}}},c=o,d=a("c701"),u=Object(d["a"])(c,n,i,!1,null,"3f3d2be0",null);e["a"]=u.exports},"78bb":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"merchant-type-list-page"},[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"controller"},[a("Row",{staticClass:"filter-group",class:{active:t.rowToggle},attrs:{type:"flex",gutter:20}},[a("Col",{staticClass:"filter-item",attrs:{xs:24,sm:12,md:8,lg:8,xl:6,xxl:6}},[a("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[a("Col",{staticClass:"child-title",attrs:{span:"8"}},[a("span",[t._v(t._s(t.$t("dt.form.AuthName"))+"：")])]),a("Col",{attrs:{span:"16"}},[a("Input",{attrs:{search:"",placeholder:t.$t("dt.base.pleaseInput",{label:t.$t("dt.form.AuthName")})},on:{"on-enter":t.handleFilterChange,"on-search":t.handleFilterChange},model:{value:t.filters.name_like,callback:function(e){t.$set(t.filters,"name_like",e)},expression:"filters.name_like"}})],1)],1)],1),t.$isHasMenuAuth("admin.BranchList")&&!0===t.$UserInfo.admin?a("Col",{staticClass:"filter-item",attrs:{xs:24,sm:12,md:8,lg:8,xl:6,xxl:6}},[a("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[a("Col",{staticClass:"child-title",attrs:{span:"8"}},[a("span",[t._v(t._s(t.$t("dt.form.ParentBranch"))+"：")])]),a("Col",{attrs:{span:"16"}},[a("e-branch",{attrs:{callback:t.handleFilterBranchChange},model:{value:t.filters.branchId_in,callback:function(e){t.$set(t.filters,"branchId_in",e)},expression:"filters.branchId_in"}})],1)],1)],1):t._e(),a("Col",{staticClass:"filter-item",attrs:{xs:24,sm:12,md:8,lg:8,xl:6,xxl:6}},[a("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[a("Col",{staticClass:"child-title",attrs:{span:"8"}},[a("span",[t._v(t._s(t.$t("dt.form.status"))+"：")])]),a("Col",{attrs:{span:"16"}},[a("status",{on:{swtichStatus:t.handleFilterChange}})],1)],1)],1),a("Col",{staticClass:"filter-item",attrs:{xs:24,sm:12,md:8,lg:8,xl:6,xxl:6}},[a("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[a("Col",{staticClass:"child-title",attrs:{span:"8"}},[a("span",[t._v(t._s(t.$t("dt.base.sort"))+"：")])]),a("Col",{attrs:{span:"16"}},[a("sorts",{on:{swtichSorts:t.handleFilterChange}})],1)],1)],1),a("button",{staticClass:"row-toggle",attrs:{type:"button"},on:{click:function(e){return t.$store.commit("spinShow/rowToggle")}}},[t.rowToggle?a("Icon",{attrs:{type:"ios-arrow-up",size:"25",color:"#999"}}):a("Icon",{attrs:{type:"ios-arrow-down",size:"25",color:"#999"}})],1)],1),a("div",{staticClass:"btn-group"},[a("div",{staticClass:"left"},[t.$isHasMenuAuth("admin.AuthAdd")?a("Button",{attrs:{type:"primary"},on:{click:function(e){return t.handleCheckHabitType({name:"admin.AuthAdd"})}}},[a("Icon",{attrs:{type:"md-add"}}),t._v(t._s(t.$t("dt.form.AuthAdd"))+" ")],1):t._e(),t.$isHasMenuAuth("admin.AuthDelete")?a("Button",{attrs:{type:"error"},on:{click:function(e){return t.handleAsync(t.tableMultipleSelect)}}},[a("Icon",{attrs:{type:"md-trash"}}),t._v(t._s(t.$t("dt.form.deleteAll"))+" ")],1):t._e(),t.$isHasMenuAuth("admin.AuthEdit")?a("Button",{attrs:{type:"success"},on:{click:function(e){return t.handleAsyncSavaAll(t.tableMultipleSelect)}}},[a("Icon",{attrs:{type:"md-create"}}),t._v(t._s(t.$t("dt.form.saveAll"))+" ")],1):t._e()],1),a("div",{staticClass:"right"},[t.$isHasMenuAuth("admin.AuthExport")?a("Button",{attrs:{type:"warning"},on:{click:t.handleAsyncExport}},[a("Icon",{attrs:{type:"md-cloud-download"}}),t._v(t._s(t.$t("dt.form.export"))+"Excel ")],1):t._e()],1)]),a("div",{staticClass:"table"},[a("Table",{ref:"selection",attrs:{border:"",loading:t.loading&&t.isMethodList,columns:t.columns,data:t.formTemp.data},on:{"on-select-cancel":t.handleTableOnSelectCancel,"on-selection-change":t.handleTableSelectionChange}})],1),a("div",{staticClass:"page-list"},[a("Page",{attrs:{"show-total":"","show-sizer":"","show-elevator":"",total:t.formTemp.total,current:t.formTemp.current_page,"page-size-opts":t.formTemp.pageSizeOpts,"page-size":t.formTemp.per_page},on:{"on-page-size-change":t.handleOnPageSizeChange,"on-change":t.handleChangePage}})],1)],1)])])},i=[],s=(a("2d38"),a("69bf"),a("5c4c"),a("d211")),r=a("b8f9"),l=a("efa4"),o=a("6b9c"),c={name:"AuthList",mixins:[l["a"]],data:function(){return{}},components:{EBranch:o["a"]},computed:{columns:function(){var t=this;return[{type:"selection",width:60,align:"center",fixed:"left"},{title:this.$t("dt.form.index"),type:"index",width:80,align:"center"},{title:this.$t("dt.form.AuthName"),key:"name",minWidth:200,align:"center",render:function(e,a){var n=a.row.name;return t.$isHasMenuAuth("admin.AuthEdit")&&-1!==t.selectTable.indexOf(a.row.id)?e("Input",{props:{size:"small",value:n,clearable:!0,placeholder:t.$t("dt.base.pleaseInput",{label:t.$t("dt.form.AuthName")})},on:{"on-clear":function(){return t.handleSelectChange("",a.index,a.column.key)},input:function(e){t.handleSelectChange(e,a.index,a.column.key)}}},n):e(t.$isHasMenuAuth("admin.AuthDetail")?"router-link":"span",{props:{to:{name:"admin.AuthDetail",params:{id:a.row.id}}}},n)}},{title:this.$t("dt.form.Auth"),key:"menu",width:120,align:"center",render:function(e,a){var n=a.row.menu,i="#19be6b";return r["a"].isEmpty(n)&&(i="#ed4014"),e("span",{style:{color:i}},r["a"].isEmpty(n)?t.$t("dt.base.Unallocated"):t.$t("dt.base.Allocated"))}},{title:this.$t("dt.form.ParentBranch"),minWidth:200,ellipsis:!0,tooltip:!0,align:"center",render:function(t,e){var a=e.row.branch||{};return t("span",a.name)}},{title:this.$t("dt.form.deletedAt"),key:"deletedAt",width:170,align:"center",sortable:!0,render:function(e,a){return e("span",t.$options.filters.formatTime(a.row.deletedAt))}},{title:this.$t("dt.form.updatedAt"),key:"updatedAt",width:170,align:"center",sortable:!0,render:function(e,a){return e("span",t.$options.filters.formatTime(a.row.updatedAt))}},{title:this.$t("dt.form.createdAt"),key:"createdAt",width:170,align:"center",sortable:!0,render:function(e,a){return e("span",t.$options.filters.formatTime(a.row.createdAt))}},{title:this.$t("dt.form.action"),key:"action",width:200,align:"center",fixed:"right",render:function(e,a){if(t.$isHasMenuAuth("admin.AuthEdit")&&-1!==t.selectTable.indexOf(a.row.id))return e("div",[e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.handleAsyncSavaAll(a.row)}}},t.$t("dt.form.save")),e("Button",{props:{type:"warning",size:"small"},on:{click:function(){t.handleTableRowCancelChecked(a.row)}}},t.$t("dt.form.cancel"))]);var n=[];return t.$isHasMenuAuth("admin.AuthDetail")&&n.push(e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.handleCheckHabitType({name:"admin.AuthDetail",params:{id:a.row.id}})}}},t.$t("dt.form.detail"))),t.$isHasMenuAuth("admin.AuthEdit")&&n.push(e("Button",{props:{type:"warning",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.handleCheckHabitType({name:"admin.AuthEdit",params:{id:a.row.id}})}}},t.$t("dt.form.edit"))),t.$isHasMenuAuth("admin.AuthDelete")&&n.push(e("Button",{props:{type:r["a"].isEmpty(a.row.deletedAt)?"error":"success",size:"small"},on:{click:function(){r["a"].isEmpty(a.row.deletedAt)?t.handleAsync(a):t.handleRecoveryAsync(a)}}},r["a"].isEmpty(a.row.deletedAt)?t.$t("dt.form.delete"):t.$t("dt.form.recovery"))),e("div",n)}}]}},created:function(){this.handleList()},mounted:function(){},watch:{},filters:{},methods:{handleList:function(){var t=this,e=this.handleInitFields(this.columns,["branch.id","branch.name"]),a=this.variables;this.$Http.Post({mutation:this.$Model.Auths,variables:a,fields:e}).then((function(e){var a=e.data;t.formTemp=Object(s["a"])(Object(s["a"])({},t.formTemp),a),t.sortData(t.formTemp.data)}))},sortData:function(){var t=this;r["a"].each(this.formTemp.data,(function(e,a){e.index=(t.formTemp.current_page-1)*t.formTemp.per_page+a+1,e.loading=!1}))},handleBranchList:function(){var t=this;this.$Http.Post({mutation:this.$Model.Branchs,variables:{perPage:0},fields:[{data:["id","name"]}]}).then((function(e){var a=e.data;t.formTemp.branchList=a.data}))},handleRowItemSave:function(t,e){r["a"].isEmpty(t)||this.handleOnRecovery({api:this.$Model.AuthEdit,item:t,type:2},e)},handleUpdateStatus:function(t,e){this.handleUpdateStatusFunc({api:this.$Model.AuthEdit,item:t,value:e})},handleRecovery:function(t,e){r["a"].isEmpty(t)||this.handleOnRecovery({api:this.$Model.AuthsRecovery,item:t},e)},handleDelete:function(t){r["a"].isEmpty(t.id)||r["a"].isEmpty(t.index)||this.handleOnDelete({api:this.$Model.AuthsDelete,item:t})},handleInitTable:function(t){var e=this;this.$Modal.confirm({title:this.$t("dt.toast.tips"),content:"".concat(this.$t("dt.base.whether")).concat(this.$t("dt.base.init"),"?"),loading:!0,closable:!0,onOk:function(){var a={id:t.id};e.$Http.Post({mutation:e.$Model.InitTable,variables:a},(function(){e.$Modal.remove()})).then((function(t){e.$Modal.remove(),"initSuccess"===t.data?e.$Message.success(e.$t("dt.api.initSuccess")):e.$Message.error(e.$t("dt.api.initFail"))}))}})}}},d=c,u=(a("8bfc"),a("c701")),h=Object(u["a"])(d,n,i,!1,null,"5f498f3c",null);e["default"]=h.exports},"8bfc":function(t,e,a){"use strict";a("b1a4")},b1a4:function(t,e,a){}}]);