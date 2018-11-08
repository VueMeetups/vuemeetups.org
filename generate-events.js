const fs = require('fs');
const axios = require('axios');
const merge = require('lodash.merge');

const staticEventsData = fs.readdirSync('./docs/.vuepress/data/').filter((fileName) => /.+\.json$/.test(fileName));

const getGetOrdinal = (n) => {
	const s = ['th', 'st', 'nd', 'rd'],
	v = n % 100;

	return `${n}${(s[(v-20)%10]||s[v]||s[0])}`;
}

async function getVueVixensEvents(params) {
	const fetchedEvents = {};
	let response = await axios.get(`https://api.storyblok.com/v1/cdn/stories/upcoming?version=published&cv=1541163074263&token=${process.env.VV_TOKEN}`);

	const apiData = response.data;

	apiData.story.content.body.forEach((event) => {
		const date = new Date(event.date);

		const year = date.getFullYear();
		const locale = 'en-us';
		const month = date.toLocaleString(locale, { month: 'long' });

		if (!fetchedEvents[year]) {
			fetchedEvents[year] = {};
		}

		if (!fetchedEvents[year][month]) {
			fetchedEvents[year][month] = [];
		}

		fetchedEvents[year][month].push({
			date: getGetOrdinal(date.getDate()),
			startDate: event.date,
			endDate: event.date,
			organiser: 'Vue Vixens',
			organiserLink: 'https://vuevixens.org',
			name: event.name,
			eventLink: `https://vuevixens.org/${event.link.cached_url}`,
			type: 'workshop',
			tag: 'vuevixens',
			location: event.location,
		});
	});

	return fetchedEvents;
}

function mergeEvents(asyncEvents) {
	for (const fileName of staticEventsData) {
		const year = fileName.replace('.json', '');
		const fileNamePath = `./docs/.vuepress/data/${fileName}`;
		const data = fs.readFileSync(fileNamePath);
		const eventsTimeline = JSON.parse(data);
		const mergedEvents = merge(eventsTimeline, asyncEvents[year]);

		fs.writeFile(fileNamePath, JSON.stringify(mergedEvents, null, 2), () => {});
	}
}

async function main() {
	let fetchedEvents = await getVueVixensEvents();
	mergeEvents(fetchedEvents);
}

main();
