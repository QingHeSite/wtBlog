export default ({
    Vue,
    options,
    router,
    siteData
   }) => {
    Vue.mixin({
     mounted() {
         if(!_hmt){
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?7d3fc4f03f8e7f5c2dd0cc223a2c8c8a";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
         }
     }
    })
   }