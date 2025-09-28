const mongoose = require('mongoose');

const shopByCategoriesSchema = new mongoose.Schema({
    title:{type:String,required:true,unique:true},
    description:{type:String,required:true},
    imageUrl:{type:String,required:true},
},{
    versionKey:false,
    timestamps:true
});

const ShopByCategoriesModel=mongoose.model('shopbycategories',shopByCategoriesSchema);

module.exports=ShopByCategoriesModel;