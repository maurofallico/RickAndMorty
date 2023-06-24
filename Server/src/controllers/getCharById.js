const axios = require('axios')

const URL = "https://rickandmortyapi.com/api/character"

const getCharById = async (req, res) => {
    try {
        const { id } = req.params
        const { data } = await axios.get(`${URL}/${id}`)
        const character = {
            id: data.id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin?.name,
            image: data.image,
            status: data.status 
        }
        if (character.name){
            res.status(200).json(character)
        }
        else{
            res.status(404).send("Not found")
        }
    }
        catch (error) {
        res.status(500).json({error: error.message})
    }
}

/* const axios = require('axios')

const getCharById = (res, id) => {
    const URL = "https://rickandmortyapi.com/api/character"
    axios.get(`${URL}/${id}`)
    .then(({data}) => {
        const {name, gender, species, origin, status, image} = data;
        const character = {id, name, gender, species, origin, status, image}
        res.writeHead(200, {"Content-Type": "application/json"})
        res.end(JSON.stringify (character))
    })
    .catch(error => {
        res.writeHead(500, {"Content-Type": "text/plain"})
        res.end(error.message)
    })
}

module.exports = getCharById

En el caso de que todo salga OK y se encuentre a un personaje, devuelve un JSON con las propiedades: id, status, name, species, origin, image y gender.
En el caso de que todo salga OK pero no se encuentre a un personaje, devuelve un mensaje con status 404 que diga Not fount.
Si hay un error debes responder con un status 500, y un texto con la propiedad message de error.

*/

module.exports = getCharById