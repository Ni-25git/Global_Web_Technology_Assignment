const mongoose = require('mongoose');
const mongo_uri=process.env.MONGO_URI;

const connectDB=async (mongo_uri)=>{
    try {
        await mongoose.connect(mongo_uri);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
    }
}

module.exports=connectDB;