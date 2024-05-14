export const PlanetaDetalles = () => {
    const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.obtenerDetallesPlaneta();
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
						<p>Climate</p>
						<p></p>
					</div>
					<div class="col d-flex justify-content-center">
						<p>Population</p>
						<p></p>
					</div>
					<div class="col d-flex justify-content-center">
						<p>Terrain</p>
						<p></p>
					</div>
					<div class="col d-flex justify-content-center">
						<p>Diameter</p>
						<p></p>
					</div>
					<div class="col d-flex justify-content-center">
						<p>Gravity</p>
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