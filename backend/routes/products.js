const products = require('express').Router();
const { getProducts, createProduct, deleteProduct } = require('../controllers/products');

products.get('/', getProducts);
products.post('/', createProduct);
products.delete('/:productId', deleteProduct);

module.exports = products;