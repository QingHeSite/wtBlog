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

#### npm 安装报错
使用npm安装包的时候报错如下
```
npm err! unexpected token '.'
```
是由于nvm切换node版本导致,需要升级nvm版本, 报错时nvm版本为`1.1.7`,升级到`1.1.11`后解决

安装新版nvm后,安装node 12.22.0,npm无法使用
解决如下
1. 打开`https://nodejs.org/download/release/`
2. 找到要下的版本,下载解压,修改文件名为v12.22.0,这个格式是nvm使用的
3. 解压后的文件夹整个放到`C:\Users\name\AppData\Roaming\nvm`
4. 再使用nvm ls就能查看到了