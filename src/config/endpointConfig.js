import { API_ENDPOINT, API_VRESION } from './apiConfig';

// COVID-19 data sourced from Johns Hopkins University, updated every 10 minutes
const BASE_API_URL = `${API_ENDPOINT}/${API_VRESION}/covid-19`;

export const GLOBAL_COVID_19_ACCUMULATED = `${BASE_API_URL}/historical/all`;
