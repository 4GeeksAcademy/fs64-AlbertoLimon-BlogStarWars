import React, { useContext, useEffect } from "react";

import "../../styles/home.css";
import { FaTrash } from "react-icons/fa";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Personajes } from "../component/personajes";
import { Planetas } from "../component/planetas";
import { Naves } from "../component/naves";

export const Home = () => {

	const { store, actions } = useContext(Context)

	useEffect(() => {

	})

	return (
		<div className="container-fluid">
		<nav className="navbar navbar-light bg-light">
  			<div className="container-fluid">
    			<a className="navbar-brand">Navbar</a>
    			<div className="dropdown">
  					<button className="btn btn-secondary dropdown-toggle bg-primary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    					Favoritos
						<span className="bg-secondary ms-1 px-1 py-1 rounded-2">{store.favoritos.length}</span>
  					</button>
				
  				<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    				{store.favoritos.map((favorito,index) => (
					<li key={index}>
						<span>{favorito.name}</span>
						<button className="botonEliminarFavorito" onClick={() => actions.removeFavorito(index)}><FaTrash /></button>
						
					</li>
					))}
  				</ul>
				</div>
  			</div>
		</nav>

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
