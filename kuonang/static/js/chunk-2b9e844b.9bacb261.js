(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b9e844b"],{"07bc":function(a,t,e){"use strict";e.r(t);var r=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"login"},[e("div",{staticClass:"login-inner"},[a._m(0),e("div",{staticClass:"login-body"},[e("Form",{ref:"formData",attrs:{model:a.formData,rules:a.ruleInline,"label-width":85}},[e("FormItem",{attrs:{label:"数据库地址",prop:"data_ip"}},[e("Input",{attrs:{type:"text",placeholder:"请输入数据库IP地址"},model:{value:a.formData.data_ip,callback:function(t){a.$set(a.formData,"data_ip",t)},expression:"formData.data_ip"}})],1),e("FormItem",{attrs:{label:"数据库端口",prop:"data_port"}},[e("Input",{attrs:{type:"text",number:"",placeholder:"请输入数据库端口"},model:{value:a.formData.data_port,callback:function(t){a.$set(a.formData,"data_port",t)},expression:"formData.data_port"}})],1),e("FormItem",{attrs:{label:"数据库账号",prop:"data_user"}},[e("Input",{attrs:{type:"text",placeholder:"请输入数据库账号"},model:{value:a.formData.data_user,callback:function(t){a.$set(a.formData,"data_user",t)},expression:"formData.data_user"}})],1),e("FormItem",{attrs:{label:"数据库密码",prop:"data_password"}},[e("Input",{attrs:{type:"text",placeholder:"请输入数据库密码"},model:{value:a.formData.data_password,callback:function(t){a.$set(a.formData,"data_password",t)},expression:"formData.data_password"}})],1),e("FormItem",{attrs:{label:"数据库名称",prop:"database"}},[e("Tooltip",{staticStyle:{width:"100%"},attrs:{content:"可自定义数据库名称",placement:"bottom"}},[e("Input",{attrs:{type:"text",placeholder:"请输入数据库名称"},model:{value:a.formData.database,callback:function(t){a.$set(a.formData,"database",t)},expression:"formData.database"}})],1)],1),e("FormItem",[e("Button",{attrs:{type:"primary",loading:a.loading,long:""},on:{click:function(t){return a.handleSubmit("formData")}}},[a._v("设置数据库")])],1)],1),a._m(1)],1)])])},s=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"login-head"},[a._v("设置数据库"),e("span",[a._v("(目前只支持MySql数据库)")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"tips"},[e("p",[a._v("技术服务：广州锦皓科技有限公司")]),e("p",[e("span",[a._v("电话：020-36480081")]),e("span",[a._v("微信：weixin")])])])}],o=(e("d8f4"),e("2083"),e("d211")),n={name:"login",data:function(){return{loading:!1,formData:{driver_name:"mysql",data_user:"admin",data_password:"admin",data_ip:"127.0.0.1",charset:"utf8mb4",database:"",data_port:3306},ruleInline:{data_ip:[{required:!0,message:"请输入数据库IP地址",trigger:"blur"},{type:"string",min:6,message:"密码长度不能小于6位",trigger:"blur"}],data_port:[{type:"number",min:1,required:!0,message:"请输入数据库端口",trigger:"blur"}],data_user:[{required:!0,message:"请输入数据库账号",trigger:"blur"}],data_password:[{required:!0,message:"请输入数据库密码",trigger:"blur"}],database:[{required:!0,message:"请输入数据库名称",trigger:"blur"}]}}},components:{},mounted:function(){this.randomDataBase()},methods:{handleSubmit:function(a){var t=this;this.loading=!0,this.$refs[a].validate((function(a){a?t.$Http.Post("Conf.checkDataBase",t.formData).then((function(a){return a})):(t.$Message.error("请正确填写表单"),setTimeout((function(){t.loading=!1}),500))}))},randomDataBase:function(){for(var a="",t="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),e=0;e<18;e++){var r=Math.round(Math.random()*(t.length-1));a+=t[r]}this.formData=Object(o["a"])(Object(o["a"])({},this.formData),{},{database:a})}}},i=n,l=(e("b4a2"),e("c701")),d=Object(l["a"])(i,r,s,!1,null,"3b414d51",null);t["default"]=d.exports},b4a2:function(a,t,e){"use strict";e("cdd0")},cdd0:function(a,t,e){}}]);