import type { IHead, IList, ISection } from '$lib/types';

export function load() {
	const head: IHead = {
		title: 'common.Lists',
		description: 'My personal lists for anything',
		keywords: 'developer, web development, portfolio'
	};

	const lists: IList[] = [
		{
			title: 'lists.youtube.title',
			translate: true,
			href: '/lists/list-of-awesome-youtube-channels'
		},
		{
			title: 'lists.book.title',
			href: '/lists/list-of-best-books-that-i-read',
			translate: true
		},
		{
			title: 'lists.article.title',
			href: '/lists/list-of-best-articles-that-i-read',
			translate: true
		}
	];

	const section: ISection = {
		subtitle: 'common.Lists',
		text: null
	};

	return {
		head,
		lists,
		section
	};
}
