const express = require('express');
const Restaurant = require('../models/RestaurantModel');

const router = express.Router();

// Get all restaurants
router.get('/', async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching restaurants', error });
  }
});

// Create a new restaurant
router.post('/', async (req, res) => {
  try {
    const restaurant = new Restaurant(req.body);
    await restaurant.save();
    res.status(201).json(restaurant);
  } catch (error) {
    if (error.name === 'ValidationError') {
      // Extract validation errors
      res.status(400).json({
        message: 'Validation error',
        errors: error.errors,
      });
    } else {
      res.status(500).json({
        message: 'Error creating restaurant',
        error,
      });
    }
  }
});

module.exports = router;
