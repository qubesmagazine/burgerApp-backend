const express = require('express');
const Restaurant = require('../models/RestaurantModel');
const { getAllRestaurants, createNewRestaurants } = require('../controllers/restaurantControllers');

const router = express.Router();

// Get all restaurants
router.get('/', getAllRestaurants);

// Create a new restaurant
router.post('/', createNewRestaurants);

module.exports = router;
