---
permalink: '/core/command/'
---
## windows和linux中常用命令
### windows
###### 查找并杀死端口
1. 查找 `netstat -ano | findstr 10103`
2. kill `taskkill -PID 25280 -F`

### linux
#### 安装nginx(CentOs)
1. 安装: 使用yum,`sudo yum -y install nginx`
    yum 进行 Nginx 安装时，Nginx 配置文件在 /etc/nginx 目录下
2. 使用: 



###### 查看80端口连接数最多的20个IP
- netstat -anlp|grep 80|grep tcp|awk '{print $5}'|awk -F: '{print $1}'|sort|uniq -c|sort -nr|head -n20

###### 统计80端口连接数
- netstat -nat|grep -i "80"|wc -l

###### 查找linux上所有进程
`ps auxw`
###### 查找所有node进程详情
`ps aux|grep node`
###### 查找nginx配置文件
1. ps aux|grep nginx
---
- `nginx -t`

###### nginx重启
- `nginx -s reload`

##### CentOS 安装git
`yum install git`

##### CentOS 安装 docker

`curl -fsSL https://get.docker.com | bash -s docker --mirror aliyun`

启动docker服务
`ststemctl start docker`

查看内网ip
`ifconfig | grep inet`

 