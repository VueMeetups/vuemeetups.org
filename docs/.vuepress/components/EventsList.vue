<template>
	<div>
		<div class="events-list__filters">
			<span>Show:</span>

			<label
				v-for="option in typesOptions"
				:key="option.value"
				class="events-list__filter"
				:class="{ 'is-active': type === option.value }">
				{{ option.label }}
				<input
					type="radio"
					v-model="type"
					:value="option.value"
					class="events-list__input"
				>
			</label>
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
			}]
		}
	},
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
