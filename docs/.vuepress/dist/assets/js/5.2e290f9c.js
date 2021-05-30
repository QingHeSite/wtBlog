(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{358:function(t,a,e){t.exports=e.p+"assets/img/performance.2a2dd9ba.png"},380:function(t,a,e){"use strict";e.r(a);var r=e(25),s=Object(r.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"网页性能优化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#网页性能优化"}},[t._v("#")]),t._v(" 网页性能优化")]),t._v(" "),r("h5",{attrs:{id:"案例"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#案例"}},[t._v("#")]),t._v(" 案例")]),t._v(" "),r("ul",[r("li",[t._v("mac chrome浏览器同时打开几个网页,导致页面白屏,直接卡死")])]),t._v(" "),r("ol",[r("li",[r("p",[t._v("检查调试, 打开浏览器开发者工具 > 右上角三个点 > more tools > Performance monitor\n"),r("img",{attrs:{src:e(358),alt:"性能截图"}}),t._v("\ncpu占比一直在20%以上无法下降")])]),t._v(" "),r("li",[r("p",[t._v("排除, 首先从定时器下手,关闭页面所有"),r("code",[t._v("setInterval``setTimeout")]),t._v(",怀疑是高频率的回流造成的")]),t._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("for (let i = 0; i < 1000; i++){  clearInterval(i) }\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])]),r("p",[t._v("发现cpu并没有下降。")])]),t._v(" "),r("li",[r("p",[t._v("逐步剔除模块,最终定位到一个带有"),r("code",[t._v("animation")]),t._v("动画的元素上,只要关闭"),r("code",[t._v("animation")]),t._v(",cpu立马下降,查看文档发现,无限循环的"),r("code",[t._v("animation")]),t._v("会一直占用cpu")])]),t._v(" "),r("li",[r("p",[t._v("优化方案")]),t._v(" "),r("ol",[r("li",[t._v("魔法属性:"),r("code",[t._v("transform: translateZ(0);")]),t._v(" 这会将元素组合到各自的层中,通过欺骗浏览器以为它将进行3D变换,可开启GPU加速功能,减少CPU消耗")]),t._v(" "),r("li",[r("code",[t._v("will-change: tranform")]),t._v(", 告知浏览器该元素会有哪些变化的方法，这样浏览器可以在元素属性真正发生变化之前提前做好对应的优化准备工作。 这种优化可以将一部分复杂的计算工作提前准备好，使页面的反应更为快速灵敏。")])])])])])}),[],!1,null,null,null);a.default=s.exports}}]);