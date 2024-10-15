const Product = require('../models/productModel');
const products = require('./productsData');



const seedProducts = async () => {
    try {
        await Product.bulkCreate(products);
        console.log('Usuarios seed creados exitosamente');
    } catch (error) {
        console.error('Error al crear Usuarios seed:', error);
    }
};

module.exports = seedProducts;