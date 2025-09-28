const mongoose = require('mongoose');

const exploreSchema = new mongoose.Schema({
    title:{type:String,required:true,unique:true},
    description:{type:String,required:true},
    imageUrl:{type:String,required:true},
    discount:{type:Number,required:true},
    price:{type:Number,required:true},
},{
    versionKey:false,
    timestamps:true 
});

const ExploreModel=mongoose.model('explore',exploreSchema);

module.exports=ExploreModel;