(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{15:function(t,e,n){},26:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(17),o=n.n(a),r=n(8),i=(n(15),n(35)),d=(n(16),Object(c.createContext)()),j=n(18),s="ADD_TODO",u="REMOVE_TODO",l="RENAME_TODO",b=function(t,e){switch(e.type){case s:return[].concat(Object(j.a)(t),[e.payload]);case u:return t.filter((function(t){return t.id!==e.payload}));case l:return t.filter((function(t){return t.id===e.payload.id?(t.todoString=e.payload.todoString,t):t}));default:return t}},O=n(28),h=n(29),p=n(30),x=n(31),f=n(37),g=n(32),y=n(36),m=n(3),v=function(){var t=Object(c.useState)(""),e=Object(r.a)(t,2),n=e[0],a=e[1],o=Object(c.useContext)(d).dispatch;return Object(m.jsx)(O.a,{onSubmit:function(t){if(t.preventDefault(),""===n)return alert("please enter a todo");var e={todoString:n,id:Object(y.a)()};o({type:s,payload:e}),a("")},children:Object(m.jsxs)(h.a,{children:[Object(m.jsx)(p.a,{children:Object(m.jsx)(x.a,{type:"text",name:"todo",id:"todo",placeholder:"your next todo",value:n,onChange:function(t){return a(t.target.value)}})}),Object(m.jsx)(f.a,{addonType:"prepend",children:Object(m.jsx)(g.a,{color:"warning",children:"Add"})})]})})},S=n(13),C=n(33),D=n(34),k=function(){var t=Object(c.useContext)(d),e=t.todos,n=t.dispatch,a=Object(c.useState)(0),o=Object(r.a)(a,2),i=o[0],j=o[1],s=Object(c.useState)(""),b=Object(r.a)(s,2),h=b[0],p=b[1];return Object(m.jsxs)("div",{children:[1===i&&Object(m.jsxs)(O.a,{onSubmit:function(){n({type:l,payload:{id:h.id,todoString:h.todoString}}),j(0),p("")},children:[Object(m.jsx)(x.a,{type:"text",name:"todo",id:"todo",placeholder:"your next todo",value:h.todoString,onChange:function(t){return p(Object(S.a)(Object(S.a)({},h),{},{todoString:t.target.value}))}}),Object(m.jsx)(g.a,{color:"warning",children:"Rename"})]}),Object(m.jsx)(C.a,{className:"mt-5 mb-2 items",children:e.map((function(t){return Object(m.jsxs)(D.a,{children:[t.todoString,Object(m.jsx)("span",{className:"float-right ",children:Object(m.jsx)("button",{onClick:function(){j(1),p(t)},children:"Rename"})}),Object(m.jsx)("span",{className:"float-right mr-3",children:Object(m.jsx)("button",{onClick:function(){n({type:u,payload:t.id})},children:"check"})})]},t.id)}))})]})};function w(){var t=Object(c.useReducer)(b,[]),e=Object(r.a)(t,2),n=e[0],a=e[1];return Object(m.jsx)(d.Provider,{value:{todos:n,dispatch:a},children:Object(m.jsxs)(i.a,{fluid:!0,children:[Object(m.jsx)("h1",{children:"Todo App With Context API"}),Object(m.jsx)(k,{}),Object(m.jsx)(v,{})]})})}var A=document.getElementById("root");o.a.render(Object(m.jsx)(c.StrictMode,{children:Object(m.jsx)(w,{})}),A)}},[[26,1,2]]]);
//# sourceMappingURL=main.82a5bf64.chunk.js.map