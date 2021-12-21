import React, { useState } from "react";
import "./contato.scss";
import styled from 'styled-components';

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

                <BotaoEmail href="mailto:ramonfrombr@gmail.com">
                    {idioma.mensagemFinalTemporaria}
                </BotaoEmail>

			</div>
		</div>
	);
}


const BotaoEmail = styled.a`
    background-color: #002fff;
    color: white;
    text-decoration: none;
    padding: 20px;
    border-radius:3px;
    font-weight: bold;

`;