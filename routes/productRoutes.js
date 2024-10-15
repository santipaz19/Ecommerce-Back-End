const express = require('express');
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');

const router = express.Router();

// Rutas CRUD
router.get('/', getAllProducts); // Obtener todos los productos
router.get('/:id', getProductById); // Obtener producto por ID
router.post('/', createProduct); // Crear un producto
router.put('/:id', updateProduct); // Actualizar un producto
router.delete('/:id', deleteProduct); // Eliminar un producto

module.exports = router;
