import React, { useState } from "react";

import Navbar from "./componentes/navbar/Navbar";
import Menu from "./componentes/menu/Menu";
import Intro from "./componentes/intro/Intro";
import Habilidades from "./componentes/habilidades/Habilidades";
import Portfolio from "./componentes/portfolio/Portfolio";
import Projetos from "./componentes/projetos/Projetos";
import Referencias from "./componentes/referencias/Referencias";
import Contato from "./componentes/contato/Contato";

import { conteudo } from "./dados";

import "./global.scss";
import "./app.scss";

function App() {
	const [menuAberto, definirMenuAberto] = useState(false);

	const [idioma, definirIdioma] = useState(conteudo[0]);

	const escolherIdioma = (indice) => {
		definirIdioma(conteudo[indice]);
	};

	return (
		<div className="app">
			<Navbar
				menuAberto={menuAberto}
				definirMenuAberto={definirMenuAberto}
				escolherIdioma={escolherIdioma}
			/>

			<Menu
				idioma={idioma.menu}
				menuAberto={menuAberto}
				definirMenuAberto={definirMenuAberto}
			/>

			<div className="secoes">
				<Intro idioma={idioma.intro} />

				{/*
                
                <div className="secaoHabilidades">
					<Habilidades />
				</div>
                */}

				<Portfolio idioma={idioma.portfolio} />
				<Projetos idioma={idioma.projetos} />
				<Referencias idioma={idioma.referencias} />
				<Contato idioma={idioma.contato} />
			</div>
		</div>
	);
}

export default App;
