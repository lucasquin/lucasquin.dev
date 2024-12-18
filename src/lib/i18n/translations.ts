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

		'Hello.subtitle': 'Hello',
		'Hello.text':
			'I am Lucas. Programmer, coffee enthusiast and a few other things. I love sleeping in when I can. I buy more books than I read, and I put sugar in my coffee. Nice to have you here.',

		'The Art of Programming.subtitle': 'The Art of Programming',
		'The Art of Programming.text':
			'Programming is much more than simply writing code. It is an art that combines creativity, logic, and ingenuity to solve complex problems. Like a conductor leading an orchestra, the programmer needs to harmonize different elements to create robust and efficient systems.',

		'Learn More': 'Learn More',

		'Load Balancers.topic': 'Load Balancers',
		'Load Balancers.description': 'Distribute incoming network traffic across multiple servers.'
	},
	pt: {
		home: 'inicio',
		now: 'agora',
		lists: 'listas',

		'Hello.subtitle': 'Olá',
		'Hello.text':
			'Eu sou o Lucas. Programador, apreciador de café e algumas coisas mais. Amo dormir até tarde quando posso. Compro mais livros do que leio, e coloco açucar no meu café. Bom ter você aqui.',

		'The Art of Programming.subtitle': 'A Arte de Programar',
		'The Art of Programming.text':
			'A programação é muito mais do que simplesmente escrever código. É uma arte que combina criatividade, lógica e engenhosidade para resolver problemas complexos. Como um maestro que rege uma orquestra, o programador precisa harmonizar diferentes elementos para criar sistemas robustos e eficientes.',

		'Learn More': 'Saiba mais',

		'Load Balancers.topic': 'Balanceamento de Carga',
		'Load Balancers.description': 'Distribua o tráfego de rede de entrada entre vários servidores.'
	}
};

export default translations;
