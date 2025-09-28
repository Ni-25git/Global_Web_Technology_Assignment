const express = require('express');
const { getReviews } = require('../controllers/ReviewController');
const review = express.Router();


review.get('/' , getReviews);

module.exports=review;