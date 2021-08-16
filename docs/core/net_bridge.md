---
permalink: '/core/net_bridge/'
---
# 搭桥
#### 系统要求
CentOS < 8

#### 如何连接服务器
使用xshell工具直接连接
或者mac电脑打开终端 输入: ssh root@ip地址 ,接下来提示输入密码,可直接输入,密码是不会显示出来的

#### 安装三部曲
1. `wget --no-check-certificate -O shadowsocks-all.sh https://raw.githubusercontent.com/teddysun/shadowsocks_install/master/shadowsocks-all.sh`
2. `chmod +x shadowsocks-all.sh`
3. `./shadowsocks-all.sh 2>&1 | tee shadowsocks-all.log`

接下来提示选择版本

```
Which Shadowsocks server you'd select:
1.Shadowsocks-Python
2.ShadowsocksR
3.Shadowsocks-Go
4.Shadowsocks-libev
Please enter a number (default 1):
```
可以选择3,紧接着会提示输入密码和端口号,也可以选择默认,一路回车
安装成功后,会出现
```
Congratulations, Shadowsocks-Go server install completed!
Your Server IP        :  45.32.73.59
Your Server Port      :  8989
Your Password         :  teddysun.com
Your Encryption Method:  aes-256-cfb

Welcome to visit: https://teddysun.com/486.html
Enjoy it!
```
(若安装失败,请尝试其他版本)

基础命令
- /etc/init.d/shadowsocks-go start | stop | restart | status 针对shadow操作
- nano /etc/shadowsocks-go/config.json 修改配置文件


