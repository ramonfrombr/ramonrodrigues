import React from 'react';

import tesla from "./imagens/tesla-web.png";
import aprendaagoraweb from "./imagens/aprendaagora-web.png";
import impera from "./imagens/impera-web.png";
import omelhor from "./imagens/omelhor-web.png";
import whatsapp from "./imagens/whatsapp-web.png";
import imperapainel from "./imagens/impera-painel-web.png";
import imperaadmin from "./imagens/impera-admin-web.png";
import cs50pt from "./imagens/cs50pt-web.png";
import cs50es from "./imagens/cs50es-web.png";
import cs50fr from "./imagens/cs50fr-web.png";

import cryptomobile from "./imagens/crypto-mobile.png";

import aprendaagora from "./imagens/aprendaagora-conteudo.png";
import cs50 from "./imagens/cs50-conteudo.png";

import fernando from "./imagens/fernando.jpg";

import {FaReact, FaNodeJs, FaSass} from 'react-icons/fa';

import {
    SiStyledcomponents,
    SiFlask,
    SiDjango,
    SiPhp,
    SiJavascript,
    SiPython,
    SiReact,
    SiRedux,
    SiMaterialui,
    SiGit,
    SiHeroku,
    SiFirebase,
    FaAws,
    SiPostgresql,
    SiMysql,
    SiMongodb,
    SiCss3,
    SiHtml5
} from 'react-icons/si';


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
				"Send Email to ramonfrombr@gmail.com",
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
				"Enviar Email para ramonfrombr@gmail.com",
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
				"Enviar E-mail a ramonfrombr@gmail.com",
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
			contato: "Contact",
			email: "E-mail",
			mensagem: "Message",
			enviar: "Envoyer",
			mensagemFinal: "Merci pour la message!",
			mensagemFinalTemporaria:
				"Envoyer E-mail à ramonfrombr@gmail.com",
		},
	},
];

export const portfolioDestaque = [
	{
		id: 1,
		titulo: "Tesla Clone",
        icones: <SiReact/>,
		img: tesla,
		link: "https://tesla-clone-f64c8.web.app/",
	},
];

export const portfolioWeb = [
	{
		id: 1,
		titulo: "Tesla Clone",
        icones: <SiReact/>,
		img: tesla,
		link: "https://tesla-clone-f64c8.web.app/",
	},
	{
		id: 2,
		titulo: "WhatsApp Clone",
        icones: <SiReact/>,
		img: whatsapp,
		link: "https://whatsapp-clone-gamma-seven.vercel.app/",
	},
    {
		id: 3,
		titulo: "Education Platform",
        icones: <SiFlask/>,
		img: aprendaagoraweb,
		link: "https://aprendaagora.herokuapp.com",
	},
	{
		id: 5,
		titulo: "Trading App Landing Page",
        icones: <SiReact/>,
		img: impera,
		link: "https://imperatrading.web.app/",
	},
	
	{
		id: 6,
		titulo: "Trading App User Dashboard",
        icones: <SiReact/>,
		img: imperapainel,
		link: "https://impera-painel.web.app/",
	},

	{
		id: 7,
		titulo: "Trading App Admin Dashboard",
        icones: <SiReact/>,
		img: imperaadmin,
        link: "https://impera-admin.web.app/",
	},

    {
		id: 8,
		titulo: "CS50x em Português (Harvard Course)",
        icones: <SiFlask/>,
		img: cs50pt,
        link: "https://cs50xemportugues.github.io/",
	},
    {
		id: 9,
		titulo: "CS50x en Español (Harvard Course)",
        icones: <SiFlask/>,
		img: cs50es,
        link: "https://cs50xenespanol.github.io/2021",
	},
    {
		id: 10,
		titulo: "CS50x en Français (Harvard Course)",
        icones: <SiFlask/>,
		img: cs50fr,
        link: "https://cs50xenfrancais.github.io/2021",
	},
];

export const portfolioReactNative = [
	{
		id: 1,
		titulo: "Criptocurrency App",
        icones: <SiReact/>,
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
