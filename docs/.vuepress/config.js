module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
        sidebar:  
        [
            {
                title: '笔记',   // 必要的
                path: '/core/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  '/core/scroll', '/core/service_worker'
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