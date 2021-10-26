import React, { useState } from "react";

import Navbar from "./componentes/navbar/Navbar";
import Menu from "./componentes/menu/Menu";
import Intro from "./componentes/intro/Intro";
import Habilidades from "./componentes/habilidades/Habilidades";
import Portfolio from "./componentes/portfolio/Portfolio";
import Projetos from "./componentes/projetos/Projetos";
import Referencias from "./componentes/referencias/Referencias";
import Contato from "./componentes/contato/Contato";

import "./global.scss";
import "./app.scss";

function App() {
	const [menuAberto, definirMenuAberto] = useState(false);

	return (
		<div className="app">
			<Navbar menuAberto={menuAberto} definirMenuAberto={definirMenuAberto} />

			<Menu menuAberto={menuAberto} definirMenuAberto={definirMenuAberto} />

			<div className="secoes">
				<Intro />
				<div className="secaoHabilidades">
					<Habilidades />
				</div>
				<Portfolio />
				<Projetos />
				<Referencias />
				<Contato />
			</div>
		</div>
	);
}

export default App;
