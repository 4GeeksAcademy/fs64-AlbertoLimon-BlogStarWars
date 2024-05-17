import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css";
import { TarjetaNave } from "./tarjetas/tarjetaNave";

export const Naves = () => {

    const { store, actions} = useContext(Context);
   

    useEffect(() => {
        actions.cargarNaves();
        
    }, []);

    return (
        <>
			<div className="scroll-container">
                <div className="d-inline-flex scroll">
                    {store.naves.map((nave,index) => (
                        <TarjetaNave nave={nave} key={index}  />
                ))}
                </div>
			</div>
            
        </>
    )

}