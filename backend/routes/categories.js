const categories = require('express').Router();
const {
  getCategories,
  createCategory,
  deleteCategory,
  addProductToCategory,
  removeProductFromCategory
} = require('../controllers/categories');

categories.get('/', getCategories);
categories.post('/', createCategory);
categories.delete('/:categoryId', deleteCategory);
categories.put('/:categoryId/products', addProductToCategory);
categories.delete('/:categoryId/products', removeProductFromCategory);

module.exports = categories;