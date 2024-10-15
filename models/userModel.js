const { DataTypes } = require('sequelize');
const sequelize = require('../index');


const Users = sequelize.define('Users', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Users;