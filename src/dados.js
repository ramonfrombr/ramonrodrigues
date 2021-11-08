import tesla from "./imagens/tesla-web.png";
import impera from "./imagens/impera-web.png";
import omelhor from "./imagens/omelhor-web.png";
import whatsapp from "./imagens/whatsapp-web.png";

import cryptomobile from "./imagens/crypto-mobile.png";

import aprendaagora from "./imagens/aprendaagora-conteudo.png";
import cs50 from "./imagens/cs50-conteudo.png";

import fernando from "./imagens/fernando.jpg";

export const conteudo = [
	{
		id: "ingles",
		menu: {
			intro: "Home",
			portfolio: "Portfolio",
			projetos: "Projects",
			referencias: "Testimonials",
			contato: "Contact",
		},
		intro: {
			ola: "Hi, I am",
			nome: "Ramon Rodrigues",
			profissao1: "Web Developer",
			profissao2: "Software Engineer",
			profissao3: "Designer",
		},
		portfolio: {
			destaque: "Featured",
			web: "Web Apps",
			mobile: "Mobile Apps",
			conteudo: "Content",
		},
		projetos: {
			projeto1: {
				titulo: "IMPERAtrading",
				descricao: "x",
				acessar: "Acessar",
			},
			projeto2: {
				titulo: "Aprenda Agora",
				descricao: "x",
				acessar: "Acessar",
			},
			projeto3: {
				titulo: "CS50x em Português",
				descricao: "O curso de introdução às faculdades intelectuais ",
				acessar: "Acessar",
			},
		},
		referencias: {
			nome_secao: "Testimonials",
			referencias: [
				{
					id: 1,
					nome: "Fernando Otone",
					titulo: "Co-Founder of IMPERAtrading",
					imagem: fernando,
					link: "https://www.instagram.com/fernandotone/",
					icone: "assets/instagram.png",
					descricao:
						"Ramon has helped us bootstrap our business through a combination of great software and digital marketing strategy.",
				},
				{
					id: 2,
					nome: "Willian Homero",
					titulo: "Manager of O Melhor de Feu Rosa",
					imagem:
						"https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
					icone: "assets/youtube.png",
					descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
					destaque: true,
				},
				{
					id: 3,
					nome: "Joãozinho",
					titulo: "Oasis Visual",
					imagem:
						"https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
					icone: "assets/linkedin.png",
					descricao:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
				},
			],
		},
		contato: {
			contato: "Contact",
			email: "Email",
			mensagem: "Message",
			enviar: "Send",
			mensagemFinal: "Thank you for the message! I will contact you soon :)",
			mensagemFinalTemporaria:
				"Please contact me directly via WhatsApp, +55 27 98149 1002, or send an email to ramonfrombr@gmail.com",
		},
	},
	{
		id: "portugues",
		menu: {
			intro: "Intro",
			portfolio: "Portfolio",
			projetos: "Projetos",
			referencias: "Referências",
			contato: "Contato",
		},
		intro: {
			ola: "Olá, eu sou",
			nome: "Ramon Rodrigues",
			profissao1: "Desenvolvedor Web",
			profissao2: "Engenheiro de Software",
			profissao3: "Designer",
		},
		portfolio: {
			destaque: "Destaque",
			web: "Aplicativos Web",
			mobile: "Aplicativos Mobile",
			conteudo: "Conteúdo",
		},
		projetos: {
			projeto1: {
				titulo: "x",
				descricao: "x",
				acessar: "Acessar",
			},
			projeto2: {
				titulo: "x",
				descricao: "x",
				acessar: "Acessar",
			},
			projeto3: {
				titulo: "x",
				descricao: "x",
				acessar: "Acessar",
			},
		},
		referencias: {
			nome_secao: "Referências",
			referencias: [
				{
					id: 1,
					nome: "Tom Due",
					titulo: "Senior Developer",
					imagem:
						"https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
					icone: "assets/twitter.png",
					descricao:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
				},
				{
					id: 2,
					nome: "Alex Kalinski",
					titulo: "Co-Founder of DELKA",
					imagem:
						"https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
					icone: "assets/youtube.png",
					descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
					destaque: true,
				},
				{
					id: 3,
					nome: "Martin Harold",
					titulo: "CEO of ALBI",
					imagem:
						"https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
					icone: "assets/linkedin.png",
					descricao:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
				},
			],
		},
		contato: {
			contato: "Contato",
			email: "Email",
			mensagem: "Mensagem",
			enviar: "Enviar",
			mensagemFinal:
				"Obrigado pela mensagem! Entrarei em contato com você em breve :)",

			mensagemFinalTemporaria:
				"Por favor, contate-me diretamente através do WhatsApp, +55 27 98149 1002, ou envie-me um email para ramonfrombr@gmail.com",
		},
	},
	{
		id: "espanhol",
		menu: {
			intro: "Home",
			portfolio: "Portfolio",
			projetos: "Proyectos",
			referencias: "Testimonios",
			contato: "Contacto",
		},
		intro: {
			ola: "Hola, yo soy",
			nome: "Ramon Rodrigues",
			profissao1: "Desarrollador Web",
			profissao2: "Ingeniero de Software",
			profissao3: "Designer",
		},
		portfolio: {
			destaque: "Destacado",
			web: "Aplicaciones Web",
			mobile: "Aplicaciones Móviles",
			conteudo: "Contenido",
		},
		projetos: {
			projeto1: {
				titulo: "IMPERAtrading",
				descricao: "",
				acessar: "Acessar",
			},
			projeto2: {
				titulo: "Aprenda Agora",
				descricao: "x",
				acessar: "Acessar",
			},
			projeto3: {
				titulo: "CS50x em Português",
				descricao: "",
				acessar: "Acessar",
			},
		},
		referencias: {
			nome_secao: "Testimonios",
			referencias: [
				{
					id: 1,
					nome: "Tom Due",
					titulo: "Senior Developer",
					imagem:
						"https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
					icone: "assets/twitter.png",
					descricao:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
				},
				{
					id: 2,
					nome: "Alex Kalinski",
					titulo: "Co-Founder of DELKA",
					imagem:
						"https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
					icone: "assets/youtube.png",
					descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
					destaque: true,
				},
				{
					id: 3,
					nome: "Martin Harold",
					titulo: "CEO of ALBI",
					imagem:
						"https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
					icone: "assets/linkedin.png",
					descricao:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
				},
			],
		},
		contato: {
			contato: "Contacto",
			email: "Email",
			mensagem: "Mensaje",
			enviar: "Enviar",
			mensagemFinal:
				"¡Gracias por el mensaje! Me pondré en contacto con usted pronto! :)",

			mensagemFinalTemporaria:
				"Por favor contácteme directamente a través de WhatsApp, +55 27 98149 1002, o envíe un correo electrónico a ramonfrombr@gmail.com",
		},
	},
	{
		id: "frances",
		menu: {
			intro: "Accueil",
			portfolio: "Portefeuille",
			projetos: "Projets",
			referencias: "Témoignages",
			contato: "Contact",
		},
		intro: {
			ola: "Salut, je suis",
			nome: "Ramon Rodrigues",
			profissao1: "Web Developer",
			profissao2: "Software Engineer",
			profissao3: "Designer",
		},
		portfolio: {
			destaque: "En vedette",
			web: "Applications Web",
			mobile: "Applications Mobiles",
			conteudo: "Contenu",
		},
		projetos: {
			projeto1: {
				titulo: "x",
				descricao: "x",
				acessar: "Acessar",
			},
			projeto2: {
				titulo: "x",
				descricao: "x",
				acessar: "Acessar",
			},
			projeto3: {
				titulo: "x",
				descricao: "x",
				acessar: "Acessar",
			},
		},

		referencias: {
			nome_secao: "Témoignages",
			referencias: [
				{
					id: 1,
					nome: "Tom Due",
					titulo: "Senior Developer",
					imagem:
						"https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
					icone: "assets/twitter.png",
					descricao:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
				},
				{
					id: 2,
					nome: "Alex Kalinski",
					titulo: "Co-Founder of DELKA",
					imagem:
						"https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
					icone: "assets/youtube.png",
					descricao: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
					destaque: true,
				},
				{
					id: 3,
					nome: "Martin Harold",
					titulo: "CEO of ALBI",
					imagem:
						"https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
					icone: "assets/linkedin.png",
					descricao:
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
				},
			],
		},
		contato: {
			contato: "Contato",
			email: "E-mail",
			mensagem: "Message",
			enviar: "Envoyer",
			mensagemFinal: "Merci pour la message!",
			mensagemFinalTemporaria:
				"Veuillez me contacter directement via WhatsApp, +55 27 98149 1002, ou envoyer un e-mail à ramonfrombr@gmail.com",
		},
	},
];

