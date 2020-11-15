(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74267a40"],{"5dfa":function(t,e,n){},"818b":function(t,e,n){"use strict";n("5dfa")},bd7e:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu-list-page"},[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"controller"},[n("Row",{staticClass:"filter-group",class:{active:t.rowToggle},attrs:{type:"flex",gutter:20}},[n("Col",{staticClass:"filter-item",attrs:{xs:24,sm:12,md:8,lg:8,xl:6,xxl:6}},[n("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[n("Col",{staticClass:"child-title",attrs:{span:"8"}},[n("span",[t._v(t._s(t.$t("dt.form.menuName"))+"：")])]),n("Col",{attrs:{span:"16"}},[n("Input",{attrs:{search:"",placeholder:t.$t("dt.base.pleaseInput",{label:t.$t("dt.form.menuName")})},on:{"on-enter":t.handleFilterChange,"on-search":t.handleFilterChange},model:{value:t.filters.name_like,callback:function(e){t.$set(t.filters,"name_like",e)},expression:"filters.name_like"}})],1)],1)],1),n("Col",{staticClass:"filter-item",attrs:{xs:24,sm:12,md:8,lg:8,xl:6,xxl:6}},[n("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[n("Col",{staticClass:"child-title",attrs:{span:"8"}},[n("span",[t._v(t._s(t.$t("dt.form.status"))+"：")])]),n("Col",{attrs:{span:"16"}},[n("status",{on:{swtichStatus:t.handleFilterChange}})],1)],1)],1),n("Col",{staticClass:"filter-item",attrs:{xs:24,sm:12,md:8,lg:8,xl:6,xxl:6}},[n("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[n("Col",{staticClass:"child-title",attrs:{span:"8"}},[n("span",[t._v(t._s(t.$t("dt.base.sort"))+"：")])]),n("Col",{attrs:{span:"16"}},[n("sorts",{on:{swtichSorts:function(e){return t.handleFilterChange()}}})],1)],1)],1),n("button",{staticClass:"row-toggle",attrs:{type:"button"},on:{click:function(e){return t.$store.commit("spinShow/rowToggle")}}},[t.rowToggle?n("Icon",{attrs:{type:"ios-arrow-up",size:"25",color:"#999"}}):n("Icon",{attrs:{type:"ios-arrow-down",size:"25",color:"#999"}})],1)],1),n("div",{staticClass:"btn-group"},[n("div",{staticClass:"left"},[t.$isHasMenuAuth("admin.MenuAdd")?n("Button",{attrs:{type:"primary"},on:{click:function(e){return t.handleCheckHabitType({name:"admin.MenuAdd"})}}},[n("Icon",{attrs:{type:"md-add"}}),t._v(t._s(t.$t("dt.form.menuAdd"))+" ")],1):t._e(),t.$isHasMenuAuth("admin.MenuDelete")?n("Button",{attrs:{type:"error"},on:{click:function(e){return t.handleAsync(t.tableMultipleSelect)}}},[n("Icon",{attrs:{type:"md-trash"}}),t._v(t._s(t.$t("dt.form.deleteAll"))+" ")],1):t._e(),t.$isHasMenuAuth("admin.MenuEdit")?n("Button",{attrs:{type:"success"},on:{click:function(e){return t.handleAsyncSavaAll(t.tableMultipleSelect)}}},[n("Icon",{attrs:{type:"md-create"}}),t._v(t._s(t.$t("dt.form.saveAll"))+" ")],1):t._e()],1),n("div",{staticClass:"right"},[t.$isHasMenuAuth("admin.MenuExport")?n("Button",{attrs:{type:"warning"},on:{click:t.handleAsyncExport}},[n("Icon",{attrs:{type:"md-cloud-download"}}),t._v(t._s(t.$t("dt.form.export"))+"Excel ")],1):t._e()],1)]),n("div",{staticClass:"table"},[n("Table",{ref:"selection",attrs:{border:"","row-key":"id","load-data":t.handleLoadData,loading:t.loading&&t.isMethodList&&t.isLoading,columns:t.columns,data:t.formTemp.data},on:{"on-select-cancel":t.handleTableOnSelectCancel,"on-selection-change":t.handleTableSelectionChange}})],1),n("div",{staticClass:"page-list"},[n("Page",{attrs:{"show-total":"","show-sizer":"","show-elevator":"",total:t.formTemp.total,current:t.formTemp.current_page,"page-size-opts":t.formTemp.pageSizeOpts,"page-size":t.formTemp.per_page},on:{"on-page-size-change":t.handleOnPageSizeChange,"on-change":t.handleChangePage}})],1)],1)])])},i=[],s=(n("2c78"),n("69bf"),n("5c4c"),n("d211")),r=(n("6a61"),n("2e91")),o=n("efa4"),l=n("b8f9"),d={name:"MenuList",mixins:[o["a"]],data:function(){return{isLoading:!1}},computed:{columns:function(){var t=this;return[{type:"selection",width:60,align:"center"},{title:this.$t("dt.form.weight"),key:"weight",width:80,align:"center",render:function(e,n){var a=n.row.weight;return t.$isHasMenuAuth("admin.MenuEdit")&&-1!==t.selectTable.indexOf(n.row.id)?e("Input",{props:{size:"small",value:a,clearable:!0,number:!0,placeholder:t.$t("dt.base.pleaseInput",{label:t.$t("dt.form.weight")})},on:{"on-clear":function(){return t.handleSelectChange("",n.index,n.column.key)},input:function(e){t.handleSelectChange(e,n.index,n.column.key)}}},a):e("span",a)}},{title:this.$t("dt.form.menuName"),key:"name",minWidth:200,align:"left",tree:!0,render:function(e,n){return e(t.$isHasMenuAuth("admin.MenuDetail")?"router-link":"span",{props:{to:{name:"admin.MenuDetail",params:{id:n.row.id}}}},n.row.name)}},{title:this.$t("dt.form.routeName"),key:"route",minWidth:200,align:"center"},{title:this.$t("dt.form.routeLink"),key:"link",minWidth:200,align:"center"},{title:this.$t("dt.base.featureAuth"),key:"feature",minWidth:200,align:"center"},{title:this.$t("dt.form.icon"),key:"icon",width:100,align:"center",render:function(t,e){return l["a"].isEmpty(e.row.icon)?t("span",{},"无"):t("Icon",{props:{type:e.row.icon,size:25}})}},{title:this.$t("dt.form.menuType"),key:"tye",width:100,align:"center",render:function(e,n){var a="error";return 1===n.row.tye?a="warning":2===n.row.tye?a="success":3===n.row.tye&&(a="primary"),e("Button",{props:{type:a,ghost:!0,size:"small"}},t.$options.filters.menuType(n.row.tye))}},{title:this.$t("dt.form.status"),key:"state",width:100,align:"center",render:function(e,n){return e("i-switch",{props:{value:l["a"].isNumber(n.row.state)?1===n.row.state:n.row.state,size:"large",loading:n.row.loading,disabled:!t.$isHasMenuAuth("admin.MenuEdit")||(n.row.disabled||!1)},on:{"on-change":function(e){t.handleUpdateStatus(n.row,e)}}},[e("span",{slot:"open"},t.$t("dt.status.open")),e("span",{slot:"close"},t.$t("dt.status.close"))])}},{title:this.$t("dt.form.deletedAt"),key:"deletedAt",width:170,align:"center",sortable:!0,render:function(e,n){return e("span",t.$options.filters.formatTime(n.row.deletedAt))}},{title:this.$t("dt.form.updatedAt"),key:"updatedAt",width:170,align:"center",sortable:!0,render:function(e,n){return e("span",t.$options.filters.formatTime(n.row.updatedAt))}},{title:this.$t("dt.form.createdAt"),key:"createdAt",width:170,align:"center",sortable:!0,render:function(e,n){return e("span",t.$options.filters.formatTime(n.row.createdAt))}},{title:this.$t("dt.form.action"),key:"action",minWidth:200,align:"center",fixed:"right",render:function(e,n){if(t.$isHasMenuAuth("admin.MenuEdit")&&-1!==t.selectTable.indexOf(n.row.id))return e("div",[e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.handleAsyncSavaAll(n.row)}}},t.$t("dt.form.save")),e("Button",{props:{type:"warning",size:"small"},on:{click:function(){t.handleTableRowCancelChecked(n.row)}}},t.$t("dt.form.cancel"))]);var a=[];return t.$isHasMenuAuth("admin.MenuDetail")&&a.push(e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.handleCheckHabitType({name:"admin.MenuDetail",params:{id:n.row.id}})}}},t.$t("dt.form.detail"))),t.$isHasMenuAuth("admin.MenuEdit")&&a.push(e("Button",{props:{type:"warning",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.handleCheckHabitType({name:"admin.MenuEdit",params:{id:n.row.id}})}}},t.$t("dt.form.edit"))),t.$isHasMenuAuth("admin.MenuDelete")&&a.push(e("Button",{props:{type:l["a"].isEmpty(n.row.deletedAt)?"error":"success",size:"small"},on:{click:function(){l["a"].isEmpty(n.row.deletedAt)?t.handleAsync(n):t.handleRecoveryAsync(n)}}},l["a"].isEmpty(n.row.deletedAt)?t.$t("dt.form.delete"):t.$t("dt.form.recovery"))),e("div",a)}}]}},created:function(){this.handleList()},mounted:function(){},components:{},watch:{},methods:{handleGetCommonMenus:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.$Http.Post({mutation:this.$Model.LoadMenuData,variables:t}).then((function(t){return t.data}))},handleList:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.handleInitFields(t.columns,["pid","has"]),t.isLoading=!0,a=t.variables,a.filter={pid:"1"},t.$Http.Post({mutation:t.$Model.CommonMenus,variables:a,fields:n}).then((function(e){var n=e.data;t.formTemp=Object(s["a"])(Object(s["a"])({},t.formTemp),n),t.sortData(t.formTemp.data)}));case 5:case"end":return e.stop()}}),e)})))()},sortData:function(t){l["a"].each(t,(function(t){2===t.has&&(t._loading=!1,t.children=[])}))},handleLoadData:function(t,e){var n=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var i,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n.isLoading=!1,i=n.variables,i.id=t.id,a.next=5,n.handleGetCommonMenus(i);case 5:s=a.sent,e(s);case 7:case"end":return a.stop()}}),a)})))()},handleRecovery:function(t){l["a"].isEmpty(t)||this.handleOnRecovery({api:this.$Model.CommonMenusRecovery,item:t},(function(){window.location.reload()}))},handleDelete:function(t){l["a"].isEmpty(t.id)||l["a"].isEmpty(t.index)||this.handleOnDelete({api:this.$Model.CommonMenusDelete,item:t},(function(){window.location.reload()}))},handleUpdateStatus:function(t,e){var n=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:500;if(!l["a"].isEmpty(t)){l["a"].isEmpty(t.children)||(t.loading=!0),t.state=e;var i={id:t.id,data:{state:!0===t.state?1:2}};this.$Http.Post({mutation:this.$Model.CommonMenuEdit,variables:i},(function(){setTimeout((function(){t.loading=!1,t.state=!e}),500)})).then((function(){setTimeout((function(){t.loading=!1,l["a"].isEmpty(t.children)||l["a"].each(t.children,(function(t){t.disabled=!e,t.state!==i.data.state&&(n.handleUpdateStatus(t,e,0),t._disableExpand=!(t.children.length>0),t._expanded=!t._disableExpand,t.loading=!1)}))}),a)}))}}}},c=d,u=(n("818b"),n("c701")),m=Object(u["a"])(c,a,i,!1,null,"f59b0e30",null);e["default"]=m.exports}}]);