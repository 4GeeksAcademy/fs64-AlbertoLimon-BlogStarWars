import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/index.css";

export const Personajes = () => {
    
    const { store, actions} = useContext(Context);

    useEffect(() => {
        actions.cargarPersonajes();
    }, []);

    return (
        <>
        <div className="scroll-container">
            <div className="d-inline-flex scroll">
                {store.personajes.map((personaje) => (
                <div className="card-container">
                    <div className="card" style={{width: "18rem"}} key={personaje.url}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{personaje.name}</h5>
                            <div className="d-flex flex-column mb-3">
                                <span>Gender: {personaje.gender}</span>
                                <span>Hair Color: {personaje.hair_color}</span>
                                <span>Eye-color: {personaje.eye_color}</span>
                            </div>	
                            <Link to="/details">
                                <a href="#" className="btn btn-primary">Learn more</a>
                            </Link>
                            
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
        
        </>
    )
}