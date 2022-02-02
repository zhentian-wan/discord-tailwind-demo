(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[794],{89955:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/servers/[sid]/channels/[cid]",function(){return r(56426)}])},8945:function(e,t,r){"use strict";r.r(t),r.d(t,{MessageWithUser:function(){return s},default:function(){return n}});var a=r(85893);function s(e){var t=e.message;return(0,a.jsxs)("div",{className:"flex hover:bg-gray-800 hover:bg-opacity-30 px-4 py-1",children:[(0,a.jsx)("img",{className:"w-10 h-10 rounded-full mr-4",src:t.avatarUrl,alt:""}),(0,a.jsxs)("div",{children:[(0,a.jsxs)("p",{className:"flex items-baseline",children:[(0,a.jsx)("span",{className:"text-green-500 mr-2 text-sm font-medium",children:t.user}),(0,a.jsx)("span",{className:"text-xs text-gray-500",children:t.date})]}),(0,a.jsx)("p",{className:"text-gray-100 leading-[22px]",children:t.text})]})]})}function n(e){var t=e.message;return(0,a.jsx)("div",{className:"mt-1 flex hover:bg-gray-800 hover:bg-opacity-30 px-4 py-1 leading-[22px]",children:(0,a.jsx)("p",{className:"text-gray-100 pl-14",children:null===t||void 0===t?void 0:t.text})})}},56426:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var a=r(85893),s=r(8945),n=r(11163),i=r(97627),l=r(78510),c=r(356),o=r(41664),d=r(67294);function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function u(e){return function(e){if(Array.isArray(e))return x(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return x(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return x(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(){var e=(0,d.useState)([]),t=e[0],r=e[1],o=(0,n.useRouter)(),x=c.a.find((function(e){return+e.id===+o.query.sid}));if(!x)return null;var m,f=x.categories.map((function(e){return e.channels})).flat().find((function(e){return+e.id===+o.query.cid}));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"bg-gray-800 w-60 md:flex flex-col hidden",children:[(0,a.jsxs)("button",{className:"px-4 h-12 flex items-center shadow-sm font-title text-white text-[15px] transition hover:bg-gray-550/[0.16]",children:[(0,a.jsxs)("div",{className:"relative w-4 h-4 mr-1",children:[(0,a.jsx)(i.Verified,{className:"absolute w-4 h-4 text-gray-550"}),(0,a.jsx)(i.Check,{className:"absolute w-4 h-4"})]}),function(e){var t;return null!==(m=null===(t=(0,l.getServerById)(e))||void 0===t?void 0:t.name)&&void 0!==m?m:"Server ".concat(o.query.sid)}(o.query.sid),(0,a.jsx)(i.Chevron,{className:"w-[18px] h-[18px] ml-auto opacity-80"})]}),(0,a.jsx)("div",{className:"text-gray-300 flex-1 overflow-y-auto font-medium pt-3 space-y-[21px]",children:x.categories.map((function(e){return(0,a.jsxs)("div",{children:[e.label&&(0,a.jsxs)("button",{onClick:function(){return t=e.id,void r((function(e){return e.includes(t)?e.filter((function(e){return e!==t})):u(e).concat([t])}));var t},className:"flex items-center text-xs font-title uppercase px-0.5 tracking-wide hover:text-gray-100 w-full",children:[(0,a.jsx)(i.Arrow,{className:"".concat(t.includes(e.id)?"-rotate-90":"","  w-3 h-3 ml-0.5 transition duration-200")}),e.label]}),(0,a.jsx)("div",{className:"space-y-0.5 mt-[5px]",children:e.channels.filter((function(r){return!t.includes(e.id)||r.unread})).map((function(e){return(0,a.jsx)(h,{channel:e},e.id)}))})]},e.id)}))})]}),(0,a.jsxs)("div",{className:"bg-gray-700 flex-1 flex flex-shrink min-w-0 flex-col",children:[(0,a.jsxs)("div",{className:"flex items-center h-12 px-2 shadow-sm",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(i.Hashtag,{className:"w-6 h-6 mx-2 font-semibold text-gray-400"}),(0,a.jsx)("span",{className:"mr-2 text-white font-title whitespace-nowrap",children:f.label})]}),f.description&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"hidden md:block w-px h-6 mx-2 bg-white/[.06]"}),(0,a.jsx)("div",{className:"hidden md:block mx-2 text-sm font-medium text-gray-200 truncate",children:f.description})]}),(0,a.jsxs)("div",{className:"hidden md:flex items-center ml-auto",children:[(0,a.jsx)("button",{className:"text-gray-200 hover:text-gray-100",children:(0,a.jsx)(i.HashtagWithSpeechBubble,{className:"w-6 h-6 mx-2"})}),(0,a.jsx)("button",{className:"text-gray-200 hover:text-gray-100",children:(0,a.jsx)(i.Bell,{className:"w-6 h-6 mx-2"})}),(0,a.jsx)("button",{className:"text-gray-200 hover:text-gray-100",children:(0,a.jsx)(i.Pin,{className:"w-6 h-6 mx-2"})}),(0,a.jsx)("button",{className:"text-gray-200 hover:text-gray-100",children:(0,a.jsx)(i.People,{className:"w-6 h-6 mx-2"})}),(0,a.jsxs)("div",{className:"mx-2 relative",children:[(0,a.jsx)("input",{type:"text",placeholder:"Search",className:"w-36 h-6 px-1.5 bg-gray-900 border-none rounded text-sm font-medium placeholder-gray-400"}),(0,a.jsx)("div",{className:"absolute right-0 inset-y-0 flex items-center",children:(0,a.jsx)(i.Spyglass,{className:"w-4 h-4 mr-1.5 text-gray-400"})})]}),(0,a.jsx)("button",{className:"text-gray-200 hover:text-gray-100",children:(0,a.jsx)(i.Inbox,{className:"w-6 h-6 mx-2"})}),(0,a.jsx)("button",{className:"text-gray-200 hover:text-gray-100",children:(0,a.jsx)(i.QuestionCircle,{className:"w-6 h-6 mx-2"})})]}),(0,a.jsxs)("div",{className:"flex md:hidden items-center ml-auto",children:[(0,a.jsx)("button",{className:"text-gray-200 hover:text-gray-100",children:(0,a.jsx)(i.HashtagWithSpeechBubble,{className:"w-6 h-6 mx-2"})}),(0,a.jsx)("button",{className:"text-gray-200 hover:text-gray-100",children:(0,a.jsx)(i.People,{className:"w-6 h-6 mx-2"})})]})]}),(0,a.jsx)("div",{className:"flex-1 overflow-y-auto",children:f.messages.map((function(e,t){return(0,a.jsx)("div",{children:0===t||e.user!==f.messages[t-1].user?(0,a.jsx)(s.MessageWithUser,{message:e}):(0,a.jsx)(s.default,{message:e})},t)}))})]})]})}function h(e){var t=e.channel,r=t.icon?i[t.icon]:i.Hashtag,s=(0,n.useRouter)(),l=c.a.find((function(e){return+e.id===+s.query.sid})),d=+s.query.cid===+t.id?"active":t.unread?"inactiveUnread":"inactiveRead";return(0,a.jsx)(o.default,{href:"/servers/".concat(l.id,"/channels/").concat(t.id),children:(0,a.jsxs)("a",{className:"".concat({active:"text-white bg-gray-550/[0.32]",inactiveUnread:"text-white hover:bg-gray-550/[0.16] active:bg-gray-550/[0.24]",inactiveRead:"text-gray-300 hover:text-gray-100 hover:bg-gray-550/[0.16] active:bg-gray-550/[0.24]"}[d]," flex px-2 mx-2 py-1 items-center rounded group relative"),children:["inactiveUnread"===d&&(0,a.jsx)("div",{className:"absolute w-1 h-2 bg-white left-0 -ml-2 rounded-r-full"}),(0,a.jsx)(r,{className:"w-4 h-4 text-gray-400 mr-1.5"}),t.label,(0,a.jsx)(i.AddPerson,{className:"w-5 h-5 ml-auto text-gray-200 hover:text-gray-100 opacity-0 group-hover:opacity-100 transition"})]})})}}},function(e){e.O(0,[774,888,179],(function(){return t=89955,e(e.s=t);var t}));var t=e.O();_N_E=t}]);