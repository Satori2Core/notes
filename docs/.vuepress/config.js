module.exports = {
  title: 'Yang随笔',
  description: '记录开发过程中的学习、思考与实践',
  base: '/notes/',
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  
  // 设置语言
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  
  // 设置主题
  theme: 'reco',
  
  themeConfig: {
    logo: '/logo.png',
    
    // 自动生成子侧边栏
    subSidebar: 'auto',
    
    // 启用Git时间戳
    lastUpdated: true,
    lastUpdatedText: '最后更新',
    
    // 导航栏配置
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      { text: '基础知识', link: '/foundations/', icon: 'reco-other' },
      { text: '后端技术', link: '/backend-tech/', icon: 'reco-database' },
      { text: '工程实践', link: '/engineering/', icon: 'reco-code' },
      { text: '项目实战', link: '/projects/', icon: 'reco-project' },
      { text: '学习时间线', link: '/timeLine/', icon: 'reco-date' },
      {
        text: '关于',
        icon: 'reco-user',
        items: [
          { text: '关于我', link: '/archive/about/me/' },
          { text: 'GitHub', link: 'https://github.com/Satori2Core' }
        ]
      }
    ],
    
    // 作者配置
    author: 'Yang',
    
    // 博客配置
    blogConfig: {
      socialLinks: [
        { icon: 'reco-github', link: 'https://github.com/Satori2Core' },
      ]
    },
    
    // 侧边栏配置
    sidebar: {
      '/foundations/': [
        {
          title: '基础知识',
          collapsable: false,
          children: [
            ''
          ]
        }
      ],
      '/backend-tech/': [
        {
          title: '后端技术',
          collapsable: false,
          children: [
            ''
          ]
        }
      ],
      '/engineering/': [
        {
          title: '工程实践',
          collapsable: false,
          children: [
            ''
          ]
        }
      ],
      '/projects/': [
        {
          title: '项目实战',
          collapsable: false,
          children: [
            ''
          ]
        }
      ]
    }
  },
  
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          return new Date(timestamp).toLocaleString('zh-CN', {
            timeZone: 'Asia/Shanghai',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
          });
        }
      }
    ]
  ],
  
  // 构建输出目录
  dest: 'docs/.vuepress/dist'
}