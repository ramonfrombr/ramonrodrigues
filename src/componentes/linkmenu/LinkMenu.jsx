import React from 'react'

export default function LinkMenu({ id, texto, definirMenuAberto }) {
    
    const href = `#${id}`

    return (
        <li onClick={() => {definirMenuAberto(false)}}>
            <a href={href}>{texto}</a>
        </li>
    )
    
}
