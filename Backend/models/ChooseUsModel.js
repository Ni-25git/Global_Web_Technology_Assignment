const mongoose = require('mongoose');

const chooseUsSchema = new mongoose.Schema({
    title:{type:String,required:true,unique:true},
    description:{type:String,required:true},
    imageUrl:{type:String,required:true},
},{
    versionKey:false,
    timestamps:true
});

const ChooseUsModel=mongoose.model('chooseus',chooseUsSchema);

module.exports=ChooseUsModel;