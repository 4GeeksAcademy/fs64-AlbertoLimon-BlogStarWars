import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/index.css";
import { CiHeart } from "react-icons/ci";

export const Naves = () => {

    const { store, actions} = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        actions.cargarNaves();
        
    }, []);

    return (
        <>
        
			<div className="scroll-container">
                <div className="d-inline-flex scroll">
                    {store.naves.map((nave) => (
                    <div className="card" style={{width: "18rem"}}>
                        <img src="https://www.cinemascomics.com/wp-content/uploads/2021/06/Destructor-Estelar-Interdictor.jpg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{nave.name}</h5>
                            <div className="d-flex flex-column mb-3">
                                <span>Model: {nave.model}</span>
                                <span>Cargo capacity: {nave.cargo_capacity}</span>
                                <span>Length: {nave.length}</span>
                            </div>	
                            
                            <div className="d-flex justify-content-between">
                                <button onClick={() => navigate(`/naveDetalles/${nave.uid}`)} className="btn btn-primary">Ver detalles</button>
                                <button className="btn btn-warning">
                                    <CiHeart className="iconoMeGusta"/>
                                </button>
                            </div>
                           
                        </div>
                    </div>
                ))}
                </div>
			</div>
            
        </>
    )

}