const express=require('express');
const { getShopByCategories } = require('../controllers/ShopByCategoriesController');
const categories=express.Router();

categories.get('/', getShopByCategories);

module.exports=categories;