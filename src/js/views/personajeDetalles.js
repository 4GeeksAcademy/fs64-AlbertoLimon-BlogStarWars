import { useContext } from "react"
import { Context } from "../store/appContext"

export const PersonajeDetalles = () => {

    const { store, actions } = useContext(Context);

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
						Name
					</div>
					<div class="col d-flex justify-content-center">
						Birth Year
					</div>
					<div class="col d-flex justify-content-center">
						Gender
					</div>
					<div class="col d-flex justify-content-center">
						Height
					</div>
					<div class="col d-flex justify-content-center">
						Skin color
					</div>
					<div class="col d-flex justify-content-center">
						Eye color
					</div>
				
				</div>
			</div>
            <Link to="/">
                <button className="btn btn-primary">Back to Home</button>
            </Link>
        </>
    )
}