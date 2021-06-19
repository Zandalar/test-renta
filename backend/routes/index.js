const router = require('express').Router();
const products = require('./products');
const categories = require('./categories');

router.use('/products', products);
router.use('/categories', categories);

module.exports = router;