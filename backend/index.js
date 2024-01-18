const express = require('express');
const app = express();
const mongodb = require('./db');
mongodb();

app.get('/', (req, res) => {
  res.send('Hello World');
});

const PORT = 5000; // Change this to the port you want to use

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
