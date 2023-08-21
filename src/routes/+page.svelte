<script>
	// @ts-nocheck
	import Chart from '../components/Chart.svelte';
	import { chartData } from '../stores/sharedStore';

	export let data;
	let covidDateRange = 30;
	$: chartData.set(filterLengthDate(covidDateRange));

	function filterLengthDate(date = 30) {
		let sliceDate = 30 - date;
		return {
			chartLabels: data.props.chartData.chartLabels.slice(sliceDate),
			datasets: [
				{
					...data.props.chartData.datasets[0],
					data: data.props.chartData.datasets[0].data.slice(sliceDate)
				},
				{
					...data.props.chartData.datasets[1],
					data: data.props.chartData.datasets[1].data.slice(sliceDate)
				}
				// {
				// 	...data.props.chartData.datasets[2],
				// 	data: data.props.chartData.datasets[2].data.slice(sliceDate)
				// }
			]
		};
	}
</script>

{covidDateRange}
<input
	type="range"
	id="covidRange"
	name="covidRange"
	bind:value={covidDateRange}
	min="1"
	max="30"
/>
<Chart chartID="accumulatedCovidChart" />
