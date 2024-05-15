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
				<div className="card d-flex flex-row mb-3">
					<img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" className="card-img-top imagenDetalles" alt=""/>
					<div className="card-body text-center">
						<h4 className="card-title">{store.planeta.properties.name}</h4>
						<p>{store.planeta.description}</p>
					</div>
				</div>
				
				<div className="row">
					<div className="col d-flex flex-column justify-content-center">
						<p><strong>Name</strong></p>
						<p>{store.planeta.properties.name}</p>
					</div>
					<div className="col d-flex flex-column justify-content-center">
						<p><strong>Climate</strong></p>
						<p>{store.planeta.properties.climate}</p>
					</div>
					<div className="col d-flex flex-column justify-content-center text-center">
						<p><strong>Population</strong></p>
						<p>{store.planeta.properties.population}</p>
					</div>
					<div className="col d-flex flex-column justify-content-center">
						<p><strong>Terrain</strong></p>
						<p>{store.planeta.properties.terrain}</p>
					</div>
					<div className="col d-flex flex-column justify-content-center">
						<p><strong>Diameter</strong></p>
						<p>{store.planeta.properties.diameter}</p>
					</div>
					<div className="col d-flex flex-column justify-content-center">
						<p><strong>Gravity</strong></p>
						<p>{store.planeta.properties.gravity}</p>
					</div>
				
				</div>
			</div>
            
            <button className="btn btn-outline-primary" onClick={() => navigate('/')}>Back to Home</button>
            
        </>
    )
}