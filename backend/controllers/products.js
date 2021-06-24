const fs = require('fs');
const path = require('path');
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
const uploadsPath = path.resolve(`${__dirname}/../../${process.env.NODE_ENV === 'production' ? 'build/static/media' : 'src/images'}`);

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
  const imgPath = path.resolve(`${uploadsPath}/${req.files.img.name}`);

  if (!fs.existsSync(uploadsPath)) {

    fs.mkdirSync(uploadsPath);

  }

  fs.writeFileSync(imgPath, req.files.img.data);

  Product.create({
    name,
    price,
    delivery,
    fresh,
    hit,
    img: `static/media/${req.files.img.name}`,
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

function updateProduct(req, res, next) {
  const updatedProduct = {};
  for (const prop in req.body) {
    updatedProduct[prop] = req.body[prop]
  }
  const imgPath = path.resolve(`${uploadsPath}/${req.files.img.name}`);
  if (req.files && req.files.img) {
    if (!fs.existsSync(uploadsPath)) {

      fs.mkdirSync(uploadsPath);

    }

    fs.writeFileSync(imgPath, req.files.img.data);
    updatedProduct.img = `static/media/${req.files.img.name}`
  }

  Product.findByIdAndUpdate(req.params.productId, updatedProduct)
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

module.exports = { getProducts, createProduct, updateProduct, deleteProduct };
