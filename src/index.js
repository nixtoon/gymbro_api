const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to my API server');
});

app.use('/api', require('./routes/app'));

// MongoDB connection
mongoose
.connect(process.env.MONGODB_URI)
.then(() => console.log('Conected to MongoDB Atlas'))
.catch((error) => console.error(error));

app.listen(port, () => console.log('listening on port', port));