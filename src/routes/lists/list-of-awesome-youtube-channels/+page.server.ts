import type { IHead, IList, ISection } from '$lib/types';

export function load() {
	const head: IHead = {
		title: 'lists.youtube.title',
		description: 'My personal lists for anything',
		keywords: 'developer, web development, portfolio'
	};

	const section: ISection = {
		subtitle: 'lists.youtube.title',
		text: null
	};

	const lists: IList[] = [
		{
			title: 'Lucas Montano',
			href: 'https://www.youtube.com/@LucasMontano',
			translate: false,
			target: '_blank'
		},
		{
			title: 'Gabrita Off',
			href: 'https://www.youtube.com/@Gabritaoff',
			translate: false,
			target: '_blank'
		},
		{
			title: "Kaio D'Elaqua",
			href: 'https://www.youtube.com/@kaiodelaqua',
			translate: false,
			target: '_blank'
		},
		{
			title: 'Andrezitos',
			href: 'https://www.youtube.com/@Andrezitos',
			translate: false,
			target: '_blank'
		},
		{
			title: 'Flow de Dados',
			href: 'https://www.youtube.com/@FlowDeDados',
			translate: false,
			target: '_blank'
		},
		{
			title: 'Código Fonte TV',
			href: 'https://www.youtube.com/@codigofontetv',
			translate: false,
			target: '_blank'
		},
		{
			title: 'Fireship',
			href: 'https://www.youtube.com/@Fireship',
			translate: false,
			target: '_blank'
		},
		{
			title: 'Warday',
			href: 'https://www.youtube.com/@WardayYT',
			translate: false,
			target: '_blank'
		},
		{
			title: 'Experiência Flamino',
			href: 'https://www.youtube.com/c/Experi%C3%AAnciaFlamino',
			translate: false,
			target: '_blank'
		}
	];

	return {
		head,
		lists,
		section
	};
}
