const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Characters', {
      id: {
         type: DataTypes.INTEGER,
         primaryKey: true, 
         allowNull: false
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false
      },
      species: {
         type: DataTypes.STRING,
         allowNull: false
      },
      gender: {
         type: DataTypes.ENUM('Female', 'Male', 'Genderless', 'unknown'),
         allowNull: false
      },
      status: {
        type: DataTypes.ENUM('Alive', 'Dead', 'unknown'),
        allowNull: false
      },
      image: {
         type: DataTypes.STRING,
         allowNull: false
      }
   },
    { timestamps: false });
};
