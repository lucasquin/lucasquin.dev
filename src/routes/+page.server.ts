import type { ICard, IHead, ISection } from '$lib/types';

export function load() {
	const head: IHead = {
		title: 'common.lucasquinDev',
		description: 'Welcome to my personal website',
		keywords: 'developer, web development, portfolio'
	};

	const cards: ICard[] = [
		{
			title: 'articles.loadBalancers.title',
			description: 'articles.loadBalancers.description',
			href: '/load-balancers',
			tags: ['tag.article']
		}
	];

	const sections: ISection[] = [
		{
			subtitle: 'welcome.hello',
			text: 'welcome.description'
		},
		{
			subtitle: 'articles.programming.title',
			text: 'articles.programming.description'
		}
	];

	return {
		head,
		cards,
		sections
	};
}
