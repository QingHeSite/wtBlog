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
                 hm.src = "https://hm.baidu.com/hm.js?20807e9f1461c920ec76c5c921f6dbfb";
                 var s = document.getElementsByTagName("script")[0];
                 s.parentNode.insertBefore(hm, s);
             })();
         }
     }
    })
   }