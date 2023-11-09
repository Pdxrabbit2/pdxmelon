import { bypasses } from './data.js';

export function load() {
	return {
		summaries: bypasses.map((bypass) => ({
			slug: bypass.slug,
			title: bypass.title
		}))
	};
}
