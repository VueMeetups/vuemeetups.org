<template>
	<div
		v-if="isPast(event.endDate) === past"
		class="event">
		<span class="event__type">{{ event.type }}</span>
		<div>
			<h5 class="event__title"><a :href="event.eventLink" target="_blank" rel="noopener noreferrer">{{ event.name }}</a></h5>
			<p
				v-if="event.organiser"
				class="event__organiser">by <a :href="event.organiserLink" target="_blank" rel="noopener noreferrer">{{ event.organiser }}</a></p>
			<p class="event__date">{{ month }} {{event.date }} {{ event.time }}</p>
		</div>
	</div>
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

<style>
.event {
	border: 1px solid #eee;
	padding: 1rem 1.5rem;
	margin: 0 0 10px;
	border-radius: 5px;
}

.event__type {
	background: #eee;
	padding: 0.2rem;
	border-radius: 5px;
	font-size: 12px;
	text-transform: uppercase;
	margin: 0 0 .5rem;
	display: inline-block;
}

.event__title {
	font-size: 1.1rem;
	margin: 10px 0 0;
}

.event__organiser {
	margin-top: 5px;
}

.event__date {
	font-size: 0.9rem;
	margin-bottom: 0;
}
</style>
