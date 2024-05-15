import React, { useContext, useEffect } from "react";

import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Personajes } from "../component/personajes";
import { Planetas } from "../component/planetas";
import { Naves } from "../component/naves";

export const Home = () => {

	const { store, actions } = useContext(Context)

	useEffect(() => {

	})

	return (
		<div className="container">
			
			<h2>Personajes</h2>
			<div className="contenido">
				<Personajes />
			</div>
			<h2>Planetas</h2>
			<div className="contenido">
				<Planetas />
			</div>
			<h2>Naves</h2>
			<div className="contenido">
				<Naves />
			</div>


		</div>
	)
	

};
