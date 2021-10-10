import React, {useState}  from 'react';
import './contato.scss'

export default function Contato() {

    const [mensagem, definirMensagem] = useState();

    const naoRecarregarPagina = (evento) => {
        evento.preventDefault()
        definirMensagem(true)
    }

    return (
        <div className='contato' id='contato'>
            <div className="esquerda">
                <img src="assets/shake.svg" alt="" />
            </div>

            <div className="direita">
                <h2>Contato</h2>

                <form action="" onSubmit={naoRecarregarPagina}>
                    <input type="email" placeholder="Email" />

                    <textarea placeholder="Mensagem" name="" id="" cols="30" rows="10"></textarea>

                    <button>Enviar</button>
                </form>

                <p style={{ color: 'green' }}>
                    
                {
                    mensagem ? <span>Obrigado pela mensagem! Entrarei em contato com você em breve :)</span>
                    :
                    <span>&nbsp;</span>
                }
                    
                </p>
            </div>
        </div>
    )
}
