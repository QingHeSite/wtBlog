(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{373:function(t,a,s){"use strict";s.r(a);var r=s(25),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"windows和linux中常用命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows和linux中常用命令"}},[t._v("#")]),t._v(" windows和linux中常用命令")]),t._v(" "),s("h3",{attrs:{id:"windows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[t._v("#")]),t._v(" windows")]),t._v(" "),s("h6",{attrs:{id:"查找并杀死端口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查找并杀死端口"}},[t._v("#")]),t._v(" 查找并杀死端口")]),t._v(" "),s("ol",[s("li",[t._v("查找 "),s("code",[t._v("netstat -ano | findstr 10103")])]),t._v(" "),s("li",[t._v("kill "),s("code",[t._v("taskkill -PID 25280 -F")])])]),t._v(" "),s("h3",{attrs:{id:"linux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[t._v("#")]),t._v(" linux")]),t._v(" "),s("h6",{attrs:{id:"查看80端口连接数最多的20个ip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看80端口连接数最多的20个ip"}},[t._v("#")]),t._v(" 查看80端口连接数最多的20个IP")]),t._v(" "),s("ul",[s("li",[t._v("netstat -anlp|grep 80|grep tcp|awk '{print $5}'|awk -F: '{print $1}'|sort|uniq -c|sort -nr|head -n20")])]),t._v(" "),s("h6",{attrs:{id:"统计80端口连接数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#统计80端口连接数"}},[t._v("#")]),t._v(" 统计80端口连接数")]),t._v(" "),s("ul",[s("li",[t._v('netstat -nat|grep -i "80"|wc -l')])]),t._v(" "),s("h6",{attrs:{id:"查找nginx配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查找nginx配置文件"}},[t._v("#")]),t._v(" 查找nginx配置文件")]),t._v(" "),s("ol",[s("li",[t._v("ps aux|grep nginx")])]),t._v(" "),s("hr"),t._v(" "),s("ul",[s("li",[s("code",[t._v("nginx -t")])])]),t._v(" "),s("h5",{attrs:{id:"centos-安装git"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#centos-安装git"}},[t._v("#")]),t._v(" CentOS 安装git")]),t._v(" "),s("p",[s("code",[t._v("yum install git")])]),t._v(" "),s("h5",{attrs:{id:"centos-安装-docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#centos-安装-docker"}},[t._v("#")]),t._v(" CentOS 安装 docker")]),t._v(" "),s("p",[s("code",[t._v("curl -fsSL https://get.docker.com | bash -s docker --mirror aliyun")])]),t._v(" "),s("p",[t._v("启动docker服务\n"),s("code",[t._v("ststemctl start docker")])]),t._v(" "),s("p",[t._v("查看内网ip\n"),s("code",[t._v("ifconfig | grep inet")])])])}),[],!1,null,null,null);a.default=e.exports}}]);