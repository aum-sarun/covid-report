import { writable } from 'svelte/store';

export const chartData = writable({
	chartLabels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	datasets: [
		{
			label: 'Example',
			backgroundColor: 'rgb(255, 99, 132)',
			borderColor: 'rgb(255, 99, 132)',
			data: [20, 10, 5, 2, 20, 30, 45]
		}
	]
});
