export type TranslationKey = string;
export type LocaleCode = string;

export interface TranslationVars {
	[key: string]: string | number;
}

export interface Translations {
	[locale: LocaleCode]: {
		[key: TranslationKey]: string;
	};
}

const translations: Translations = {
	en: {
		home: 'home',
		now: 'now',
		lists: 'lists',

		'hello.subtitle': 'Hello',
		'hello.text':
			'I am Lucas. Programmer, coffee enthusiast and a few other things. I love sleeping in when I can. I buy more books than I read, and I put sugar in my coffee. Nice to have you here.',

		articles: 'Articles',
		'articles.text': 'Test text.'
	},
	pt: {
		home: 'inicio',
		now: 'agora',
		lists: 'listas',

		'hello.subtitle': 'Olá',
		'hello.text':
			'Eu sou o Lucas. Programador, apreciador de café e algumas coisas mais. Amo dormir até tarde quando posso. Compro mais livros do que leio, e coloco açucar no meu café. Bom ter você aqui.',

		articles: 'Artigos',
		'articles.text': 'Teste de texto.'
	}
};

export default translations;
