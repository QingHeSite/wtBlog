---
title: '正则'
permalink: '/core/base_dev/regular/'
---

### 常用正则表达式
### 正向否定查找
eg: 有100个url,执行代码时需要不匹配其中两个,如果使用`if else`也是可以的,只不过工作量太大了,`for`循环也可,但是不够优雅,正则可以一行解决(正向否定查找)
比如需要不匹配的两个地址是 `index.html`和`tupian.html`
```js
/^((?!(index\.html))(?!(tupian\.html)))$/.test(location.href)
```


