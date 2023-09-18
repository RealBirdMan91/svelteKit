import { views } from '$lib/views';
import * as api from '$lib/api';
import type { MovieList } from '$lib/types.js';

export async function load({ params, url, fetch }) {
	const view = views[params.view];
	const page = url.searchParams.get('page') || 1;

	const data = (await api.get(fetch, view.endpoint, { page: page.toString() })) as MovieList;

	return {
		title: view.title,
		endpoint: view.endpoint,
		movies: data.results,
		view: params.view,
		nextPage: data.page < data.total_pages ? data.page + 1 : null,
		infinite: true
	};
}
