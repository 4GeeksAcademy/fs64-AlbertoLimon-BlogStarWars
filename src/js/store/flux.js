
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
						"height": "",
						"mass": "",
						"hair_color": "",
						"skin_color": "",
						"eye_color": "",
						"birth_year": "",
						"gender": "",
						"created": "",
						"edited": "",
						"name": "",
						"homeworld": "",
						"url": ""
					},
					
					
				
			},
			nave: {
				"properties": {
					"model": "",
					"vehicle_class": "",
					"manufacturer": "",
					"cost_in_credits": "",
					"length": "",
					"crew": "",
					"passengers": "",
					"max_atmosphering_speed": "",
					"cargo_capacity": "",
					"consumables": "",
					"films": [],
					"pilots": [],
					"created": "",
					"edited": "",
					"name": "",
					"url": ""
				}
			},
			planeta: {
				"description" : "",
				"properties": {
					"diameter": "",
					"rotation_period": "",
					"orbital_period": "",
					"gravity": "",
					"population": "",
					"climate": "",
					"terrain": "",
					"surface_water": "",
					"created": "",
					"edited": "",
					"name": "",
					"url": ""
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
			obtenerDetallesPersonaje: async (uid) => {
				const { result: personaje} = await personajeOperationDispatcher.getPersonaje(uid);
				const store = getStore();

				setStore({...store, personaje})
			},
			obtenerDetallesPlaneta: async (uid) => {
				const { result: planeta} = await planetaOperationDispatcher.getPlaneta(uid);
				const store = getStore();
				console.log("PLANETA ",planeta);
				setStore({...store, planeta})
			},
			obtenerDetallesNave: async (uid) => {
				const { result: nave} = await naveOperationDispatcher.getNave(uid);
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
