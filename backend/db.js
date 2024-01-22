const mongoose = require('mongoose');
require('dotenv').config();
const mongoURI='mongodb+srv://goFood:shaleenshukla123@cluster0.u47gysb.mongodb.net/goFoodMern?retryWrites=true&w=majority';
const mongoDb = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB...");
    const fetched_data = await mongoose.connection.db.collection('food_category');
    try {
      const data = await fetched_data.find({}).toArray();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    
  } catch (err) {
    console.error('Could not connect to MongoDB...', err);
  }
};

module.exports = mongoDb;
