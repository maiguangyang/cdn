(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0df0a3"],{"87e3":function(e,t,a){"use strict";a.r(t);a("2c78"),a("5c4c"),a("6a61");var r=a("2e91"),n=a("8bbf"),i=a.n(n),o=a("b8f9");t["default"]=function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var a,r,n,s,c,u,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.app,r=t.redirect,n=t.route,e.next=3,a.$Local.get("Authorization");case 3:return s=e.sent,e.next=6,a.$Local.get("USER_INFO");case 6:if(c=e.sent,!o["a"].isEmpty(n.name)){e.next=9;break}return e.abrupt("return",r({path:"/home"}));case 9:if(o["a"].isEmpty(o["a"].get(s,"data"))||o["a"].isEmpty(o["a"].get(c,"data"))||"/welcome/login"!==n.path){e.next=11;break}return e.abrupt("return",r({path:"/home"}));case 11:if(a.$store.dispatch("userinfo/userInfo",{userInfo:c.data}),i.a.prototype.$UserInfo=c.data,u=n.matched.filter((function(e){return e.name===n.name})),o["a"].isEmpty(u)){e.next=24;break}if(!0!==o["a"].get(u[0].parent,"meta.authorization")){e.next=24;break}if(p={},p={name:n.name},o["a"].isEmpty(n.params)||(p.params=n.params),o["a"].isEmpty(n.query)||(p.query=n.query),!(o["a"].isEmpty(o["a"].get(c,"data"))||o["a"].isEmpty(o["a"].get(s,"data"))&&"/welcome/login"!==n.path&&!1===a.$is_wechat)){e.next=24;break}return a.$Local.clear(["lang"]),a.$Session.clear(),e.abrupt("return",r({path:"/welcome/login?dt=".concat(encodeURIComponent(JSON.stringify(p)))}));case 24:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);