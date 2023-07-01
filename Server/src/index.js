const server = require('./app')

server.listen(3001, () => {
    
})




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