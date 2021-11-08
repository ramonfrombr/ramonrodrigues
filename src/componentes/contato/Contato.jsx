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
				<h2 style={{ marginBottom: "4em" }}>{idioma.contato}</h2>

				<p>{idioma.mensagemFinalTemporaria}</p>

				{/*


<form action="" onSubmit={naoRecarregarPagina}>
					<input type="email" placeholder={idioma.email} />

					<textarea
						placeholder={idioma.mensagem}
						name=""
						id=""
						cols="30"
						rows="10"
					></textarea>

					<button>{idioma.enviar}</button>
				</form>

				<p style={{ color: "green" }}>
					{mensagem ? <span>{idioma.mensagemFinal}</span> : <span>&nbsp;</span>}
				</p>

                    
                     */}
			</div>
		</div>
	);
}
