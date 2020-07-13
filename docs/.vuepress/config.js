module.exports = {
    title: '好好学习,天天向上',
    description: '总结 js bugfix css 兼容性',
    themeConfig: {
        sidebar:  
        [
            {
                title: '笔记',   // 必要的
                path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 0,    // 可选的, 默认值是 1
                children: [
                  '/core/js_handle_download_file',
                  '/core/scroll',
                  '/core/service_worker',
                  '/core/storage',
                ]
              }

            // name: '测试',
            // title: 'scroll问题',   // 必要的
            // path: '/scroll/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            // sidebarDepth: 0,    // 可选的, 默认值是 1
            // children: [
            //   '/scroll/scroll'
            // ]
        ],
    }
}