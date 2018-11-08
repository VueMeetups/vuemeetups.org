const fs = require('fs');
const axios = require('axios');

console.log('Generating events...')
const staticEventsData = fs.readdirSync('./docs/.vuepress/data/').filter((fileName) => /.+\.json$/.test(fileName));
const eventsTimeline = {};

for (const fileName of staticEventsData) {
	const year = fileName.replace('.json', '');
	const fileNamePath = `./docs/.vuepress/data/${fileName}`;
	const data = fs.readFileSync(fileNamePath);
	eventsTimeline[year] = JSON.parse(data);
}

function getGetOrdinal(n) {
	const s = ['th', 'st', 'nd', 'rd'],
	v = n % 100;

	return `${n}${(s[(v-20)%10]||s[v]||s[0])}`;
}

function addEvent(event) {
	const date = new Date(event.startDate);

	const year = date.getFullYear();
	const locale = 'en-us';
	const month = date.toLocaleString(locale, { month: 'long' });

	if (!eventsTimeline[year][month]) {
		eventsTimeline[year][month] = [];
	}

	eventsTimeline[year][month].push(event);
}

async function getVueVixensEvents() {
	let response = await axios.get(`https://api.storyblok.com/v1/cdn/stories/upcoming?version=published&cv=1541163074263&token=${process.env.VV_TOKEN}`);

	return response.data.story.content.body.map((event) => ({
		date: getGetOrdinal(new Date(event.date).getDate()),
		startDate: event.date,
		endDate: event.date,
		organiser: 'Vue Vixens',
		organiserLink: 'https://vuevixens.org',
		name: event.name,
		eventLink: `https://vuevixens.org/${event.link.cached_url}`,
		type: 'workshop',
		tag: 'vuevixens',
		location: event.location,
	}));
}

function getEvents(asyncEvents) {
	asyncEvents.forEach((event) => {
		addEvent(event)
	});
}

async function main() {
	let asyncEvents = await getVueVixensEvents();
	getEvents(asyncEvents);

	for (const fileName of staticEventsData) {
		const year = fileName.replace('.json', '');
		const fileNamePath = `./docs/.vuepress/data/${fileName}`;

		fs.writeFile(fileNamePath, JSON.stringify(eventsTimeline[year], null, 2), () => {});
	}

	console.log('All events saved to JSON');
}

main();
