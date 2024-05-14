import React from "react";
import { useContext, useEffect } from "react"
import { Context } from "../store/appContext"
import { useNavigate, useParams } from "react-router";

export const PlanetaDetalles = () => {

    const { store, actions } = useContext(Context);

	const navigate = useNavigate();

	const { id } = useParams();
	
	const obtenerPlanetaDetalles = async (id) => {	
		console.log(id)
		await actions.obtenerDetallesPlaneta(id);
	}

	useEffect(() => {
		obtenerPlanetaDetalles(id)
	}, []);

    return (
        <>

        <div className="card-container container">
				<div className="card  d-flex flex-row mb-3">
					<img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" className="card-img-top w-50" alt="..."/>
					<div className="card-body text-center">
						<h4 className="card-title">{store.planeta.properties.name}</h4>
						<p>{store.planeta.description}</p>
					</div>
				</div>
				
				<div className="row">
					<div className="col d-flex flex-column justify-content-center">
						<p>Name</p>
						<p>{store.planeta.properties.name}</p>
					</div>
					<div class="col d-flex flex-column justify-content-center">
						<p>Climate</p>
						<p>{store.planeta.properties.climate}</p>
					</div>
					<div class="col d-flex flex-column justify-content-center">
						<p>Population</p>
						<p>{store.planeta.properties.population}</p>
					</div>
					<div className="col d-flex flex-column justify-content-center">
						<p>Terrain</p>
						<p>{store.planeta.properties.terrain}</p>
					</div>
					<div className="col d-flex flex-column justify-content-center">
						<p>Diameter</p>
						<p>{store.planeta.properties.diameter}</p>
					</div>
					<div className="col d-flex flex-column justify-content-center">
						<p>Gravity</p>
						<p>{store.planeta.properties.gravity}</p>
					</div>
				
				</div>
			</div>
            
            <button className="btn btn-primary" onClick={() => navigate('/')}>Back to Home</button>
            
        </>
    )
}