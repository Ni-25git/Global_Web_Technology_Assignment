const express=require('express');
const { getExplore } = require('../controllers/ExploreController');
const explore=express.Router();

explore.get('/', getExplore);

module.exports=explore;