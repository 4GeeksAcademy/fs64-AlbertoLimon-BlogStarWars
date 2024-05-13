const personajeOperationDispatcher = {

    get: async () => {
        
        const response = await fetch('https://www.swapi.tech/api/people/', {
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            }
        })
        if(response.ok){
            return await response.json();
        }else{
            console.log("Error al cargar los planetas");
        }
        /*
        fetch("https://www.swapi.tech/api/people/")
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err))
        */
    }
}

export default personajeOperationDispatcher;