import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {

	const { store, actions} = useContext(Context);

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

		<h2 className="danger">Characters</h2>
		{store.people.map((person) => (
			<div className="card-container">
				<div className="card w-25">
					<img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" className="card-img-top" alt="..."/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<div className="d-flex flex-column mb-3">
							<span>Gender: {person.gender}</span>
							<span>Hair Color: {person.hair_color}</span>
							<span>Eye-color: {person.eye_color}</span>
						</div>	
						<a href="#" className="btn btn-primary">Learn more</a>
					</div>
				</div>
			</div>
		)
		)}
		
		<h2>Planets</h2>
		<h2>Vehicles</h2>


	</div>
	)
	

};
