const mongoose = require('mongoose');
require('dotenv').config();
const mongoURI=process.env.MONGO_URI;
const mongoDb = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB...");
    const fetched_data = await mongoose.connection.db.collection('food_items');
    try {
      const data = await fetched_data.find({}).toArray();
      const food_category=await mongoose.connection.db.collection('food_category');
      const category=await food_category.find({}).toArray();
      global.category=category;
      global.food_items = data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }  
  } catch (err) {
    console.error('Could not connect to MongoDB...', err);
  }
};

module.exports = mongoDb;
