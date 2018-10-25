<template>
	<div class="events-timeline">
		<slot/>
		<div
			v-for="(timeline, year) in events"
			v-if="isDatePast(`${year}/12/31`)">
			<h3>{{ year }}</h3>
			<div
				v-for="(events, month) in timeline"
				v-if="events.length && isDatePast(`${year}/${month}/30`)">
				<h4>{{ month }}</h4>
				<div class="events-timeline__list">
					<event-item
						v-for="(event, index) in events"
						class="events-timeline__item"
						:key="index"
						:past="past"
						:month="month"
						:event="event"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import eventsTimeline from '../data';
import EventItem from './EventItem';
import { isPast } from '../utils';

export default {
	components: {
		EventItem,
	},

	props: {
		past: {
			type: Boolean,
			default: false
		}
	},

	data() {
		return {
			events: eventsTimeline,
		};
	},

	methods: {
		isDatePast(date) {
			return isPast(date) === this.past;
		}
	}
}
</script>

<style>
.events-timeline__list {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
}

.events-timeline__item {
	flex-grow: 1;
	flex-basis: 40%;
	max-width: 40%;
}

@media (max-width: 900px) {
	.events-timeline__item {
		flex-basis: 100%;
		max-width: 100%;
	}
}
</style>
