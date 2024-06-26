const naveOperationDispatcher = {

    get: async () => {
        
        const response = await fetch('https://www.swapi.tech/api/vehicles/', {
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            }
        })
        if(response.ok){
            return await response.json();
        }else{
            console.log("Error al cargar las naves");
        }
        /*
        fetch("https://www.swapi.tech/api/vehicles")
            .then(res => res.json())
            .then(data => return data)
            .catch(err => console.error(err))
        */
    },

    getNave: async (id) => {
        const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            }
        })
        if(response.ok){
            return await response.json();
        }else{
            console.log("Error al cargar los detalles de la nave");
        }
    }

    
}

export default naveOperationDispatcher;