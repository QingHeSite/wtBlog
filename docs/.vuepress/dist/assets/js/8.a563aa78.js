(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{368:function(e,t,n){"use strict";n.r(t);var o={name:"valine",methods:{renderValine:function(){var e=document.querySelector(".page"),t=document.getElementById("vcomments");t||((t=document.createElement("div")).id="vcomments"),this.$page.frontmatter.hideFooter?t.remove():(e&&!t?e.appendChild(t):(e=document.querySelector(".page")).appendChild(t),this.valine())},valine:function(){try{var e=n(360),t=n(361);"undefined"!=typeof window&&(window.AV=t),new e({el:"#valine-vuepress-comment",appId:"21G8ftRHwJm0HSY3gASNfVts-gzGzoHsz",appKey:"Q7WNJnWJOafr6ILQbdfjOptY",notify:!0,verify:!1,visitor:!0,avatar:"robohash",placeholder:"",path:window.location.pathname})}catch(e){console.log(e)}}},mounted:function(){try{this.renderValine()}catch(e){console.log(e)}},watch:{$route:function(e,t){if(e.path!=t.path)try{this.renderValine()}catch(e){console.log(e)}}}},a=n(25),i=Object(a.a)(o,(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{attrs:{id:"valine-vuepress-comment"}})])}],!1,null,null,null);t.default=i.exports}}]);