const server = require('./app')
const {conn} = require('./DB_connection')


conn.sync({force: false}).then(() => {
    server.listen(3001, () => {
    })
}).catch((error) => {
    console.log(error)
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