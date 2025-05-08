/* eslint-disable no-unused-vars */
// server/server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorMiddleware');

dotenv.config();
connectDB();

const app = express();

// Built-in body parser
app.use(express.json());

// Enable CORS for all origins (tweak in production!)
app.use(cors());

// Public routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/search', require('./routes/searchRoutes'));
app.use('/api/news', require('./routes/newsRoutes'));
app.use('/api/quiz', require('./routes/quizRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));

// Protected / user-specific
app.use('/api/users/me/saved', require('./routes/savedContentRoutes'));

// Admin routes (assumes your authMiddleware on those controllers)
app.use('/api/admin/users', require('./routes/adminRoutes'));
app.use('/api/admin/content', require('./routes/contentRoutes'));

// 404 for any other route
app.use((req, res, next) => {
  res.status(404).json({ message: `Route ${req.method} ${req.originalUrl} not found` });
});

// Central error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
