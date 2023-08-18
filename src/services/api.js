// import { API_KEY } from '../config/sensitiveConfig';

/* Common function to make API requests */
// @ts-ignore
export async function fetchApiData(endpoint, options = {}) {
	const headers = {
		// Authorization: `Bearer ${API_KEY}`,
		'Content-Type': 'application/json'
		/* Add other common headers as needed */
	};

	try {
		const response = await fetch(endpoint, {
			headers,
			...options
		});

		if (!response.ok) {
			throw new Error('Request failed');
		}

		const data = await response.json();
		return { data, error: null };
	} catch (error) {
		return { data: null, error };
	}
}
