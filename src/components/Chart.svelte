<script>
	// @ts-nocheck
	import Chart from 'chart.js/auto';
	import { onMount } from 'svelte';

	import { shortenNumber } from '../utils/utils';
	import { chartData } from '../stores/sharedStore';

	export let chartID;
	export let chartClass = 'w-96';
	export let chartType = 'line';
	export let chartOptions = {
		responsive: true,
		scales: {
			y: {
				ticks: {
					callback: function (value, index, ticks) {
						return shortenNumber(value);
					}
				}
			}
		}
	};

	let chart;
	let chartCanvas;

	$: {
		if (chart) {
			chart.data.labels = $chartData.chartLabels;
			chart.data.datasets = $chartData.datasets;
			chart.update();
		}
	}

	onMount(() => {
		const ctx = chartCanvas.getContext('2d');
		chart = new Chart(ctx, {
			type: chartType,
			data: {
				labels: [],
				datasets: []
			},
			options: chartOptions
		});
	});
</script>

<div class={chartClass}>
	<canvas bind:this={chartCanvas} id={chartID} />
</div>
