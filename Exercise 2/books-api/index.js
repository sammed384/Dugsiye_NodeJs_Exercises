require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');

// Initialize Express
const app = express();

// Middleware
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected locally'))
  .catch(err => console.error('❌ Connection error:', err));

const bookRoutes = require('./routes/books');
app.use('/books', bookRoutes);

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});