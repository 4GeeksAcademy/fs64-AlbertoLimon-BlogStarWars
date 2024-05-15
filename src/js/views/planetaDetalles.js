import React from "react";
import { useContext, useEffect } from "react"
import { Context } from "../store/appContext"
import { useNavigate, useParams } from "react-router";

export const PlanetaDetalles = () => {

    const { store, actions } = useContext(Context);

	const navigate = useNavigate();

	const { idPlaneta } = useParams();
	
	const obtenerPlanetaDetalles = async (idPlaneta) => {	
		
		await actions.obtenerDetallesPlaneta(idPlaneta);
	}

	useEffect(() => {
		obtenerPlanetaDetalles(idPlaneta)
	}, []);

    return (
        <>

        <div className="card-container container contenedorDetalles">
				<div className="card detallesPrincipal">
					<img src="https://assets-prd.ignimgs.com/2022/02/10/06-dantooine-1644525955609.jpg" className="card-img-top imagenDetalles" alt=""/>
					<div className="card-body text-center">
						<h4 className="card-title">{store.planeta.properties.name}</h4>
						<p>{store.planeta.description}</p>
					</div>
				</div>
				
				<hr className="separadorDetalles" />

				<div className="detallesSecundario">
					<div className="detalleIndividual">
						<h5>Name</h5>
						<p>{store.planeta.properties.name}</p>
					</div>
					<div className="detalleIndividual">
						<h5>Climate</h5>
						<p>{store.planeta.properties.climate}</p>
					</div>
					<div className="detalleIndividual">
						<h5>Population</h5>
						<p>{store.planeta.properties.population}</p>
					</div>
					<div className="detalleIndividual">
						<h5>Terrain</h5>
						<p>{store.planeta.properties.terrain}</p>
					</div>
					<div className="detalleIndividual">
						<h5>Perimeter</h5>
						<p>{store.planeta.properties.diameter}</p>
					</div>
					<div className="detalleIndividual">
						<h5>Gravity</h5>
						<p>{store.planeta.properties.gravity}</p>
					</div>
				
				</div>
			</div>
            
            <button className="btn btn-outline-primary" onClick={() => navigate('/')}>Back to Home</button>
            
        </>
    )
}