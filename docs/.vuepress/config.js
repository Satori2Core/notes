module.exports = {
	title: 'Satori2Core 知识库',
	description: '知道自己在做什么，才能写出有灵魂的代码',
	base: '/notes/',
	// 设置语言
	locales: {
		'/': {
			land: 'zh-CN'
		}
	},
	// 设置主题
	theme: 'reco',
	themeConfig: {
		// 导航栏
		nav: [
			{text: '首页', link: '/'},
			{
				text: '关于', 
				items: [
					{text: '关于博主', link: '/about/me'},
					{text: 'Github', link: 'https://github.com/Satori2Core'}
				]	
			}
		],
		// 开启目录
		subSidebar: 'auto',
	},
	dest: 'docs/.vuepress/dist'	// 构建输出目录
}
