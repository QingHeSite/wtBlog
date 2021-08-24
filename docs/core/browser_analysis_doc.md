---
permalink: '/core/browser_analysis_doc/'
---

### 关于浏览器解析doc顺序
1. 首先加载html

### script 标签的 defer 与 async
1. `defer`属性: 异步下载script,下载过程不影响dom的加载,当下载完成并且dom加载完成之后按顺序执行,像vue打包出来的各个js模块具有依赖性,需要加defer属性按顺序执行
2. `async`属性: 异步下载script,下载过程不影响dom的加载,当一个script下载完之后会立即执行,不会去管dom是否加载完成,是无序的(谁先加载完谁就先执行)