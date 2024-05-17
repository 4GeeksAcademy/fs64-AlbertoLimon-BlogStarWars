import React, { useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from "react-router";

export const TarjetaNave = ({nave, key}) => {

    const { store, actions } = useContext(Context);

    const navigate = useNavigate();

    return(
        <>
            <div className="card">
                <img src="https://www.cinemascomics.com/wp-content/uploads/2021/06/Destructor-Estelar-Interdictor.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title mb-3">{nave.name}</h5>
                            
                    <div className="d-flex justify-content-between">
                        <button onClick={() => navigate(`/naveDetalles/${nave.uid}`)} className="btn btn-outline-primary">Ver detalles</button>
                        <button className="btn btn-outline-warning" onClick={() => {actions.setFavoritos(nave)}}>
                            <CiHeart className="iconoMeGusta"/>
                        </button>
                    </div>        
                </div>
            </div>
        
        </>


    )
}