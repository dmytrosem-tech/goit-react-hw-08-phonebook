(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={contacts__item:"ContactItem_contacts__item__3nuPO",contact__name:"ContactItem_contact__name__2qE5Z",contact__number:"ContactItem_contact__number__3Tmzp",contacts__btn:"ContactItem_contacts__btn__2w4OL"}},15:function(t,e,n){t.exports={box:"Filter_box__2QTBD",input:"Filter_input__3pAq9"}},17:function(t,e,n){t.exports={contacts__list:"ContactList_contacts__list__2ONmd"}},37:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(12),o=n.n(r),s=n(3),i=n(4),b=n(5),l=Object(b.b)("contacts/Add"),u=Object(b.b)("contacts/Delete"),_=Object(b.b)("contacts/ChangeFilter"),m=n(41),j=n(7),d=n.n(j),O=n(1);function f(t){t.onSubmit2;var e=Object(m.a)(),n=Object(m.a)(),a=Object(c.useState)(""),r=Object(s.a)(a,2),o=r[0],b=r[1],u=Object(c.useState)(""),_=Object(s.a)(u,2),j=_[0],f=_[1],h=Object(c.useState)(!1),p=Object(s.a)(h,1)[0],x=Object(i.b)(),v=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":b(c);break;case"number":f(c);break;default:console.warn("Field - ".concat(n," is under constraction"))}},C=function(){b(""),f("")};return Object(O.jsxs)("form",{className:d.a.form,onSubmit:function(t){t.preventDefault();var e={name:o,number:j,id:Object(m.a)()};x(l(e)),C()},children:[Object(O.jsx)("label",{className:d.a.form__label,htmlFor:e,children:"Contacts name:"}),Object(O.jsx)("input",{className:d.a.form__input,type:"text",id:e,name:"name",value:o,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:v,placeholder:"Will Smith"}),Object(O.jsx)("label",{className:d.a.form__label,htmlFor:n,children:"Contacts number:"}),Object(O.jsx)("input",{className:d.a.form__input,type:"tel",id:n,name:"number",value:j,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:v,placeholder:"(097) 222-33-222"}),Object(O.jsx)("button",{className:d.a.form__btn,type:"submit",disabled:p,children:"Add contact"})]})}var h=n(15),p=n.n(h);function x(){var t=Object(i.b)(),e=Object(c.useState)(""),n=Object(s.a)(e,2),a=n[0],r=n[1],o=p.a.box,b=p.a.input;return Object(O.jsxs)("div",{className:o,children:["Find contacts by name:",Object(O.jsx)("input",{className:b,type:"text",name:"filter",value:a,onChange:function(e){r(e.target.value),t(_(e.target.value))}})]})}var v=n(11),C=n.n(v);function g(t){var e=t.name,n=t.number,c=t.id,a=Object(i.b)(),r=C.a.contacts__item,o=C.a.contact__name,s=C.a.contact__number,b=C.a.contacts__btn;return Object(O.jsxs)("li",{id:c,className:r,children:[Object(O.jsx)("p",{className:o,children:e}),Object(O.jsxs)("p",{className:s,children:["tel: ",n]}),Object(O.jsx)("button",{onClick:function(){return a(u(c))},className:b,children:"Delete contact"})]})}var N=n(17),y=n.n(N),k=function(t){return t.contacts},F=function(t){return t.filter};function w(){var t=Object(i.c)(k),e=Object(i.c)(F);return Object(O.jsx)("ul",{className:y.a.contacts__list,children:function(){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}().map((function(t){var e=t.name,n=t.number,c=t.id;return Object(O.jsx)(g,{name:e,number:n,id:c},c)}))})}function S(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Phonebook"}),Object(O.jsx)(f,{}),Object(O.jsx)("h2",{children:"Contacts"}),Object(O.jsx)(x,{}),Object(O.jsx)(w,{})]})}var A,z=n(21),q=n(2),D=n(9),I=n(22),B=Object(b.c)([],(A={},Object(D.a)(A,l,(function(t,e){var n=e.payload;return console.log(n),t.some((function(t){return t.name===n.name}))?(alert("Sorry, contact is already in contacts list"),t):[].concat(Object(I.a)(t),[n])})),Object(D.a)(A,u,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),A)),J=Object(b.c)("",Object(D.a)({},_,(function(t,e){return e.payload}))),L=n(18),Z=n.n(L),P=n(6),T=n(19),E={key:"products",version:1,storage:n.n(T).a,blacklist:["filter"]},M=Object(q.b)({contacts:B,filter:J}),Q=Object(P.g)(E,M),R=Object(b.a)({reducer:Q,devTools:!1,middleware:function(t){return t({serializableCheck:{ignoredActions:[P.a,P.f,P.b,P.c,P.d,P.e]}}).concat(Z.a)}}),V=Object(P.h)(R),W=n(20);n(37),n(38);o.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(i.a,{store:R,children:Object(O.jsx)(W.a,{persistor:V,loading:null,children:Object(O.jsx)(z.a,{children:Object(O.jsx)(S,{})})})})}),document.getElementById("root"))},7:function(t,e,n){t.exports={form:"ContactForm_form__2q78-",form__label:"ContactForm_form__label__3JDRl",form__input:"ContactForm_form__input__3PYfl",form__btn:"ContactForm_form__btn__3VSbB"}}},[[39,1,2]]]);
//# sourceMappingURL=main.012162a3.chunk.js.map