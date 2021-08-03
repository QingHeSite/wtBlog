---
permalink: '/core/command/'
---
## windows和linux中常用命令
### windows
###### 查找并杀死端口
1. 查找 `netstat -ano | findstr 10103`
2. kill `taskkill -PID 25280 -F`

### linux
###### 查看80端口连接数最多的20个IP
- netstat -anlp|grep 80|grep tcp|awk '{print $5}'|awk -F: '{print $1}'|sort|uniq -c|sort -nr|head -n20

###### 统计80端口连接数
- netstat -nat|grep -i "80"|wc -l

###### 查找nginx配置文件
1. ps aux|grep nginx
---
- `nginx -t`

##### CentOS 安装git
`yum install git`
 