import { browser } from '$app/environment';
import { error } from '@sveltejs/kit';

const base = 'https://api.themoviedb.org/3';
export const media_base = 'https://image.tmdb.org/t/p';
const api_key = 'api_key=842206579cc84446a98e176ce3d9a5f7';

const cache = new Map();

export async function get(
	fetch: typeof globalThis.fetch,
	endpoint: string,
	params?: Record<string, string>
) {
	const q = new URLSearchParams(params);
	const url = `${base}/${endpoint}?${q}&${api_key}`;

	if (cache.has(url)) {
		return cache.get(url);
	}

	const response = await fetch(url);

	if (!response.ok) {
		throw error(response.status);
	}

	const data = await response.json();

	if (browser) {
		cache.set(url, data);
	}

	return data;
}
export function media(file_path: string, width: number) {
	return `${media_base}/w${width}/${file_path}`;
}
