const express = require('express')
const server = express()
const router = require('./routes')
const getCharById = require ('./controllers/getCharById');

server.listen(3001, () => {
    
})

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

 server.use(express.json())

server.use("/rickandmorty", router)




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