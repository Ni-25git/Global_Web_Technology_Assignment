const mongoose = require('mongoose');

const shopByRoomSchema = new mongoose.Schema({
    title:{type:String,required:true,unique:true},
    description:{type:String,required:true},
    imageUrl:{type:String,required:true},
},{
    versionKey:false,
    timestamps:true
});

const ShopByRoomModel=mongoose.model('shopbyroom',shopByRoomSchema);

module.exports=ShopByRoomModel;