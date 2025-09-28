const ShopByRoomModel = require("../models/ShopByRoom")


exports.getShopByRoom= async (req,res)=>{
    try {
        const rooms = await ShopByRoomModel.find();
        if(rooms.length===0){
        return res.status(404).json({message:"No rooms found"});
        }
        return res.status(200).json({rooms});       
    } catch (error) {
        return res.status(500).json({message:"Internal server error",error:error.message});
    }
};