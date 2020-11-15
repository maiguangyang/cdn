(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d6575"],{"71af":function(e,a,r){"use strict";r.r(a),a["default"]=[{title:"商户账号管理",name:"commonMerchants",type:0,fields:[{name:"id",desc:"uuid",type:"varchar(36)",required:"true",validator:"",remark:"create方法不是必填"},{name:"name",desc:"商户名称",type:"varchar(255)",required:"true",validator:"",remark:""},{name:"base64",desc:"aes加密后的base64结果，用来创建数据库",type:"varchar(500)",required:"true",validator:"",remark:""},{name:"hash",desc:"表hash值",type:"bigint(13)",required:"true",validator:"justInt",remark:""},{name:"money",desc:"商户账户余额",type:"bigint(20)",required:"false",validator:"justInt",remark:""},{name:"telPhone",desc:"联系电话",type:"varchar(64)",required:"false",validator:"",remark:""},{name:"email",desc:"联系Email",type:"varchar(64)",required:"false",validator:"",remark:""},{name:"verify",desc:"账号状态：99/未审核、1审核通过、2审核未通过、3已冻结、4已过期、5长期有效",type:"int(2)",required:"false",validator:"int",remark:""},{name:"startTime",desc:"服务有效：开始时间",type:"bigint(13)",required:"false",validator:"justInt",remark:""},{name:"endTime",desc:"服务有效：结束时间",type:"bigint(13)",required:"false",validator:"justInt",remark:""},{name:"init",desc:"初始化：1/否、2是",type:"int(1)",required:"false",validator:"int",remark:""},{name:"super",desc:"超级商户：1/否、2是",type:"int(1)",required:"false",validator:"justInt",remark:""},{name:"remark",desc:"备注",type:"text",required:"false",validator:"",remark:""},{name:"userId",desc:"",type:"",required:"false",validator:"",remark:""},{name:"tyeId",desc:"",type:"",required:"false",validator:"",remark:""},{name:"flow",desc:"",type:"int(2)",required:"false",validator:"int",remark:""},{name:"weight",desc:"权重：用来排序",type:"int(2)",required:"false",validator:"justInt",remark:""},{name:"state",desc:"状态：1/正常、2/禁用、3/下架",type:"int(2)",required:"false",validator:"justInt",remark:""},{name:"deletedBy",desc:"删除人",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"updatedBy",desc:"更新人",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"createdBy",desc:"创建人",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"deletedAt",desc:"",type:"",required:"false",validator:"",remark:""},{name:"updatedAt",desc:"更新时间",type:"bigint(13)",required:"false",validator:"",remark:""},{name:"createdAt",desc:"创建时间",type:"bigint(13)",required:"true",validator:"",remark:""},{name:"branchs",desc:"CommonBranch连表查询",type:"relationship",required:"",validator:"",remark:"commonBranch"},{name:"user",desc:"CommonUser连表查询",type:"relationship",required:"",validator:"",remark:"commonUser"},{name:"tye",desc:"MerchantType连表查询",type:"relationship",required:"",validator:"",remark:"merchantType"}],data:[{name:"商户账号管理",title:"列表",api:"commonMerchants",type:"list",method:"query"},{name:"商户账号管理",title:"详情",api:"commonMerchant",type:"detail",method:"query"},{name:"商户账号管理",title:"新增",api:"createCommonMerchant",type:"add",method:"mutation"},{name:"商户账号管理",title:"修改",api:"updateCommonMerchant",type:"edit",method:"mutation"},{name:"商户账号管理",title:"删除",api:"deleteCommonMerchants",type:"delete",method:"mutation"}]},{title:"商户类型管理",name:"merchantTypes",type:0,fields:[{name:"id",desc:"uuid",type:"varchar(36)",required:"true",validator:"",remark:"create方法不是必填"},{name:"name",desc:"类型名称",type:"varchar(255)",required:"true",validator:"",remark:""},{name:"value",desc:"商户类型：1/普通、99超级管理后台",type:"int(2)",required:"true",validator:"justInt",remark:""},{name:"menu",desc:"菜单权限",type:"mediumtext",required:"false",validator:"",remark:""},{name:"feature",desc:"功能权限",type:"mediumtext",required:"false",validator:"",remark:""},{name:"flow",desc:"",type:"int(2)",required:"false",validator:"int",remark:""},{name:"weight",desc:"权重：用来排序",type:"int(2)",required:"false",validator:"justInt",remark:""},{name:"state",desc:"状态：1/正常、2/禁用、3/下架",type:"int(2)",required:"false",validator:"justInt",remark:""},{name:"deletedBy",desc:"删除人",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"updatedBy",desc:"更新人",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"createdBy",desc:"创建人",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"deletedAt",desc:"",type:"",required:"false",validator:"",remark:""},{name:"updatedAt",desc:"更新时间",type:"bigint(13)",required:"false",validator:"",remark:""},{name:"createdAt",desc:"创建时间",type:"bigint(13)",required:"true",validator:"",remark:""},{name:"merchants",desc:"CommonMerchant连表查询",type:"relationship",required:"",validator:"",remark:"commonMerchant"}],data:[{name:"商户类型管理",title:"列表",api:"merchantTypes",type:"list",method:"query"},{name:"商户类型管理",title:"详情",api:"merchantType",type:"detail",method:"query"},{name:"商户类型管理",title:"新增",api:"createMerchantType",type:"add",method:"mutation"},{name:"商户类型管理",title:"修改",api:"updateMerchantType",type:"edit",method:"mutation"},{name:"商户类型管理",title:"删除",api:"deleteMerchantTypes",type:"delete",method:"mutation"}]},{title:"所有商户公司列表",name:"commonBranches",type:0,fields:[{name:"id",desc:"uuid",type:"varchar(36)",required:"true",validator:"",remark:"create方法不是必填"},{name:"name",desc:"公司名称",type:"varchar(255)",required:"true",validator:"",remark:""},{name:"init",desc:"公司总部：1/否、2是",type:"int(1)",required:"false",validator:"justInt",remark:""},{name:"verify",desc:"公司状态：99/未审核、1审核通过、2审核未通过、3已冻结、4已过期、5长期有效",type:"int(2)",required:"false",validator:"int",remark:""},{name:"remark",desc:"备注",type:"text",required:"false",validator:"",remark:""},{name:"userId",desc:"",type:"",required:"false",validator:"",remark:""},{name:"merchantId",desc:"",type:"",required:"false",validator:"",remark:""},{name:"flow",desc:"",type:"int(2)",required:"false",validator:"int",remark:""},{name:"weight",desc:"权重：用来排序",type:"int(2)",required:"false",validator:"justInt",remark:""},{name:"state",desc:"状态：1/正常、2/禁用、3/下架",type:"int(2)",required:"false",validator:"justInt",remark:""},{name:"deletedBy",desc:"删除人",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"updatedBy",desc:"更新人",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"createdBy",desc:"创建人",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"deletedAt",desc:"",type:"",required:"false",validator:"",remark:""},{name:"updatedAt",desc:"更新时间",type:"bigint(13)",required:"false",validator:"",remark:""},{name:"createdAt",desc:"创建时间",type:"bigint(13)",required:"true",validator:"",remark:""},{name:"user",desc:"CommonUser连表查询",type:"relationship",required:"",validator:"",remark:"commonUser"},{name:"users",desc:"CommonUser连表查询",type:"relationship",required:"",validator:"",remark:"commonUser"},{name:"merchant",desc:"CommonMerchant连表查询",type:"relationship",required:"",validator:"",remark:"commonMerchant"}],data:[{name:"所有商户公司列表",title:"列表",api:"commonBranches",type:"list",method:"query"},{name:"所有商户公司列表",title:"详情",api:"commonBranch",type:"detail",method:"query"},{name:"所有商户公司列表",title:"新增",api:"createCommonBranch",type:"add",method:"mutation"},{name:"所有商户公司列表",title:"修改",api:"updateCommonBranch",type:"edit",method:"mutation"},{name:"所有商户公司列表",title:"删除",api:"deleteCommonBranches",type:"delete",method:"mutation"}]},{title:"全部用户",name:"commonUsers",type:0,fields:[{name:"id",desc:"uuid",type:"varchar(36)",required:"true",validator:"",remark:"create方法不是必填"},{name:"phone",desc:"账号：使用手机号码",type:"varchar(32)",required:"true",validator:"phone",remark:""},{name:"password",desc:"登录密码",type:"varchar(64)",required:"true",validator:"password",remark:""},{name:"username",desc:"姓名",type:"varchar(64)",required:"true",validator:"",remark:""},{name:"i18n",desc:"默认使用语言",type:"varchar(64)",required:"false",validator:"",remark:""},{name:"bid",desc:"用户默认公司",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"readonly",desc:"是否只读：1/否、2是",type:"int(1)",required:"false",validator:"justInt",remark:""},{name:"remark",desc:"备注",type:"text",required:"false",validator:"",remark:""},{name:"flow",desc:"",type:"int(2)",required:"false",validator:"int",remark:""},{name:"weight",desc:"权重：用来排序",type:"int(2)",required:"false",validator:"justInt",remark:""},{name:"state",desc:"状态：1/正常、2/禁用、3/下架",type:"int(2)",required:"false",validator:"justInt",remark:""},{name:"deletedBy",desc:"删除人",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"updatedBy",desc:"更新人",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"createdBy",desc:"创建人",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"deletedAt",desc:"",type:"",required:"false",validator:"",remark:""},{name:"updatedAt",desc:"更新时间",type:"bigint(13)",required:"false",validator:"",remark:""},{name:"createdAt",desc:"创建时间",type:"bigint(13)",required:"true",validator:"",remark:""},{name:"branch",desc:"CommonBranch连表查询",type:"relationship",required:"",validator:"",remark:"commonBranch"},{name:"branchs",desc:"CommonBranch连表查询",type:"relationship",required:"",validator:"",remark:"commonBranch"},{name:"merchants",desc:"CommonMerchant连表查询",type:"relationship",required:"",validator:"",remark:"commonMerchant"}],data:[{name:"全部用户",title:"列表",api:"commonUsers",type:"list",method:"query"},{name:"全部用户",title:"详情",api:"commonUser",type:"detail",method:"query"},{name:"全部用户",title:"新增",api:"createCommonUser",type:"add",method:"mutation"},{name:"全部用户",title:"修改",api:"updateCommonUser",type:"edit",method:"mutation"},{name:"全部用户",title:"删除",api:"deleteCommonUsers",type:"delete",method:"mutation"}]},{title:"行业分类",name:"trades",type:0,fields:[{name:"id",desc:"uuid",type:"varchar(36)",required:"true",validator:"",remark:"create方法不是必填"},{name:"name",desc:"行业名称",type:"varchar(255)",required:"true",validator:"",remark:""},{name:"pid",desc:"所属上级：1/一级，其他对应该表的id字段",type:"varchar(36)",required:"true",validator:"",remark:""},{name:"flow",desc:"",type:"int(2)",required:"false",validator:"int",remark:""},{name:"weight",desc:"权重：用来排序",type:"int(2)",required:"false",validator:"justInt",remark:""},{name:"state",desc:"状态：1/正常、2/禁用、3/下架",type:"int(2)",required:"false",validator:"justInt",remark:""},{name:"deletedBy",desc:"删除人",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"updatedBy",desc:"更新人",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"createdBy",desc:"创建人",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"deletedAt",desc:"",type:"",required:"false",validator:"",remark:""},{name:"updatedAt",desc:"更新时间",type:"bigint(13)",required:"false",validator:"",remark:""},{name:"createdAt",desc:"创建时间",type:"bigint(13)",required:"true",validator:"",remark:""}],data:[{name:"行业分类",title:"列表",api:"trades",type:"list",method:"query"},{name:"行业分类",title:"详情",api:"trade",type:"detail",method:"query"},{name:"行业分类",title:"新增",api:"createTrade",type:"add",method:"mutation"},{name:"行业分类",title:"修改",api:"updateTrade",type:"edit",method:"mutation"},{name:"行业分类",title:"删除",api:"deleteTrades",type:"delete",method:"mutation"}]},{title:"城市数据",name:"chinaAreas",type:0,fields:[{name:"id",desc:"uuid",type:"varchar(36)",required:"true",validator:"",remark:"create方法不是必填"},{name:"value",desc:"区域代码",type:"varchar(12)",required:"true",validator:"",remark:""},{name:"label",desc:"名称",type:"varchar(255)",required:"true",validator:"",remark:""},{name:"pid",desc:"所属上级：1/一级，其他对应该表的id字段",type:"varchar(12)",required:"true",validator:"",remark:""},{name:"address",desc:"详细地址",type:"varchar(255)",required:"false",validator:"",remark:""},{name:"lng",desc:"经度",type:"varchar(50)",required:"false",validator:"",remark:""},{name:"lat",desc:"纬度",type:"varchar(50)",required:"false",validator:"",remark:""},{name:"flow",desc:"",type:"int(2)",required:"false",validator:"int",remark:""},{name:"weight",desc:"权重：用来排序",type:"int(2)",required:"false",validator:"justInt",remark:""},{name:"state",desc:"状态：1/正常、2/禁用、3/下架",type:"int(2)",required:"false",validator:"justInt",remark:""},{name:"deletedBy",desc:"删除人",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"updatedBy",desc:"更新人",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"createdBy",desc:"创建人",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"deletedAt",desc:"",type:"",required:"false",validator:"",remark:""},{name:"updatedAt",desc:"更新时间",type:"bigint(13)",required:"false",validator:"",remark:""},{name:"createdAt",desc:"创建时间",type:"bigint(13)",required:"true",validator:"",remark:""}],data:[{name:"城市数据",title:"列表",api:"chinaAreas",type:"list",method:"query"},{name:"城市数据",title:"详情",api:"chinaArea",type:"detail",method:"query"},{name:"城市数据",title:"新增",api:"createChinaArea",type:"add",method:"mutation"},{name:"城市数据",title:"修改",api:"updateChinaArea",type:"edit",method:"mutation"},{name:"城市数据",title:"删除",api:"deleteChinaAreas",type:"delete",method:"mutation"}]},{title:"语言管理",name:"commonLanguages",type:0,fields:[{name:"id",desc:"uuid",type:"varchar(36)",required:"true",validator:"",remark:"create方法不是必填"},{name:"name",desc:"语言名称",type:"varchar(64)",required:"true",validator:"",remark:""},{name:"country",desc:"国家名称",type:"varchar(64)",required:"true",validator:"",remark:""},{name:"flag",desc:"国旗",type:"varchar(64)",required:"true",validator:"",remark:""},{name:"i18n",desc:"语言代码",type:"varchar(64)",required:"true",validator:"",remark:""},{name:"flow",desc:"",type:"int(2)",required:"false",validator:"int",remark:""},{name:"weight",desc:"权重：用来排序",type:"int(2)",required:"false",validator:"justInt",remark:""},{name:"state",desc:"状态：1/正常、2/禁用、3/下架",type:"int(2)",required:"false",validator:"justInt",remark:""},{name:"deletedBy",desc:"删除人",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"updatedBy",desc:"更新人",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"createdBy",desc:"创建人",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"deletedAt",desc:"",type:"",required:"false",validator:"",remark:""},{name:"updatedAt",desc:"更新时间",type:"bigint(13)",required:"false",validator:"",remark:""},{name:"createdAt",desc:"创建时间",type:"bigint(13)",required:"true",validator:"",remark:""}],data:[{name:"语言管理",title:"列表",api:"commonLanguages",type:"list",method:"query"},{name:"语言管理",title:"详情",api:"commonLanguage",type:"detail",method:"query"},{name:"语言管理",title:"新增",api:"createCommonLanguage",type:"add",method:"mutation"},{name:"语言管理",title:"修改",api:"updateCommonLanguage",type:"edit",method:"mutation"},{name:"语言管理",title:"删除",api:"deleteCommonLanguages",type:"delete",method:"mutation"}]},{title:"菜单管理",name:"commonMenus",type:0,fields:[{name:"id",desc:"uuid",type:"varchar(36)",required:"true",validator:"",remark:"create方法不是必填"},{name:"name",desc:"默认菜单名称",type:"varchar(255)",required:"true",validator:"",remark:""},{name:"link",desc:"路由链接",type:"varchar(255)",required:"false",validator:"",remark:""},{name:"route",desc:"路由名称",type:"varchar(255)",required:"false",validator:"",remark:""},{name:"feature",desc:"数据功能权限",type:"varchar(255)",required:"false",validator:"",remark:""},{name:"icon",desc:"图标",type:"varchar(64)",required:"true",validator:"",remark:""},{name:"pid",desc:"上级id：1为父级，其他对应该表id",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"parent",desc:"父级数组",type:"varchar(255)",required:"false",validator:"",remark:""},{name:"tye",desc:"菜单类型：99/导航、1/目录、2/菜单、3/按钮",type:"int(2)",required:"true",validator:"",remark:""},{name:"has",desc:"有下级：1/否，2/是",type:"int(2)",required:"false",validator:"noOrYes",remark:""},{name:"flow",desc:"",type:"int(2)",required:"false",validator:"int",remark:""},{name:"weight",desc:"权重：用来排序",type:"int(2)",required:"false",validator:"justInt",remark:""},{name:"state",desc:"状态：1/正常、2/禁用、3/下架",type:"int(2)",required:"false",validator:"justInt",remark:""},{name:"deletedBy",desc:"删除人",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"updatedBy",desc:"更新人",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"createdBy",desc:"创建人",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"deletedAt",desc:"",type:"",required:"false",validator:"",remark:""},{name:"updatedAt",desc:"更新时间",type:"bigint(13)",required:"false",validator:"",remark:""},{name:"createdAt",desc:"创建时间",type:"bigint(13)",required:"true",validator:"",remark:""},{name:"languages",desc:"CommonMenuLanguage连表查询",type:"relationship",required:"",validator:"",remark:"commonMenuLanguage"}],data:[{name:"菜单管理",title:"列表",api:"commonMenus",type:"list",method:"query"},{name:"菜单管理",title:"详情",api:"commonMenu",type:"detail",method:"query"},{name:"菜单管理",title:"新增",api:"createCommonMenu",type:"add",method:"mutation"},{name:"菜单管理",title:"修改",api:"updateCommonMenu",type:"edit",method:"mutation"},{name:"菜单管理",title:"删除",api:"deleteCommonMenus",type:"delete",method:"mutation"}]},{title:"菜单多语言管理",name:"commonMenuLanguages",type:0,fields:[{name:"id",desc:"uuid",type:"varchar(36)",required:"true",validator:"",remark:"create方法不是必填"},{name:"name",desc:"菜单名称",type:"varchar(255)",required:"true",validator:"",remark:""},{name:"i18n",desc:"语言代码",type:"varchar(64)",required:"true",validator:"",remark:""},{name:"menuId",desc:"",type:"",required:"false",validator:"",remark:""},{name:"flow",desc:"",type:"int(2)",required:"false",validator:"int",remark:""},{name:"weight",desc:"权重：用来排序",type:"int(2)",required:"false",validator:"justInt",remark:""},{name:"state",desc:"状态：1/正常、2/禁用、3/下架",type:"int(2)",required:"false",validator:"justInt",remark:""},{name:"deletedBy",desc:"删除人",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"updatedBy",desc:"更新人",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"createdBy",desc:"创建人",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"deletedAt",desc:"",type:"",required:"false",validator:"",remark:""},{name:"updatedAt",desc:"更新时间",type:"bigint(13)",required:"false",validator:"",remark:""},{name:"createdAt",desc:"创建时间",type:"bigint(13)",required:"true",validator:"",remark:""},{name:"menu",desc:"CommonMenu连表查询",type:"relationship",required:"",validator:"",remark:"commonMenu"}],data:[{name:"菜单多语言管理",title:"列表",api:"commonMenuLanguages",type:"list",method:"query"},{name:"菜单多语言管理",title:"详情",api:"commonMenuLanguage",type:"detail",method:"query"},{name:"菜单多语言管理",title:"新增",api:"createCommonMenuLanguage",type:"add",method:"mutation"},{name:"菜单多语言管理",title:"修改",api:"updateCommonMenuLanguage",type:"edit",method:"mutation"},{name:"菜单多语言管理",title:"删除",api:"deleteCommonMenuLanguages",type:"delete",method:"mutation"}]},{title:"日志管理",name:"logs",type:0,fields:[{name:"id",desc:"uuid",type:"varchar(36)",required:"true",validator:"",remark:"create方法不是必填"},{name:"message",desc:"错误信息",type:"varchar(255)",required:"false",validator:"",remark:""},{name:"tye",desc:"日志类型",type:"varchar(255)",required:"true",validator:"",remark:""},{name:"route",desc:"路由名称",type:"varchar(255)",required:"false",validator:"",remark:""},{name:"path",desc:"页面path",type:"varchar(255)",required:"false",validator:"",remark:""},{name:"query",desc:"页面query",type:"varchar(1000)",required:"false",validator:"",remark:""},{name:"params",desc:"页面params",type:"varchar(1000)",required:"false",validator:"",remark:""},{name:"mid",desc:"商户id",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"bid",desc:"公司id",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"uid",desc:"操作用户",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"view",desc:"查看：1/否、2/是",type:"int(2)",required:"false",validator:"",remark:""},{name:"mark",desc:"标记：1/否、2/是",type:"int(2)",required:"false",validator:"",remark:""},{name:"remark",desc:"备注",type:"text",required:"false",validator:"",remark:""},{name:"videoId",desc:"",type:"",required:"false",validator:"",remark:""},{name:"flow",desc:"",type:"int(2)",required:"false",validator:"int",remark:""},{name:"weight",desc:"权重：用来排序",type:"int(2)",required:"false",validator:"justInt",remark:""},{name:"state",desc:"状态：1/正常、2/禁用、3/下架",type:"int(2)",required:"false",validator:"justInt",remark:""},{name:"deletedBy",desc:"删除人",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"updatedBy",desc:"更新人",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"createdBy",desc:"创建人",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"deletedAt",desc:"",type:"",required:"false",validator:"",remark:""},{name:"updatedAt",desc:"更新时间",type:"bigint(13)",required:"false",validator:"",remark:""},{name:"createdAt",desc:"创建时间",type:"bigint(13)",required:"true",validator:"",remark:""},{name:"video",desc:"LogVideo连表查询",type:"relationship",required:"",validator:"",remark:"logVideo"}],data:[{name:"日志管理",title:"列表",api:"logs",type:"list",method:"query"},{name:"日志管理",title:"详情",api:"log",type:"detail",method:"query"},{name:"日志管理",title:"新增",api:"createLog",type:"add",method:"mutation"},{name:"日志管理",title:"修改",api:"updateLog",type:"edit",method:"mutation"},{name:"日志管理",title:"删除",api:"deleteLogs",type:"delete",method:"mutation"}]},{title:"日志管理",name:"logVideos",type:0,fields:[{name:"id",desc:"uuid",type:"varchar(36)",required:"true",validator:"",remark:"create方法不是必填"},{name:"logTxt",desc:"日志记录",type:"mediumtext",required:"true",validator:"",remark:""},{name:"logId",desc:"",type:"",required:"false",validator:"",remark:""},{name:"flow",desc:"",type:"int(2)",required:"false",validator:"int",remark:""},{name:"weight",desc:"权重：用来排序",type:"int(2)",required:"false",validator:"justInt",remark:""},{name:"state",desc:"状态：1/正常、2/禁用、3/下架",type:"int(2)",required:"false",validator:"justInt",remark:""},{name:"deletedBy",desc:"删除人",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"updatedBy",desc:"更新人",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"createdBy",desc:"创建人",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"deletedAt",desc:"",type:"",required:"false",validator:"",remark:""},{name:"updatedAt",desc:"更新时间",type:"bigint(13)",required:"false",validator:"",remark:""},{name:"createdAt",desc:"创建时间",type:"bigint(13)",required:"true",validator:"",remark:""},{name:"log",desc:"Log连表查询",type:"relationship",required:"",validator:"",remark:"log"}],data:[{name:"日志管理",title:"列表",api:"logVideos",type:"list",method:"query"},{name:"日志管理",title:"详情",api:"logVideo",type:"detail",method:"query"},{name:"日志管理",title:"新增",api:"createLogVideo",type:"add",method:"mutation"},{name:"日志管理",title:"修改",api:"updateLogVideo",type:"edit",method:"mutation"},{name:"日志管理",title:"删除",api:"deleteLogVideos",type:"delete",method:"mutation"}]},{title:"系统公告",name:"merchantNotices",type:0,fields:[{name:"id",desc:"uuid",type:"varchar(36)",required:"true",validator:"",remark:"create方法不是必填"},{name:"name",desc:"公告名称",type:"varchar(255)",required:"true",validator:"",remark:""},{name:"content",desc:"公告内容",type:"text",required:"false",validator:"",remark:""},{name:"color",desc:"颜色",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"ids",desc:"发送商户类型ids",type:"text",required:"false",validator:"",remark:""},{name:"toType",desc:"发送对象：1/全部商户、2/商户类型、3/自选商户",type:"int(2)",required:"true",validator:"",remark:""},{name:"tye",desc:"公告类型：1/官方通知、2/系统升级",type:"int(2)",required:"true",validator:"",remark:""},{name:"flow",desc:"",type:"int(2)",required:"false",validator:"int",remark:""},{name:"weight",desc:"权重：用来排序",type:"int(2)",required:"false",validator:"justInt",remark:""},{name:"state",desc:"状态：1/正常、2/禁用、3/下架",type:"int(2)",required:"false",validator:"justInt",remark:""},{name:"deletedBy",desc:"删除人",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"updatedBy",desc:"更新人",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"createdBy",desc:"创建人",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"deletedAt",desc:"",type:"",required:"false",validator:"",remark:""},{name:"updatedAt",desc:"更新时间",type:"bigint(13)",required:"false",validator:"",remark:""},{name:"createdAt",desc:"创建时间",type:"bigint(13)",required:"true",validator:"",remark:""},{name:"user",desc:"MerchantNoticeUser连表查询",type:"relationship",required:"",validator:"",remark:"merchantNoticeUser"}],data:[{name:"系统公告",title:"列表",api:"merchantNotices",type:"list",method:"query"},{name:"系统公告",title:"详情",api:"merchantNotice",type:"detail",method:"query"},{name:"系统公告",title:"新增",api:"createMerchantNotice",type:"add",method:"mutation"},{name:"系统公告",title:"修改",api:"updateMerchantNotice",type:"edit",method:"mutation"},{name:"系统公告",title:"删除",api:"deleteMerchantNotices",type:"delete",method:"mutation"}]},{title:"公告接收对象",name:"merchantNoticeUsers",type:0,fields:[{name:"id",desc:"uuid",type:"varchar(36)",required:"true",validator:"",remark:"create方法不是必填"},{name:"mid",desc:"商户id",type:"varchar(36)",required:"true",validator:"",remark:""},{name:"isRead",desc:"已读状态：1/未读、2/已读",type:"int(2)",required:"false",validator:"",remark:""},{name:"noticeId",desc:"",type:"",required:"false",validator:"",remark:""},{name:"flow",desc:"",type:"int(2)",required:"false",validator:"int",remark:""},{name:"weight",desc:"权重：用来排序",type:"int(2)",required:"false",validator:"justInt",remark:""},{name:"state",desc:"状态：1/正常、2/禁用、3/下架",type:"int(2)",required:"false",validator:"justInt",remark:""},{name:"deletedBy",desc:"删除人",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"updatedBy",desc:"更新人",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"createdBy",desc:"创建人",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"deletedAt",desc:"",type:"",required:"false",validator:"",remark:""},{name:"updatedAt",desc:"更新时间",type:"bigint(13)",required:"false",validator:"",remark:""},{name:"createdAt",desc:"创建时间",type:"bigint(13)",required:"true",validator:"",remark:""},{name:"notice",desc:"MerchantNotice连表查询",type:"relationship",required:"",validator:"",remark:"merchantNotice"}],data:[{name:"公告接收对象",title:"列表",api:"merchantNoticeUsers",type:"list",method:"query"},{name:"公告接收对象",title:"详情",api:"merchantNoticeUser",type:"detail",method:"query"},{name:"公告接收对象",title:"新增",api:"createMerchantNoticeUser",type:"add",method:"mutation"},{name:"公告接收对象",title:"修改",api:"updateMerchantNoticeUser",type:"edit",method:"mutation"},{name:"公告接收对象",title:"删除",api:"deleteMerchantNoticeUsers",type:"delete",method:"mutation"}]},{title:"短信验证表",name:"phoneCodes",type:0,fields:[{name:"id",desc:"uuid",type:"varchar(36)",required:"true",validator:"",remark:"create方法不是必填"},{name:"phone",desc:"电话号码",type:"varchar(64)",required:"true",validator:"phone",remark:""},{name:"code",desc:"验证码",type:"int(6)",required:"true",validator:"",remark:""},{name:"tye",desc:"短信类型：1/注册账号、2/修改密码、3/密码找回",type:"int(2)",required:"true",validator:"",remark:""},{name:"createdTime",desc:"创建时间",type:"int(11)",required:"false",validator:"justInt",remark:""},{name:"flow",desc:"",type:"int(2)",required:"false",validator:"int",remark:""},{name:"weight",desc:"权重：用来排序",type:"int(2)",required:"false",validator:"justInt",remark:""},{name:"state",desc:"状态：1/正常、2/禁用、3/下架",type:"int(2)",required:"false",validator:"justInt",remark:""},{name:"deletedBy",desc:"删除人",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"updatedBy",desc:"更新人",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"createdBy",desc:"创建人",type:"varchar(36)",required:"false",validator:"",remark:""},{name:"deletedAt",desc:"",type:"",required:"false",validator:"",remark:""},{name:"updatedAt",desc:"更新时间",type:"bigint(13)",required:"false",validator:"",remark:""},{name:"createdAt",desc:"创建时间",type:"bigint(13)",required:"true",validator:"",remark:""}],data:[{name:"短信验证表",title:"列表",api:"phoneCodes",type:"list",method:"query"},{name:"短信验证表",title:"详情",api:"phoneCode",type:"detail",method:"query"},{name:"短信验证表",title:"新增",api:"createPhoneCode",type:"add",method:"mutation"},{name:"短信验证表",title:"修改",api:"updatePhoneCode",type:"edit",method:"mutation"},{name:"短信验证表",title:"删除",api:"deletePhoneCodes",type:"delete",method:"mutation"}]},{title:"查询菜单分类子分类",name:"loadMenuData",type:1,default:1,fields:[{name:"id",desc:"id",type:"String!",required:"true",validator:"",remark:""}],data:[{name:"查询菜单分类子分类",title:"详情",api:"loadMenuData",type:"detail",method:"query"}]},{title:"获取手机短信验证码",name:"getPhoneCode",type:1,default:1,fields:[{name:"phone",desc:"phone",type:"String!",required:"true",validator:"",remark:""},{name:"codeType",desc:"codeType",type:"Int!",required:"true",validator:"",remark:""}],data:[{name:"获取手机短信验证码",title:"详情",api:"getPhoneCode",type:"detail",method:"query"}]},{title:"测试数据库连接",name:"testDataConnect",type:1,default:0,fields:[{name:"url",desc:"url",type:"String!",required:"true",validator:"",remark:""}],data:[{name:"测试数据库连接",title:"详情",api:"testDataConnect",type:"detail",method:"query"}]},{title:"检查公共用户是否存在",name:"checkCommonUser",type:1,default:1,fields:[{name:"phone",desc:"phone",type:"String!",required:"true",validator:"",remark:""}],data:[{name:"检查公共用户是否存在",title:"详情",api:"checkCommonUser",type:"detail",method:"query"}]},{title:"修改用户密码",name:"editUserPass",type:1,default:1,fields:[{name:"uid",desc:"uid",type:"String!",required:"true",validator:"",remark:""},{name:"password",desc:"password",type:"String!",required:"true",validator:"",remark:""},{name:"code",desc:"code",type:"Int!",required:"true",validator:"",remark:""},{name:"tye",desc:"tye",type:"Int!",required:"true",validator:"",remark:""}],data:[{name:"修改用户密码",title:"详情",api:"editUserPass",type:"detail",method:"query"}]},{title:"用户登录",name:"login",type:1,default:1,fields:[{name:"phone",desc:"phone",type:"String!",required:"true",validator:"",remark:""},{name:"password",desc:"password",type:"String!",required:"true",validator:"",remark:""},{name:"bid",desc:"bid",type:"String",required:"false",validator:"",remark:""}],data:[{name:"用户登录",title:"详情",api:"login",type:"detail",method:"mutation"}]}]}}]);