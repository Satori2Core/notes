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
      {
        text: '基础知识',
        icon: 'reco-other',
        items: [
          { text: 'Go语言核心', link: '/foundations/go-core/' },
          { text: '数据结构', link: '/foundations/data-structures/' },
          { text: '算法', link: '/foundations/algorithms/' }
        ]
      },
      {
        text: '后端技术',
        icon: 'reco-database',
        items: [
          { text: '数据库', link: '/backend-tech/database/' },
          { text: '缓存', link: '/backend-tech/cache/' },
          { text: '消息队列', link: '/backend-tech/message-queue/' },
          { text: '微服务', link: '/backend-tech/micro-services/' },
          { text: 'API设计', link: '/backend-tech/api-design/' }
        ]
      },
      {
        text: '工程实践',
        icon: 'reco-code',
        items: [
          { text: '代码设计', link: '/engineering/code-design/' },
          { text: '测试', link: '/engineering/testing/' },
          { text: 'CI/CD', link: '/engineering/ci-cd/' },
          { text: '架构设计', link: '/engineering/architecture/' }
        ]
      },
      {
        text: '项目实战',
        icon: 'reco-project',
        items: [
          { text: '小型项目', link: '/projects/small/' },
          { text: '中型项目', link: '/projects/medium/' },
          { text: '大型项目', link: '/projects/large/' }
        ]
      },
      {
        text: '学习笔记',
        link: '/notes/',
        icon: 'reco-book'
      },
      {
        text: '资源收藏',
        link: '/resources/',
        icon: 'reco-favor'
      },
      {
        text: '学习时间线',
        link: '/timeLine/',
        icon: 'reco-date'
      },
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
            '',
            'go-core/',
            'data-structures/',
            'algorithms/'
          ]
        }
      ],
      '/backend-tech/': [
        {
          title: '后端技术',
          collapsable: false,
          children: [
            '',
            'database/',
            'cache/',
            'message-queue/',
            'micro-services/',
            'api-design/'
          ]
        }
      ],
      '/engineering/': [
        {
          title: '工程实践',
          collapsable: false,
          children: [
            '',
            'code-design/',
            'testing/',
            'ci-cd/',
            'architecture/'
          ]
        }
      ],
      '/projects/': [
        {
          title: '项目实战',
          collapsable: false,
          children: [
            '',
            'small/',
            'medium/',
            'large/'
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