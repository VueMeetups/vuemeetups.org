<template>
	<div>
		<slot/>
		<template v-for="(timeline, year) in events">
			<h3>{{ year }}</h3>
			<template
				v-for="(events, month) in timeline"
				v-if="events.length">
				<h4>{{ month }}</h4>
				<ul>
					<li  v-for="event in events">
					{{ month }} {{event.date }} {{ event.time }}
					<template v-if="event.organiser">by <a :href="event.organiserLink" target="_blank" rel="noopener noreferrer">{{ event.organiser }}</a></template>
					- <a :href="event.eventLink" target="_blank" rel="noopener noreferrer">{{ event.name }}</a>
					</li>
				</ul>
			</template>
		</template>
	</div>
</template>

<script>
import eventsTimeline from '../data';
import { isPast } from '../utils';

export default {
	props: {
		past: {
			type: Boolean,
			default: false
		}
	},

	computed: {
		events() {
			const events = {};

			Object.keys(eventsTimeline).forEach((year) => {
				Object.keys(eventsTimeline[year]).forEach((month) => {
					eventsTimeline[year][month].forEach((event) => {
						if (isPast(event.endDate) === this.past) {
							if (!events[year]) {
								events[year] = {};
							}
							if (!events[year][month]) {
								events[year][month] = [];
							}
							events[year][month].push(event);
						}
					});
				});
			});

			return events;
		}
	}
}
</script>
