(this["webpackJsonpreact-suspense"]=this["webpackJsonpreact-suspense"]||[]).push([[0],{100:function(e,a,t){},214:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(5),c=t.n(l),s=(t(100),t(75)),i=t(22),m=t(4),o=r.a.createContext(null),u=t(46),d=t.n(u),E=t(20),v=t.n(E),p=t(78),h=t.n(p),f=t(77),b=t.n(f),N=function(){var e=Object(n.useState)(!1),a=Object(m.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(!1),u=Object(m.a)(c,2),E=u[0],p=u[1],f=Object(n.useState)("all"),N=Object(m.a)(f,2),g=N[0],w=N[1],y=Object(n.useContext)(o),x=Object(m.a)(y.propertyInfo,2),O=x[0],j=x[1],C=Object(n.useContext)(o),k=Object(m.a)(C.propertyInfoIntact,2),S=k[0],A=(k[1],Object(n.useContext)(o)),I=Object(m.a)(A.appInfo,2),P=I[0],z=I[1],F=function(e){w(e.target.value);var a=Object(i.a)(S);j(a.filter((function(a){return"all"===e.target.value||a.type===e.target.value})))},M=function(e,a){e.stopPropagation(),z(Object(s.a)({},P,{viewAs:a}))};return r.a.createElement("form",null,r.a.createElement("div",{className:"search"},r.a.createElement("div",{className:"content-max search-border"},r.a.createElement("div",{className:"search-option"},r.a.createElement("div",{className:"search-top"},"Search by:"),r.a.createElement("div",{className:"search-bottom"},r.a.createElement("div",null,"Sort"),r.a.createElement("div",{className:"search-row"},r.a.createElement("div",{onClick:function(e){!function(e){e.stopPropagation();var a=Object(i.a)(O);t?a.sort((function(e,a){try{return e.balance-a.balance}catch(t){return 0}})):a.sort((function(e,a){try{return a.balance-e.balance}catch(t){return 0}})),j(a),l(!t)}(e)},className:"search-row sort"},"Amount \xa0",r.a.createElement(d.a,{fontSize:"small",style:{color:v.a[700]}})),r.a.createElement("div",{className:"spacer"},"\xa0"),r.a.createElement("div",{onClick:function(e){!function(e){e.stopPropagation();var a=Object(i.a)(O);E?a.sort((function(e,a){try{var t=e.address.toUpperCase().split(" ")[1],n=a.address.toUpperCase().split(" ")[1];return t>n?1:t<n?-1:0}catch(r){return 0}})):a.sort((function(e,a){try{var t=e.address.toUpperCase().split(" ")[1],n=a.address.toUpperCase().split(" ")[1];return t>n?-1:t<n?1:0}catch(r){return 0}})),j(a),p(!E)}(e)},className:"search-row sort"},"Street Name \xa0",r.a.createElement(d.a,{fontSize:"small",style:{color:v.a[700]}}))))),r.a.createElement("div",{className:"search-option"},r.a.createElement("div",{className:"search-top"},"\xa0"),r.a.createElement("div",{className:"search-bottom"},r.a.createElement("div",null,"Type"),r.a.createElement("div",{className:"search-row"},r.a.createElement("div",{className:"search-row"},r.a.createElement("input",{name:"type",type:"radio",value:"checking",checked:"checking"===g,onChange:F}),"Checking"),r.a.createElement("div",{className:"spacer"},"\xa0"),r.a.createElement("div",{className:"search-row"},r.a.createElement("input",{name:"type",type:"radio",value:"creditcard",checked:"creditcard"===g,onChange:F}),"Credit Card"),r.a.createElement("div",{className:"spacer"},"\xa0"),r.a.createElement("div",{className:"search-row"},r.a.createElement("input",{name:"type",type:"radio",value:"all",checked:"all"===g,onChange:F}),"All")))),r.a.createElement("div",{className:"search-option"},r.a.createElement("div",{className:"search-top"},"\xa0"),r.a.createElement("div",{className:"search-bottom"},r.a.createElement("div",null,"Amount"),r.a.createElement("div",{className:"search-row"},r.a.createElement("input",{type:"text",placeholder:"$"})," to \xa0 \xa0",r.a.createElement("input",{type:"text",placeholder:"$"})))),r.a.createElement("div",{className:"search-option"},r.a.createElement("div",{className:"search-top"},r.a.createElement("div",null,"\xa0"),r.a.createElement("div",{className:"flex-css"},r.a.createElement("div",{className:"flex-css pointer",onClick:function(e){M(e,"tiles")},style:{color:"tiles"===P.viewAs?v.a[700]:""}},r.a.createElement(b.a,null)," Tile View\xa0\xa0\xa0"),r.a.createElement("div",{className:"flex-css pointer",onClick:function(e){M(e,"grid")},style:{color:"grid"===P.viewAs?v.a[700]:""}},r.a.createElement(h.a,null)," Grid View"))),r.a.createElement("div",{className:"search-bottom"},r.a.createElement("div",null,"Status"),r.a.createElement("div",{className:"search-row"},r.a.createElement("div",{className:"search-row"},r.a.createElement("input",{type:"checkbox"}),"Received"),r.a.createElement("div",{className:"spacer"},"\xa0"),r.a.createElement("div",{className:"search-row"},r.a.createElement("input",{type:"checkbox"}),"Pending")))))))},g=t(34),w=t(18),y=t.n(w),x=t(47),O=t.n(x);function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2500;return e=Math.random()*e+2500,new Promise((function(a){return setTimeout(a,e)}))}function C(){return Math.floor(10*Math.random())%5===0}var k=t(79),S={display:!1},A={cutoutPercentage:90},I=function(e){var a=e.data;return r.a.createElement("div",null,r.a.createElement(k.a,{data:a,legend:S,options:A,width:140}))},P=t(33),z=t.n(P),F=t(82),M=t.n(F),T=t(81),U=t.n(T),q=function(e){var a=e.status;return r.a.createElement("div",{className:function(){var e="status flex-css ";try{e+=a.toLowerCase()}catch(t){}return e}()},"Issue"===a?r.a.createElement(U.a,{fontSize:"small"}):"Pending"===a?r.a.createElement(z.a,{fontSize:"small"}):r.a.createElement(M.a,{fontSize:"small"}),r.a.createElement("div",null,a))},B=t(86),R=t.n(B),$=t(84),G=t.n($),L=t(235),W=t(233),H=t(87),J=t.n(H),V=t(85),D=t.n(V);var K=function(e){var a=e.property,t=Object(n.useState)(null),l=Object(m.a)(t,2),c=l[0],s=l[1],i=Object(n.useState)(null),o=Object(m.a)(i,2),u=o[0],d=o[1],E=Object(n.useState)(null),v=Object(m.a)(E,2),p=v[0],h=v[1];Object(n.useLayoutEffect)((function(){d(null),function(){var e,a,t,n,r,l=arguments;return y.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return e=l.length>0&&void 0!==l[0]?l[0]:0,a=l.length>1&&void 0!==l[1]&&l[1],t="./data/properties.json",c.prev=3,c.next=6,y.a.awrap(O()({method:"get",url:t}));case 6:if(n=c.sent,!a){c.next=10;break}return c.next=10,y.a.awrap(j());case 10:if(!C()){c.next=12;break}throw new Error("Random error");case 12:return r=n.data.find((function(a){return a.id===e})),c.abrupt("return",r.balance);case 16:throw c.prev=16,c.t0=c.catch(3),console.error("Request for fetchBalance failed"),c.t0;case 20:case"end":return c.stop()}}),null,null,[[3,16]])}(a.id,!0).then((function(e){s(e)}),(function(e){d(e)}))}),[p]);var f=function(){return Math.round(100*Math.random())},b={labels:["Water","Sewer","Fees"],datasets:[{data:[f(),f(),f()],backgroundColor:["#0e7bb3","#379932","#e68a47"],hoverBackgroundColor:["#3d7ee6","#33e621","#efae0e"]}]};return r.a.createElement("div",{className:"flex-card"},r.a.createElement("div",{className:"flex-card-column clip"},r.a.createElement("div",{className:"account clip"},"Account #: 300104859-1938391-8238"),r.a.createElement("div",{className:"address"},a.address),r.a.createElement("div",{className:"balance clip"},u?r.a.createElement("div",{className:"retry",onClick:function(e){return h(Math.random)}},r.a.createElement(L.a,{title:"Failed to load. Click to retry."},r.a.createElement("span",null,r.a.createElement(G.a,{fontSize:"small",style:{color:D.a[500]}}),r.a.createElement(z.a,null)," Retry"))):c?"$"+c+" Due":r.a.createElement(W.a,{variant:"rect",width:200,height:44})),r.a.createElement("div",{className:"legend",style:{height:66}}),r.a.createElement("div",{className:"confirmation"},"Confirmation #: 7577471")),r.a.createElement("div",{className:"flex-card-column right clip"},r.a.createElement("div",null,r.a.createElement(R.a,{style:{color:J.a[400]}})),r.a.createElement("div",{className:"chart"},r.a.createElement("div",{className:"doughnut-middle"},10*f(),r.a.createElement("div",{className:"bottom"},"Gallons Used",r.a.createElement("br",null),"This Month")),r.a.createElement(I,{data:b})),r.a.createElement(q,{status:a.status})))},Q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"flex-card-column clip"},r.a.createElement(W.a,{width:170}),r.a.createElement(W.a,{variant:"rect",width:130,height:22}),r.a.createElement("div",{className:"balance clip"},r.a.createElement(W.a,{variant:"rect",width:200,height:44})),r.a.createElement("div",{className:"legend"},r.a.createElement(W.a,{variant:"rect",width:80,height:74})),r.a.createElement("div",{className:"confirmation"},r.a.createElement(W.a,{width:120}))),r.a.createElement("div",{className:"flex-card-column right clip"},r.a.createElement("div",null,r.a.createElement(W.a,{width:"20px"})),r.a.createElement("div",{className:"chart"},r.a.createElement(W.a,{variant:"circle",width:140,height:140})),r.a.createElement("div",null,r.a.createElement(W.a,{width:"60px",height:24}))))},X=t(89),Y=t.n(X),Z=t(88),_=t.n(Z),ee=function(e){var a=e.type;return r.a.createElement("div",null,"creditcard"===a&&r.a.createElement(L.a,{title:"Credit Card"},r.a.createElement("span",null,r.a.createElement(_.a,{fontSize:"small"}))),"checking"===a&&r.a.createElement(L.a,{title:"Checking"},r.a.createElement("span",null,r.a.createElement(Y.a,{fontSize:"small"}))))},ae=function(e){var a=e.properties;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"flex-css"},r.a.createElement("div",{className:"content-max"},r.a.createElement("div",{className:"grid-row header"},r.a.createElement("div",null),r.a.createElement("div",null,"Name"),r.a.createElement("div",null,"Address"),r.a.createElement("div",null,"Balance"),r.a.createElement("div",null,"Status"),r.a.createElement("div",null,"Type")))),r.a.createElement(g.a,null,a.length&&a.map((function(e,a){return r.a.createElement("div",{className:"flex-css",key:e.id},r.a.createElement("div",{className:"content-max"},r.a.createElement("div",{className:"grid-row ".concat(a%2===0?"even":"")},r.a.createElement("div",null,a),r.a.createElement("div",null,e.name),r.a.createElement("div",null,e.address),r.a.createElement("div",null,e.balance),r.a.createElement("div",null,r.a.createElement(q,{status:e.status})),r.a.createElement("div",null,r.a.createElement(ee,{type:e.type})))))}))))},te=t(234),ne=function(e){var a=Object(n.useContext)(o),t=Object(m.a)(a.appInfo,2),l=t[0],c=(t[1],Object(n.useContext)(o)),s=Object(m.a)(c.propertyInfo,2),i=s[0],u=s[1],d=Object(n.useContext)(o),E=Object(m.a)(d.propertyInfoIntact,2),v=E[0],p=E[1],h=Object(n.useState)([]),f=Object(m.a)(h,2),b=f[0],N=f[1],w=Object(n.useState)(null),x=Object(m.a)(w,2),C=x[0],k=x[1];return Object(n.useEffect)((function(){v.length||function(){var e,a,t,n=arguments;return y.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=n.length>0&&void 0!==n[0]&&n[0],a="./data/properties.json",r.prev=2,r.next=5,y.a.awrap(O()({method:"get",url:a,headers:{"Ocp-Apim-Trace":!0,"Ocp-Apim-Subscription-Key":"d334acadb84d48b39eca45d2bd4119ef"}}));case 5:if(t=r.sent,!e){r.next=9;break}return r.next=9,y.a.awrap(j());case 9:return r.abrupt("return",t.data);case 12:throw r.prev=12,r.t0=r.catch(2),console.error("Request for fetchProperties failed"),r.t0;case 16:case"end":return r.stop()}}),null,null,[[2,12]])}(!0).then((function(e){u(e),p(e)}),(function(e){k(e)})),N(i)}),[i]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"flex-css"},r.a.createElement("div",{className:"content-max"},"tiles"===l.viewAs&&r.a.createElement(g.a,{className:"flex-card-container"},C?r.a.createElement("div",null,"There is an error"):b.length?b.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(K,{property:e,key:e.id}))})):Array.from(new Array(20)).map((function(e,a){return r.a.createElement("div",{className:"flex-card",key:a},r.a.createElement(Q,{key:a}))}))))),"grid"===l.viewAs&&(C?r.a.createElement("div",null,"There is an error"):b.length?r.a.createElement(ae,{properties:b}):r.a.createElement("div",{className:"flex-css"},r.a.createElement(te.a,{size:40}))))},re=function(){return r.a.createElement("div",{className:"nav-header"},r.a.createElement("div",{className:"content-max"},r.a.createElement("div",null,r.a.createElement("img",{src:"./logo-saws.png",alt:"sawslogo"})),r.a.createElement("div",{className:"title"},"My Commercial Account"),r.a.createElement("div",{className:"need-help flex-css"},"Need Help?")))},le=t(90),ce=t.n(le),se=function(){return r.a.createElement("div",{className:"nav-bar"},r.a.createElement("div",{className:"content-max"},r.a.createElement("div",{className:"nav-links"},r.a.createElement("div",null,"Overview"),r.a.createElement("div",null,"Usage"),r.a.createElement("div",null,"History"),r.a.createElement("div",null,"Move In/Out"),r.a.createElement("div",null,"Payment"),r.a.createElement("div",{className:"last-link"},"Contact Us"),r.a.createElement("div",{className:"settings"},r.a.createElement(ce.a,{fontSize:"large"}),r.a.createElement("div",null,"\xa0Settings")))))},ie=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(re,null),r.a.createElement(se,null))},me=function(){return r.a.createElement("div",{className:"page-titles"},r.a.createElement("div",{className:"content-max"},r.a.createElement("div",{className:"title"},"Overview",r.a.createElement("div",{className:"subtitle"},"Expand and see more information about an account below."))))},oe=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",null,r.a.createElement("img",{src:"./logo-saws-grey.png",alt:"sawslogogrey"})),r.a.createElement("div",null,"Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam eget nullam pellentesque "),r.a.createElement("div",null,"aliquam curabitur cociis."))};var ue=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ie,null),r.a.createElement(me,null),r.a.createElement(N,null),r.a.createElement(ne,null),r.a.createElement(oe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement((function(e){var a=e.children,t=["11111","22222","33333"],n=[],l={oneChart:null,oneOverlay:null,selectedAccount:t[0],viewAs:"tiles"},c={exampleGlobalFunction:function(e){}},s=r.a.useState(l),i=Object(m.a)(s,2),u=i[0],d=i[1],E=r.a.useState({name:"Pedro Smith",email:"pedrosmith@gmail.com"}),v=Object(m.a)(E,2),p=v[0],h=v[1],f=r.a.useState(t),b=Object(m.a)(f,2),N=b[0],g=b[1],w=r.a.useState(n),y=Object(m.a)(w,2),x=y[0],O=y[1],j=r.a.useState(n),C=Object(m.a)(j,2),k=C[0],S=C[1],A=r.a.useState(c),I=Object(m.a)(A,2),P={appInfo:[u,d],userInfo:[p,h],accountInfo:[N,g],propertyInfo:[x,O],propertyInfoIntact:[k,S],appFunctions:[I[0],I[1]]};return r.a.createElement(o.Provider,{value:P},a)}),null,r.a.createElement(ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},95:function(e,a,t){e.exports=t(214)}},[[95,1,2]]]);
//# sourceMappingURL=main.2664983c.chunk.js.map