---
permalink: '/core/docker/'
---

## Docker

#### 基本步骤
1. 首先创建Dockerfile文件
2. 执行 `docker image build -t docker-demo .`
其中`docker-demo`为自取的镜像名称,还要注意末尾的`.`,标识在当前目录
3. 接下来可执行`docker image ls`查看新生产的image文件
4. 启动容器 `docker container run`, 此命令会从image文件生产容器
  `docker container run -p 8000:3000 -it docker-demo:0.0.1 /bin/bash`
5. 查看所有容器 `docker ps -a`

  ##### 进入容器命令
  `docker exec -it Container-ID /bin/bash`
