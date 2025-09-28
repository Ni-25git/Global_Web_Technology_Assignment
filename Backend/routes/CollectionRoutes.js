const express= require('express');
const { getAllCollections } = require('../controllers/CollectionController');
const collection = express.Router();


collection.get('/', getAllCollections);
module.exports = collection;