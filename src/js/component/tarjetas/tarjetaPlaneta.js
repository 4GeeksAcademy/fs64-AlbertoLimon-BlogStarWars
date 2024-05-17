import React, { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router";

export const TarjetaPlaneta = ({planeta, key}) => {

    const { store, actions } = useContext(Context);

    const navigate = useNavigate();
    
    
    return (
        <>
            
                <div className="card" key={key}>
                    <img src="https://assets-prd.ignimgs.com/2022/02/10/06-dantooine-1644525955609.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title mb-3">{planeta.name}</h5>
                        <div className="d-flex justify-content-between">
                            <button onClick={() => navigate(`/planetaDetalles/${planeta.uid}`)} className="btn btn-outline-primary">Ver detalles</button>
                            <button className="btn btn-outline-warning" onClick={() => actions.setFavoritos(planeta)}>
                                <CiHeart className="iconoMeGusta"/>
                            </button>
                        </div>
     
                    </div>
                </div>
           
        
        </>
    )
}