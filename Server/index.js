const axios = require("axios");
const server = require('./src/app')
const {conn, Characters} = require('./src/DB_connection')

const getAllCharacters = async () => {
    const response = await axios.get("http://localhost:5000/characters")
    const data = response.data
    const characters = data.map(char => {
      return {
        id: char.id,
        name: char.name,
        gender: char.gender,
        species: char.species,
        origin: char.origin?.name,
        image: char.image,
        status: char.status
      }
    })
    await characters.sort((a, b) => parseInt(a.id) - parseInt(b.id));
  
    for (const character of characters) {
      await Characters.upsert(character)
    }
  }


conn.sync({force: true}).then(async () => {
    server.listen(3001, async () => {
      getAllCharacters()
    });
}).catch((error) => {
    console.log(error);
});






/* const http = require('http');
const getCharById = require ('./controllers/getCharById');

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    const { url } = req
    const id = url.split("/").at(-1)

    if (url.includes("/rickandmorty/character")){
        getCharById(res, id)
    }
    
}).listen(3001, "localhost")     */