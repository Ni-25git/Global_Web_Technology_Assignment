const express = require('express');
const { getChooseUs } = require('../controllers/ChooseUsController');
const chooseUs = express.Router();


chooseUs.get('/' , getChooseUs);

module.exports=chooseUs;