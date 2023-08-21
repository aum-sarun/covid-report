// @ts-nocheck
export function shortenNumber(number) {
	const symbols = ['', 'K', 'M', 'B', 'T'];
	const tier = (Math.log10(Math.abs(number)) / 3) | 0;
	if (tier === 0) return number.toFixed(0);
	const suffix = symbols[tier];
	const scale = Math.pow(10, tier * 3);
	const scaledNumber = number / scale;
	return scaledNumber.toFixed(2) + suffix;
}

export function formatDate(inputDate, format) {
	if (!['full', 'long', 'medium', 'short'].includes(format)) {
		throw new Error('The date format is incorrect.');
	}
	const date = new Date(inputDate);
	return new Intl.DateTimeFormat('en-GB', { dateStyle: format }).format(date);
}
