import { API_ENDPOINT, API_VRESION } from './apiConfig';

// COVID-19 data sourced from Worldometers, updated every 10 minutes
const BASE_API_URL = `${API_ENDPOINT}/${API_VRESION}/covid-19`;

export const GLOBAL_COVID_19_TOTALS = `${BASE_API_URL}/all`;
