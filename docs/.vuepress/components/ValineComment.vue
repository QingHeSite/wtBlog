<template>
  <div>
    <div id="valine-vuepress-comment"></div>
  </div>
</template>
<script>
// import Valine from "valine";
export default {
  name: "valine",
  methods: {
    renderValine() {
      //因为此方法会构建dom节点，所以<template>中不需要再加相关dom元素
      let $page = document.querySelector(".page");
      let vcomments = document.getElementById("vcomments");
      if (!vcomments) {
        vcomments = document.createElement("div");
        vcomments.id = "vcomments";
      }
      if (this.$page.frontmatter.hideFooter) {
        // 如果forntmatter中标注'hideFooter：true'则不渲染评论组件，使得评论组件在各个页面的显示可控
        vcomments.remove();
      } else {
        if ($page && !vcomments) {
          $page.appendChild(vcomments);
        } else {
          $page = document.querySelector(".page");
          $page.appendChild(vcomments);
        }
        this.valine();
      }
    },
    valine() {
      try {
        const Valine = require("valine");
        const leancloudStorage = require("leancloud-storage");
        // require window
        if (typeof window !== "undefined") {
          window.AV = leancloudStorage;
        }
        // 配置valine参数
        new Valine({
          el: "#valine-vuepress-comment",
          appId: "21G8ftRHwJm0HSY3gASNfVts-gzGzoHsz", // your appId
          appKey: "Q7WNJnWJOafr6ILQbdfjOptY", // your appKey
          notify: true,
          verify: false,
          visitor: true,
          avatar: "robohash",
          placeholder: "",
          path: window.location.pathname
        });
      } catch (e) {
        console.log(e);
      }
    }
  },
  mounted() {
    try {
      this.renderValine();
    } catch (e) {
      console.log(e);
    }
  },
  watch: {
    // 路由变化时重新初始化Valine组件
    $route(a, b) {
      if (a.path != b.path) {
        try {
          this.renderValine();
        } catch (e) {
          console.log(e);
        }
      }
    }
  }
};
</script>