var plugins = require("./js/plugins");

module.exports = {
  title: "Pioneer",
  description: 'Nothing is impossible for a willing heart!',
  dest: 'public',
  port: '8888',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "/js/jquery.js"
    }],
    /*   ["script", {
        "language": "javascript",
        "type": "text/javascript",
        "src": "/js/MouseClickEffect.js"
      }], */
  ],
  theme: 'reco',
  themeConfig: {
    noFoundPageByTencent: false,
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      // { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      {
        text: 'Front',
        icon: 'reco-api',
        items: [
          { text: 'Vue', link: '/front/vue/' },
          { text: 'Css', link: '/front/css/' },
          { text: 'Js', link: '/front/js/' },
          { text: 'Node', link: '/front/node/' },
        ]
      },
      {
        text: 'InterView',
        icon: 'reco-coding',
        items: [
          { text: '基础题', link: '/front/interview/base' },
        ]
      },
      {
        text: 'Contact',
        icon: 'reco-message',
        items: [
          { text: 'GitHub', link: 'https://github.com/pioneer22', icon: 'reco-github' }
        ]
      }
    ],
    sidebar: {
      '/front/vue/': [
        '',
        'vue-elegant-wrtie',
        'vue-config',
        'vue-theory',
        'vuex',
        'axios',
        'Promise'
      ],
      '/front/css/': [
        ''
      ],
      '/front/js/': [
        '',
        'mst',
        'ES6'
      ],
      '/front/node/': [
        '',
      ]
    },
    type: 'blog',
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: '分类' // 默认 “分类”
      },
      /*  tag: {
         location: 3, // 在导航栏菜单中所占的位置，默认3
         text: 'Tag' // 默认 “标签”
       } */
    },
    friendLink: [
      {
        title: '闪现上空篮',
        desc: 'Enjoy when you can, and endure when you must.',
        email: '260245463@qq.com',
        link: 'https://www.recoluan.com'
      },
      {
        title: 'pioneer-summary',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar: "/images/app/logo.jpg",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
    ],
    logo: '/images/app/logo.jpg',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'pioneer',
    // 作者头像
    authorAvatar: '/images/app/logo.jpg',
    // 备案号
    record: 'xxxx',
    // 项目开始时间
    startYear: '2022',
    // 代码主题
    codeTheme: 'tomorrow',
    // repo: "pioneer22.github.io"
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: plugins
}  
