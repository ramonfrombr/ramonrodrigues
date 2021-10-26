import React from "react";

import LinkMenu from "../linkmenu/LinkMenu";

import HomeIcon from "@material-ui/icons/Home";

import "./menu.scss";

export default function Menu({ idioma, menuAberto, definirMenuAberto }) {
	return (
		<div className={"menu " + (menuAberto && "ativo")}>
			<ul>
				<LinkMenu
					id={"intro"}
					texto={<HomeIcon style={{ fontSize: "1.5em" }} />}
					definirMenuAberto={definirMenuAberto}
				/>

				<LinkMenu
					id={"portfolio"}
					texto={idioma.portfolio}
					definirMenuAberto={definirMenuAberto}
				/>

				<LinkMenu
					id={"projetos"}
					texto={idioma.projetos}
					definirMenuAberto={definirMenuAberto}
				/>

				<LinkMenu
					id={"referencias"}
					texto={idioma.referencias}
					definirMenuAberto={definirMenuAberto}
				/>

				<LinkMenu
					id={"contato"}
					texto={idioma.contato}
					definirMenuAberto={definirMenuAberto}
				/>
			</ul>
		</div>
	);
}
