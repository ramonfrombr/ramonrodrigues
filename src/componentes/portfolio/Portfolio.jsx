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
	portfolioReactNative,
	//portfolioDesign,
	portfolioConteudo,
} from "../../dados";

export default function Portfolio({ idioma }) {
	const [selecionado, definirSelecionado] = useState("web");

	const [dados, definirDados] = useState([]);

	const lista = [
		/*
		{
			id: "destaque",
			titulo: idioma.destaque,
			icone: <FaStar className="icone-destaque" />,
		},*/
		{
			id: "web",
			titulo: idioma.web,
			icone: <FaGlobe />,
		},
		{
			id: "mobile",
			titulo: idioma.mobile,
			icone: <FaMobileAlt />,
		},
		{
			id: "conteudo",
			titulo: idioma.conteudo,
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
				definirDados(portfolioReactNative);
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
			<h1 style={{ overflow: 'visible' }}>Portfolio</h1>

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
						<h3 style={{ textAlign: "center" }}>{dado.titulo}<br/>{dado.icones}</h3>
                        
					</a>
				))}
			</div>
		</div>
	);
}
