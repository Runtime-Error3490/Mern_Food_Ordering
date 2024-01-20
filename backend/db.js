const mongoose = require('mongoose');
require('dotenv').config();
const mongoURI = process.env.MONGO_URI;

const mongoDb = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB...");
    const fetched_data = await mongoose.connection.db.collection('food_category');
    try {
      const data = await fetched_data.find({}).toArray();
      console.log('Fetched data:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    
  } catch (err) {
    console.error('Could not connect to MongoDB...', err);
  }
};

module.exports = mongoDb;
