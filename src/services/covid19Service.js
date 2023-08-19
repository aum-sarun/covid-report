import { fetchApiData } from './api'; // Relative path to api.js
import { GLOBAL_COVID_19_ACCUMULATED } from '../config/endpointConfig'; // Relative path to endpointConfig

// Get global accumulated COVID-19 time series data
export async function fetchGlobalCovid19Total() {
	return await fetchApiData(GLOBAL_COVID_19_ACCUMULATED);
}
