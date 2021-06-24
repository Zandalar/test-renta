const products = require('express').Router();
const { getProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/products');

products.get('/', getProducts);
products.post('/', createProduct);
products.delete('/:productId', deleteProduct);
products.put('/:productId', updateProduct);

module.exports = products;