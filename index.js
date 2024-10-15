const { Sequelize } = require('sequelize');

// Conexión con SQLite (se crea un archivo 'database.sqlite' en la raíz)
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite', // El archivo donde se almacenará la base de datos
});

module.exports = sequelize;