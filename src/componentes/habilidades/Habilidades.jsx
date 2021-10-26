import React from "react";

import "./habilidades.scss";

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

const Habilidades = () => {
	return (
		<div style={{ textAlign: "center" }}>
			<h1>Habilidades & Ferramentas</h1>

			<div className="techStackContainer">
				<h2>Frontend</h2>
				<div className="techStack">
					<a
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							textAlign: "center",
							color: "grey",
							textDecoration: "none",
						}}
						href="https://reactjs.org/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={html} alt="" />
					</a>
					<a
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							textAlign: "center",
							color: "grey",
							textDecoration: "none",
						}}
						href="https://reactjs.org/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={css} alt="" />
					</a>
					<a
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							textAlign: "center",
							color: "grey",
							textDecoration: "none",
						}}
						href="https://reactjs.org/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={javascript} alt="" />
					</a>
					<a
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							textAlign: "center",
							color: "grey",
							textDecoration: "none",
						}}
						href="https://reactjs.org/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={react} alt="" />
					</a>

					<a
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							textAlign: "center",
							color: "grey",
							textDecoration: "none",
						}}
						href="https://redux.js.org/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={redux} alt="" />
					</a>
					<a
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							textAlign: "center",
							color: "grey",
							textDecoration: "none",
						}}
						href="https://sass-lang.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={sass} alt="" />
					</a>
					<a
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							textAlign: "center",
							color: "grey",
							textDecoration: "none",
						}}
						href="https://styled-components.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={styledcomponents} alt="" />
					</a>
					<a href="https://mui.com/" target="_blank" rel="noopener noreferrer">
						<img src={materialui} alt="" />
					</a>
				</div>

				<h2>DevOps</h2>

				<div className="techStack">
					<a
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							textAlign: "center",
							color: "grey",
							textDecoration: "none",
						}}
						href="https://git-scm.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={git} alt="" />
					</a>
					<a
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							textAlign: "center",
							color: "grey",
							textDecoration: "none",
						}}
						href="https://github.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={github} alt="" />
					</a>
					<a
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							textAlign: "center",
							color: "grey",
							textDecoration: "none",
						}}
						href="https://aws.amazon.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={aws} alt="" />
					</a>
					<a
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							textAlign: "center",
							color: "grey",
							textDecoration: "none",
						}}
						href="https://firebase.google.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={firebase} alt="" />
					</a>
					<a
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							textAlign: "center",
							color: "grey",
							textDecoration: "none",
						}}
						href="https://www.heroku.com/home"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={heroku} alt="" />
					</a>
				</div>

				<h2>Backend</h2>
				<div className="techStack">
					<a
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							textAlign: "center",
							color: "grey",
							textDecoration: "none",
						}}
						href="https://nodejs.org/en/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={nodejs} alt="" />
					</a>
					<a
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							textAlign: "center",
							color: "grey",
							textDecoration: "none",
						}}
						href="https://www.php.net/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img style={{ display: "block" }} src={php} alt="" />
					</a>

					<a
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							textAlign: "center",
							color: "grey",
							textDecoration: "none",
						}}
						href="https://www.python.org/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={python} alt="" />
					</a>

					<a
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							textAlign: "center",
							color: "grey",
							textDecoration: "none",
						}}
						href="https://www.djangoproject.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={django} alt="" />
					</a>

					<a
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							textAlign: "center",
							color: "grey",
							textDecoration: "none",
						}}
						href="https://flask.palletsprojects.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={flask} alt="" />
					</a>
				</div>
			</div>

			<p></p>
		</div>
	);
};

export default Habilidades;
