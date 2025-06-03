module.exports = {
	title: 'Satori2Core 知识库',
	description: '知道自己在做什么，才能写出有灵魂的代码',
	base: '/notes/',
	head: [
		['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
	],
	// 设置语言
	locales: {
		"/": {
			lang: "zh-CN",
		},
	},
	// 设置主题
	theme: 'reco',

	themeConfig: {
		logo: '/head.png',
		// 在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
		subSidebar: 'auto',
		nav: [
			{ text: '首页', link: '/', icon: 'reco-home' },
			{ text: 'TimeLine', link: '/timeline/', icon: 'reco-date' }
		],
		// 作者配置
		author: 'Satori2Core',
		// 博客配置
		blogConfig: {
			category: {
				location: 3,
				text: 'Category'
			},
			tag: {
				location: 4,
				text: 'Tags'
			},
			socialLinks: [
				{ icon: 'reco-github', link: 'https://github.com/Satori2Core' },
			]
		},

	},


	// themeConfig: {
	// 	// 导航栏
	// 	nav: [
	// 		{ text: '首页', link: '/' },
	// 		{
	// 			text: '关于',
	// 			items: [
	// 				{ text: '关于博主', link: 'notes/about/me' },
	// 				{ text: 'Github', link: 'https://github.com/Satori2Core' }
	// 			]
	// 		}
	// 	],
	// 	// 开启目录
	// 	subSidebar: 'auto',

	// 	// 从左侧侧边栏
	// 	sidebar: [
	// 		{
	// 			title: '关于知识库',
	// 			path: '/noteroot/about/关于更新计划',
	// 			collapsable: false,
	// 			children: [
	// 				{ title: "关于更新计划", path: "/noteroot/about/关于更新计划" }
	// 			]
	// 		},
	// 		{
	// 			title: 'Go 语言深入',
	// 			path: '/noteroot/go-notes/Go语言基础',
	// 			collapsable: true,
	// 			children: [
	// 				{ title: "Go语言基础", path: "/noteroot/go-notes/Go语言基础" }
	// 			]
	// 		},
	// 		{
	// 			title: '设计模式',
	// 			path: '/noteroot/designpattern/责任连模式',
	// 			collapsable: true,
	// 			children: [
	// 				{ title: "责任连模式", path: "/noteroot/designpattern/责任连模式" }
	// 			]
	// 		},
	// 		{
	// 			title: 'MiniBlog项目实战',
	// 			path: '/noteroot/MiniBlog/关于项目',
	// 			collapsable: true,
	// 			children: [
	// 				{ title: "关于项目", path: "/noteroot/MiniBlog/关于项目" },
	// 			]
	// 		},
	// 	]
	// },
	dest: 'docs/.vuepress/dist'	// 构建输出目录
}
