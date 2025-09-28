const express=require('express');
const { getShopByRoom } = require('../controllers/ShopByRoomController');
const roomShops=express.Router();

roomShops.get('/' , getShopByRoom);


module.exports=roomShops;