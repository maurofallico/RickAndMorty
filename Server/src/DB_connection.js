require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const  FavoriteModel  = require ('./models/Favorite')
const  UserModel  = require ('./models/User')
const  CharactersModel  = require ('./models/Characters')

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
   // URL
   "postgres://rickandmorty_ocyn_user:T3DHHf24cNf5FYQ2ovBBl5bjnY7LxMl3@dpg-cm6eri6d3nmc73cdfr80-a.oregon-postgres.render.com/rickandmorty_ocyn",
   { logging: false, native: false, dialectOptions: {
      ssl: { // Habilitar SSL/TLS
        require: true, // Requerir SSL
        rejectUnauthorized: false // Opcional: deshabilitar la verificación del certificado
      }
    } }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.

FavoriteModel(sequelize)
UserModel(sequelize)
CharactersModel(sequelize)

//

//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
 const { User, Favorite, Characters } = sequelize.models;

 User.belongsToMany(Favorite, {through: "user_favorite"})
 Favorite.belongsToMany(User, {through: "user_favorite"})

module.exports = {
   User,
   Favorite,
   Characters,
   conn: sequelize,
};
