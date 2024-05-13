import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Personajes } from "../component/personajes";
import { Planetas } from "../component/planetas";
import { Naves } from "../component/naves";

export const Home = () => {


	return (
		<div className="container-fluid">
		<nav className="navbar navbar-light bg-light">
  			<div className="container-fluid">
    			<a className="navbar-brand">Navbar</a>
    			<div className="dropdown">
  					<button className="btn btn-secondary dropdown-toggle bg-primary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    					Dropdown button
  					</button>
  				<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    				<li><a className="dropdown-item" href="#">Action</a></li>
    				<li><a className="dropdown-item" href="#">Another action</a></li>
    				<li><a className="dropdown-item" href="#">Something else here</a></li>
  				</ul>
				</div>
  			</div>
		</nav>

		<h2>Characters</h2>
		<div>
			<Personajes />
		</div>
		<h2>Planetas</h2>
		<div>
			<Planetas />
		</div>
		<h2>Naves</h2>
		<div>
			<Naves />
		</div>


	</div>
	)
	

};
