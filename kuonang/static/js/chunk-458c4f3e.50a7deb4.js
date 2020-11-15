(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-458c4f3e"],{"820d":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Supply-list-page"},[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"controller"},[a("Row",{staticClass:"filter-group",class:{active:t.rowToggle},attrs:{type:"flex",gutter:20}},[a("Col",{staticClass:"filter-item",attrs:{xs:24,sm:12,md:8,lg:8,xl:6,xxl:6}},[a("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[a("Col",{staticClass:"child-title",attrs:{span:"8"}},[a("span",[t._v(t._s(t.$t("dt.form.SupplyName"))+"：")])]),a("Col",{attrs:{span:"16"}},[a("Input",{attrs:{search:"",placeholder:t.$t("dt.base.pleaseInput",{label:t.$t("dt.form.SupplyName")})},on:{"on-enter":t.handleFilterChange,"on-search":t.handleFilterChange},model:{value:t.filters.name_like,callback:function(e){t.$set(t.filters,"name_like",e)},expression:"filters.name_like"}})],1)],1)],1),a("Col",{staticClass:"filter-item",attrs:{xs:24,sm:12,md:8,lg:8,xl:6,xxl:6}},[a("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[a("Col",{staticClass:"child-title",attrs:{span:"8"}},[a("span",[t._v(t._s(t.$t("dt.form.SupplyCode"))+"：")])]),a("Col",{attrs:{span:"16"}},[a("Input",{attrs:{search:"",placeholder:t.$t("dt.base.pleaseInput",{label:t.$t("dt.form.SupplyCode")})},on:{"on-enter":t.handleFilterChange,"on-search":t.handleFilterChange},model:{value:t.filters.code_like,callback:function(e){t.$set(t.filters,"code_like",e)},expression:"filters.code_like"}})],1)],1)],1),t.$isHasMenuAuth("admin.SupplyTypeList")?a("Col",{staticClass:"filter-item",attrs:{xs:24,sm:12,md:8,lg:8,xl:6,xxl:6}},[a("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[a("Col",{staticClass:"child-title",attrs:{span:"8"}},[a("span",[t._v(t._s(t.$t("dt.form.SupplyType"))+"：")])]),a("Col",{attrs:{span:"16"}},[a("Select",{attrs:{clearable:"",placeholder:t.$t("dt.base.pleaseSelect",{label:t.$t("dt.form.SupplyType")})},on:{"on-change":t.handleFilterChange},model:{value:t.filters.tyeId,callback:function(e){t.$set(t.filters,"tyeId",e)},expression:"filters.tyeId"}},t._l(t.formTemp.SupplyTypeList,(function(e,n){return a("Option",{key:n,attrs:{value:e.id}},[t._v(t._s(e.name))])})),1)],1)],1)],1):t._e(),a("Col",{staticClass:"filter-item",attrs:{xs:24,sm:12,md:8,lg:8,xl:6,xxl:6}},[a("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[a("Col",{staticClass:"child-title",attrs:{span:"8"}},[a("span",[t._v(t._s(t.$t("dt.form.status"))+"：")])]),a("Col",{attrs:{span:"16"}},[a("status",{on:{swtichStatus:t.handleFilterChange}})],1)],1)],1),a("Col",{staticClass:"filter-item",attrs:{xs:24,sm:12,md:8,lg:8,xl:6,xxl:6}},[a("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[a("Col",{staticClass:"child-title",attrs:{span:"8"}},[a("span",[t._v(t._s(t.$t("dt.base.sort"))+"：")])]),a("Col",{attrs:{span:"16"}},[a("sorts",{on:{swtichSorts:t.handleFilterChange}})],1)],1)],1),a("button",{staticClass:"row-toggle",attrs:{type:"button"},on:{click:function(e){return t.$store.commit("spinShow/rowToggle")}}},[t.rowToggle?a("Icon",{attrs:{type:"ios-arrow-up",size:"25",color:"#999"}}):a("Icon",{attrs:{type:"ios-arrow-down",size:"25",color:"#999"}})],1)],1),a("div",{staticClass:"btn-group"},[a("div",{staticClass:"left"},[t.$isHasMenuAuth("admin.SupplyAdd")?a("Button",{attrs:{type:"primary"},on:{click:function(e){return t.handleCheckHabitType({name:"admin.SupplyAdd"})}}},[a("Icon",{attrs:{type:"md-add"}}),t._v(t._s(t.$t("dt.form.SupplyAdd"))+" ")],1):t._e(),t.$isHasMenuAuth("admin.SupplyDelete")?a("Button",{attrs:{type:"error"},on:{click:function(e){return t.handleAsync(t.tableMultipleSelect)}}},[a("Icon",{attrs:{type:"md-trash"}}),t._v(t._s(t.$t("dt.form.deleteAll"))+" ")],1):t._e(),t.$isHasMenuAuth("admin.SupplyEdit")?a("Button",{attrs:{type:"success"},on:{click:function(e){return t.handleAsyncSavaAll(t.tableMultipleSelect)}}},[a("Icon",{attrs:{type:"md-create"}}),t._v(t._s(t.$t("dt.form.saveAll"))+" ")],1):t._e()],1),a("div",{staticClass:"right"},[t.$isHasMenuAuth("admin.SupplyExport")?a("Button",{attrs:{type:"warning"},on:{click:t.handleAsyncExport}},[a("Icon",{attrs:{type:"md-cloud-download"}}),t._v(t._s(t.$t("dt.form.export"))+"Excel ")],1):t._e()],1)]),a("div",{staticClass:"table"},[a("Table",{ref:"selection",attrs:{border:"",loading:t.loading&&t.isMethodList,columns:t.columns,data:t.formTemp.data},on:{"on-select-cancel":t.handleTableOnSelectCancel,"on-selection-change":t.handleTableSelectionChange}})],1),a("div",{staticClass:"page-list"},[a("Page",{attrs:{"show-total":"","show-sizer":"","show-elevator":"",total:t.formTemp.total,current:t.formTemp.current_page,"page-size-opts":t.formTemp.pageSizeOpts,"page-size":t.formTemp.per_page},on:{"on-page-size-change":t.handleOnPageSizeChange,"on-change":t.handleChangePage}})],1)],1)])])},i=[],s=(a("69bf"),a("5c4c"),a("d211")),l=a("b8f9"),r=a("efa4"),o={name:"RoleList",mixins:[r["a"]],data:function(){return{formTemp:{SupplyTypeList:[]}}},components:{},computed:{columns:function(){var t=this;return[{type:"selection",width:60,align:"center",fixed:"left"},{title:this.$t("dt.form.index"),type:"index",width:80,align:"center"},{title:this.$t("dt.form.SupplyName"),key:"name",minWidth:200,align:"center",render:function(e,a){var n=a.row.name;return t.$isHasMenuAuth("admin.SupplyEdit")&&-1!==t.selectTable.indexOf(a.row.id)?e("Input",{props:{size:"small",value:n,clearable:!0,placeholder:t.$t("dt.base.pleaseInput",{label:t.$t("dt.form.SupplyName")})},on:{"on-clear":function(){return t.handleSelectChange("",a.index,a.column.key)},input:function(e){t.handleSelectChange(e,a.index,a.column.key)}}},n):e(t.$isHasMenuAuth("admin.SupplyDetail")?"router-link":"span",{props:{to:{name:"admin.SupplyDetail",params:{id:a.row.id}}}},n)}},{title:this.$t("dt.form.SupplyCode"),key:"code",width:150,align:"center"},{title:this.$t("dt.base.Contact"),key:"username",width:150,align:"center"},{title:this.$t("dt.base.telPhone"),key:"telPhone",width:150,align:"center"},{title:this.$t("dt.form.SupplyType"),width:150,align:"center",render:function(t,e){var a=e.row.tye||{};return t("span",a.name)}},{title:this.$t("dt.base.Salesman"),width:150,align:"center",render:function(t,e){var a=e.row.user||{};return t("span",a.username)}},{title:this.$t("dt.base.remark"),key:"remark",minWidth:200,maxWidth:300,tooltip:!0,align:"center"},{title:this.$t("dt.form.deletedAt"),key:"deletedAt",width:170,align:"center",sortable:!0,render:function(e,a){return e("span",t.$options.filters.formatTime(a.row.deletedAt))}},{title:this.$t("dt.form.updatedAt"),key:"updatedAt",width:170,align:"center",sortable:!0,render:function(e,a){return e("span",t.$options.filters.formatTime(a.row.updatedAt))}},{title:this.$t("dt.form.createdAt"),key:"createdAt",width:170,align:"center",sortable:!0,render:function(e,a){return e("span",t.$options.filters.formatTime(a.row.createdAt))}},{title:this.$t("dt.form.status"),key:"state",width:100,fixed:"right",align:"center",renderHeader:function(e,a){var n=a.column;return t.$isHasMenuAuth("admin.SupplyEdit")?e("div",[e("span",n.title),e("e-dropdown",{props:{columnKey:n.key,name:"label",value:"value",dataList:t.$options.filters.switchStatus([])},on:{handleDropdownChange:t.handleFormDataChange}})]):e("span",n.title)},render:function(e,a){var n=a.row.state;return t.$isHasMenuAuth("admin.SupplyEdit")&&-1!==t.selectTable.indexOf(a.row.id)?e("div",[e("e-select",{props:{current:n,name:"label",value:"value",dataList:t.$options.filters.switchStatus([])},on:{handleSelectChange:function(e){return t.handleSelectChange(e,a.index,a.column.key)}}})]):e("i-switch",{props:{value:l["a"].isNumber(n)?1===n:n,size:"large",loading:a.row.loading,disabled:!t.$isHasMenuAuth("admin.SupplyEdit")||(a.row.disabled||!1)},on:{"on-change":function(e){t.handleUpdateStatus(a.row,e)}}},[e("span",{slot:"open"},t.$t("dt.status.open")),e("span",{slot:"close"},t.$t("dt.status.close"))])}},{title:this.$t("dt.form.action"),key:"action",width:180,align:"center",fixed:"right",render:function(e,a){if(t.$isHasMenuAuth("admin.SupplyEdit")&&-1!==t.selectTable.indexOf(a.row.id))return e("div",[e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.handleAsyncSavaAll(a.row)}}},t.$t("dt.form.save")),e("Button",{props:{type:"warning",size:"small"},on:{click:function(){t.handleTableRowCancelChecked(a.row)}}},t.$t("dt.form.cancel"))]);var n=[];return t.$isHasMenuAuth("admin.SupplyDetail")&&n.push(e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.handleCheckHabitType({name:"admin.SupplyDetail",params:{id:a.row.id}})}}},t.$t("dt.form.detail"))),t.$isHasMenuAuth("admin.SupplyEdit")&&n.push(e("Button",{props:{type:"warning",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.handleCheckHabitType({name:"admin.SupplyEdit",params:{id:a.row.id}})}}},t.$t("dt.form.edit"))),t.$isHasMenuAuth("admin.SupplyDelete")&&n.push(e("Button",{props:{type:l["a"].isEmpty(a.row.deletedAt)?"error":"success",size:"small"},on:{click:function(){l["a"].isEmpty(a.row.deletedAt)?t.handleAsync(a):t.handleRecoveryAsync(a)}}},l["a"].isEmpty(a.row.deletedAt)?t.$t("dt.form.delete"):t.$t("dt.form.recovery"))),e("div",n)}}]}},created:function(){this.$isHasMenuAuth("admin.SupplyTypeList")&&this.handleSupplyTypeList(),this.handleList()},mounted:function(){},watch:{},filters:{},methods:{handleList:function(){var t=this,e=this.handleInitFields(this.columns,["tye.id","tye.name","user.id","user.username"]),a=this.variables;this.$Http.Post({mutation:this.$Model.Supplys,variables:a,fields:e}).then((function(e){var a=e.data;t.formTemp=Object(s["a"])(Object(s["a"])({},t.formTemp),a),t.sortData(t.formTemp.data)}))},sortData:function(){var t=this;l["a"].each(this.formTemp.data,(function(e,a){e.index=(t.formTemp.current_page-1)*t.formTemp.per_page+a+1,e.loading=!1}))},handleSupplyTypeList:function(){var t=this;this.$Http.Post({mutation:this.$Model.SupplyTypes,variables:{perPage:0},fields:[{data:["id","name"]}]}).then((function(e){var a=e.data;t.formTemp.SupplyTypeList=a.data}))},handleRowItemSave:function(t,e){l["a"].isEmpty(t)||this.handleOnRecovery({api:this.$Model.SupplyEdit,item:t,type:2},e)},handleUpdateStatus:function(t,e){this.handleUpdateStatusFunc({api:this.$Model.SupplyEdit,item:t,value:e})},handleRecovery:function(t,e){l["a"].isEmpty(t)||this.handleOnRecovery({api:this.$Model.SupplysRecovery,item:t},e)},handleDelete:function(t){l["a"].isEmpty(t.id)||l["a"].isEmpty(t.index)||this.handleOnDelete({api:this.$Model.SupplysDelete,item:t})}}},d=o,p=(a("c432"),a("c701")),c=Object(p["a"])(d,n,i,!1,null,"9e635028",null);e["default"]=c.exports},c432:function(t,e,a){"use strict";a("cd0e")},cd0e:function(t,e,a){}}]);