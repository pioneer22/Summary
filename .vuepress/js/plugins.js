module.exports = [
  ['flowchart'], // 流程图插件
  /*  ['meting', { // 音乐插件
     //metingApi: "https://meting.sigure.xyz/api/music",
     meting: {
       server: "netease", // 网易
       type: "playlist", // 读取歌单
       mid: "2227373273",
     },
     aplayer: { // 不配置该项的话不会出现全局播放器
       fixed: true, // 吸底模式
       mini: true,
       autoplay: true,// 自动播放 
       listFolded: true, // 歌曲栏折叠
       theme: '#f9bcdd', // 颜色
       order: 'random', // 播放顺序为随机
       volume: 0.2, // 初始音量
       lrcType: 0 // 关闭歌词显示
     },
     mobile: {
       cover: false, // 手机端去掉cover图
     }
   }],
   ["@vuepress-yard/vuepress-plugin-window", { // 公告插件
     title: "公告",
     contentInfo: {
       title: "欢迎来到Pioneer的个人博客",
       needImg: true,
       imgUrl: "/images/app/logo.jpg",
       content: "喜欢可以添加收藏哦~",
       contentStyle: {
         paddingBottom: '4px',
       }
     },
     bottomInfo: {
       btnText: '关于',
       linkTo: 'https://github.com/pioneer22'
     }, // 底部按钮信息
     windowStyle: {
       right: '6px',
       borderWidth: '0',
     }, // 展示框体的样式
     closeOnce: true,
     hideRouteList: [], // 某些路由下隐藏
   }],
   [
     "ribbon",  //彩带背景
     {
       size: 90,     // width of the ribbon, default: 90
       opacity: 0.8, // opacity of the ribbon, default: 0.3
       zIndex: -1    // z-index property of the background, default: -1
     }
   ],
   [
     "cursor-effects", //鼠标点击特效
     {
       size: 3,                    // size of the particle, default: 2
       shape: ['circle'],  // shape of the particle, default: 'star'
       zIndex: 999999999           // z-index property of the canvas, default: 999999999
     }
   ], */
  [
    "dynamic-title", //动态标题
    {
      showIcon: "/favicon.ico",
      showText: "(/≧▽≦/)NICE！又好了！",
      hideIcon: "/failure.ico",
      hideText: "(●—●)OMG，崩溃啦！",
      recoverTime: 2000
    }
  ],
  /*  [
     '@vuepress\plugin-medium-zoom', { //图片放大插件
       selector: '.page img',
       delay: 1000,
       options: {
         margin: 24,
         background: 'rgba(25,18,25,0.9)',
         scrollOffset: 40
       }
     }
   ], */
]