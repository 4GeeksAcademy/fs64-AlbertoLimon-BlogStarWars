import React, { useContext, useEffect } from "react";

import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const NaveDetalles = () => {
    const { store, actions} = useContext(Context);

    useEffect(() => {
        actions.obtenerDetallesNave();
    }, []);

    return (
        <>
            <div className="card-container container">
				<div className="card  d-flex flex-row mb-3">
					<img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" className="card-img-top w-50" alt="..."/>
					<div className="card-body text-center">
						<h5 className="card-title">Card title</h5>
						<p>

						</p>
						
					</div>
				</div>
				
				<div class="row">
					<div class="col d-flex justify-content-center">
						<p>Name </p>
                        <p></p>
					</div>
					<div class="col d-flex justify-content-center">
						
                        <p>Cargo capacity</p>
                        <p></p>
					</div>
					<div class="col d-flex justify-content-center">
						
                        <p>Crew</p>
                        <p></p>
					</div>
					<div class="col d-flex justify-content-center">
						
                        <p>Length</p>
                        <p></p>
					</div>
					<div class="col d-flex justify-content-center">
						
                        <p>Model</p>
                        <p></p>
					</div>
					<div class="col d-flex justify-content-center">
						
                        <p>Passengers</p>
                        <p></p>
					</div>
				
				</div>
			</div>
            <Link to="/">
                <button className="btn btn-primary">Back to Home</button>
            </Link>
        
        </>
    )

}