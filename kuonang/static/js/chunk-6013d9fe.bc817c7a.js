(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6013d9fe"],{a6d0:function(t,e,a){"use strict";a("c4f3")},bb19:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"merchant-type-list-page"},[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"controller"},[a("Row",{staticClass:"filter-group",class:{active:t.rowToggle},attrs:{type:"flex",gutter:20}},[a("Col",{staticClass:"filter-item",attrs:{xs:24,sm:12,md:8,lg:8,xl:6,xxl:6}},[a("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[a("Col",{staticClass:"child-title",attrs:{span:"8"}},[a("span",[t._v(t._s(t.$t("dt.form.BranchType"))+"：")])]),a("Col",{attrs:{span:"16"}},[a("Input",{attrs:{search:"",placeholder:t.$t("dt.base.pleaseInput",{label:t.$t("dt.form.BranchType")})},on:{"on-enter":t.handleFilterChange,"on-search":t.handleFilterChange},model:{value:t.filters.name_like,callback:function(e){t.$set(t.filters,"name_like",e)},expression:"filters.name_like"}})],1)],1)],1),a("Col",{staticClass:"filter-item",attrs:{xs:24,sm:12,md:8,lg:8,xl:6,xxl:6}},[a("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[a("Col",{staticClass:"child-title",attrs:{span:"8"}},[a("span",[t._v(t._s(t.$t("dt.form.status"))+"：")])]),a("Col",{attrs:{span:"16"}},[a("status",{on:{swtichStatus:t.handleFilterChange}})],1)],1)],1),a("Col",{staticClass:"filter-item",attrs:{xs:24,sm:12,md:8,lg:8,xl:6,xxl:6}},[a("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[a("Col",{staticClass:"child-title",attrs:{span:"8"}},[a("span",[t._v(t._s(t.$t("dt.base.sort"))+"：")])]),a("Col",{attrs:{span:"16"}},[a("sorts",{on:{swtichSorts:t.handleFilterChange}})],1)],1)],1),a("button",{staticClass:"row-toggle",attrs:{type:"button"},on:{click:function(e){return t.$store.commit("spinShow/rowToggle")}}},[t.rowToggle?a("Icon",{attrs:{type:"ios-arrow-up",size:"25",color:"#999"}}):a("Icon",{attrs:{type:"ios-arrow-down",size:"25",color:"#999"}})],1)],1),a("div",{staticClass:"btn-group"},[a("div",{staticClass:"left"},[t.$isHasMenuAuth("admin.BranchTypeAdd")?a("Button",{attrs:{type:"primary"},on:{click:function(e){return t.handleCheckHabitType({name:"admin.BranchTypeAdd"})}}},[a("Icon",{attrs:{type:"md-add"}}),t._v(t._s(t.$t("dt.form.BranchTypeAdd"))+" ")],1):t._e(),t.$isHasMenuAuth("admin.BranchTypeDelete")?a("Button",{attrs:{type:"error"},on:{click:function(e){return t.handleAsync(t.tableMultipleSelect)}}},[a("Icon",{attrs:{type:"md-trash"}}),t._v(t._s(t.$t("dt.form.deleteAll"))+" ")],1):t._e(),t.$isHasMenuAuth("admin.BranchTypeEdit")?a("Button",{attrs:{type:"success"},on:{click:function(e){return t.handleAsyncSavaAll(t.tableMultipleSelect)}}},[a("Icon",{attrs:{type:"md-create"}}),t._v(t._s(t.$t("dt.form.saveAll"))+" ")],1):t._e()],1),a("div",{staticClass:"right"},[t.$isHasMenuAuth("admin.BranchTypeExport")?a("Button",{attrs:{type:"warning"},on:{click:t.handleAsyncExport}},[a("Icon",{attrs:{type:"md-cloud-download"}}),t._v(t._s(t.$t("dt.form.export"))+"Excel ")],1):t._e()],1)]),a("div",{staticClass:"table"},[a("Table",{ref:"selection",attrs:{border:"",loading:t.loading&&t.isMethodList,columns:t.columns,data:t.formTemp.data},on:{"on-select-cancel":t.handleTableOnSelectCancel,"on-selection-change":t.handleTableSelectionChange}})],1),a("div",{staticClass:"page-list"},[a("Page",{attrs:{"show-total":"","show-sizer":"","show-elevator":"",total:t.formTemp.total,current:t.formTemp.current_page,"page-size-opts":t.formTemp.pageSizeOpts,"page-size":t.formTemp.per_page},on:{"on-page-size-change":t.handleOnPageSizeChange,"on-change":t.handleChangePage}})],1)],1)])])},s=[],i=(a("2d38"),a("69bf"),a("5c4c"),a("d211")),r=a("b8f9"),l=a("efa4"),o={name:"BranchTypeList",mixins:[l["a"]],data:function(){return{formTemp:{users:[]}}},components:{},computed:{columns:function(){var t=this;return[{type:"selection",width:60,align:"center",fixed:"left"},{title:this.$t("dt.form.index"),type:"index",width:80,align:"center"},{title:this.$t("dt.form.BranchType"),key:"name",minWidth:200,align:"center",render:function(e,a){var n=a.row.name;return t.$isHasMenuAuth("admin.BranchTypeEdit")&&-1!==t.selectTable.indexOf(a.row.id)?e("Input",{props:{size:"small",value:n,clearable:!0,placeholder:t.$t("dt.base.pleaseInput",{label:t.$t("dt.form.BranchType")})},on:{"on-clear":function(){return t.handleSelectChange("",a.index,a.column.key)},input:function(e){t.handleSelectChange(e,a.index,a.column.key)}}},n):e(t.$isHasMenuAuth("admin.BranchTypeDetail")?"router-link":"span",{props:{to:{name:"admin.BranchTypeDetail",params:{id:a.row.id}}}},n)}},{title:this.$t("dt.form.Auth"),key:"menu",width:120,align:"center",render:function(e,a){var n=a.row.menu,s="#19be6b";return r["a"].isEmpty(n)&&(s="#ed4014"),e("span",{style:{color:s}},r["a"].isEmpty(n)?t.$t("dt.base.Unallocated"):t.$t("dt.base.Allocated"))}},{title:"".concat(this.$t("dt.base.subordinate")).concat(this.$t("dt.form.Branch")),width:100,align:"center",render:function(e,a){var n=a.row.branchsIds||[];return e("span","".concat(n.length).concat(t.$t("dt.base.family")))}},{title:this.$t("dt.form.bePerson"),key:"userId",minWidth:150,align:"center",renderHeader:function(e,a){var n=a.column;return t.$isHasMenuAuth("admin.BranchTypeEdit")?e("div",[e("span",n.title),e("e-dropdown",{props:{columnKey:n.key,name:"username",value:"id",dataList:t.formTemp.users},on:{handleDropdownChange:t.handleFormDataChange}})]):e("span",n.title)},render:function(e,a){var n=a.row.user||{};return t.$isHasMenuAuth("admin.BranchTypeEdit")&&-1!==t.selectTable.indexOf(a.row.id)?e("div",[e("e-select",{props:{current:a.row.userId,name:"username",value:"id",dataList:t.formTemp.users},on:{handleSelectChange:function(e){return t.handleSelectChange(e,a.index,a.column.key)}}})]):e("span",n.username)}},{title:this.$t("dt.form.deletedAt"),key:"deletedAt",width:170,align:"center",sortable:!0,render:function(e,a){return e("span",t.$options.filters.formatTime(a.row.deletedAt))}},{title:this.$t("dt.form.updatedAt"),key:"updatedAt",width:170,align:"center",sortable:!0,render:function(e,a){return e("span",t.$options.filters.formatTime(a.row.updatedAt))}},{title:this.$t("dt.form.createdAt"),key:"createdAt",width:170,align:"center",sortable:!0,render:function(e,a){return e("span",t.$options.filters.formatTime(a.row.createdAt))}},{title:this.$t("dt.form.action"),key:"action",width:200,align:"center",fixed:"right",render:function(e,a){if(t.$isHasMenuAuth("admin.BranchTypeEdit")&&-1!==t.selectTable.indexOf(a.row.id))return e("div",[e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.handleAsyncSavaAll(a.row)}}},t.$t("dt.form.save")),e("Button",{props:{type:"warning",size:"small"},on:{click:function(){t.handleTableRowCancelChecked(a.row)}}},t.$t("dt.form.cancel"))]);var n=[];return t.$isHasMenuAuth("admin.BranchTypeDetail")&&n.push(e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.handleCheckHabitType({name:"admin.BranchTypeDetail",params:{id:a.row.id}})}}},t.$t("dt.form.detail"))),t.$isHasMenuAuth("admin.BranchTypeEdit")&&n.push(e("Button",{props:{type:"warning",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.handleCheckHabitType({name:"admin.BranchTypeEdit",params:{id:a.row.id}})}}},t.$t("dt.form.edit"))),t.$isHasMenuAuth("admin.BranchTypeDelete")&&n.push(e("Button",{props:{type:r["a"].isEmpty(a.row.deletedAt)?"error":"success",size:"small"},on:{click:function(){r["a"].isEmpty(a.row.deletedAt)?t.handleAsync(a):t.handleRecoveryAsync(a)}}},r["a"].isEmpty(a.row.deletedAt)?t.$t("dt.form.delete"):t.$t("dt.form.recovery"))),e("div",n)}}]}},created:function(){this.$isHasMenuAuth("admin.UserList")&&this.handleUserList(),this.handleList()},mounted:function(){},watch:{},filters:{},methods:{handleList:function(){var t=this,e=this.handleInitFields(this.columns,["userId","user.id","user.username","branchsIds"]),a=this.variables;this.$Http.Post({mutation:this.$Model.BranchTypes,variables:a,fields:e}).then((function(e){var a=e.data;t.formTemp=Object(i["a"])(Object(i["a"])({},t.formTemp),a),t.sortData(t.formTemp.data)}))},sortData:function(){var t=this;r["a"].each(this.formTemp.data,(function(e,a){e.index=(t.formTemp.current_page-1)*t.formTemp.per_page+a+1,e.loading=!1}))},handleUserList:function(){var t=this;this.$Http.Post({mutation:this.$Model.Users,variables:{perPage:0},fields:[{data:["id","username"]}]}).then((function(e){var a=e.data;t.formTemp.users=a.data}))},handleRowItemSave:function(t,e){r["a"].isEmpty(t)||this.handleOnRecovery({api:this.$Model.BranchTypeEdit,item:t,type:2},e)},handleUpdateStatus:function(t,e){this.handleUpdateStatusFunc({api:this.$Model.BranchTypeEdit,item:t,value:e})},handleRecovery:function(t,e){r["a"].isEmpty(t)||this.handleOnRecovery({api:this.$Model.BranchTypesRecovery,item:t},e)},handleDelete:function(t){r["a"].isEmpty(t.id)||r["a"].isEmpty(t.index)||this.handleOnDelete({api:this.$Model.BranchTypesDelete,item:t})}}},d=o,c=(a("a6d0"),a("c701")),p=Object(c["a"])(d,n,s,!1,null,"754c9c4e",null);e["default"]=p.exports},c4f3:function(t,e,a){}}]);