import React, { useContext, useEffect } from "react";
import "../../styles/navbar.css";
import { Context } from "../store/appContext";
import {  useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

export const Navbar = () => {

	const { store, actions} = useContext(Context);
	const navigate = useNavigate();

	return (
		<nav className="navbar navbar-light bg-white">
				<div className="container">
					<span onClick={() => {navigate('/')}}>
					<img src="https://logowik.com/content/uploads/images/528_star_wars.jpg" className="navbar-brand imagenNavbar" alt="..."/>
					</span>
					<div className="dropdown">
						<button className="btn btn-primary dropdown-toggle px-3 py-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
							Favoritos
							<span className="bg-secondary ms-1 px-1 py-0 rounded-2">{store.favoritos.length}</span>
						</button>
					
						<ul className="dropdown-menu ps-2" aria-labelledby="dropdownMenuButton1">
							{store.favoritos.map((favorito,index) => (
							<li className="d-flex flex-row justify-content-between" key={index}>
								<span>{favorito.name}</span>
								<button className="botonEliminarFavorito" onClick={() => actions.removeFavorito(index)}><FaTrash /></button>
							</li>
							))}
						</ul>
					</div>
				</div>
			</nav>
	);
};
