const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    unique: true,
  },
  price: {
    type: Number
  },
  delivery: {
    type: Boolean
  },
  fresh: {
    type: Boolean
  },
  hit: {
    type: Boolean
  },
  img: {
    type: String,
  },
  versionKey: false
})

module.exports = mongoose.model('product', productSchema);