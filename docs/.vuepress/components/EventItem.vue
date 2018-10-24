<template>
	<li v-if="isPast(event.endDate) === past">
		{{ month }} {{event.date }} {{ event.time }}
		<template v-if="event.organiser">by <a :href="event.organiserLink" target="_blank" rel="noopener noreferrer">{{ event.organiser }}</a></template>
		- <a :href="event.eventLink" target="_blank" rel="noopener noreferrer">{{ event.name }}</a>
	</li>
</template>

<script>
import { isPast } from '../utils';

export default {
	props: {
		event: {
			type: Object,
			required: true,
		},
		past: {
			type: Boolean,
			default: false,
		},
		month: {
			type: String,
			required: true,
		}
	},

	methods: {
		isPast(date) {
			return isPast(date);
		}
	}
}
</script>
