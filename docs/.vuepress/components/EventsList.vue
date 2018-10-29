<template>
	<div>
		<h2>Filter by: </h2>
		<div class="events-list__filters">
			<span>Show:</span>
			<input
				type="radio"
				v-model="type"
				id="all"
				value=""
				class="events-list__input"
			>
			<label
				for="all"
				class="events-list__filter"
				:class="{ 'is-active': this.type === '' }">All</label>

			<input
				type="radio"
				v-model="type"
				id="meetup"
				value="meetup"
				class="events-list__input"
			>
			<label
				for="meetup"
				class="events-list__filter"
				:class="{ 'is-active': this.type === 'meetup' }">Meetups</label>

			<input
				type="radio"
				v-model="type"
				id="conference"
				value="conference"
				class="events-list__input"
			>
			<label
				for="conference"
				class="events-list__filter"
				:class="{ 'is-active': this.type === 'conference' }">Conference</label>
		</div>

		<events-timeline :type="type">

			<slot name="upcoming"></slot>

		</events-timeline>

		<events-timeline :past="true" :type="type">

			<slot name="past"></slot>

		</events-timeline>
	</div>
</template>

<script>
export default {
	data() {
		return {
			type: ''
		}
	}
}
</script>

<style>
.events-list__filters {
	margin: 2rem 0;
}

.events-list__input {
	position: absolute;
	opacity: 0;
	z-index: -1;
}

.events-list__filter {
	font-weight: 500;
	color: #3eaf7c;
	cursor: pointer;
	margin: 0 1.5rem;
}

.events-list__filter:hover,
.events-list__filter.is-active {
	text-decoration: underline;
}
</style>
