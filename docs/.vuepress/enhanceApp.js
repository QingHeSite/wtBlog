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
                 hm.src = "https://hm.baidu.com/hm.js?2bf89a1147ecc9984519af24104216e0";
                 var s = document.getElementsByTagName("script")[0];
                 s.parentNode.insertBefore(hm, s);
             })();
         }
     }
    })
   }