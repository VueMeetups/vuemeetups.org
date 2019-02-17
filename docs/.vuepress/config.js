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
	ga: 'UA-119995356-1',
	description: 'Centralizing all Vue.js meetup efforts.',
	themeConfig: {
		repo: 'vuejs/events',
		search: false,
		lastUpdated: 'Last Updated',
		nav: [
			{
				text: 'Find a Meetup',
				link: 'https://events.vuejs.org/meetups/'
			},
			{
				text: 'Events',
				link: 'https://events.vuejs.org/events/#meetups'
			},
			{
				text: 'Resources',
				items: [
					{
						text: 'Getting Started',
						link: 'https://events.vuejs.org/resources/#getting-started'
					},
					{
						text: "Organizers' Handbook",
						link: 'https://events.vuejs.org/resources/#organizers-handbook'
					},
					{
						text: "Speakers' Handbook",
						link: 'https://events.vuejs.org/resources/#speakers-handbook'
					},
					{
						text: 'Code of Conduct',
						link: 'https://events.vuejs.org/code-of-conduct/'
					}
				]
			},
			{
				text: 'Contact',
				items: [
					{
						text: 'Twitter',
						link: 'https://www.twitter.com/vuemeetups'
					},
					{
						text: 'Discord',
						link: 'https://vue-land.js.org/'
					}
				]
			}
		],
		docsDir: 'docs',
		editLinks: true,
		editLinkText: 'Help us improve this page!'
	}
}
