<script>
	// @ts-nocheck
	import Chart from '../components/Chart.svelte';
	import DataTable from '../components/DataTable.svelte';
	import { chartData } from '../stores/sharedStore';

	export let data;
	let covidDaysRange = 30;
	const covidMaxDaysRange = 30;
	let tableRoles = data.tableData.tableRoles.slice(covidMaxDaysRange - covidDaysRange);
	$: {
		chartData.set(filterLengthDate(covidDaysRange));
		tableRoles =
			covidDaysRange !== covidMaxDaysRange
				? data.tableData.tableRoles.slice(0, -(covidMaxDaysRange - covidDaysRange))
				: data.tableData.tableRoles;
	}
	function filterLengthDate(date) {
		let sliceDate = covidMaxDaysRange - date;
		return {
			chartLabels: data.chartData.chartLabels.slice(sliceDate),
			datasets: [
				{
					...data.chartData.datasets[0],
					data: data.chartData.datasets[0].data.slice(sliceDate)
				},
				{
					...data.chartData.datasets[1],
					data: data.chartData.datasets[1].data.slice(sliceDate)
				}
				// {
				// 	...data.chartData.datasets[2],
				// 	data: data.chartData.datasets[2].data.slice(sliceDate)
				// }
			]
		};
	}
</script>

<div class="mx-auto max-w-2xl lg:text-center">
	<h2 class="text-base font-semibold leading-7 text-indigo-600">
		Covid-19 data accumulation as of last update: {data.lastUpdate}
	</h2>
	<label for="daysRange" class="font-light">Show data for the last {covidDaysRange} days:</label>
	<input
		type="range"
		id="daysRange"
		name="daysRange"
		bind:value={covidDaysRange}
		min="1"
		max={covidMaxDaysRange}
		class="align-middle"
	/>
</div>

<Chart chartClass="mx-auto max-w-2xl mt-5" chartID="accumulatedCovidChart" />
<DataTable
	tableName={data.tableData.tableName}
	headerRole={data.tableData.headerRole}
	{tableRoles}
/>
