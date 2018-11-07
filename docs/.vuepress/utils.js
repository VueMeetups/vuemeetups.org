export const isPast = (date) => {
	const today = new Date();

	return new Date(date) < today;
}

export const getGetOrdinal = (n) => {
	const s = ['th', 'st', 'nd', 'rd'],
	v = n % 100;
	return `${n}${(s[(v-20)%10]||s[v]||s[0])}`;
}
