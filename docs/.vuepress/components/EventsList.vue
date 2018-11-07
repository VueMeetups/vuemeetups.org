<template>
	<div>
		<div class="events-list__filters">
			<span>Show:</span>

			<label
				v-for="option in typesOptions"
				:key="option.value"
				class="events-list__filter"
				:class="{ 'is-active': type === option.value }">
				<input
					type="radio"
					v-model="type"
					:value="option.value"
					class="events-list__input">
				<span class="events-list__label-text">
					{{ option.label }}
				</span>
			</label>
		</div>

		<events-timeline :type="type" :all-events="allEvents">

			<slot name="upcoming"></slot>

		</events-timeline>

		<events-timeline :past="true" :type="type" :all-events="allEvents">

			<slot name="past"></slot>

		</events-timeline>
	</div>
</template>

<script>
import { getGetOrdinal } from '../utils';
import eventsTimeline from '../data';
import merge from 'lodash.merge';

export default {
	data() {
		return {
			type: '',
			typesOptions: [{
				value: '',
				label: 'All',
			}, {
				value: 'meetup',
				label: 'Meetups',
			}, {
				value: 'conference',
				label: 'Conference',
			}, {
				value: 'workshop',
				label: 'Workshop',
			}],
			allEvents: {},
		};
	},


	async created() {
		let response = await fetch(`https://api.storyblok.com/v1/cdn/stories/upcoming?version=published&cv=1541163074263&token=IjKA8M0XQusG4z3ceA37lwtt`);
		let data = await response.json();
		const fetchedEvents = {};

		data.story.content.body.forEach((event) => {
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

		this.allEvents = merge(eventsTimeline, fetchedEvents);
	}
}
</script>

<style>
.events-list__filters {
	padding: 3rem 0;
	border-top: 1px solid #eaecef;
	margin-top: 3rem;
}

.events-list__input {
	position: absolute;
	opacity: 0;
	z-index: -1;
}

.events-list__input:focus + .events-list__label-text {
	outline-style: auto;
}

.events-list__filter {
	font-weight: 500;
	cursor: pointer;
	margin: 0 1.5rem;
}

.events-list__filter:hover,
.events-list__filter.is-active {
	color: #3eaf7c;
}
</style>
