import { formatDate } from '../utils/utils';
import { GLOBAL_COVID_19_ACCUMULATED } from '../config/endpointConfig';

export const load = async ({ fetch }) => {
	const response = await fetch(GLOBAL_COVID_19_ACCUMULATED);
	const covidAccumuData = await response.json();

	const chartData = buildCovidChartData(covidAccumuData);
	const lastUpdate = [...chartData.chartLabels].pop();
	const tableData = buildCovidTableData(chartData.chartLabels, chartData.datasets);
	return { chartData, lastUpdate, tableData };
};

const buildCovidChartData = (covidAccumuData) => {
	let formattedDatesArray = [];
	for (const date in covidAccumuData.cases) {
		formattedDatesArray.push(formatDate(date, 'medium'));
	}
	return {
		chartLabels: formattedDatesArray,
		datasets: [
			{
				label: 'Cases',
				backgroundColor: 'rgb(255, 204, 153)',
				borderColor: 'rgb(255, 153, 0)',
				data: Object.values(covidAccumuData.cases)
			},
			{
				label: 'Deaths',
				backgroundColor: 'rgb(255, 153, 153)',
				borderColor: 'rgb(204, 0, 0)',
				data: Object.values(covidAccumuData.deaths)
			}
			// {
			// 	label: 'Recovered',
			// 	backgroundColor: 'rgb(153, 255, 204)',
			// 	borderColor: 'rgb(0, 204, 102)',
			// 	data: Object.values(covidAccumuData.recovered),
			// }
		]
	};
};

const buildCovidTableData = (dateArr, chartDataset) => {
	const tableData = {
		tableName: '',
		headerRole: [{ thData: 'Date' }, { thData: 'Cases' }, { thData: 'Deaths' }],
		tableRoles: []
	};
	dateArr.findLast((date, idx) => {
		const tableRole = [date, ...chartDataset.map((el) => el.data[idx].toLocaleString())].map(
			(item) => ({
				tdData: `<p>${item}</p>`
			})
		);
		tableData.tableRoles.push(tableRole);
	});
	return tableData;
};
