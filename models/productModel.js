const { DataTypes } = require('sequelize');
const sequelize = require('../index'); // Importa la configuración de Sequelize

// Define el modelo de Producto
const Product = sequelize.define('Product', {
    name: {
        type: DataTypes.STRING,
        allowNull: false, // El nombre del producto es obligatorio
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false, // La descripción es obligatoria
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: false, // La imagen es obligatoria
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false, // El precio es obligatorio
    },
});

module.exports = Product;