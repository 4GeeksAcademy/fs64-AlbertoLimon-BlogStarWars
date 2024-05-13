import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/index.css";

export const Planetas = () => {

    const { store, actions} = useContext(Context);

    useEffect(() => {
        actions.cargarPlanetas();
    }, []);

    return (
        <>
        <div className="scroll-container">
            <div className="d-inline-flex scroll">
                {store.planetas.map((planeta) => (
                <div className="card-container">
                    <div className="card" style={{width: "18rem"}}>
                        <img src="https://assets-prd.ignimgs.com/2022/02/10/06-dantooine-1644525955609.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{planeta.name}</h5>
                            <div className="d-flex flex-column mb-3">
                                <span>Population: {planeta.population}</span>
                                <span>Terrain: {planeta.terrain}</span>
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