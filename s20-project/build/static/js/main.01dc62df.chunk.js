(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{12:function(e,t,n){e.exports={header:"MainNavigation_header__pcWBd",logo:"MainNavigation_logo__3mTft",nav:"MainNavigation_nav__2KJfX",active:"MainNavigation_active__oN3Ka"}},17:function(e,t,n){e.exports={list:"QuoteList_list__3pzcl",sorting:"QuoteList_sorting__rL6H1"}},18:function(e,t,n){"use strict";var c=n(11),r=n(5),a=n(9),s=n(20),o=n(1);function i(e,t){return"SEND"===t.type?{data:null,error:null,status:"pending"}:"SUCCESS"===t.type?{data:t.responseData,error:null,status:"completed"}:"ERROR"===t.type?{data:null,error:t.errorMessage,status:"completed"}:e}t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Object(o.useReducer)(i,{status:t?"pending":null,data:null,error:null}),u=Object(s.a)(n,2),j=u[0],l=u[1],d=Object(o.useCallback)(function(){var t=Object(a.a)(Object(r.a)().mark((function t(n){var c;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l({type:"SEND"}),t.prev=1,t.next=4,e(n);case 4:c=t.sent,l({type:"SUCCESS",responseData:c}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),l({type:"ERROR",errorMessage:t.t0.message||"Something went wrong!"});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),[e]);return Object(c.a)({sendRequest:d},j)}},19:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return l}));var c=n(5),r=n(11),a=n(9),s="https://react-course-cfb94-default-rtdb.firebaseio.com/";function o(){return i.apply(this,arguments)}function i(){return(i=Object(a.a)(Object(c.a)().mark((function e(){var t,n,a,o,i;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/quotes.json"));case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,t.ok){e.next=8;break}throw new Error(n.message||"Could not fetch quotes.");case 8:for(o in a=[],n)i=Object(r.a)({id:o},n[o]),a.push(i);return e.abrupt("return",a);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e){return j.apply(this,arguments)}function j(){return(j=Object(a.a)(Object(c.a)().mark((function e(t){var n,a,o;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/quotes/").concat(t,".json"));case 2:return n=e.sent,e.next=5,n.json();case 5:if(a=e.sent,n.ok){e.next=8;break}throw new Error(a.message||"Could not fetch quote.");case 8:return o=Object(r.a)({id:t},a),e.abrupt("return",o);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=Object(a.a)(Object(c.a)().mark((function e(t){var n,r;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(s,"/quotes.json"),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,n.ok){e.next=8;break}throw new Error(r.message||"Could not create quote.");case 8:return e.abrupt("return",null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},23:function(e,t,n){e.exports={item:"QuoteItem_item__2dOvb"}},26:function(e,t,n){e.exports={noquotes:"NoQuotesFound_noquotes__3DIYb"}},27:function(e,t,n){e.exports={main:"Layout_main__auk_r"}},36:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(22),r=n.n(c),a=n(8),s=(n(36),n(1)),o=n.n(s),i=n(2),u=n(23),j=n.n(u),l=n(0),d=function(e){return Object(l.jsxs)("li",{className:j.a.item,children:[Object(l.jsxs)("figure",{children:[Object(l.jsx)("blockquote",{children:Object(l.jsx)("p",{children:e.text})}),Object(l.jsx)("figcaption",{children:e.author})]}),Object(l.jsx)(a.b,{className:"btn",to:"/quotes/".concat(e.id),children:"View Fullscreen"})]})},b=n(17),h=n.n(b),p=function(e){var t,n,c=Object(i.h)(),r=Object(i.i)(),a=(Object(i.k)(),"asc"===new URLSearchParams(r.search).get("sort")),o=(t=e.quotes,n=a,t.sort((function(e,t){return n?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(l.jsxs)(s.Fragment,{children:[Object(l.jsx)("div",{className:h.a.sorting,children:Object(l.jsxs)("button",{onClick:function(){c.push({pathName:r.pathname,search:"?sort=".concat(a?"desc":"asc")})},children:["Sort ",a?"Descending":"Ascending"]})}),Object(l.jsx)("ul",{className:h.a.list,children:o.map((function(e){return Object(l.jsx)(d,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},O=n(18),x=n(19),f=n(26),m=n.n(f),g=function(){return Object(l.jsxs)("div",{className:m.a.noquotes,children:[Object(l.jsx)("p",{children:"No quotes found!"}),Object(l.jsx)("a",{className:"btn",children:"Add a Quote"})]})},v=function(){var e=Object(O.a)(x.b,!0),t=e.sendRequest,n=e.status,c=e.data,r=e.error;return Object(s.useEffect)((function(){t()}),[t]),"pending"===n?Object(l.jsx)("p",{children:"Loading"}):r?Object(l.jsx)("p",{children:"Something went wrong"}):"completed"!==n||c&&0!==c.length?Object(l.jsx)(p,{quotes:c}):Object(l.jsx)(g,{})},_=n(27),w=n.n(_),q=n(12),N=n.n(q),y=function(){return Object(l.jsxs)("header",{className:N.a.header,children:[Object(l.jsx)("div",{className:N.a.logo,children:"Great Quotes"}),Object(l.jsx)("nav",{className:N.a.nav,children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(a.c,{to:"/quotes",activeClassName:N.a.active,children:"All Quotes"})}),Object(l.jsx)("li",{children:Object(l.jsx)(a.c,{to:"/new-quote",activeClassName:N.a.active,children:"Add a Quote"})})]})})]})},k=function(e){return Object(l.jsxs)(s.Fragment,{children:[Object(l.jsx)(y,{}),Object(l.jsx)("main",{className:w.a.main,children:e.children})]})},S=o.a.lazy((function(){return n.e(4).then(n.bind(null,52))})),C=o.a.lazy((function(){return n.e(3).then(n.bind(null,51))})),E=o.a.lazy((function(){return n.e(5).then(n.bind(null,50))}));var R=function(){return Object(l.jsx)(k,{children:Object(l.jsx)(s.Suspense,{fallback:Object(l.jsx)("p",{children:"Loading"}),children:Object(l.jsxs)(i.e,{children:[Object(l.jsx)(i.c,{path:"/",exact:!0,children:Object(l.jsx)(i.b,{to:"/quotes"})}),Object(l.jsx)(i.c,{path:"/quotes",exact:!0,children:Object(l.jsx)(v,{})}),Object(l.jsx)(i.c,{path:"/quotes/:quoteId",children:Object(l.jsx)(C,{})}),Object(l.jsx)(i.c,{path:"/new-quote",children:Object(l.jsx)(S,{})}),Object(l.jsx)(i.c,{path:"*",children:Object(l.jsx)(E,{})})]})})})};r.a.createRoot(document.getElementById("root")).render(Object(l.jsx)(a.a,{children:Object(l.jsx)(R,{})}))}},[[42,1,2]]]);
//# sourceMappingURL=main.01dc62df.chunk.js.map