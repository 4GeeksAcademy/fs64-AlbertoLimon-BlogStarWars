import React, { useContext, useEffect } from "react";

import "../../styles/home.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";

export const NaveDetalles = () => {
	
    const { store, actions} = useContext(Context);

	const navigate = useNavigate();

	const { id } = useParams();

	const obtenerNaveDetalles = async (id) => {
		await actions.obtenerDetallesNave(id);
	}

    useEffect(() => {
        obtenerNaveDetalles(id)
		
    }, []);

    return (
        <>
            <div className="card-container container">
				<div className="card d-flex flex-row mb-3">
					<img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" className="card-img-top imagenDetalles" alt="..."/>
					<div className="card-body text-center">
						<h5 className="card-title">{store.nave.properties.name}</h5>
						<p>{store.nave.description}</p>	
					</div>
				</div>
				
				<div className="row">
					<div className="col d-flex flex-column justify-content-center">
						<p>Class</p>
                        <p>{store.nave.properties.vehicle_class}</p>
					</div>
					<div className="col d-flex flex-column justify-content-center">
						
                        <p>Cargo capacity</p>
                        <p>{store.nave.properties.cargo_capacity}</p>
					</div>
					<div className="col d-flex flex-column justify-content-center">
						
                        <p>Crew</p>
                        <p>{store.nave.properties.crew}</p>
					</div>
					<div className="col d-flex flex-column justify-content-center">
						
                        <p>Length</p>
                        <p>{store.nave.properties.length}</p>
					</div>
					<div className="col d-flex flex-column justify-content-center">
						
                        <p>Model</p>
                        <p>{store.nave.properties.model}</p>
					</div>
					<div className="col d-flex flex-column justify-content-center">
						
                        <p>Passengers</p>
                        <p>{store.nave.properties.passengers}</p>
					</div>
				
				</div>
			</div>
            
                <button className="btn btn-outline-primary" onClick={() => navigate('/')}>Back to Home</button>
            
        
        </>
    )

}