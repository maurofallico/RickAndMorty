const axios = require('axios')
const { Characters } = require('../DB_connection.js')
const { Op } = require('sequelize');
 
const getAllCharacters = async (req, res) => {
    const { name } = req.query //se guarda en la variable {name} lo que llegue por query (si no llega nada, será 'undefined')
    try {
        if (name){ //se evalúa si la variable {name} tiene algo, o si es 'undefined'
            const characters = await Characters.findAll({where: { name: { [Op.iLike]: `${name}%` } }})
            res.status(200).json(characters) // si tiene algo, entonces va a traer los personajes que coincidan con el query
        }
        else{
            const characters = await Characters.findAll()
            res.status(200).json(characters) // si no tiene nada, entonces va a traer todos los personajes
        }
    } catch (error) {
        res.status(500).json({ error: 'No se pudo acceder a los personajes' });  
        console.log(error)
    }
}

module.exports = getAllCharacters