import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css";
import { TarjetaPersonaje } from "./tarjetas/tarjetaPersonaje";

export const Personajes = () => {
    
    const { store, actions} = useContext(Context);
    
    useEffect(() => {
        actions.cargarPersonajes();
    }, []);

    return (
        <>
        
        <div className="scroll-container">
            <div className="d-inline-flex scroll">
                {store.personajes.map((personaje,index) => (
                    <TarjetaPersonaje personaje={personaje} key={index}/>
                ))}
            </div>
        </div>
        
        </>
    )
}