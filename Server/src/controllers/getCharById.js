const axios = require('axios')

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