const path = require('path');
const router = require('express').Router();
const products = require('./products');
const categories = require('./categories');
const NotFoundError = require('../errors/NotFoundError');
const publicPath = path.join(__dirname, '../..', 'build');

router.use('/products', products);
router.use('/categories', categories);
router.use('/*', (req, res, next) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

module.exports = router;