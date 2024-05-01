const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true }, // This might be a URL or a file path
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
