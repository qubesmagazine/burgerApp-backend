const express = require('express');
const Category = require('../models/CategoryModel');


const getCategories = async (req, res) => {
    try {
      const categories = await Category.find();
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching categories', error });
    }
  }


  const createCategory = async (req, res) => {
    try {
      const category = new Category(req.body);
      await category.save();
      res.status(201).json(category);
    } catch (error) {
      res.status(500).json({ message: 'Error creating category', error });
    }
  }


  module.exports = {getCategories, createCategory}