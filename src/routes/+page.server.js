import { fetchGlobalCovid19Total } from '../services/covid19Service';

export async function load() {
	const result = await fetchGlobalCovid19Total();
	return {
		props: result.data
	};
}
