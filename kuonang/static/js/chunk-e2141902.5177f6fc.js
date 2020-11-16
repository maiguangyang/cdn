(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e2141902"],{"364f":function(e,t,a){},4470:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"PutStock-list-page"},[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"controller"},[a("Row",{staticClass:"filter-group",class:{active:e.rowToggle},attrs:{type:"flex",gutter:20}},[a("Col",{staticClass:"filter-item",attrs:{xs:24,sm:12,md:8,lg:8,xl:6,xxl:6}},[a("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[a("Col",{staticClass:"child-title",attrs:{span:"8"}},[a("span",[e._v(e._s(e.$t("dt.form.OrderNo"))+"：")])]),a("Col",{attrs:{span:"16"}},[a("Input",{attrs:{search:"",placeholder:e.$t("dt.base.pleaseInput",{label:e.$t("dt.form.OrderNo")})},on:{"on-enter":e.handleFilterChange,"on-search":e.handleFilterChange},model:{value:e.filters.orderNo_like,callback:function(t){e.$set(e.filters,"orderNo_like",t)},expression:"filters.orderNo_like"}})],1)],1)],1),a("Col",{staticClass:"filter-item",attrs:{xs:24,sm:12,md:8,lg:8,xl:6,xxl:6}},[a("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[a("Col",{staticClass:"child-title",attrs:{span:"8"}},[a("span",[e._v(e._s(e.$t("dt.form.AllocationName"))+"：")])]),a("Col",{attrs:{span:"16"}},[a("Input",{attrs:{search:"",placeholder:e.$t("dt.base.pleaseInput",{label:e.$t("dt.form.AllocationName")})},on:{"on-enter":e.handleFilterChange,"on-search":e.handleFilterChange},model:{value:e.filters.name_like,callback:function(t){e.$set(e.filters,"name_like",t)},expression:"filters.name_like"}})],1)],1)],1),e.$isHasMenuAuth("admin.WarehouseList")?a("Col",{staticClass:"filter-item",attrs:{xs:24,sm:12,md:8,lg:8,xl:6,xxl:6}},[a("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[a("Col",{staticClass:"child-title",attrs:{span:"8"}},[a("span",[e._v(e._s(e.$t("dt.form.CallOutWarehouse"))+"：")])]),a("Col",{attrs:{span:"16"}},[a("ListSelectModal",{ref:"old",attrs:{title:e.$t("dt.base.pleaseSelect",{label:e.$t("dt.form.CallOutWarehouse")}),type:2,route:"WarehouseAdd",api:e.$Model.Warehouses,column:[{name:e.$t("dt.form.WarehouseName")},{code:e.$t("dt.form.WarehouseCode")},{remark:e.$t("dt.base.remark")}],attrs:{label:"name",value:"id"},filter:e.filter.old,callback:e.handleWarehouseCallback,placeholder:e.$t("dt.base.pleaseSelect",{label:e.$t("dt.form.CallOutWarehouse")})},model:{value:e.filters.oldId,callback:function(t){e.$set(e.filters,"oldId",t)},expression:"filters.oldId"}},[a("div",{staticClass:"filter-item",attrs:{slot:"filter"},slot:"filter"},[a("span",[e._v(e._s(e.$t("dt.form.WarehouseCode"))+"：")]),a("Input",{attrs:{search:"","enter-button":"",placeholder:e.$t("dt.base.pleaseInput",{label:e.$t("dt.form.WarehouseCode")})},on:{"on-enter":e.handleFilterOldCodeChange,"on-search":e.handleFilterOldCodeChange},model:{value:e.filter.old.code_like,callback:function(t){e.$set(e.filter.old,"code_like",t)},expression:"filter.old.code_like"}})],1)])],1)],1)],1):e._e(),e.$isHasMenuAuth("admin.WarehouseList")?a("Col",{staticClass:"filter-item",attrs:{xs:24,sm:12,md:8,lg:8,xl:6,xxl:6}},[a("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[a("Col",{staticClass:"child-title",attrs:{span:"8"}},[a("span",[e._v(e._s(e.$t("dt.form.CallInWarehouse"))+"：")])]),a("Col",{attrs:{span:"16"}},[a("ListSelectModal",{ref:"new",attrs:{title:e.$t("dt.base.pleaseSelect",{label:e.$t("dt.form.CallInWarehouse")}),type:2,route:"WarehouseAdd",api:e.$Model.Warehouses,column:[{name:e.$t("dt.form.WarehouseName")},{code:e.$t("dt.form.WarehouseCode")},{remark:e.$t("dt.base.remark")}],attrs:{label:"name",value:"id"},filter:e.filter.new,callback:e.handleWarehouseCallback,placeholder:e.$t("dt.base.pleaseSelect",{label:e.$t("dt.form.CallInWarehouse")})},model:{value:e.filters.newId,callback:function(t){e.$set(e.filters,"newId",t)},expression:"filters.newId"}},[a("div",{staticClass:"filter-item",attrs:{slot:"filter"},slot:"filter"},[a("span",[e._v(e._s(e.$t("dt.form.WarehouseCode"))+"：")]),a("Input",{attrs:{search:"","enter-button":"",placeholder:e.$t("dt.base.pleaseInput",{label:e.$t("dt.form.WarehouseCode")})},on:{"on-enter":e.handleFilterNewCodeChange,"on-search":e.handleFilterNewCodeChange},model:{value:e.filter.new.code_like,callback:function(t){e.$set(e.filter.new,"code_like",t)},expression:"filter.new.code_like"}})],1)])],1)],1)],1):e._e(),a("Col",{staticClass:"filter-item",attrs:{xs:24,sm:12,md:8,lg:8,xl:6,xxl:6}},[a("Row",{attrs:{type:"flex",justify:"center",align:"middle"}},[a("Col",{staticClass:"child-title",attrs:{span:"8"}},[a("span",[e._v(e._s(e.$t("dt.base.sort"))+"：")])]),a("Col",{attrs:{span:"16"}},[a("sorts",{on:{swtichSorts:e.handleFilterChange}})],1)],1)],1),a("button",{staticClass:"row-toggle",attrs:{type:"button"},on:{click:function(t){return e.$store.commit("spinShow/rowToggle")}}},[e.rowToggle?a("Icon",{attrs:{type:"ios-arrow-up",size:"25",color:"#999"}}):a("Icon",{attrs:{type:"ios-arrow-down",size:"25",color:"#999"}})],1)],1),a("div",{staticClass:"btn-group"},[a("div",{staticClass:"left"},[e.$isHasMenuAuth("admin.AllocationAdd")?a("Button",{attrs:{type:"primary"},on:{click:function(t){return e.handleCheckHabitType({name:"admin.AllocationAdd"})}}},[a("Icon",{attrs:{type:"md-add"}}),e._v(e._s(e.$t("dt.form.AllocationAdd"))+" ")],1):e._e()],1),a("div",{staticClass:"right"},[e.$isHasMenuAuth("admin.PutStockExport")?a("Button",{attrs:{type:"warning"},on:{click:e.handleAsyncExport}},[a("Icon",{attrs:{type:"md-cloud-download"}}),e._v(e._s(e.$t("dt.form.export"))+"Excel ")],1):e._e()],1)]),a("div",{staticClass:"table"},[a("Table",{ref:"selection",attrs:{border:"",loading:e.loading&&e.isMethodList,columns:e.columns,data:e.formTemp.data},on:{"on-select-cancel":e.handleTableOnSelectCancel,"on-selection-change":e.handleTableSelectionChange}})],1),a("div",{staticClass:"page-list"},[a("Page",{attrs:{"show-total":"","show-sizer":"","show-elevator":"",total:e.formTemp.total,current:e.formTemp.current_page,"page-size-opts":e.formTemp.pageSizeOpts,"page-size":e.formTemp.per_page},on:{"on-page-size-change":e.handleOnPageSizeChange,"on-change":e.handleChangePage}})],1)],1)])])},r=[],s=(a("2d38"),a("2c78"),a("02bf"),a("a39b"),a("5c4c"),a("d211")),n=a("b8f9"),o=a("efa4"),i=a("494e"),d={name:"PutStockList",mixins:[o["a"]],data:function(){return{warehouseName:this.$t("dt.form.AllWarehouse"),filter:{old:{},new:{}},formTemp:{warehouseList:[],supplyList:[]}}},components:{ListSelectModal:i["a"]},computed:{columns:function(){var e=this;return[{type:"selection",width:60,align:"center",fixed:"left"},{title:this.$t("dt.form.index"),type:"index",width:80,align:"center"},{title:this.$t("dt.form.OrderNo"),key:"orderNo",width:160,align:"center",render:function(t,a){return t(e.$isHasMenuAuth("admin.AllocationDetail")?"router-link":"span",{props:{to:{name:"admin.AllocationDetail",params:{id:a.row.id}}}},a.row.orderNo)}},{title:this.$t("dt.form.AllocationName"),key:"name",minWidth:200,align:"center"},{title:this.$t("dt.form.CallOutWarehouse"),minWidth:200,align:"center",render:function(e,t){var a=t.row.old||{};return e("span",a.name)}},{title:this.$t("dt.form.CallInWarehouse"),minWidth:200,align:"center",render:function(e,t){var a=t.row.new||{};return e("span",a.name)}},{title:this.$t("dt.form.AllocationProject"),key:"putStockIds",minWidth:150,align:"center",render:function(t,a){var l=a.row.putStockIds||[];return t("span","".concat(l.length," ").concat(e.$t("dt.base.term")))}},{title:this.$t("dt.form.AllocationNumber"),minWidth:150,align:"center",render:function(t,a){var l=a.row.putStock||[],r=0;return n["a"].isEmpty(l)||(r=l.map((function(e){return e.number})).reduce((function(e,t){return e+t}),0)),t("span","".concat(r," ").concat(e.$t("dt.base.piece")))}},{title:this.$t("dt.form.Operator"),minWidth:200,align:"center",render:function(e,t){var a=t.row.user||{};return e("span",a.username)}},{title:this.$t("dt.base.telPhone"),minWidth:200,align:"center",render:function(e,t){var a=t.row.user||{};return e("span",a.phone)}},{title:this.$t("dt.form.AllocationTime"),key:"createdAt",width:170,align:"center",sortable:!0,fixed:"right",render:function(t,a){return t("span",e.$options.filters.formatTime(a.row.createdAt))}},{title:this.$t("dt.form.action"),key:"action",width:120,align:"center",fixed:"right",render:function(t,a){var l=[];return e.$isHasMenuAuth("admin.AllocationDetail")&&l.push(t("Button",{props:{type:"primary",size:"small"},style:{marginRight:"5px"},on:{click:function(){e.handleCheckHabitType({name:"admin.AllocationDetail",params:{id:a.row.id}})}}},e.$t("dt.form.detail"))),t("div",l)}}]}},created:function(){this.handleList()},mounted:function(){},watch:{},filters:{},methods:{handleList:function(){var e=this,t=this.handleInitFields(this.columns,["old.id","old.name","new.id","new.name","putStock.id","putStock.number","user.id","user.username","user.phone"]),a=this.variables;a.sort=[{updatedAt:"DESC"}],this.$Http.Post({mutation:this.$Model.ProductAllocations,variables:a,fields:t}).then((function(t){var a=t.data;e.formTemp=Object(s["a"])(Object(s["a"])({},e.formTemp),a),e.sortData(e.formTemp.data)}))},sortData:function(){var e=this;n["a"].each(this.formTemp.data,(function(t,a){t.index=(e.formTemp.current_page-1)*e.formTemp.per_page+a+1,t.loading=!1}))},handleFilterOldCodeChange:function(){this.filter.old.code_like||delete this.filter.old.code_like,this.$refs.old.handleSlotWatch()},handleFilterNewCodeChange:function(){this.filter.new.code_like||delete this.filter.new.code_like,this.$refs.new.handleSlotWatch()},handleWarehouseCallback:function(e){n["a"].isEmpty(e)?this.warehouseName=this.$t("dt.form.AllWarehouse"):this.warehouseName=e[0].name,this.handleFilterChange()}}},c=d,u=(a("7607"),a("c701")),h=Object(u["a"])(c,l,r,!1,null,"5aef6582",null);t["default"]=h.exports},7607:function(e,t,a){"use strict";a("364f")}}]);