const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
  },
  products: [{
    type : mongoose.Schema.Types.ObjectId,
    ref: 'products',
    default: [],
  }],
  versionKey: false
})

module.exports = mongoose.model('category', categorySchema);