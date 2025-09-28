const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    profileImage:{type:String,required:true},
    name:{type:String,required:true},
    designation:{type:String,required:true},
    review:{type:String,required:true},
},{
    versionKey:false,
    timestamps:true
});

const ReviewModel=mongoose.model('review',reviewSchema);

module.exports=ReviewModel;