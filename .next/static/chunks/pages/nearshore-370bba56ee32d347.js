(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[932],{4822:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/nearshore",function(){return n(6510)}])},6510:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return U},default:function(){return R}});var i=n(5893),r=n(9008),l=n(7294),a=n(9811),o=n(5675),c=n(7379),s=n(6010);function u(){var e,t,n=(e=["\n    color: ",";\n"],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return u=function(){return n},n}var d=c.ZP.div(u(),(function(e){return e.color})),f=function(e){var t,n,r,a,c=e.title,u=e.subtitle,f=(e.label,e.description),h=e.color,b=e.hero,p=(null===b||void 0===b||null===(t=b.data)||void 0===t?void 0:t.attributes).formats,m=p.small,x=(0,l.useRef)("".concat("http://localhost:1337").concat(null===m||void 0===m?void 0:m.url)),g=(0,s.Z)((n={},r="mt-12",a=m.height<m.width,r in n?Object.defineProperty(n,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[r]=a,n));return(0,i.jsxs)("div",{className:"flex items-center justify-items-start flex-col py-16 px-9",children:[(0,i.jsx)(d,{color:h,className:"uppercase text-center font-raleway text-2xl mb-3",children:c}),(0,i.jsx)("p",{className:"text-white font-raleway font-medium text-base text-center mb-7 min-h-[4rem]",children:f}),p?(0,i.jsx)("div",{className:"relative text-center flex items-center justify-center ".concat(g," px-14"),children:(0,i.jsx)(o.default,{src:x.current,width:m.width,height:m.height,draggable:!1,alt:"".concat(c,", ").concat(u),priority:!0})}):(0,i.jsx)("div",{className:"w-[70px] h-[70px] bg-white rounded-2xl"})]})},h=function(e){var t=e.maps.data;return(0,i.jsx)("div",{className:"flex items-center justify-between flex-col bg-nt-bg-blue",children:(0,i.jsx)("div",{className:"grid gap-3 grid-cols-1 md:grid-cols-3",children:t.map((function(e){var t=e.attributes,n=t.title,r=t.subtitle,l=t.label,a=t.description,o=t.color,c=t.hero;return(0,i.jsx)(f,{title:n,subtitle:r,label:l,description:a,color:o,hero:c},l)}))})})},b=function(e){var t,n,i=(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.attributes).formats;return"".concat("http://localhost:1337").concat(null===i||void 0===i||null===(n=i.small)||void 0===n?void 0:n.url)};function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){var t,n,r=e.title,l=e.subtitle,a=(e.icon,e.active.title===r),o=(0,s.Z)((p(t={},"text-white",a),p(t,"hidden",!a),t)),c=(0,s.Z)((p(n={},"border-white text-white",a),p(n,"border-nt-bg-blue text-nt-bg-blue",!a),n));return(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)("span",{className:"absolute right-[-10px] flex justify-center items-center rounded-full w-[18px] h-[18px] border ".concat(c),children:(0,i.jsx)("span",{className:"text-[13px]",children:a?"-":"+"})}),(0,i.jsx)("h2",{className:"font-bold font-istok text-xl pr-6",children:r}),(0,i.jsx)("p",{className:"".concat(o," font-raleway text-base text-white font-normal mt-3 pr-7 w-full"),children:l})]})};function x(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(){var e,t,n=(e=[""],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return g=function(){return n},n}var v=c.ZP.div(g()),j=function(e){var t=e.title,n=(e.subtitle,e.info_cards.data),r=(0,l.useState)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){x(e,t,n[t])}))}return e}({},n[0].attributes)),a=r[0],c=r[1];return(0,i.jsxs)("div",{className:"flex items-center justify-center flex-col py-8 px-4 md:py-20 md:px-40 w-full",children:[(0,i.jsx)("h1",{className:"uppercase font-istok font-bold text-2xl text-center tracking-wider mb-14",children:t}),(0,i.jsxs)("div",{className:"grid gap-3 grid-cols-1 md:grid-cols-2",children:[(0,i.jsx)("div",{className:"order-2 md:order-1",children:(0,i.jsx)("div",{className:"relative flex items-center justify-center w-[550-px] h-[550px]",children:(0,i.jsx)(o.default,{src:b(a.hero),width:550,height:550,className:"transition-all",alt:a.title,draggable:!1,priority:!0})})}),(0,i.jsx)("div",{className:"order-1 md:order-2",children:n.map((function(e){var t,n=e.attributes,r=n.title,l=n.subtitle,o=n.icon,u=n.hero,d=(0,s.Z)((x(t={},"bg-nt-bg-blue text-white",a.title===r),x(t,"bg-gray-200",a.title!==r),t));return(0,i.jsx)(v,{className:"w-full cursor-pointer ".concat(d," mb-9 py-5 px-6 rounded-3xl transition-all"),onClick:function(e){return c({title:r,subtitle:l,icon:o,hero:u})},children:(0,i.jsx)(m,{title:r,subtitle:l,icon:o,active:a})},r)}))})]})]})},y=n(2873),w=n(1911),N=(n(933),n(8770),n(92),{slidesPerView:1,spaceBetween:30,slidesPerGroup:1,loop:!0,loopFillGroupWithBlank:!1,navigation:!1,pagination:{clickable:!0},autoplay:{delay:1e6,disableOnInteraction:!1}});function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){O(e,t,n[t])}))}return e}function P(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _(){var e=P(["\n    margin-left: 15rem;\n    background-color: ",';\n    background-image: url("','");\n    background-repeat: no-repeat;\n    background-position: 0 1rem;\n']);return _=function(){return e},e}function S(){var e=P(["\n    width: 100%;\n    padding-left: 15rem;\n"]);return S=function(){return e},e}w.ZP.use([w.pt,w.tl,w.W_]);var C=c.ZP.div(_(),(function(e){return e.bgColor}),(function(e){return e.image})),Z=c.ZP.footer(S()),T=[{title:"The problem",bgColor:"#1F2234",bg:"".concat("http://localhost:1337","/uploads/The_Problem_4aad6be722.png"),cols:"grid-cols-3",hints:[{hint:"1.4 million unfilled IT positions in the U.S. in 2020",title:"",icon:""},{hint:"By 2022, 60% of the world\u2019s GDP will be digitized",title:"",icon:""},{hint:"It takes 50% longer to hire in tech than and other industry",title:"",icon:""},{hint:"It takes 70 days on average to fill a tech position ",title:"",icon:""},{hint:"US$110k: median programmer salary in the U.S.",title:"",icon:""},{hint:"61% of recruiters cited finding qualified developers as their biggest challenge in 2021",title:"",icon:""}]},{title:"",bgColor:"#1F2234",bg:"",cols:"grid-cols-3",hints:[,{hint:"61% of recruiters cited finding qualified developers as their biggest challenge in 2021",title:"",icon:""},{hint:"1.4 million unfilled IT positions in the U.S. in 2020",title:"",icon:""},{hint:"It takes 50% longer to hire in tech than and other industry",title:"",icon:""},{hint:"It takes 70 days on average to fill a tech position ",title:"",icon:""},{hint:"US$110k: median programmer salary in the U.S.",title:"",icon:""}]},{title:"The solution",bgColor:"#FF4C41",bg:"".concat("http://localhost:1337","/uploads/The_solution_6e6a0cdb35.png"),cols:"grid-cols-2",hints:[{hint:"Quickly fill tech team gaps or source a full tech team in weeks rather than months",title:"Speed and scalability",icon:""},{hint:"Broaden skillset from core capabilities to specialized skills",title:"Skills",icon:""},{hint:"Transfer of vast software development experience and best practices from multiple industry verticals",title:"Experience",icon:""},{hint:"Outsource resources at rates that are a fraction of onshore costs",title:"Experience",icon:""}]},{title:"",bgColor:"#FF4C41",bg:"",cols:"grid-cols-2",hints:[{hint:"1.4 million unfilled IT positions in the U.S. in 2020",title:"Speed and scalability",icon:""}]}],z=function(){var e=(0,l.useRef)("".concat("http://localhost:1337","/uploads/image_20_489b090ca1.png?updated_at=2022-01-21T23:04:52.079Z"));return(0,i.jsxs)("div",{className:"relative flex items-center justify-center flex-col bg-neutral-100 pt-10",children:[(0,i.jsx)("div",{className:"absolute z-10 left-[2rem] top-[4.3rem]",children:(0,i.jsx)(o.default,{src:e.current,width:327,height:450,alt:"The Problem",priority:!0})}),(0,i.jsx)(y.t,k({},N,{className:"w-full pt-10",children:T.map((function(e,t){var n=e.title,r=e.bg,l=e.bgColor,a=e.cols,o=e.hints;return(0,i.jsx)(y.o,{children:(0,i.jsxs)(C,{bgColor:l,image:r,className:"flex items-start justify-center flex-col pl-36 pr-6 pb-20 h-screen md:h-[500px]",children:[(0,i.jsx)("h1",{className:"font-raleway font-bold text-4xl text-white mb-6 pt-24",children:n}),(0,i.jsx)("div",{className:"grid gap-5 ".concat(a),children:o.map((function(e,t){var n=e.title,r=e.hint;return(0,i.jsxs)("div",{className:"flex items-start justify-center px-5 pt-5 pb-8 rounded-3xl text-white bg-nt-glass flex-col md:min-h-[130px]",children:[(0,i.jsx)("span",{className:"uppercase mb-3 font-bold",children:n}),(0,i.jsx)("p",{className:"font-raleway font-medium text-xl",children:r})]},t)}))})]})},t)}))})),(0,i.jsx)(Z,{className:"text-left py-10",children:(0,i.jsx)("span",{className:"text-[#797979] text-xs font-raleway",children:"Source: Gartnet 2021 Challenge"})})]})},E=function(e){var t=e.attributes,n=t.banners,i=t.map_boxes,r=t.info_card_boxes;return{nearshoreAttrs:n.data[0].attributes,mapAttrs:i.data[0].attributes,infoCardsAttrs:r.data[0].attributes}};function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){F(e,t,n[t])}))}return e}var A=function(e){var t=e.data,n=(0,l.useState)(Object.assign({},t)),r=n[0],o=(n[1],E(r)),c=o.nearshoreAttrs,s=o.mapAttrs,u=o.infoCardsAttrs;return(0,i.jsxs)("section",{children:[(0,i.jsx)(a.Z,I({},c)),(0,i.jsx)(h,I({},s)),(0,i.jsx)(z,{}),(0,i.jsx)(j,I({},u))]})},U=!0,R=function(e){var t=e.data;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.default,{children:[(0,i.jsx)("title",{children:"NovaTech - Services"}),(0,i.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,i.jsx)(A,{data:t})]})}},9811:function(e,t,n){"use strict";var i=n(5893),r=n(7294),l=n(7379),a=n(6010);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){var e,t,n=(e=['\n    background-image: linear-gradient(\n            to left,\n            rgba(245, 245, 245, 0.3) 45%,\n            rgba(245, 245, 245, 1) 50%\n        ),\n        url("','");\n\n    @media screen and (max-width: 700px) {\n        background-image: linear-gradient(\n                to top,\n                rgba(245, 245, 245, 0.3) 0%,\n                rgba(245, 245, 245, 1) 40%\n            ),\n            url("','");\n        background-position: bottom;\n    }\n'],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return c=function(){return n},n}var s=l.ZP.div(c(),(function(e){return e.image}),(function(e){return e.image}));t.Z=function(e){var t,n,l,c,u,d,f,h,b,p=e.title,m=e.subtitle,x=e.description,g=e.hero,v=e.background,j=(e.isFloating,e.haveAction,e.actionLabel,e.actionRoute,e.centered),y=e.styles,w=(null!==(u=null===g||void 0===g||null===(t=g.data)||void 0===t?void 0:t.attributes)&&void 0!==u?u:{}).formats,N=(null!==(d=null===v||void 0===v||null===(n=v.data)||void 0===n?void 0:n.attributes)&&void 0!==d?d:{}).formats,O=((0,r.useRef)("".concat("http://localhost:1337").concat(null!==(f=null===w||void 0===w||null===(l=w.medium)||void 0===l?void 0:l.url)&&void 0!==f?f:null===w||void 0===w?void 0:w.thumbnail.url)),(0,r.useRef)("".concat("http://localhost:1337").concat(null!==(h=null===N||void 0===N||null===(c=N.large)||void 0===c?void 0:c.url)&&void 0!==h?h:null===N||void 0===N?void 0:N.thumbnail.url))),k=(0,a.Z)((o(b={},"justify-between",!j),o(b,"justify-center text-center",j),b));return(0,i.jsx)(s,{image:O.current,className:"px-14 py-24 relative flex items-center ".concat(k," min-h-[500px] ").concat(y," overflow-hidden bg-no-repeat bg-contain bg-right"),children:(0,i.jsxs)("div",{className:"grid gap-3 grid-cols-1 md:grid-cols-2",children:[(0,i.jsxs)("div",{className:"px-4 text-center md:text-left",children:[m?(0,i.jsx)("h1",{className:"font-istok font-medium leading-complete uppercase text-orange-600 text-[24px] pb-9",children:m}):null,p?(0,i.jsx)("h2",{className:"font-raleway font-bold leading-complete text-black text-[34px] pb-9",children:p}):null,x?(0,i.jsx)("p",{className:"font-raleway font-medium leading-complete text-[18px] pb-9",children:x}):null]}),(0,i.jsx)("div",{})]})})}}},function(e){e.O(0,[716,485,774,888,179],(function(){return t=4822,e(e.s=t);var t}));var t=e.O();_N_E=t}]);