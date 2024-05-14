import React from "react";
import { useContext, useEffect } from "react"
import { Context } from "../store/appContext"
import { useNavigate, useParams } from "react-router";

export const PersonajeDetalles = () => {

    const { store, actions } = useContext(Context);

	const { id } = useParams();

	const navigate = useNavigate();

	const obtenerPersonajeDetalles = async (id) => {
		await actions.obtenerDetallesPersonaje(id);
	}

	useEffect(() => {
		obtenerPersonajeDetalles(id)
	}, []);

    return (
        <>
        <div className="card-container container">
				<div className="card  d-flex flex-row mb-3">
					<img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" className="card-img-top w-50" alt="..."/>
					<div className="card-body text-center">
						<h4 className="card-title">{store.personaje.properties.name}</h4>
						<p>{store.personaje.description}</p>
						
					</div>
				</div>
				
				<div className="row">
					<div className="col d-flex flex-column justify-content-center">
						<p>Name</p>
						<p>{store.personaje.properties.name}</p>
					</div>
					<div className="col d-flex flex-column justify-content-center">
						<p>Birth Year</p>
						<p>{store.personaje.properties.birth_year}</p>
					</div>
					<div className="col d-flex flex-column justify-content-center">
						<p>Gender</p>
						<p>{store.personaje.properties.gender}</p>
					</div>
					<div className="col d-flex flex-column justify-content-center">
						<p>Height</p>
						<p>{store.personaje.properties.height}</p>
					</div>
					<div className="col d-flex flex-column justify-content-center">
						<p>Skin color</p>
						<p>{store.personaje.properties.skin_color}</p>
					</div>
					<div className="col d-flex flex-column justify-content-center">
						<p>Eye color</p>
						<p>{store.personaje.properties.eye_color}</p>
					</div>
				
				</div>
			</div>
            
            <button className="btn btn-primary" onClick={() => navigate('/')} >Back to Home</button>
            
        </>
    )
}