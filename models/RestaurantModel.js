const mongoose = require('mongoose');

// Schema for a dish
const dishSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, default: '' },
  price: { type: Number, required: true },
  image: { type: String, required: true }, // Expecting a valid URL
});

// Schema for a restaurant
const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true }, // Image URL
  description: { type: String, default: '' },
  lng: { type: Number },
  lat: { type: Number },
  address: { type: String },
  stars: { type: Number },
  reviews: { type: String },
  category: { type: String },
  dishes: [dishSchema], // Nested dishes
});

// Schema for the featured collection
const featuredSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  restaurants: [restaurantSchema], // Nested restaurants
});

const Featured = mongoose.model('Featured', featuredSchema);

module.exports = Featured;
