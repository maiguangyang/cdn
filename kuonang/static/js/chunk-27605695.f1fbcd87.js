(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27605695"],{"0236":function(t,e,a){},"553e":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"menu-add-page"},[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"controller"},[a("form-model",{attrs:{formData:t.formData,formModel:t.formModel,tabName:[t.$t("dt.form.menuAdd")],btnTitle:t.$t("dt.base.save")},on:{formDataSubmit:t.handleFormDataSubmit}})],1)])])},r=[],o=a("d211"),s=(a("6a61"),a("2e91")),i=a("b8f9"),d=a("55fa"),u={name:"MenuAdd",data:function(){return{formData:{lang:{},weight:0,parent:[],state:!0,languages:[]},formModel:{hide:[],readonly:[]}}},created:function(){},mounted:function(){},components:{FormModel:d["a"]},watch:{},methods:{handleFormDataSubmit:function(){var t=arguments,e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var n,r,s,d;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n=t.length>0&&void 0!==t[0]?t[0]:{},i["a"].isObject(n)&&i["a"].isObject(n.data)&&!i["a"].isEmpty(n.data)){a.next=4;break}return e.$Message.error(e.$t("dt.base.invalidData")),a.abrupt("return");case 4:return r=Object(o["a"])({},n.data),s={data:Object(o["a"])({},r)},a.next=8,e.$Http.Post({mutation:e.$Model.CommonMenuAdd,variables:s}).then((function(t){return t}));case 8:d=a.sent,i["a"].isEmpty(d.data)||(e.$Session.remove("MENUS_ALL"),e.$Session.remove("MENUS_LIST"),e.$Message.success(e.$t("dt.toast.saveOk")),e.handleRouteGoBack("admin.MenuList"));case 10:case"end":return a.stop()}}),a)})))()}}},c=u,m=(a("61d0"),a("c701")),l=Object(m["a"])(c,n,r,!1,null,"339ffbf8",null);e["default"]=l.exports},"61d0":function(t,e,a){"use strict";a("0236")}}]);