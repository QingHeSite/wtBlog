module.exports = {
    title: '开发笔记',
    description: '总结项目开发经验 js css 兼容性',
    keywords: '开发踩坑,面试',
    markdown: {
      lineNumbers: true
    },
    themeConfig: {
      // nav: [{}],
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
                  '/core/typescript',// ts
                  `/core/img`,
                  `/core/node`, // 深入浅出node
                  `/core/mysql`, // mysql
                  `/core/site`,
                  `/core/command`,// 服务器端一些命令
                  `/core/net_bridge`,// vpn
                  `/core/drag`
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
      ],
      ['sitemap', {
        hostname: "https://www.wangtao.plus",
        // 排除无实际内容的页面
        exclude: ["/404.html"]
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