export const portfolioDestaque = [
	{
		id: 1,
		titulo: "Tesla Clone",
		img: tesla,
		link: "https://tesla-clone-f64c8.web.app/",
	},
];

export const portfolioWeb = [
	{
		id: 1,
		titulo: "Tesla Clone",
		img: tesla,
		link: "https://tesla-clone-f64c8.web.app/",
	},
	{
		id: 2,
		titulo: "WhatsApp Clone",
		img: whatsapp,
		link: "https://whatsapp-clone-gamma-seven.vercel.app/",
	},
	{
		id: 3,
		titulo: "Trading App",
		img: impera,
		link: "https://imperatrading.web.app/",
	},

	/*
	{
		id: 4,
		titulo: "Bakery Website",
		img: omelhor,
		link: "https://melhordefeurosa.web.app",
	},

	
	/*
	{
		id: 5,
		titulo: "WhatsApp Clone",
		img: "https://cdn.dribbble.com/users/387658/screenshots/15458608/media/e92ec1dd33dd1170ae3dc9c5272f2693.jpg?compress=1&resize=1200x900",
	},
	{
		id: 6,
		titulo: "YouTube Clone",
		img: "https://cdn.dribbble.com/users/6384483/screenshots/15468426/media/ce9479fa1f8dba3a4a49840d76e55e31.png?compress=1&resize=1200x900",
	},
    */
];

