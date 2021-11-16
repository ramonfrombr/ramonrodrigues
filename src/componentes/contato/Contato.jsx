import React, { useState } from "react";
import "./contato.scss";

export default function Contato({ idioma }) {
	const [mensagem, definirMensagem] = useState();

	const naoRecarregarPagina = (evento) => {
		evento.preventDefault();
		definirMensagem(true);
	};

	return (
		<div className="contato" id="contato">
			<div className="esquerda">
				<img src="assets/shake.svg" alt="" />
			</div>

			<div className="direita">
				<h2 style={{ marginBottom: "1em" }}>{idioma.contato}</h2>

				<p>{idioma.mensagemFinalTemporaria}</p>

			</div>
		</div>
	);
}
