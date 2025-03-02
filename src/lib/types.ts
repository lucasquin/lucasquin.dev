interface ITranslateOptions {
	translate: boolean;
}

export interface IHead {
	readonly title: string;
	readonly description: string;
	readonly keywords: string;
}

export interface IHeader {
	title: string;
}

export interface ICard {
	title: string;
	description: string;
	href: string;
	tags?: string[];
}

export interface IList extends ITranslateOptions {
	title: string;
	href: string;
	target?: '_blank';
}

export interface ISection {
	subtitle: string;
	text: string | null;
}
