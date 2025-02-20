const translations = {
	en: {
		common: {
			home: 'home',
			now: 'now',
			lists: 'lists',
			Lists: 'Lists',
			learnMore: 'Learn More'
		},
		welcome: {
			hello: 'Hello',
			description: 'I am Lucas. Programmer, coffee enthusiast and a few other things. I love sleeping in when I can. I buy more books than I read, and I put sugar in my coffee. Nice to have you here.'
		},
		articles: {
			programming: {
				title: 'The Art of Programming',
				description: 'Programming is much more than simply writing code. It is an art that combines creativity, logic, and ingenuity to solve complex problems. Like a conductor leading an orchestra, the programmer needs to harmonize different elements to create robust and efficient systems.'
			},
			loadBalancers: {
				title: 'Load Balancers',
				description: 'Distribute incoming network traffic across multiple servers.'
			}
		},
		lists: {
			youtubeChannels: {
				title: 'Awesome Youtube Channels',
				description: 'YouTube channels that I often watch and recommend.',
				listTitle: 'List of Awesome Youtube Channels'
			}
		}
	},
	pt: {
		common: {
			home: 'inicio',
			now: 'agora',
			lists: 'listas',
			Lists: 'Listas',
			learnMore: 'Saiba Mais'
		},
		welcome: {
			hello: 'Olá',
			description: 'Eu sou o Lucas. Programador, apreciador de café e algumas coisas mais. Amo dormir até tarde quando posso. Compro mais livros do que leio, e coloco açucar no meu café. Bom ter você aqui.'
		},
		articles: {
			programming: {
				title: 'A Arte de Programar',
				description: 'A programação é muito mais do que simplesmente escrever código. É uma arte que combina criatividade, lógica e engenhosidade para resolver problemas complexos. Como um maestro que rege uma orquestra, o programador precisa harmonizar diferentes elementos para criar sistemas robustos e eficientes.'
			},
			loadBalancers: {
				title: 'Balanceamento de Carga',
				description: 'Distribua o tráfego de rede de entrada entre vários servidores.'
			}
		},
		lists: {
			youtubeChannels: {
				title: 'Canais Incríveis do Youtube',
				description: 'Canais do Youtube que recomendo',
				listTitle: 'List of Awesome Youtube Channels'
			}
		}
	}
};

export type LocaleCode = keyof typeof translations;
export type TranslationKey = string;
export type TranslationVars = Record<string, string | number>;

export default translations;
