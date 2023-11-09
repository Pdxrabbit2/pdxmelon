import { bypasses } from '../data.js';

export function load({ params }) {
	const bypass = bypasses.find((bypass) => bypass.slug === params.slug);

	return {
		bypass
	};
}
