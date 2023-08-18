import { fetchApiData } from './api'; // Relative path to api.js
import { GLOBAL_COVID_19_TOTALS } from '../config/endpointConfig'; // Relative path to endpointConfig

// Get global COVID-19 totals for today, yesterday and two days ago
export async function fetchGlobalCovid19Total() {
	return await fetchApiData(GLOBAL_COVID_19_TOTALS);
}
