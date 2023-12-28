require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, POSTGRES_USER, POSTGRES_HOST, POSTGRES_PASSWORD, POSTGRES_DATABASE } = process.env;
const  FavoriteModel  = require ('./models/Favorite')
const  UserModel  = require ('./models/User')
const  CharactersModel  = require ('./models/Characters')

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
   // URL
   `postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}/${POSTGRES_DATABASE}`,
   { logging: false, native: false }
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
