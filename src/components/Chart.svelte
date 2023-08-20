<script>
	import Chart from 'chart.js/auto';
	import { onMount } from 'svelte';

	export let chartType = 'line';
	export let chartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
	export let datasets = [
		{
			label: 'Example',
			backgroundColor: 'rgb(255, 99, 132)',
			borderColor: 'rgb(255, 99, 132)',
			data: [20, 10, 5, 2, 20, 30, 45]
		}
	];
	let ctx;
	// @ts-ignore
	let chartCanvas;

	onMount(() => {
		// @ts-ignore
		ctx = chartCanvas.getContext('2d');
		var chart = new Chart(ctx, {
			// @ts-ignore
			type: chartType,
			data: {
				labels: chartLabels,
				datasets
			}
		});
	});
</script>

<div style="width: 500px;">
	<canvas bind:this={chartCanvas} id="myChart" />
</div>
