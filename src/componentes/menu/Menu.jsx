import React from 'react'

import LinkMenu from "../linkmenu/LinkMenu";

import './menu.scss'


export default function Menu({ menuAberto, definirMenuAberto }) {

    return (

        <div className={"menu " + (menuAberto && "ativo")}>

            <ul>

                <LinkMenu
                    id={"intro"}
                    texto={"Intro"}
                    definirMenuAberto={definirMenuAberto}
                />

                <LinkMenu
                    id={"portfolio"}
                    texto={"Portfolio"}
                    definirMenuAberto={definirMenuAberto} />

                <LinkMenu
                    id={"projetos"}
                    texto={"Projetos"}
                    definirMenuAberto={definirMenuAberto}
                />

                <LinkMenu
                    id={"referencias"}
                    texto={"Referências"}
                    definirMenuAberto={definirMenuAberto}
                />

                <LinkMenu
                    id={"contato"}
                    texto={"Contato"}
                    definirMenuAberto={definirMenuAberto}
                />

            </ul>
        </div>
    )
}
