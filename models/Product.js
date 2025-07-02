const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  stockQuantity: Number
});

module.exports = mongoose.model('Product', productSchema);
