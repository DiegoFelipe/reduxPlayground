(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[3],{43:function(e,t,n){"use strict";var c=n(44),s=n.n(c),o=n(0);t.a=function(){return Object(o.jsx)("div",{className:s.a.spinner})}},44:function(e,t,n){e.exports={spinner:"LoadingSpinner_spinner__2Kyqv"}},47:function(e,t,n){e.exports={quote:"HighlightedQuote_quote__nE9T6"}},48:function(e,t,n){e.exports={comments:"Comments_comments__iZX-v"}},49:function(e,t,n){e.exports={form:"NewCommentForm_form__2Te8b",loading:"NewCommentForm_loading__2veC2",control:"NewCommentForm_control__3NVeP",actions:"NewCommentForm_actions__2fwWP"}},51:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(2),o=n(8),r=n(47),a=n.n(r),i=n(0),m=function(e){return Object(i.jsxs)("figure",{className:a.a.quote,children:[Object(i.jsx)("p",{children:e.text}),Object(i.jsx)("figcaption",{children:e.author})]})},j=n(20),l=n(48),u=n.n(l),d=n(49),b=n.n(d),x=function(e){var t=Object(c.useRef)(),n=function(e){e.preventDefault()};return Object(i.jsxs)("form",{className:b.a.form,onSubmit:n,children:[Object(i.jsxs)("div",{className:b.a.control,onSubmit:n,children:[Object(i.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(i.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(i.jsx)("div",{className:b.a.actions,children:Object(i.jsx)("button",{className:"btn",children:"Add Comment"})})]})},h=function(){var e=Object(c.useState)(!1),t=Object(j.a)(e,2),n=t[0],s=t[1];return Object(i.jsxs)("section",{className:u.a.comments,children:[Object(i.jsx)("h2",{children:"User Comments"}),!n&&Object(i.jsx)("button",{className:"btn",onClick:function(){s(!0)},children:"Add a Comment"}),n&&Object(i.jsx)(x,{}),Object(i.jsx)("p",{children:"Comments..."})]})},O=n(18),f=n(19),p=n(43);t.default=function(){var e=Object(s.k)(),t=Object(s.j)().quoteId,n=Object(O.a)(f.c,!0),r=n.sendRequest,a=n.status,j=n.data,l=n.error;return Object(c.useEffect)((function(){r(t)}),[r,t]),"pending"===a?Object(i.jsx)("div",{className:"centered",children:Object(i.jsx)(p.a,{})}):l?Object(i.jsx)("p",{className:"centered",children:l}):j.text?Object(i.jsxs)(c.Fragment,{children:[Object(i.jsx)(m,{text:j.text,author:j.author}),Object(i.jsx)(s.c,{path:e.path,exact:!0,children:Object(i.jsx)("div",{className:"centered",children:Object(i.jsx)(o.b,{className:"btn--flat",to:"".concat(e.url,"/comments"),children:"Load Comments"})})}),Object(i.jsx)(s.c,{path:"".concat(e.path,"/comments"),children:Object(i.jsx)(h,{})})]}):Object(i.jsx)("p",{children:"No quote found!"})}}}]);
//# sourceMappingURL=3.1d1f9782.chunk.js.map