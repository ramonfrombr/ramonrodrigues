import  React, { useState } from 'react';

import Contato from "./componentes/contato/Contato";
import Intro from "./componentes/intro/Intro";
import Menu from "./componentes/menu/Menu";
import Navbar from "./componentes/navbar/Navbar";
import Portfolio from "./componentes/portfolio/Portfolio";
import Projetos from "./componentes/projetos/Projetos";
import Referencias from "./componentes/referencias/Referencias";

import './global.scss'
import './app.scss'

function App() {

  const [menuAberto, definirMenuAberto] = useState(false)

  return (
    <div className="app">

      <Navbar menuAberto={menuAberto} definirMenuAberto={definirMenuAberto} />

      <Menu menuAberto={menuAberto} definirMenuAberto={definirMenuAberto} />

      <div className="secoes">

        <Intro />
        <Portfolio />
        <Projetos />
        <Referencias />
        <Contato />
      </div>
    </div>
  );
}

export default App;
