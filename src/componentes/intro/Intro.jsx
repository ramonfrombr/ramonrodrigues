import React  from 'react';

import { init } from 'ityped';

import { useEffect, useRef } from 'react';

import './intro.scss'

export default function Intro() {

    // Seleciona o span para aplicar efeito de digitação
    const textoReferencia = useRef();

    useEffect(() => {
       

        init(textoReferencia.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: [
                'Designer',
                'Web Developer',
                'Software Engineer'
            ],
        })
    }, [])

    return (
        <div className='intro' id='intro'>

            <div className="esquerda">

                <div className="containerImagem">
                    <img src="assets/man.png" alt="" />
                </div>

            </div>


            <div className="direita">
                <div className="wrapper">
                    <h2>Olá, eu sou</h2>
                    <h1>Ramon Rodrigues</h1>
                    <h3>Freelance <span ref={textoReferencia}></span></h3>

                    <a href="#portfolio">
                        <img src="assets/down.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}
