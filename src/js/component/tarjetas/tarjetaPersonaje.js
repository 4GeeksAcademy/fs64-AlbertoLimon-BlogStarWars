import React, { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router";

export const TarjetaPersonaje = ({personaje, key}) => {

    const { store, actions } = useContext(Context);

    const navigate = useNavigate();
    
    
    return (
        <>
           
                <div className="card" key={key}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title mb-3">{personaje.name}</h5>
                        <div className="d-flex justify-content-between">
                            <button onClick={() => navigate(`/personajeDetalles/${personaje.uid}`)} className="btn btn-outline-primary">Ver detalles</button>
                            <button className="btn btn-outline-warning" onClick={() => actions.setFavoritos(personaje)}>
                                <CiHeart className="iconoMeGusta"/>
                            </button>
                        </div>
     
                    </div>
                </div>
           
        
        </>
    )
}