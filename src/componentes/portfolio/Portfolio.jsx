import React, { useState, useEffect } from "react";

import {
	FaStar,
	FaGlobe,
	FaMobileAlt,
	FaPencilRuler,
	FaNewspaper,
} from "react-icons/fa";

import ItemPortfolio from "../itemportfolio/ItemPortfolio";

import "./portfolio.scss";

import {
	portfolioDestaque,
	portfolioWeb,
	portfolioMobile,
	//portfolioDesign,
	portfolioConteudo,
} from "../../dados";

export default function Portfolio() {
	const [selecionado, definirSelecionado] = useState("destaque");

	const [dados, definirDados] = useState([]);

	const lista = [
		{
			id: "destaque",
			titulo: "Destaque",
			icone: <FaStar className="icone-destaque" />,
		},
		{
			id: "web",
			titulo: "Aplicativos Web",
			icone: <FaGlobe />,
		},
		{
			id: "mobile",
			titulo: "Aplicativos Mobile",
			icone: <FaMobileAlt />,
		},
		/*
        {
            id: 'design',
            titulo: "Design",
            icone: <FaPencilRuler />,
        },*/
		{
			id: "conteudo",
			titulo: "Conteúdo",
			icone: <FaNewspaper />,
		},
	];

	useEffect(() => {
		switch (selecionado) {
			case "destaque":
				definirDados(portfolioDestaque);
				break;
			case "web":
				definirDados(portfolioWeb);
				break;
			case "mobile":
				definirDados(portfolioMobile);
				break;
			/*case "design":
                definirDados(portfolioDesign);
                break;*/
			case "conteudo":
				definirDados(portfolioConteudo);
				break;
			default:
				definirDados(portfolioDestaque);
		}
	}, [selecionado]);

	return (
		<div className="portfolio" id="portfolio">
			<h1>Portfolio</h1>

			<ul>
				{lista.map((item) => (
					<ItemPortfolio
						key={item.id}
						titulo={item.titulo}
						id={item.id}
						ativo={selecionado === item.id}
						icone={item.icone}
						definirSelecionado={definirSelecionado}
					/>
				))}
			</ul>

			<div className="container">
				{dados.map((dado) => (
					<a href={dado.link} target="_blank" className="item" key={dado.id}>
						<img src={dado.img} alt="" />
						<h3>{dado.titulo}</h3>
					</a>
				))}
			</div>
		</div>
	);
}
