---
permalink: '/core/node/'
---

## 深入浅出node.js

### 发布 npm包
1. 创建`hello.js`
   ```js
   exports.sayHello = function() {
       return 'hello world'
   }
   ```
2. 初始化描述文件 `npm init`, npm 通过提问交互填写选项,完成描述文件
    ```json
    {
        "name": "hello_package",
        "version": "1.0.0",
        "description": "",
        "main": "hello.js",
        "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
        },
        "author": "",
        "license": "ISC"
    }
    ```
3. 注册包仓库账号
    - npm adduser
    依次填写账号,邮箱
4. 发布包 `npm publish .`
   - 推送带tag的版本 `npm publish --tag [tagName]`
     - 安装带tag的版本 `npm install [package]@[tagName]`
   - 如果预设了私有仓库(一般企业中会用到),包将直接发布到私有仓库,否则才发布到公共仓库
   - 搭建[搭建私有仓库](https://verdaccio.org/), 可使用`verdaccio`
   - **注:** 每次推送后,version需要+1进行修改
    ```
    npm notice 
    npm notice package: hello_package@1.0.1
    npm notice === Tarball Contents ===    
    npm notice 60B  hello.js    
    npm notice 209B package.json
    npm notice === Tarball Details ===     
    npm notice name:          hello_package
    npm notice version:       1.0.1
    npm notice package size:  319 B
    npm notice unpacked size: 269 B
    npm notice shasum:        7dc90ee0e23ebb095a60a9192e8601e9ceeb5709
    npm notice integrity:     sha512-ViQmd+Be+nDsz[...]aR4T3uRENReGg==
    npm notice total files:   2
    npm notice
    + hello_package@1.0.1
    ```

    ### 使用
    > **process** 获取当前进程信息
    > **platform** 获取当前平台信息,区分系统. (windows > win32, mac > darwin)
    >**argv** 用户传入的参数
    > **cwd** 当前执行的所处路径
    



