(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-34df86bf"],{"4f4d":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"product-Type-list-page"},[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"controller"},[a("Row",{staticClass:"filter-group",class:{active:t.rowToggle},attrs:{type:"flex",gutter:20}},[a("Col",{staticClass:"filter-item",attrs:{xs:24,sm:12,md:8,lg:8,xl:6,xxl:6}},[a("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[a("Col",{staticClass:"child-title",attrs:{span:"8"}},[a("span",[t._v(t._s(t.$t("dt.form.ProductName"))+"：")])]),a("Col",{attrs:{span:"16"}},[a("Input",{attrs:{search:"",placeholder:t.$t("dt.base.pleaseInput",{label:t.$t("dt.form.ProductName")})},on:{"on-enter":t.handleFilterChange,"on-search":t.handleFilterChange},model:{value:t.filters.name_like,callback:function(e){t.$set(t.filters,"name_like",e)},expression:"filters.name_like"}})],1)],1)],1),a("Col",{staticClass:"filter-item",attrs:{xs:24,sm:12,md:8,lg:8,xl:6,xxl:6}},[a("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[a("Col",{staticClass:"child-title",attrs:{span:"8"}},[a("span",[t._v(t._s(t.$t("dt.form.BarCode"))+"：")])]),a("Col",{attrs:{span:"16"}},[a("Input",{attrs:{search:"",placeholder:t.$t("dt.base.pleaseInput",{label:t.$t("dt.form.BarCode")})},on:{"on-enter":t.handleFilterChange,"on-search":t.handleFilterChange},model:{value:t.filters.productBarCode_like,callback:function(e){t.$set(t.filters,"productBarCode_like",e)},expression:"filters.productBarCode_like"}})],1)],1)],1),a("Col",{staticClass:"filter-item",attrs:{xs:24,sm:12,md:8,lg:8,xl:6,xxl:6}},[a("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[a("Col",{staticClass:"child-title",attrs:{span:"8"}},[a("span",[t._v(t._s(t.$t("dt.form.ProductCode"))+"：")])]),a("Col",{attrs:{span:"16"}},[a("Input",{attrs:{search:"",placeholder:t.$t("dt.base.pleaseInput",{label:t.$t("dt.form.ProductCode")})},on:{"on-enter":t.handleFilterChange,"on-search":t.handleFilterChange},model:{value:t.filters.productCode_like,callback:function(e){t.$set(t.filters,"productCode_like",e)},expression:"filters.productCode_like"}})],1)],1)],1),a("Col",{staticClass:"filter-item",attrs:{xs:24,sm:12,md:8,lg:8,xl:6,xxl:6}},[a("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[a("Col",{staticClass:"child-title",attrs:{span:"8"}},[a("span",[t._v(t._s(t.$t("dt.form.ProductBrand"))+"：")])]),a("Col",{attrs:{span:"16"}},[a("Select",{attrs:{multiple:"",clearable:"",placeholder:t.$t("dt.base.pleaseSelect",{label:t.$t("dt.form.ProductBrand")})},on:{"on-change":t.handleFilterChange},model:{value:t.filters.brandId_in,callback:function(e){t.$set(t.filters,"brandId_in",e)},expression:"filters.brandId_in"}},t._l(t.formTemp.brandList,(function(e,n){return a("Option",{key:n,attrs:{value:e.id}},[t._v(t._s(e.name))])})),1)],1)],1)],1),a("Col",{staticClass:"filter-item",attrs:{xs:24,sm:12,md:8,lg:8,xl:6,xxl:6}},[a("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[a("Col",{staticClass:"child-title",attrs:{span:"8"}},[a("span",[t._v(t._s(t.$t("dt.form.status"))+"：")])]),a("Col",{attrs:{span:"16"}},[a("status",{on:{swtichStatus:t.handleFilterChange}})],1)],1)],1),a("Col",{staticClass:"filter-item",attrs:{xs:24,sm:12,md:8,lg:8,xl:6,xxl:6}},[a("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[a("Col",{staticClass:"child-title",attrs:{span:"8"}},[a("span",[t._v(t._s(t.$t("dt.base.sort"))+"：")])]),a("Col",{attrs:{span:"16"}},[a("sorts",{on:{swtichSorts:t.handleFilterChange}})],1)],1)],1),a("button",{staticClass:"row-toggle",attrs:{type:"button"},on:{click:function(e){return t.$store.commit("spinShow/rowToggle")}}},[t.rowToggle?a("Icon",{attrs:{type:"ios-arrow-up",size:"25",color:"#999"}}):a("Icon",{attrs:{type:"ios-arrow-down",size:"25",color:"#999"}})],1)],1),a("div",{staticClass:"btn-group"},[a("div",{staticClass:"left"},[t.$isHasMenuAuth("admin.ProductAdd")?a("Button",{attrs:{type:"primary"},on:{click:function(e){return t.handleCheckHabitType({name:"admin.ProductAdd"})}}},[a("Icon",{attrs:{type:"md-add"}}),t._v(t._s(t.$t("dt.form.ProductAdd"))+" ")],1):t._e(),t.$isHasMenuAuth("admin.ProductDelete")?a("Button",{attrs:{type:"error"},on:{click:function(e){return t.handleAsync(t.tableMultipleSelect)}}},[a("Icon",{attrs:{type:"md-trash"}}),t._v(t._s(t.$t("dt.form.deleteAll"))+" ")],1):t._e(),t.$isHasMenuAuth("admin.ProductEdit")?a("Button",{attrs:{type:"success"},on:{click:function(e){return t.handleAsyncSavaAll(t.tableMultipleSelect)}}},[a("Icon",{attrs:{type:"md-create"}}),t._v(t._s(t.$t("dt.form.saveAll"))+" ")],1):t._e()],1),a("div",{staticClass:"right"},[t.$isHasMenuAuth("admin.ProductExport")?a("Button",{attrs:{type:"warning"},on:{click:t.handleAsyncExport}},[a("Icon",{attrs:{type:"md-cloud-download"}}),t._v(t._s(t.$t("dt.form.export"))+"Excel ")],1):t._e()],1)]),a("div",{staticClass:"table"},[a("Table",{ref:"selection",attrs:{border:"",loading:t.loading&&t.isMethodList,columns:t.columns,data:t.formTemp.data},on:{"on-select-cancel":t.handleTableOnSelectCancel,"on-selection-change":t.handleTableSelectionChange}})],1),a("div",{staticClass:"page-list"},[a("Page",{attrs:{"show-total":"","show-sizer":"","show-elevator":"",total:t.formTemp.total,current:t.formTemp.current_page,"page-size-opts":t.formTemp.pageSizeOpts,"page-size":t.formTemp.per_page},on:{"on-page-size-change":t.handleOnPageSizeChange,"on-change":t.handleChangePage}})],1)],1)])])},i=[],r=(a("69bf"),a("5c4c"),a("d211")),s=a("b8f9"),o=a("efa4"),l={name:"RoleList",mixins:[o["a"]],data:function(){return{formTemp:{brandList:[]}}},components:{},computed:{columns:function(){var t=this;return[{type:"selection",width:60,align:"center",fixed:this.$device.mobile()?"":"left"},{title:this.$t("dt.form.index"),type:"index",width:80,align:"center"},{title:this.$t("dt.form.ProductName"),key:"name",minWidth:200,align:"center",render:function(e,a){var n=a.row.name;return t.$isHasMenuAuth("admin.ProductEdit")&&-1!==t.selectTable.indexOf(a.row.id)?e("Input",{props:{size:"small",value:n,clearable:!0,placeholder:t.$t("dt.base.pleaseInput",{label:t.$t("dt.form.ProductName")})},on:{"on-clear":function(){return t.handleSelectChange("",a.index,a.column.key)},input:function(e){t.handleSelectChange(e,a.index,a.column.key)}}},n):e(t.$isHasMenuAuth("admin.ProductDetail")?"router-link":"span",{props:{to:{name:"admin.ProductDetail",params:{id:a.row.id}}}},n)}},{title:this.$t("dt.form.ProductCode"),key:"productCode",minWidth:120,align:"center"},{title:this.$t("dt.form.picture"),key:"picture",width:170,align:"center",render:function(e,a){var n=e("Avatar",{props:{shape:"square",icon:"ios-images"}});return s["a"].isEmpty(a.row.picture)||(n=e("Avatar",{props:{shape:"square",src:t.$options.filters.formatImage(a.row.picture)}})),n}},{title:this.$t("dt.form.ProductCategory"),minWidth:150,align:"center",render:function(t,e){var a=e.row.category||{};return t("span",a.name)}},{title:this.$t("dt.form.ProductBrand"),minWidth:150,align:"center",render:function(t,e){var a=e.row.brand||{};return t("span",a.name)}},{title:this.$t("dt.form.ProductUnit"),width:100,align:"center",render:function(t,e){var a=e.row.unit||{};return t("span",a.name)}},{title:this.$t("dt.form.ProductSpec"),key:"isSpec",width:100,align:"center",render:function(e,a){var n=a.row.isSpec,i="";return 2===n&&(i="#2d8cf0"),e("span",{style:{color:i}},t.$options.filters.specType(n))}},{title:this.$t("dt.form.BarCode"),key:"productBarCode",minWidth:200,align:"center"},{title:this.$t("dt.form.keyword"),key:"keyword",minWidth:200,maxWidth:400,align:"center",tooltip:!0},{title:this.$t("dt.base.describe"),key:"describe",minWidth:200,maxWidth:400,align:"center",tooltip:!0},{title:this.$t("dt.form.deletedAt"),key:"deletedAt",width:170,align:"center",sortable:!0,render:function(e,a){return e("span",t.$options.filters.formatTime(a.row.deletedAt))}},{title:this.$t("dt.form.updatedAt"),key:"updatedAt",width:170,align:"center",sortable:!0,render:function(e,a){return e("span",t.$options.filters.formatTime(a.row.updatedAt))}},{title:this.$t("dt.form.createdAt"),key:"createdAt",width:170,align:"center",sortable:!0,render:function(e,a){return e("span",t.$options.filters.formatTime(a.row.createdAt))}},{title:this.$t("dt.form.status"),key:"state",width:100,fixed:this.$device.mobile()?"":"right",align:"center",renderHeader:function(e,a){var n=a.column;return t.$isHasMenuAuth("admin.ProductEdit")?e("div",[e("span",n.title),e("e-dropdown",{props:{columnKey:n.key,name:"label",value:"value",dataList:t.$options.filters.switchStatus([])},on:{handleDropdownChange:t.handleFormDataChange}})]):e("span",n.title)},render:function(e,a){var n=a.row.state;return t.$isHasMenuAuth("admin.ProductEdit")&&-1!==t.selectTable.indexOf(a.row.id)?e("div",[e("e-select",{props:{current:n,name:"label",value:"value",dataList:t.$options.filters.switchStatus([])},on:{handleSelectChange:function(e){return t.handleSelectChange(e,a.index,a.column.key)}}})]):e("i-switch",{props:{value:s["a"].isNumber(n)?1===n:n,size:"large",loading:a.row.loading,disabled:!t.$isHasMenuAuth("admin.ProductEdit")||(a.row.disabled||!1)},on:{"on-change":function(e){t.handleUpdateStatus(a.row,e)}}},[e("span",{slot:"open"},t.$t("dt.status.open")),e("span",{slot:"close"},t.$t("dt.status.close"))])}},{title:this.$t("dt.form.action"),key:"action",width:180,align:"center",fixed:this.$device.mobile()?"":"right",render:function(e,a){if(t.$isHasMenuAuth("admin.ProductEdit")&&-1!==t.selectTable.indexOf(a.row.id))return e("div",[e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.handleAsyncSavaAll(a.row)}}},t.$t("dt.form.save")),e("Button",{props:{type:"warning",size:"small"},on:{click:function(){t.handleTableRowCancelChecked(a.row)}}},t.$t("dt.form.cancel"))]);var n=[];return t.$isHasMenuAuth("admin.ProductDetail")&&n.push(e("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.handleCheckHabitType({name:"admin.ProductDetail",params:{id:a.row.id}})}}},t.$t("dt.form.detail"))),t.$isHasMenuAuth("admin.ProductEdit")&&n.push(e("Button",{props:{type:"warning",size:"small"},style:{marginRight:"5px"},on:{click:function(){t.handleCheckHabitType({name:"admin.ProductEdit",params:{id:a.row.id}})}}},t.$t("dt.form.edit"))),t.$isHasMenuAuth("admin.ProductDelete")&&n.push(e("Button",{props:{type:s["a"].isEmpty(a.row.deletedAt)?"error":"success",size:"small"},on:{click:function(){s["a"].isEmpty(a.row.deletedAt)?t.handleAsync(a):t.handleRecoveryAsync(a)}}},s["a"].isEmpty(a.row.deletedAt)?t.$t("dt.form.delete"):t.$t("dt.form.recovery"))),e("div",n)}}]}},created:function(){this.handleMerchantList(),this.handleList()},mounted:function(){},watch:{},filters:{},methods:{handleList:function(){var t=this,e=this.handleInitFields(this.columns,["category.id","category.name","unit.id","unit.name","brand.id","brand.name"]),a=this.variables;this.$Http.Post({mutation:this.$Model.Products,variables:a,fields:e}).then((function(e){var a=e.data;t.formTemp=Object(r["a"])(Object(r["a"])({},t.formTemp),a),t.sortData(t.formTemp.data)}))},sortData:function(){var t=this;s["a"].each(this.formTemp.data,(function(e,a){e.index=(t.formTemp.current_page-1)*t.formTemp.per_page+a+1,e.loading=!1}))},handleMerchantList:function(){var t=this;this.$isHasMenuAuth("admin.ProductBrandList")&&this.$Http.Post({mutation:this.$Model.ProductBrands,variables:{perPage:0},fields:[{data:["id","name"]}]}).then((function(e){var a=e.data;t.formTemp.brandList=a.data}))},handleRowItemSave:function(t,e){s["a"].isEmpty(t)||this.handleOnRecovery({api:this.$Model.ProductEdit,item:t,type:2},e)},handleUpdateStatus:function(t,e){this.handleUpdateStatusFunc({api:this.$Model.ProductEdit,item:t,value:e})},handleRecovery:function(t,e){s["a"].isEmpty(t)||this.handleOnRecovery({api:this.$Model.ProductsRecovery,item:t},e)},handleDelete:function(t){s["a"].isEmpty(t.id)||s["a"].isEmpty(t.index)||this.handleOnDelete({api:this.$Model.ProductsDelete,item:t})}}},d=l,c=(a("71ee"),a("c701")),u=Object(c["a"])(d,n,i,!1,null,"2ca01679",null);e["default"]=u.exports},"59c1":function(t,e,a){},"71ee":function(t,e,a){"use strict";a("59c1")}}]);