const Category = require('../models/category');
const NotFoundError = require('../errors/NotFoundError');
const ValidationError = require('../errors/ValidationError');
const {
  categoryNotFoundErrorText,
  idValidationErrorText,
  conflictErrorText,
  categoryIdNotFoundErrorText
} = require('../constants/constants');

function getCategories(req, res, next) {
  Category.find({})
    .orFail(new NotFoundError(categoryNotFoundErrorText))
    .then((categories) => res.send(categories))
    .catch(next);
}

function createCategory(req, res, next) {
  const { name } = req.body;
  Category.create({ name })
    .then((category) => res.send(category))
    .catch((err) => {
      if (err.code === 11000 && err.name === 'MongoError') {
        throw new ConflictError(conflictErrorText);
      }
      throw err;
    })
    .catch(next);
}

function deleteCategory(req, res, next) {
  Category.findById(req.params.categoryId)
    .orFail(new NotFoundError(categoryIdNotFoundErrorText))
    .then((category) => {
      category.remove()
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

function addProductToCategory(req, res, next) {
  const { id } = req.body;
  Category.findByIdAndUpdate(
    req.params.categoryId,
      { $addToSet: { products: id } },
      { new: true },
  )
    .orFail(new NotFoundError(categoryNotFoundErrorText))
    .then((category) => res.status(200).send(category))
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        throw new ValidationError(idValidationErrorText);
      }
      throw err;
    })
    .catch(next);
}

function removeProductFromCategory(req, res, next) {
  const { id } = req.body;
  Category.findByIdAndUpdate(
    req.params.categoryId,
      { $pull: { products: id } },
      { new: true },
  )
    .orFail(new NotFoundError(categoryNotFoundErrorText))
    .then((category) => res.status(200).send(category))
    .catch((err) => {
      if (err.kind === 'ObjectId') {
        throw new ValidationError(idValidationErrorText);
      }
      throw err;
    })
    .catch(next);
}

module.exports = {
  getCategories,
  createCategory,
  deleteCategory,
  addProductToCategory,
  removeProductFromCategory
};