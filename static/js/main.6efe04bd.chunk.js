(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(7),s=c.n(a),i=(c(12),c(6)),j=c(3),o=c(0);function b(e){var t=e.handleClick,c=e.gameBoard.map((function(){var e=Math.round(99*Math.random());return Object(o.jsx)("li",{id:e,className:"card",onClick:t,children:e})}));return Object(o.jsxs)("div",{children:[Object(o.jsx)("br",{}),Object(o.jsx)("div",{children:"Gain points by clicking on a number, but don't click on any more than once!"}),Object(o.jsx)("ul",{className:"cards",children:c})]})}function d(e){var t=e.score,c=e.bestScore;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{children:["Score: ",t]}),Object(o.jsxs)("div",{children:["Best Score: ",c]})]})}function u(){var e=Object(n.useState)(0),t=Object(j.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(0),s=Object(j.a)(a,2),u=s[0],O=s[1],l=Object(n.useState)([]),h=Object(j.a)(l,2),m=h[0],v=h[1],x=Object(n.useState)(Object(i.a)(Array(12).keys())),f=Object(j.a)(x,2),S=f[0],k=f[1];return Object(n.useEffect)((function(){O(c>u?c:u)}),[c,u]),Object(o.jsxs)("div",{children:[Object(o.jsx)(d,{score:c,bestScore:u}),Object(o.jsx)(b,{handleClick:function(e){var t,n=e.target.id;t=n,m.includes(t)?(r(0),v([])):(r(c+1),v((function(e){return[].concat(Object(i.a)(e),[t])}))),function(e){var t=e.sort((function(e,t){return.5-Math.random()}));k(t)}(S)},gameBoard:S})]})}var O=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(u,{})})};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.6efe04bd.chunk.js.map