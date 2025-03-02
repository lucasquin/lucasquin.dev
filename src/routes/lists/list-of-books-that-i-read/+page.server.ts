import type { IHead, IList, ISection } from '$lib/types';

export function load() {
	const head: IHead = {
		title: 'Lists',
		description: 'My personal lists for anything',
		keywords: 'developer, web development, portfolio'
	};

	const section: ISection = {
		subtitle: 'common.Lists',
		text: null
	};

	const lists: IList[] = [];

	return {
		head,
		lists,
		section
	};
}
