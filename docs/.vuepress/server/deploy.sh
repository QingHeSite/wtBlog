echo '--start deploy'
# serverProPath = '/root/front_end/wtBlog'
# projPath = '/Users/wangtao/Desktop/Wt_Front_End/wtBlog'
# path=$(cd "$(dirname $0)";pwd)
# deploy.sh
# cd '/Users/wangtao/Desktop/Wt_Front_End/wtBlog/'
# cd $serverProPath
# echo $(cd "$(dirname "$0")"; pwd)
# echo "当前目录是：${path}"
# Some of Update Command
# git ch master
# 为了防止冲突发生，我会现在develop分支开发，为了防止远程仓库被强制更新，
# 我选择切换至早期的commit，然后重新拉下来源码
# git reset --hard
# git pull
# pm2 start ./docs/.vuepress/server/index.js --name=page


PROJECT_PATH=/root/front_end/wtBlog
git status
git restet --hard
git pull
git status
pm2 restart 0

echo '--end deploy'