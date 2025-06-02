module.exports = {
	title: 'Satori2Core 知识库',
	description: '知道自己在做什么，才能写出有灵魂的代码',
	// 设置主题
	theme: '@vuepress/default',
	themeConfig: {
		// 导航栏
		nav: [
			{text: '首页', link: '/'},
			{text: '关于', link: '/about'}
		]
	},
	dest: 'docs/.vuepress/dist'	// 构建输出目录
}
