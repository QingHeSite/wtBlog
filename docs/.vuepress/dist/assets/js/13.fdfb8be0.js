(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{379:function(s,a,n){"use strict";n.r(a);var t=n(25),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"docker"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker"}},[s._v("#")]),s._v(" Docker")]),s._v(" "),n("h4",{attrs:{id:"基本步骤"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基本步骤"}},[s._v("#")]),s._v(" 基本步骤")]),s._v(" "),n("ol",[n("li",[s._v("首先创建Dockerfile文件")]),s._v(" "),n("li",[s._v("执行 "),n("code",[s._v("docker image build -t docker-demo .")]),s._v("\n其中"),n("code",[s._v("docker-demo")]),s._v("为自取的镜像名称,还要注意末尾的"),n("code",[s._v(".")]),s._v(",标识在当前目录")]),s._v(" "),n("li",[s._v("接下来可执行"),n("code",[s._v("docker image ls")]),s._v("查看新生产的image文件")]),s._v(" "),n("li",[s._v("启动容器 "),n("code",[s._v("docker run -itd --name ${容器名} -v /root/pre-env:/root/pre-env -p 10104:80 bbw:v1 sh")]),s._v(", 此命令会从image文件生产容器\n"),n("code",[s._v("docker container run -p 8000:3000 -it docker-demo:0.0.1 /bin/bash")])]),s._v(" "),n("li",[s._v("查看所有容器 "),n("code",[s._v("docker ps -a")])])]),s._v(" "),n("h5",{attrs:{id:"进入容器命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#进入容器命令"}},[s._v("#")]),s._v(" 进入容器命令")]),s._v(" "),n("p",[n("code",[s._v("docker exec -it Container-ID /bin/bash")])]),s._v(" "),n("h5",{attrs:{id:"基础-dockerfile-示例"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基础-dockerfile-示例"}},[s._v("#")]),s._v(" 基础 Dockerfile 示例")]),s._v(" "),n("div",{staticClass:"language-dockerfile line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" oberonamsterdam/pm2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("git"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("12"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("alpine\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" mkdir "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("p /usr/src/app/node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("sass\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v("  node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("sass.node /usr/src/app/node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("sass\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ENV")]),s._v(" SASS_BINARY_PATH /usr/src/app/node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("sass/node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("sass.node\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" yarn global add lerna \\\n  && yarn global add nrm \\\n  && yarn global add typescript \\\n  && yarn global add ts"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("node \\\n  && yarn global add node"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("sass\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXPOSE")]),s._v(" 80\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VOLUME")]),s._v(" /root/front"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("end\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /root\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sh"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ls"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-a"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);