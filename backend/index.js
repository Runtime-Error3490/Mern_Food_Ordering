const express = require('express');
const app = express();
const mongodb = require('./db');
mongodb();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
