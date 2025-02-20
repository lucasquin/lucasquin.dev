import type { HeadType, ListType } from '../../app';

export function load() {
	const head: HeadType = {
		title: 'Lists',
		description: 'My personal lists for anything',
		keywords: 'developer, web development, portfolio'
	};

	const list: ListType[] = [
		{
			title: 'lists.youtube.title'
		},
		{
			title: 'lists.book.title'
		},
		{
			title: 'lists.article.title'
		}
	];

	return {
		head,
		list
	};
}
