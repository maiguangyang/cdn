(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3cb338cd"],{"455e":function(t,e,a){},"55be":function(t,e,a){"use strict";a("455e")},"92c4":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"merchant-add-page"},[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"controller"},[a("form-model",{attrs:{formModel:t.formModel,tabName:[t.$t("dt.form.MerchantAdd")],btnTitle:t.$t("dt.base.save")},on:{formDataSubmit:t.handleFormDataSubmit}})],1)])])},r=[],o=a("d211"),s=(a("6a61"),a("2e91")),i=a("b8f9"),c=a("539e"),d={name:"MerchantAdd",data:function(){return{formModel:{hide:["DataBaseName"],readonly:[]}}},created:function(){},mounted:function(){},components:{FormModel:c["a"]},watch:{},methods:{handleFormDataSubmit:function(){var t=arguments,e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n,r,s,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n=t.length>0&&void 0!==t[0]?t[0]:{},i["a"].isObject(n)&&i["a"].isObject(n.data)&&!i["a"].isEmpty(n.data)){a.next=4;break}return e.$Message.error(e.$t("dt.base.invalidData")),a.abrupt("return");case 4:return r=Object(o["a"])({},n.data),s={data:Object(o["a"])({},r)},a.next=8,e.$Http.Post({mutation:e.$Model.CommonMerchantAdd,variables:s}).then((function(t){return t}));case 8:c=a.sent,i["a"].isEmpty(c.data.id)||e.$Http.Post({mutation:e.$Model.InitTable,variables:{id:c.data.id}}).then((function(){e.$Message.success(e.$t("dt.toast.saveOk")),e.handleRouteGoBack("admin.MerchantList")}));case 10:case"end":return a.stop()}}),a)})))()}}},u=d,m=(a("55be"),a("c701")),l=Object(m["a"])(u,n,r,!1,null,"41b2e34f",null);e["default"]=l.exports}}]);