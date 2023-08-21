<script>
	// @ts-nocheck
	import Chart from '../components/Chart.svelte';
	import { chartData } from '../stores/sharedStore';

	export let data;
	let covidDaysRange = 30;
	$: chartData.set(filterLengthDate(covidDaysRange));

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

<div class="mx-auto max-w-2xl lg:text-center">
	<h2 class="text-base font-semibold leading-7 text-indigo-600">
		Covid-19 data accumulation as of last update: {data.props.lastUpdate}
	</h2>
	<label for="daysRange" class="font-light">Show data for the last {covidDaysRange} days:</label>
	<input
		type="range"
		id="daysRange"
		name="daysRange"
		bind:value={covidDaysRange}
		min="1"
		max="30"
		class="align-middle"
	/>
</div>

<Chart chartClass="mx-auto max-w-2xl mt-5" chartID="accumulatedCovidChart" />
