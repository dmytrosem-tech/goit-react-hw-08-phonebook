(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{12:function(t,e,n){"use strict";n.d(e,"a",(function(){return h})),n.d(e,"c",(function(){return O})),n.d(e,"b",(function(){return x}));var c,r=n(3),a=n.n(r),u=n(7),s=n(8),o=n.n(s),i=n(5),l=function(t){o.a.defaults.headers.common.Authorization="Bearer ".concat(t)},b=function(){o.a.defaults.headers.common.Authorization=""},d=Object(i.c)("auth/register",function(){var t=Object(u.a)(a.a.mark((function t(e){var n,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e),t.prev=1,t.next=4,o.a.post("users/signup",e);case 4:return n=t.sent,c=n.data,l(c.token),t.abrupt("return",c);case 10:t.prev=10,t.t0=t.catch(1),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}()),j=Object(i.c)("auth/login",function(){var t=Object(u.a)(a.a.mark((function t(e){var n,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.post("users/login",e);case 3:return n=t.sent,c=n.data,l(c.token),t.abrupt("return",c);case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()),f=Object(i.c)("auth/logout",Object(u.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.post("/users/logout");case 3:b(),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))),p=Object(i.c)("auth/refresh",function(){var t=Object(u.a)(a.a.mark((function t(e,n){var c,r,u,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=n.getState(),null!==(r=c.auth.token)){t.next=4;break}return t.abrupt("return",n.rejectWithValue());case 4:return l(r),t.prev=5,t.next=8,o.a.get("/users/current");case 8:return u=t.sent,s=u.data,t.abrupt("return",s);case 13:t.prev=13,t.t0=t.catch(5),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(e,n){return t.apply(this,arguments)}}()),h={register:d,logIn:j,logOut:f,fetchCurrentUser:p},O={getIsLoggedIn:function(t){return t.auth.isLoggedIn},getUserName:function(t){return t.auth.user.name}},g=n(4),x=Object(i.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1},extraReducers:(c={},Object(g.a)(c,h.register.fulfilled,(function(t,e){t.user=e.payload.user,t.token=e.payload.token,t.isLoggedIn=!0})),Object(g.a)(c,h.logIn.fulfilled,(function(t,e){t.user=e.payload.user,t.token=e.payload.token,t.isLoggedIn=!0})),Object(g.a)(c,h.logOut.fulfilled,(function(t,e){t.user={name:null,email:null},t.token=null,t.isLoggedIn=!1})),Object(g.a)(c,h.fetchCurrentUser.fulfilled,(function(t,e){t.user=e.payload,t.isLoggedIn=!0})),c)}).reducer},20:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var c=n(5),r=Object(c.b)("contacts/ChangeFilter")},25:function(t,e,n){"use strict";n.d(e,"a",(function(){return v})),n.d(e,"c",(function(){return m})),n.d(e,"b",(function(){return A}));var c=n(3),r=n.n(c),a=n(7),u=n(5),s=n(8),o=n.n(s);function i(){return l.apply(this,arguments)}function l(){return(l=Object(a.a)(r.a.mark((function t(){var e,n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("/contacts");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(t){return d.apply(this,arguments)}function d(){return(d=Object(a.a)(r.a.mark((function t(e){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.post("/contacts",e);case 2:return n=t.sent,c=n.data,t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function j(t){return f.apply(this,arguments)}function f(){return(f=Object(a.a)(r.a.mark((function t(e){var n,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.delete("/contacts/".concat(e));case 2:return n=t.sent,c=n.data,t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}o.a.defaults.baseURL="https://connections-api.herokuapp.com";var p,h,O=Object(u.c)("contacts/fetchContactsGlobal",Object(a.a)(r.a.mark((function t(){var e;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i();case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))),g=Object(u.c)("contacts/\u0441ontactsGlobal",function(){var t=Object(a.a)(r.a.mark((function t(e){var n;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),x=Object(u.c)("contacts/deleteContactGlobal",function(){var t=Object(a.a)(r.a.mark((function t(e){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j(e);case 2:return t.abrupt("return",e);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),v={deleteContact:x,fetchContact:O,addContact:g},m={getContacts:function(t){return t.contacts.contactsList},getFilter:function(t){return t.contacts.contactsFilter},getLoading:function(t){return t.contacts.loading}},y=n(20),w=n(4),k=n(22),C=n(6),N=Object(u.d)([],(p={},Object(w.a)(p,v.fetchContact.fulfilled,(function(t,e){return e.payload})),Object(w.a)(p,v.addContact.fulfilled,(function(t,e){var n=e.payload;return[].concat(Object(k.a)(t),[n])})),Object(w.a)(p,v.deleteContact.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),p)),I=Object(u.d)(!1,(h={},Object(w.a)(h,v.fetchContact.pending,(function(){return!0})),Object(w.a)(h,v.fetchContact.fulfilled,(function(){return!1})),Object(w.a)(h,v.fetchContact.rejected,(function(){return!1})),Object(w.a)(h,v.addContact.pending,(function(){return!0})),Object(w.a)(h,v.addContact.fulfilled,(function(){return!1})),Object(w.a)(h,v.addContact.rejected,(function(){return!1})),Object(w.a)(h,v.deleteContact.pending,(function(){return!0})),Object(w.a)(h,v.deleteContact.fulfilled,(function(){return!1})),Object(w.a)(h,v.deleteContact.rejected,(function(){return!1})),h)),z=Object(u.d)("",Object(w.a)({},y.a,(function(t,e){return e.payload}))),A=Object(C.b)({contactsFilter:z,loading:I,contactsList:N})},69:function(t,e,n){},70:function(t,e,n){},72:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(21),u=n.n(a),s=n(11),o=n(2),i=n(13),l=n(1),b=function(){return Object(l.jsxs)("ul",{className:"nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0",children:[Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/",exact:"true",className:"nav-link px-2 ",children:"Main"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/contacts",exact:"true",className:"nav-link px-2 ",children:"Contacts"})})]})},d=n(12),j=n.p+"static/media/Gubka_BobAvatar.d4072b68.jpg";function f(){var t=Object(s.b)(),e=Object(s.c)(d.c.getUserName);return Object(l.jsxs)("div",{className:"d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start",children:[Object(l.jsx)("img",{src:j,className:"p-3",width:"90",alt:"bob"}),Object(l.jsxs)("span",{className:"p-3",style:{fontSize:15},children:["Welcome, ",e,"!"]}),Object(l.jsx)("button",{className:"btn btn-warning p-1",style:{width:90,height:35},type:"button",onClick:function(){return t(d.a.logOut())},children:"Sign out"})]})}function p(){return Object(l.jsxs)("div",{className:"text-end",children:[Object(l.jsx)(i.b,{to:"/login",exact:"true",className:"btn btn-outline-light me-2",style:{fontSize:10},activestyle:"nav__linkActv",children:"Sign in"}),Object(l.jsx)(i.b,{to:"/register",exact:"true",className:"btn btn-primary",style:{fontSize:10},activestyle:"nav__linkActv",children:"Sign up"})]})}function h(){var t=Object(s.c)(d.c.getIsLoggedIn);return Object(l.jsx)("header",{className:"header p-2 bg-dark text-white",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start",children:[Object(l.jsx)("a",{href:"https://rozmalovkin.com.ua/wp-content/uploads/jnkbgyvr1687_14963.jpg",className:"d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none",children:Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",className:"bi bi-bug",viewBox:"0 0 16 16",children:Object(l.jsx)("path",{d:"M4.355.522a.5.5 0 0 1 .623.333l.291.956A4.979 4.979 0 0 1 8 1c1.007 0 1.946.298 2.731.811l.29-.956a.5.5 0 1 1 .957.29l-.41 1.352A4.985 4.985 0 0 1 13 6h.5a.5.5 0 0 0 .5-.5V5a.5.5 0 0 1 1 0v.5A1.5 1.5 0 0 1 13.5 7H13v1h1.5a.5.5 0 0 1 0 1H13v1h.5a1.5 1.5 0 0 1 1.5 1.5v.5a.5.5 0 1 1-1 0v-.5a.5.5 0 0 0-.5-.5H13a5 5 0 0 1-10 0h-.5a.5.5 0 0 0-.5.5v.5a.5.5 0 1 1-1 0v-.5A1.5 1.5 0 0 1 2.5 10H3V9H1.5a.5.5 0 0 1 0-1H3V7h-.5A1.5 1.5 0 0 1 1 5.5V5a.5.5 0 0 1 1 0v.5a.5.5 0 0 0 .5.5H3c0-1.364.547-2.601 1.432-3.503l-.41-1.352a.5.5 0 0 1 .333-.623zM4 7v4a4 4 0 0 0 3.5 3.97V7H4zm4.5 0v7.97A4 4 0 0 0 12 11V7H8.5zM12 6a3.989 3.989 0 0 0-1.334-2.982A3.983 3.983 0 0 0 8 2a3.983 3.983 0 0 0-2.667 1.018A3.989 3.989 0 0 0 4 6h8z"})})}),Object(l.jsx)(b,{}),t?Object(l.jsx)(f,{}):Object(l.jsx)(p,{})]})})})}function O(t){var e=t.children,n=t.redirectTo;return Object(s.c)(d.c.getIsLoggedIn)?e:Object(l.jsx)(o.a,{to:n})}function g(t){var e=t.children,n=t.restricted,c=void 0!==n&&n,r=t.redirectTo;return Object(s.c)(d.c.getIsLoggedIn)&&c?Object(l.jsx)(o.a,{to:r}):e}var x=Object(c.lazy)((function(){return n.e(3).then(n.bind(null,80))})),v=Object(c.lazy)((function(){return n.e(4).then(n.bind(null,77))})),m=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,78))})),y=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,79))}));function w(){var t=Object(s.b)();return Object(c.useEffect)((function(){t(d.a.fetchCurrentUser())}),[t]),Object(l.jsxs)("div",{className:"contain",children:[Object(l.jsx)(h,{}),Object(l.jsx)(c.Suspense,{fallback:"Wreally?)))",children:Object(l.jsxs)(o.d,{children:[Object(l.jsx)(o.b,{exact:"true",path:"/",element:Object(l.jsx)(g,{redirectTo:"/",children:Object(l.jsx)(v,{})})}),Object(l.jsx)(o.b,{exact:"true",path:"/register",restricted:!0,element:Object(l.jsx)(g,{restricted:!0,redirectTo:"/contacts",children:Object(l.jsx)(m,{})})}),Object(l.jsx)(o.b,{exact:"true",path:"/login",element:Object(l.jsx)(g,{restricted:!0,redirectTo:"/contacts",children:Object(l.jsx)(y,{})})}),Object(l.jsx)(o.b,{path:"/contacts",element:Object(l.jsx)(O,{redirectTo:"/login",children:Object(l.jsx)(x,{})})})]})})]})}var k=n(22),C=n(5),N=n(14),I=n(35),z=n.n(I),A=n(25),L=Object(k.a)(Object(C.f)({serializableCheck:{ignoredActions:[N.a,N.f,N.b,N.c,N.d,N.e]}})),S={key:"auth",storage:z.a,whitelist:["token"]},H=Object(C.a)({reducer:{auth:Object(N.g)(S,d.b),contacts:A.b,middleware:L,devTools:!1}}),T=Object(N.h)(H),V=n(36);n(69),n(70),n(71);u.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(s.a,{store:H,children:Object(l.jsx)(V.a,{persistor:T,loading:null,children:Object(l.jsx)(i.a,{children:Object(l.jsx)(w,{})})})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.b69f4cbe.chunk.js.map