---
permalink: '/core/error/'
---

## 常见错误解决
#### node-sass兼容问题
```
error  Module build failed (from ./node_modules/sass-loader/lib/loader.js):
               Error: `sass-loader` requires `node-sass` >=4. Please install a
               compatible version.     at Object.sassLoader
               (D:\work\browser-plugins\node_modules\sass-loader\lib\loader.js:
```
- 解决 `npm rebuild node-sass` 或者 `npm i node-sass`
