import React from "react";

import { init } from "ityped";

import { useEffect, useRef } from "react";

import "./intro.scss";

import aws from "../../imagens/aws.png";
import css from "../../imagens/css.png";
import django from "../../imagens/django.png";
import firebase from "../../imagens/firebase.png";
import flask from "../../imagens/flask.png";
import git from "../../imagens/git.png";
import github from "../../imagens/github.png";
import heroku from "../../imagens/heroku.jpg";
import html from "../../imagens/html.png";
import javascript from "../../imagens/javascript.png";
import materialui from "../../imagens/materialui.png";
import nodejs from "../../imagens/nodejs.png";
import php from "../../imagens/php.png";
import python from "../../imagens/python.png";
import react from "../../imagens/react.png";
import redux from "../../imagens/redux.png";
import sass from "../../imagens/sass.png";
import styledcomponents from "../../imagens/styledcomponents.png";

export default function Intro() {
	// Seleciona o span para aplicar efeito de digitação
	const textoReferencia = useRef();

	useEffect(() => {
		init(textoReferencia.current, {
			showCursor: true,
			backDelay: 1500,
			backSpeed: 60,
			strings: ["Designer", "Web Developer", "Software Engineer"],
		});
	}, []);

	return (
		<div className="intro" id="intro">
			<div className="esquerda">
				<div className="containerImagem">
					<img src="assets/man.png" alt="" />
				</div>
			</div>

			<div className="direita">
				<div className="wrapper">
					<h2>Olá, eu sou</h2>
					<h1>Ramon Rodrigues</h1>
					<h3>
						Freelance <span ref={textoReferencia}></span>
					</h3>

					<div className="techStackContainer">
						<div className="techStack">
							<a
								href="https://reactjs.org/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={react} alt="" />
							</a>
							<a
								href="https://nodejs.org/en/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={nodejs} alt="" />
							</a>
							<a
								href="https://redux.js.org/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={redux} alt="" />
							</a>
							<a
								href="https://sass-lang.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={sass} alt="" />
							</a>
							<a
								href="https://styled-components.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={styledcomponents} alt="" />
							</a>
							<a
								href="https://mui.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={materialui} alt="" />
							</a>
						</div>

						<div className="techStack">
							<a
								href="https://git-scm.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={git} alt="" />
							</a>
							<a
								href="https://github.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={github} alt="" />
							</a>
							<a
								href="https://aws.amazon.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={aws} alt="" />
							</a>
							<a
								href="https://firebase.google.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={firebase} alt="" />
							</a>
							<a
								href="https://www.heroku.com/home"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={heroku} alt="" />
							</a>
						</div>

						<div className="techStack">
							<a
								href="https://www.php.net/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={php} alt="" />
							</a>

							<a
								href="https://www.python.org/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={python} alt="" />
							</a>

							<a
								href="https://www.djangoproject.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={django} alt="" />
							</a>

							<a
								href="https://flask.palletsprojects.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img src={flask} alt="" />
							</a>
						</div>
					</div>

					<a href="#portfolio">
						<img src="assets/down.png" alt="" />
					</a>
				</div>
			</div>
		</div>
	);
}
