// server/server.js (or server/index.js)

const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to the database
connectDB();

// Other middleware and route setup
app.use(express.json());

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
