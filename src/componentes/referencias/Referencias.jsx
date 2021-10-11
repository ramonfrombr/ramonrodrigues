import React from 'react';
import './referencias.scss';

export default function Referencias() {

    const dados = [
        {
          id: 1,
          nome: "Tom Due",
          titulo: "Senior Developer",
          imagem:
            "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icone: "assets/twitter.png",
          descricao:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
        },
        {
          id: 2,
          nome: "Alex Kalinski",
          titulo: "Co-Founder of DELKA",
          imagem:
            "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icone: "assets/youtube.png",
          descricao:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          destaque: true,
        },
        {
          id: 3,
          nome: "Martin Harold",
          titulo: "CEO of ALBI",
          imagem:
            "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          icone: "assets/linkedin.png",
          descricao:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
        },
    ];


    return (
        <div className='referencias' id='referencias'>

            <h1>Referências</h1>

            <div className="container">

                {dados.map(dado => (

                    <div className={dado.destaque ? 'cartao destaque' : 'cartao'} key={dado.id}>

                        <div className="cabecalho">
                            <img
                                className="esquerda"
                                src="assets/right-arrow.png"
                                alt=""
                            />

                            <img
                                className="usuario"
                                src={dado.imagem}
                                alt=""
                            />

                            <img
                                className="direita"
                                src={dado.icone}
                                alt=""
                            />
                        </div>

                        <div className="conteudo">
                           {dado.descricao}
                        </div>

                        <div className="rodape">
                            <h3>{dado.nome}</h3>                            <h4>{dado.titulo}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
