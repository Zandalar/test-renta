const Product = require('../models/product');
const NotFoundError = require('../errors/NotFoundError');
const ConflictError = require('../errors/ConflictError');
const ValidationError = require('../errors/ValidationError');
const {
  productNotFoundErrorText,
  conflictErrorText,
  idValidationErrorText,
  productIdNotFoundErrorText
} = require('../constants/constants');

function getProducts(req, res, next) {
  Product.find({})
    .orFail(new NotFoundError(productNotFoundErrorText))
    .then((products) => res.send(products))
    .catch(next);
}

function createProduct(req, res, next) {
  const {
    name,
    price,
    delivery,
    fresh,
    hit,
  } = req.body;
  Product.create({
    name,
    price,
    delivery,
    fresh,
    hit,
  })
    .then((product) => res.send(product))
    .catch((err) => {
      if (err.code === 11000 && err.name === 'MongoError') {
        throw new ConflictError(conflictErrorText);
      }
      throw err;
    })
    .catch(next);
}

function deleteProduct(req, res, next) {
  Product.findById(req.params.productId)
    .orFail(new NotFoundError(productIdNotFoundErrorText))
    .then((product) => {
      product.remove()
        .then((deletedProduct) => res.send(deletedProduct))
        .catch(next);
    })
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        throw new ValidationError(idValidationErrorText);
      }
      throw err;
    })
    .catch(next);
}

module.exports = { getProducts, createProduct, deleteProduct };
