(this.webpackJsonpstore=this.webpackJsonpstore||[]).push([[0],{22:function(e,t,c){"use strict";c.r(t);c(0);var n=c(4),r=c.n(n),o=c(3),s=c(1);var a=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.cash.cash})),c=Object(o.c)((function(e){return e.customers.customers}));return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("div",{children:t}),Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{onClick:function(){return function(t){e({type:"ADD_CASH",payload:t})}(Number(prompt()))},children:"+"}),Object(s.jsx)("button",{onClick:function(){return function(t){e({type:"GET_CASH",payload:t})}(Number(prompt()))},children:"-"}),Object(s.jsx)("button",{onClick:function(){return function(t){var c={name:t,id:Date.now()};e({type:"ADD_CUSTOMER",payload:c})}(prompt())},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043b\u0438\u0435\u043d\u0442\u0430"})]}),c.length>0?Object(s.jsx)("div",{children:c.map((function(t){return Object(s.jsxs)("div",{children:[t.name,Object(s.jsx)("span",{onClick:function(){return function(t){e({type:"REMOVE_CUSTOMER",payload:t.id})}(t)},children:"delete"})]})}))}):Object(s.jsx)("div",{children:"\u041d\u0415\u0422\u0423!"})]})},i=c(5),u=c(2),d={cash:5},j="ADD_CASH",b="GET_CASH",l=c(10),O={customers:[]},h="ADD_CUSTOMER",p="REMOVE_CUSTOMER",m=c(9),f=Object(i.combineReducers)({cash:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(u.a)(Object(u.a)({},e),{},{cash:e.cash+t.payload});case b:return Object(u.a)(Object(u.a)({},e),{},{cash:e.cash-t.payload});default:return e}},customers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(u.a)(Object(u.a)({},e),{},{customers:[].concat(Object(l.a)(e.customers),[t.payload])});case p:return Object(u.a)(Object(u.a)({},e),{},{customers:e.customers.filter((function(e){return e.id!==t.payload}))});default:return e}}}),v=Object(i.createStore)(f,Object(m.composeWithDevTools)());r.a.render(Object(s.jsx)(o.a,{store:v,children:Object(s.jsx)(a,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.3a8df360.chunk.js.map