import React from "react";
import "../../styles/detalles.css";
import { useContext, useEffect } from "react"
import { Context } from "../store/appContext"
import { useNavigate, useParams } from "react-router";

export const PersonajeDetalles = () => {

    const { store, actions } = useContext(Context);

	const { idPersonaje } = useParams();

	const navigate = useNavigate();

	/*
	const obtenerPersonajeDetalles = async (idPersonaje) => {
		await actions.obtenerDetallesPersonaje(idPersonaje);
	}

	*/

	useEffect(() => {
		actions.obtenerDetallesPersonaje(idPersonaje)
	}, []);

    return (
        <>
        <div className="card-container container contenedorDetalles">
				<div className="card detallesPrincipal">
					<img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" className="card-img-top imagenDetalles" alt="..."/>
					<div className="card-body text-center">
						<h4 className="card-title">{store.personaje.properties.name}</h4>
						<p>{store.personaje.description}</p>
						
					</div>
				</div>
				
				<hr className="separadorDetalles" />
				
				<div className="detallesSecundario">
					<div className="detalleIndividual">
						<h5>Name</h5>
						<p>{store.personaje.properties.name}</p>
					</div>
					<div className="detalleIndividual">
						<h5>Birth Year</h5>
						<p>{store.personaje.properties.birth_year}</p>
					</div>
					<div className="detalleIndividual">
						<h5>Gender</h5>
						<p>{store.personaje.properties.gender}</p>
					</div>
					<div className="detalleIndividual">
						<h5>Height</h5>
						<p>{store.personaje.properties.height}</p>
					</div>
					<div className="detalleIndividual">
						<h5>Skin color</h5>
						<p>{store.personaje.properties.skin_color}</p>
					</div>
					<div className="detalleIndividual">
						<h5>Eye color</h5>
						<p>{store.personaje.properties.eye_color}</p>
					</div>
				
				</div>
			</div>
            
            <button className="btn btn-outline-primary" onClick={() => navigate('/')} >Back to Home</button>
            
        </>
    )
}