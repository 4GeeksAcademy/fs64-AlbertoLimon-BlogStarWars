import React, { useContext, useEffect } from "react";


import "../../styles/detalles.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";

export const NaveDetalles = () => {
	
    const { store, actions} = useContext(Context);

	const navigate = useNavigate();

	const { idNave } = useParams();

	/*
	const obtenerNaveDetalles = async (idNave) => {
		await actions.obtenerDetallesNave(idNave);
	}*/

    useEffect(() => {
        actions.obtenerDetallesNave(idNave)
		
    }, []);

    return (
        <>
            <div className="card-container container contenedorDetalles">
				<div className="card detallesPrincipal">
					<img src="https://www.cinemascomics.com/wp-content/uploads/2021/06/Destructor-Estelar-Interdictor.jpg" className="card-img-top imagenDetalles" alt="..."/>
					<div className="card-body text-center">
						<h5 className="card-title">{store.nave.properties.name}</h5>
						<p>{store.nave.description}</p>	
					</div>
				</div>
				
				<hr className="separadorDetalles" />

				<div className="detallesSecundario">
					<div className="detalleIndividual">
						<h5>Class</h5>
                        <p>{store.nave.properties.vehicle_class}</p>
					</div>
					<div className="detalleIndividual">
						
						<h5>Cargo capacity</h5>
                        <p>{store.nave.properties.cargo_capacity}</p>
					</div>
					<div className="detalleIndividual">
						
						<h5>Crew</h5>
                        <p>{store.nave.properties.crew}</p>
					</div>
					<div className="detalleIndividual">
						
						<h5>Length</h5>
                        <p>{store.nave.properties.length}</p>
					</div>
					<div className="detalleIndividual">
						
						<h5>Model</h5>
                        <p>{store.nave.properties.model}</p>
					</div>
					<div className="detalleIndividual">
						
						<h5>Passengers</h5>
                        <p>{store.nave.properties.passengers}</p>
					</div>
				
				</div>
			</div>
            
            <button className="btn btn-outline-primary" onClick={() => navigate('/')}>Back to Home</button>
            
        
        </>
    )

}