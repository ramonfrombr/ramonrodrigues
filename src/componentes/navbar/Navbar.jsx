import React from 'react';
import './navbar.scss';

import Flags from 'country-flag-icons/react/3x2';

import { FaWhatsapp, FaEnvelope, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Navbar({ menuAberto, definirMenuAberto }) {
    return (
        <div className={"navbar " + (menuAberto && "ativo")}>
            <div className="wrapper">
                <div className="esquerda">

                    <a className="logo" href="#intro">
                        <img style={{ height: '40px' }} src="assets/avatar.png" alt="" />
                    </a>

                    <div className="containerItem">
                        <FaWhatsapp className='icone'/> 
                        <span>+55 27 98149-1002</span>
                    </div>

                    <div className="containerItem">
                        <FaEnvelope className='icone'/>
                        <span>ramonfrombr@gmail.com</span>
                    </div>

                    <div className="containerItem">
                        <a href="https://github.com/ramonfrombr">
                            <FaGithub className='icone'/>
                        </a>
                    </div>

                    <div className="containerItem">
                        <a href="https://www.linkedin.com/in/ramon-rodrigues-533021151/">
                            <FaLinkedin className='icone'/>
                        </a>
                    </div>

                    <div className="containerItem">
                        <a href="https://www.instagram.com/ramonrodriguesomero/">
                            <FaInstagram className='icone'/>
                        </a>
                    </div>

                    <div className="containerBandeira">
                        <Flags.US title="United States" className="icone-bandeira"/>
                    </div>

                    <div className="containerBandeira">
                        <Flags.BR title="Brasil" className="icone-bandeira"/>
                    </div>

                    <div className="containerBandeira">
                        <Flags.ES title="España" className="icone-bandeira"/>
                    </div>

                    <div className="containerBandeira">
                        <Flags.FR title="France" className="icone-bandeira"/>
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
