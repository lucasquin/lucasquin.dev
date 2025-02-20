import type { HeadType, CardType } from '../app';

export function load() {
	const head: HeadType = {
		title: 'lucasquin.dev',
		description: 'Welcome to my personal website',
		keywords: 'developer, web development, portfolio'
	};

	const cards: CardType[] = [
		{
			title: 'articles.loadBalancers.title',
			description: 'articles.loadBalancers.description',
			href: '/load-balancers',
			tags: ['tag.article']
		}
	];

	return {
		head,
		cards
	};
}
