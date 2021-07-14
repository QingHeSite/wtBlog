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

#### linux上进行 npm install 报错
```
gyp ERR! configure error 
gyp ERR! stack Error: EACCES: permission denied, mkdir '/data/front-end/ssr-page/node_modules/node-sass/.node-gyp'
gyp ERR! System Linux 3.10.0-514.26.2.el7.x86_64
gyp ERR! command "/usr/local/nodejs/node-v10.2.0-linux-x64/bin/node" "/data/front-end/ssr-page/node_modules/node-gyp/bin/node-gyp.js" "rebuild" "--verbose" "--libsass_ext=" "--libsass_cflags=" "--libsass_ldflags=" "--libsass_library="
gyp ERR! cwd /data/front-end/ssr-page/node_modules/node-sass
gyp ERR! node -v v10.2.0
gyp ERR! node-gyp -v v3.8.0
gyp ERR! not ok 
```
- 错误提示中有权限不足
- 解决`npm i --unsafe-perm=true --allow-root`
