import React from 'react'
import './itemportfolio.scss'

export default function ItemPortfolio({ titulo, id, ativo, icone, definirSelecionado }) {
    return (
        <li
            style={{ overflow: 'visible' }}
            id={id}
            className={ativo ? 'item-portfolio ativo' : 'item-portfolio'}
            onClick={() => (definirSelecionado(id))}
        >
            { icone }&nbsp;&nbsp;{ titulo }
        </li>
    )
}
