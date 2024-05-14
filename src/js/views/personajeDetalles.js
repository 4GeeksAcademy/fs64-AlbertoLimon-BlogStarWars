import { useContext, useEffect } from "react"
import { Context } from "../store/appContext"

export const PersonajeDetalles = () => {

    const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.obtenerDetallesPersonaje();
	}, []);

    return (
        <>
        <div className="card-container container">
				<div className="card  d-flex flex-row mb-3">
					<img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Star_Wars_Logo.svg" className="card-img-top w-50" alt="..."/>
					<div className="card-body text-center">
						<h4 className="card-title"></h4>
						<p>

						</p>
						
					</div>
				</div>
				
				<div class="row">
					<div class="col d-flex justify-content-center">
						<p>Name</p>
						<p></p>
					</div>
					<div class="col d-flex justify-content-center">
						<p>Birth Year</p>
						<p></p>
					</div>
					<div class="col d-flex justify-content-center">
						<p>Gender</p>
						<p></p>
					</div>
					<div class="col d-flex justify-content-center">
						<p>Height</p>
						<p></p>
					</div>
					<div class="col d-flex justify-content-center">
						<p>Skin color</p>
						<p></p>
					</div>
					<div class="col d-flex justify-content-center">
						<p>Eye color</p>
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