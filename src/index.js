const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// Middleware para parsear el cuerpo de las solicitudes JSON
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to my API server');
});

app.use('/api', require('./routes/app'));

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Salir del proceso en caso de error de conexión
  });

app.listen(port, () => console.log('listening on port', port));