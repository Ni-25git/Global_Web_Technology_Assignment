const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const collection  = require('./routes/CollectionRoutes');
const explore = require('./routes/ExploreRoutes');
const review = require('./routes/ReviewRoutes');
const chooseus = require('./routes/ChooseUsRoutes');
const shopByCategories = require('./routes/ShopByCategoriesRoutes');
const shopByRoom = require('./routes/ShoByRoomRoutes');

const app = express();
require('dotenv').config();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors({
    origin: 'https://globalassignment.netlify.app/',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']

}))

app.use("/collections" , collection);
app.use("/explore" , explore);
app.use('/reviews', review);
app.use('/chooseus', chooseus);
app.use('/shopbycategories', shopByCategories);
app.use('/shopbyroom', shopByRoom);







app.listen(PORT,async()=>{
    try {
        await connectDB(process.env.MONGO_URI);
        console.log(`Server is running on PORT ${PORT}`);
    } catch (error) {
        console.error('Error connecting to server:', error.message);
    }
});