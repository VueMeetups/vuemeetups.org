module.exports = {
	dest: './dist',
	title: 'Vue.js Meetups',
	head: [
		['link', { rel: 'icon', href: `/favicon.png` }],
		[
			'meta',
			{
				name: 'google-site-verification',
				content: 'HAQiCIHcDWoDS-7guPKZJvq9HfPj6MSbLip7K8UQ1Rs'
			}
		]
	],
	description: 'Centralizing all Vue.js meetup efforts.',
	themeConfig: {
		repo: 'bencodezen/vue-meetups',
		nav: [
			{
				text: 'Home',
				link: '/'
			},
			{
				text: 'Find a Meetup',
				link: '/find/'
			},
			{
				text: 'Events',
				link: '/events/'
			},
			{
				text: 'Guide',
				link: '/guide/'
			},
			{
				text: 'Code of Conduct',
				link: '/code-of-conduct/'
			}
		],
		docsDir: 'docs',
		editLinks: true,
		editLinkText: 'Help us improve this page!'
	}
}
