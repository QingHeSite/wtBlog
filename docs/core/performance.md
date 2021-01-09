---
permalink: '/core/performance/'
---

## 网页性能
##### 案例
* mac chrome浏览器同时打开几个网页,导致页面白屏,直接卡死
1. 检查调试, 打开浏览器开发者工具 > 右上角三个点 > more tools > Performance monitor
![性能截图](../.vuepress/assets/imgs/performance.png)
cpu占比一直在20%以上无法下降

2. 排除, 首先从定时器下手,关闭页面所有`setInterval``setTimeout`,怀疑是高频率的回流造成的
    ```
    for (let i = 0; i < 1000; i++){  clearInterval(i) }
    ```
    发现cpu并没有下降。
3. 逐步剔除模块,最终定位到一个带有`animation`动画的元素上,只要关闭`animation`,cpu立马下降