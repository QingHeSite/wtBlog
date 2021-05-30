module.exports = {
    title: '好好学习,天天向上(持续更新)',
    description: '总结 js bugfix css 兼容性',
    markdown: {
      lineNumbers: true
    },
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
                  '/core/function_throttle_debounce',
                  '/core/scroll',
                  '/core/service_worker',
                  '/core/storage',
                  '/core/scrollBar',
                  '/core/concept',
                  '/core/git',
                  '/core/browser_analysis_doc',
                  '/core/regular',
                  '/core/cross_origin_resource_sharing',
                  '/core/docker',
                  '/core/error',//常见错误解决
                  '/core/performance',//网页性能
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
    },
    plugins: [
      [
        'vuepress-plugin-comment',
        {
          choosen: 'valine', 
          // options选项中的所有参数，会传给Valine的配置
          options: {
            el: '#valine-vuepress-comment',
            appId: '21G8ftRHwJm0HSY3gASNfVts-gzGzoHsz',
            appKey: 'Q7WNJnWJOafr6ILQbdfjOptY',
            path: '<%- frontmatter.commentid || frontmatter.permalink %>'
          }
        }
      ]
    // [
    //   '@vuepress/register-components',
    //   {
    //     componentsDir: './components'
    //   }
    // ]

    ],
    head: [
      // ["link", { rel: "shortcut icon", href: "/images/favicon.ico" }],
      // ["link", { rel: "stylesheet", href: "/style/style.css" }],
  ],
}