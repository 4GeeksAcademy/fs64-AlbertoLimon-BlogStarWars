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
			planetas: []
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
				const data = await personajeOperationDispatcher.getPersonaje(uid);
				const store = getStore();

				setStore({...store, personaje: data})
			},
			obtenerDetallesPlaneta: async (uid) => {
				const data = await planetaOperationDispatcher.getPlaneta(uid);
				const store = getStore();

				setStore({...store, planeta: data})
			},
			obtenerDetallesNave: async (uid) => {
				const data = await naveOperationDispatcher.getNave(uid);
				const store = getStore();

				setStore({...store, nave: data})
			}
		}
	};
};

export default getState;
