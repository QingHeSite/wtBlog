(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{358:function(t,e,a){t.exports=a.p+"assets/img/performance.2a2dd9ba.png"},385:function(t,e,a){"use strict";a.r(e);var s=a(25),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"网页性能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网页性能"}},[t._v("#")]),t._v(" 网页性能")]),t._v(" "),s("h5",{attrs:{id:"案例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#案例"}},[t._v("#")]),t._v(" 案例")]),t._v(" "),s("ul",[s("li",[t._v("mac chrome浏览器同时打开几个网页,导致页面白屏,直接卡死")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("检查调试, 打开浏览器开发者工具 > 右上角三个点 > more tools > Performance monitor\n"),s("img",{attrs:{src:a(358),alt:"性能截图"}}),t._v("\ncpu占比一直在20%以上无法下降")])]),t._v(" "),s("li",[s("p",[t._v("排除, 首先从定时器下手,关闭页面所有"),s("code",[t._v("setInterval``setTimeout")]),t._v(",怀疑是高频率的回流造成的")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("for (let i = 0; i < 1000; i++){  clearInterval(i) }\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("发现cpu并没有下降。")])]),t._v(" "),s("li",[s("p",[t._v("逐步剔除模块,最终定位到一个带有"),s("code",[t._v("animation")]),t._v("动画的元素上,只要关闭"),s("code",[t._v("animation")]),t._v(",cpu立马下降")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);