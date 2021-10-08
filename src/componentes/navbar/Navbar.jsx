import React from 'react';
import './navbar.scss'

import { FaUserAlt, FaEnvelope } from 'react-icons/fa';

export default function Navbar({ menuAberto, definirMenuAberto }) {
    return (
        <div className={"navbar " + (menuAberto && "ativo")}>
            <div className="wrapper">
                <div className="esquerda">

                    <a className="logo" href="#intro">logo</a>

                    <div className="containerItem">
                        <FaUserAlt className='icone'/> 
                        <span>+1 123 456 789</span>
                    </div>

                    <div className="containerItem">
                        <FaEnvelope className='icone'/>
                        <span>contact@company.com</span>
                    </div>
                </div>
                <div className="direita">
                    <div className="hamburger" onClick={() => definirMenuAberto(!menuAberto)}>
                        <span className='linha1'></span>
                        <span className='linha2'></span>
                        <span className='linha3'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
