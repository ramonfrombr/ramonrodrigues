import React, { useState }  from 'react';
import './projetos.scss'

export default function Projetos() {

    //const [dados, definirDados] = useState();


    const [projetoAtual, definirProjetoAtual] = useState(0);

    const dados = [
        {
          id: "1",
          icone: "./assets/mobile.png",
          titulo: "Web Design",
          descricao:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
          imagem:
            "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        },
        {
          id: "2",
          icone: "./assets/globe.png",
          titulo: "Mobile Application",
          descricao:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          imagem:
            "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        },
        {
          id: "3",
          icone: "./assets/writing.png",
          titulo: "Branding",
          descricao:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
          imagem:
            "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        },
    ];

    // Função ativada quando as setas são clicadas
    const trocarProjeto = (direcao) => {

        // Seta esquerda
        direcao === 'esquerda' ?

        definirProjetoAtual(projetoAtual > 0 ? projetoAtual - 1 : dados.length - 1)
        
        // Seta direita
        : definirProjetoAtual(projetoAtual < dados.length - 1 ? projetoAtual + 1 : 0)
    }

    return (
        <div className='projetos' id='projetos'>

            <div
                className="slider"
                style={{transform: `translateX(-${projetoAtual * 100}vw)`}}
            >

                {dados.map(dado => (

                    <div className="container" key={dado.id}>
                        <div className="item">
                            <div className="esquerda">
                                <div className="containerEsquerda">

                                    <div className="containerImagem">
                                        <img src={dado.icone} alt="" />
                                    </div>

                                    <h2>{dado.titulo}</h2>

                                    <p>{dado.descricao}</p>

                                    <span>Projetos</span>
                                    
                                </div>
                            </div>

                            <div className="direita">
                                <img src={dado.imagem} alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <img
                src='assets/arrow.png'
                className='seta esquerda'
                alt=""
                onClick={() => (
                    trocarProjeto("esquerda")
                )}
            />

            <img
                src='assets/arrow.png'
                className='seta direita'
                alt=""
                onClick={() => (
                    trocarProjeto("direita")
                )}
            />
        </div>
    )
}
