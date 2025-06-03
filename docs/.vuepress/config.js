module.exports = {
	title: 'Satori2Core 知识库',
	description: '知道自己在做什么，才能写出有灵魂的代码',
	base: '/notes/',
	// 设置语言
	locales: {
		'/': {
			land: 'zh-CN',
		}
	},
	// 设置主题
	theme: 'reco',
	themeConfig: {
		// 导航栏
		nav: [
			{ text: '首页', link: '/' },
			{
				text: '关于',
				items: [
					{ text: '关于博主', link: '/about/me' },
					{ text: 'Github', link: 'https://github.com/Satori2Core' }
				]
			}
		],
		// 开启目录
		subSidebar: 'auto',

		// 从左侧侧边栏
		sidebar: [
			{
				title: '关于知识库',
				path: '/noteroot/about/关于更新计划',
				collapsable: false,
				children: [
					{ title: "关于更新计划", path: "/noteroot/about/关于更新计划" }
				]
			},
			{
				title: 'Go 语言深入',
				path: '/noteroot/go-notes/Go语言基础',
				collapsable: true,
				children: [
					{ title: "Go语言基础", path: "/noteroot/go-notes/Go语言基础" }
				]
			},
			{
				title: '设计模式',
				path: '/noteroot/designpattern/责任连模式',
				collapsable: true,
				children: [
					{ title: "责任连模式", path: "/noteroot/designpattern/责任连模式" }
				]
			},
			{
				title: 'MiniBlog项目实战',
				path: '/noteroot/MiniBlog/关于项目',
				collapsable: true,
				children: [
					{ title: "关于项目", path: "/noteroot/MiniBlog/关于项目" },
				]
			},
		]
	},
	dest: 'docs/.vuepress/dist'	// 构建输出目录
}
