const router = require('express').Router();
const products = require('./products');
const categories = require('./categories');
const NotFoundError = require('../errors/NotFoundError');

router.use('/products', products);
router.use('/categories', categories);
router.use('/*', (req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

module.exports = router;