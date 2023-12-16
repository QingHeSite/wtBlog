---
title: '关于浏览器解析doc顺序'
permalink: '/core/browser_analysis_doc/'
sidebarDepth: 2
---

### 关于浏览器解析doc顺序


渲染引擎和JavaScript引擎的执行顺序如下：

1. 渲染引擎的执行顺序：
    - 解析HTML：渲染引擎会先解析HTML代码，将其转换为DOM树。解析过程中，渲染引擎会根据HTML规范处理标签、属性和文本等内容。
    - 解析CSS：渲染引擎会解析CSS代码，将其转换为CSSOM树。解析过程中，渲染引擎会计算每个元素的最终样式。
    - 构建渲染树：渲染引擎会将DOM树和CSSOM树合并成渲染树。渲染树只包含需要显示的节点，如可见的元素和文本节点。
    - 布局（Layout）：渲染引擎会根据渲染树的布局信息，计算每个元素的位置和大小，确定它们在屏幕上的位置。这个过程也被称为回流（reflow）。
    - 绘制（Painting）：渲染引擎会将渲染树上的每个节点转换为屏幕上的像素，形成最终的页面视图。这个过程也被称为重绘（repaint）。

2. JavaScript引擎的执行顺序：
    - 解析JavaScript：JavaScript引擎会解析页面上的JavaScript代码，将其转换为可执行的字节码或机器码。
    - 执行JavaScript：JavaScript引擎会按照解析得到的顺序执行JavaScript代码。代码中的操作可能会修改DOM树、CSSOM树和渲染树，影响页面的展示和行为。
    - 与渲染引擎交互：JavaScript代码可能会通过DOM API和CSSOM API等，与渲染引擎进行交互，修改页面的结构和样式。

需要注意的是，**渲染引擎和JavaScript引擎的执行是交替进行的**。在渲染引擎执行过程中，如果遇到JavaScript代码（如内联的`<script>`标签或外部的JavaScript文件），渲染引擎会暂停渲染，将控制权交给JavaScript引擎执行相应的代码。当JavaScript引擎执行完毕后，渲染引擎会继续执行渲染过程。

总结来说，加载一个页面时，渲染引擎的执行顺序是解析HTML、解析CSS、构建渲染树、布局和绘制。JavaScript引擎的执行顺序是解析JavaScript、执行JavaScript和与渲染引擎交互。两者交替执行，实现了页面的加载和渲染。

### script 标签的 defer 与 async
1. `defer`属性: 异步下载script,下载过程不影响dom的加载,当下载完成并且dom加载完成之后按顺序执行,像vue打包出来的各个js模块具有依赖性,需要加defer属性按顺序执行
2. `async`属性: 异步下载script,下载过程不影响dom的加载,当一个script下载完之后会立即执行,不会去管dom是否加载完成,是无序的(谁先加载完谁就先执行)
