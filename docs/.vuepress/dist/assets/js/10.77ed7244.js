(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{181:function(s,a,t){"use strict";t.r(a);var e=t(0),r=Object(e.a)({},(function(){var s=this.$createElement;this._self._c;return this._m(0)}),[function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("div",{staticClass:"content"},[t("h2",{attrs:{id:"windows和linux中常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows和linux中常用命令"}},[s._v("#")]),s._v(" windows和linux中常用命令")]),s._v(" "),t("h3",{attrs:{id:"windows"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[s._v("#")]),s._v(" windows")]),s._v(" "),t("h6",{attrs:{id:"查找并杀死端口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查找并杀死端口"}},[s._v("#")]),s._v(" 查找并杀死端口")]),s._v(" "),t("ol",[t("li",[s._v("查找 "),t("code",[s._v("netstat -ano | findstr 10103")])]),s._v(" "),t("li",[s._v("kill "),t("code",[s._v("taskkill -PID 25280 -F")])])]),s._v(" "),t("h3",{attrs:{id:"linux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[s._v("#")]),s._v(" linux")]),s._v(" "),t("h4",{attrs:{id:"安装nginx-centos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装nginx-centos"}},[s._v("#")]),s._v(" 安装nginx(CentOs)")]),s._v(" "),t("ol",[t("li",[s._v("安装: 使用yum,"),t("code",[s._v("sudo yum -y install nginx")]),s._v("\nyum 进行 Nginx 安装时，Nginx 配置文件在 /etc/nginx 目录下")]),s._v(" "),t("li",[s._v("使用:")])]),s._v(" "),t("h6",{attrs:{id:"查看80端口连接数最多的20个ip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看80端口连接数最多的20个ip"}},[s._v("#")]),s._v(" 查看80端口连接数最多的20个IP")]),s._v(" "),t("ul",[t("li",[s._v("netstat -anlp|grep 80|grep tcp|awk '{print $5}'|awk -F: '{print $1}'|sort|uniq -c|sort -nr|head -n20")])]),s._v(" "),t("h6",{attrs:{id:"统计80端口连接数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#统计80端口连接数"}},[s._v("#")]),s._v(" 统计80端口连接数")]),s._v(" "),t("ul",[t("li",[s._v('netstat -nat|grep -i "80"|wc -l')])]),s._v(" "),t("h6",{attrs:{id:"查找linux上所有进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查找linux上所有进程"}},[s._v("#")]),s._v(" 查找linux上所有进程")]),s._v(" "),t("p",[t("code",[s._v("ps auxw")])]),s._v(" "),t("h6",{attrs:{id:"查找所有node进程详情"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查找所有node进程详情"}},[s._v("#")]),s._v(" 查找所有node进程详情")]),s._v(" "),t("p",[t("code",[s._v("ps aux|grep node")])]),s._v(" "),t("h6",{attrs:{id:"查找nginx配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查找nginx配置文件"}},[s._v("#")]),s._v(" 查找nginx配置文件")]),s._v(" "),t("ol",[t("li",[s._v("ps aux|grep nginx")])]),s._v(" "),t("hr"),s._v(" "),t("ul",[t("li",[t("code",[s._v("nginx -t")])])]),s._v(" "),t("h6",{attrs:{id:"nginx重启"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx重启"}},[s._v("#")]),s._v(" nginx重启")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("nginx -s reload")])])]),s._v(" "),t("h5",{attrs:{id:"centos-安装git"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos-安装git"}},[s._v("#")]),s._v(" CentOS 安装git")]),s._v(" "),t("p",[t("code",[s._v("yum install git")])]),s._v(" "),t("h5",{attrs:{id:"centos-安装-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos-安装-docker"}},[s._v("#")]),s._v(" CentOS 安装 docker")]),s._v(" "),t("p",[t("code",[s._v("curl -fsSL https://get.docker.com | bash -s docker --mirror aliyun")])]),s._v(" "),t("p",[s._v("启动docker服务\n"),t("code",[s._v("ststemctl start docker")])]),s._v(" "),t("p",[s._v("查看内网ip\n"),t("code",[s._v("ifconfig | grep inet")])]),s._v(" "),t("h5",{attrs:{id:"文件操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件操作"}},[s._v("#")]),s._v(" 文件操作")]),s._v(" "),t("p",[s._v("拷贝文件 保持层级")]),s._v(" "),t("p",[t("code",[s._v("--parents")]),s._v("保存层级结构")]),s._v(" "),t("p",[t("code",[s._v("cp --parents ./b/**/*.txt ./a")])]),s._v(" "),t("h3",{attrs:{id:"mac安装autossh-记住密码-保持连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac安装autossh-记住密码-保持连接"}},[s._v("#")]),s._v(" mac安装autossh 记住密码+保持连接")]),s._v(" "),t("p",[s._v("使用mac自带的terminal连接服务器,一段时间不用会自动断开连接,再使用的话需要手动连接就比较麻烦,安装autossh可以解决此问题")]),s._v(" "),t("h5",{attrs:{id:"安装autossh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装autossh"}},[s._v("#")]),s._v(" 安装autossh")]),s._v(" "),t("ol",[t("li",[s._v("下载")])]),s._v(" "),t("div",{staticClass:"language-terminal line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git clone https://github.com/wufeifei/autossh.git\nsudo cp autossh/autossh /usr/local/bin/\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("创建配置文件")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("vi ~/.autosshrc\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("配置文件内容")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("server_name|192.168.1.110|root|password|port|is_bastion\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("示例(配置文件)")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("front-end|192.168.1.1|root|password|22|1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h5",{attrs:{id:"mac配置ssh长连接不断开"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mac配置ssh长连接不断开"}},[s._v("#")]),s._v(" mac配置ssh长连接不断开")]),s._v(" "),t("ol",[t("li",[s._v("修改本机配置文件")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("sudo vim /etc/ssh/ssh_config\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("增加内容")])]),s._v(" "),t("ul",[t("li",[s._v("ServerAliveInterval 10 表示10s发送一次空包")]),s._v(" "),t("li",[s._v("ServerAliveCountMax 最多3次无法接受到服务器响应自动断开")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("ServerAliveCountMax 3\nServerAliveInterval 10\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])}],!1,null,null,null);a.default=r.exports}}]);