export const portfolioReactNative = [
	{
		id: 1,
		titulo: "Criptocurrency App",
		img: cryptomobile,
	},
];

export const portfolioConteudo = [
	{
		id: 1,
		titulo: "Aprenda Agora (Language Learning videos)",
		img: aprendaagora,
		link: "https://www.youtube.com/channel/UCo-122KSpoYersHovXL3Tow",
	},

	{
		id: 2,
		titulo: "CS50x em Português (Harvard University course)",
		img: cs50,
		link: "https://www.youtube.com/channel/UCJWJr7ZvX9QqyITKVA6-Kjw",
	},

	/*
	{
		id: 3,
		titulo: "Content E-commerce Web Design",
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU",
	},
	{
		id: 4,
		titulo: "Content Relax Mobile App",
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU",
	},
	{
		id: 5,
		titulo: "Content Keser Web Design",
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU",
	},
	{
		id: 6,
		titulo: "Content Banking App",
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKvdHn8GmPGCO0y3SJqNHACygpm0h9VycMHg&usqp=CAU",
	},*/
];

/*

export const portfolioReact = [
{
		id: 1,
		titulo: "",
		img: "",
	},  
];


export const portfolioFlask = [
{
		id: 1,
		titulo: "",
		img: "",
	},
];


export const portfolioDjango = [
	{
		id: 1,
		titulo: "",
		img: "",
	},
];


export const portfolioPHP = [
{
		id: 1,
		titulo: "",
		img: "",
	},
];

*/
