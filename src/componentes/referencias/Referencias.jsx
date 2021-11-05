import React from "react";
import "./referencias.scss";

export default function Referencias({ idioma }) {
	console.log(idioma);

	const dados = idioma.referencias;

	return (
		<div className="referencias" id="referencias">
			<h1>{idioma.nome_secao}</h1>

			<div className="container">
				{dados.map((dado) => (
					<div
						className={dado.destaque ? "cartao destaque" : "cartao"}
						key={dado.id}
					>
						<div className="cabecalho">
							<img className="esquerda" src="assets/right-arrow.png" alt="" />

							<img className="usuario" src={dado.imagem} alt="" />

							<a target="_blank" href={dado.link}>
								<img className="direita" src={dado.icone} alt="" />
							</a>
						</div>

						<div className="conteudo">{dado.descricao}</div>

						<div className="rodape">
							<h3>{dado.nome}</h3> <h4>{dado.titulo}</h4>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
