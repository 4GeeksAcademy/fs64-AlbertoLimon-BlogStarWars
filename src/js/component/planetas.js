import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/index.css";
import { CiHeart } from "react-icons/ci";

export const Planetas = () => {

    const { store, actions} = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        actions.cargarPlanetas();
    }, []);

    return (
        <>
        
        <div className="scroll-container">
            <div className="d-inline-flex scroll">
                {store.planetas.map((planeta) => (
                <div className="card-container">
                    <div className="card">
                        <img src="https://assets-prd.ignimgs.com/2022/02/10/06-dantooine-1644525955609.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{planeta.name}</h5>
                            <div className="d-flex flex-column mb-3">
                                <span>Population: {planeta.population}</span>
                                <span>Terrain: {planeta.terrain}</span>
                            </div>	
                            
                            <div className="d-flex justify-content-between">
                                <button onClick={() => navigate(`/planetaDetalles/${planeta.uid}`)} className="btn btn-outline-primary">Ver detalles</button>
                                <button className="btn btn-outline-warning" onClick={() => {actions.setFavoritos(planeta)}}>
                                    <CiHeart className="iconoMeGusta"/>
                                </button>
                            </div>
                           
                            
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
        
        </>
    )
}