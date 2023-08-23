import { fetchGlobalCovid19Total } from '../services/covid19Service';

export async function load() {
	return {
		covidAccumuData: await fetchGlobalCovid19Total()
	};
}
