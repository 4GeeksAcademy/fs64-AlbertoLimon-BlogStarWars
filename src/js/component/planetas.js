import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/index.css";
import { TarjetaPlaneta } from "./tarjetas/tarjetaPlaneta";

export const Planetas = () => {

    const { store, actions} = useContext(Context);

    useEffect(() => {
        actions.cargarPlanetas();
    }, []);

    return (
        <>
        
        <div className="scroll-container">
            <div className="d-inline-flex scroll">
                {store.planetas.map((planeta,index) => (
                    <TarjetaPlaneta planeta={planeta} key={index} />
                ))}
            </div>
        </div>
        
        </>
    )
}