const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
    title:{type:String,required:true,unique:true},
    imageUrl:{type:String,required:true},
    colors:{type:Array,required:true},
    price:{type:Number,required:true},
    oldPrice:{type:Number,required:true},
    discount:{type:Number,required:true},

},{
    versionKey:false,
    timestamps:true
});

const CollectionModel=mongoose.model('collection',collectionSchema);

module.exports=CollectionModel;