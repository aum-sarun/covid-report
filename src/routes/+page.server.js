import { fetchGlobalCovid19Total } from '../services/covid19Service';

let covidAccumuData = {};

export async function load() {
	const result = await fetchGlobalCovid19Total();
	covidAccumuData = buildChartData(result.data);
	return {
		props: {
			chartData: covidAccumuData
		}
	};
}

function buildChartData(data) {
	return {
		chartLabels: Object.keys(data.cases),
		datasets: [
			{
				label: 'Cases',
				backgroundColor: 'rgb(255, 204, 153)',
				borderColor: 'rgb(255, 153, 0)',
				data: Object.values(data.cases)
			},
			{
				label: 'Deaths',
				backgroundColor: 'rgb(255, 153, 153)',
				borderColor: 'rgb(204, 0, 0)',
				data: Object.values(data.deaths)
			}
			// {
			// 	label: 'Recovered',
			// 	backgroundColor: 'rgb(153, 255, 204)',
			// 	borderColor: 'rgb(0, 204, 102)',
			// 	data: Object.values(data.recovered),
			// }
		]
	};
}
