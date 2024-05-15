
import naveOperationDispatcher from "./naveOperationDispatcher";
import personajeOperationDispatcher from "./personajeOperationDispatcher";
import planetaOperationDispatcher from "./planetaOperationDispatcher";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			personajes: [],
			naves: [],
			planetas: [],
			favoritos: [],
			personaje: {
				"description": "",
				"properties": {
						height: "",						
						hair_color: "",
						skin_color: "",
						eye_color: "",
						birth_year: "",
						gender: "",												
						name: "",
					},		
				
			},
			nave: {
				"properties": {
					model: "",						
					length: "",
					crew: "",
					passengers: "",
					cargo_capacity: "",
					name: "",
				}
			},
			planeta: {
				"description" : "",
				"properties": {
					diameter: "",
					gravity: "",
					population: "",
					climate: "",
					terrain: "",
					name: "",
					
				}
			}
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			cargarPersonajes: async () => {
				const data = await personajeOperationDispatcher.get()
				const store = getStore();
				console.log(data)
				setStore({...store, personajes: data.results});
				
			},
			cargarPlanetas: async () => {
				const data = await planetaOperationDispatcher.get();
				const store = getStore();
				
				setStore({...store, planetas: data.results});
			},
			cargarNaves: async () => {
				const data = await naveOperationDispatcher.get();;
				const store = getStore();
				
				setStore({...store, naves: data.results});
			},
			obtenerDetallesPersonaje: async (idPersonaje) => {
				const { result: personaje} = await personajeOperationDispatcher.getPersonaje(idPersonaje);
				const store = getStore();

				setStore({...store, personaje})
			},
			obtenerDetallesPlaneta: async (idPlaneta) => {
				const { result: planeta} = await planetaOperationDispatcher.getPlaneta(idPlaneta);
				const store = getStore();
				console.log("PLANETA ",planeta);
				setStore({...store, planeta})
			},
			obtenerDetallesNave: async (idNave) => {
				const { result: nave} = await naveOperationDispatcher.getNave(idNave);
				const store = getStore();
				
				setStore({...store, nave})
			},
			setFavoritos: async (item) => {
				const store = getStore();

				setStore({...store, favoritos: [...store.favoritos, item]})
			},
			removeFavorito: async (index) => {
				const store = getStore();
				const favoritos = store.favoritos.filter((_,i) => {
					return i !== index;
				})	
				setStore({...store, favoritos})
			}
		}
	};
};

export default getState;
