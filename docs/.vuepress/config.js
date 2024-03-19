module.exports = {
    title: '开发笔记',
    description: '总结项目开发经验 js css 兼容性',
    keywords: '开发踩坑,面试',
    markdown: {
      lineNumbers: true
    },
    themeConfig: {
      // nav: [{}],
      sidebarDepth: 3,
        sidebar:  
        [
            // {
            //     title: '笔记',   // 必要的
            //     path: '/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            //     collapsable: false, // 可选的, 默认值是 true,
            //     displayAllHeaders: true, // 默认值：false
            //     sidebarDepth: 2,    // 可选的, 默认值是 1
            //     children: [
            //       `/core/dev`,
            //       '/core/js_handle_download_file',
            //       '/core/function_throttle_debounce',
            //       '/core/scroll',
            //       '/core/service_worker',
            //       '/core/storage',
            //       '/core/scrollBar',
            //       '/core/concept',
            //       '/core/git',
            //       '/core/browser_analysis_doc',
            //       '/core/regular',
            //       '/core/cross_origin_resource_sharing',
            //       '/core/docker',
            //       '/core/error',//常见错误解决
            //       '/core/performance',//网页性能
            //       '/core/typescript',// ts
            //       `/core/img`,
            //       `/core/node`, // 深入浅出node
            //       `/core/vim`,
            //       `/core/mysql`, // mysql
            //       `/core/site`,
            //       `/core/command`,// 服务器端一些命令
            //       `/core/net_bridge`,// vpn
            //       `/core/drag`,
            //     ]
            //   }
            "/",
              {
                title: '前端',   // 必要的
                // path: '/core/base_dev',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 2,    // 可选的, 默认值是 1
                children: [
                  `/core/base_dev/vue_doc`,
                  `/core/base_dev/dev`,
                  '/core/base_dev/js_handle_download_file',
                  '/core/base_dev/function_throttle_debounce',
                  '/core/base_dev/scroll',
                  '/core/base_dev/service_worker',
                  '/core/base_dev/storage',
                  '/core/base_dev/scrollBar',
                  '/core/base_dev/concept',
                  '/core/base_dev/git',
                  '/core/base_dev/browser_analysis_doc',
                  '/core/base_dev/regular',
                  '/core/base_dev/cross_origin_resource_sharing',
                  '/core/base_dev/docker',
                  '/core/base_dev/error',//常见错误解决
                  '/core/base_dev/performance',//网页性能
                  '/core/base_dev/typescript',// ts
                  `/core/base_dev/img`,
                  `/core/base_dev/node`, // 深入浅出node
                  `/core/base_dev/vim`,
                  `/core/base_dev/mysql`, // mysql
                  `/core/base_dev/site`,
                  `/core/base_dev/command`,// 服务器端一些命令
                  `/core/base_dev/net_bridge`,// vpn
                  `/core/base_dev/drag`,
                  `/core/base_dev/首屏加载优化`,
                ]
              }
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
            appId: 'nfyNGgDzL1IhjXeW1IEksSx8-gzGzoHsz',
            appKey: 'YlbopDS256x0kjASaTwTcvlR',
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
      ["link", { rel: "icon", href: "/favicon.ico" }],
      // ["link", { rel: "stylesheet", href: "/style/style.css" }],
  ],
}