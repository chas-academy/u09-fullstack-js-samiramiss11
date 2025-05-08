/* eslint-disable no-unused-vars */
// server/server.js
require('express-async-errors'); // <== auto-catch async errors
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorMiddleware');

dotenv.config();
connectDB();

const app = express();

// built-in body parser
app.use(express.json());

// enable CORS for all origins (tweak in production!)
app.use(cors());

// ─── PUBLIC ROUTES ─────────────────────────────────────────────────────────────
// Auth / user endpoints
app.use('/api/users', require('./routes/userRoutes'));
// Search & content
app.use('/api/search', require('./routes/searchRoutes'));
app.use('/api/news', require('./routes/newsRoutes'));
app.use('/api/quiz', require('./routes/quizRoutes'));
// Contact form
app.use('/api/contact', require('./routes/contactRoutes'));

// ─── PROTECTED ─────────────────────────────────────────────────────────────────
// user-specific saved content
app.use('/api/users/me/saved', require('./routes/savedContentRoutes'));

// ─── ADMIN ─────────────────────────────────────────────────────────────────────
// these routes should be protected by your authMiddleware inside those files
app.use('/api/admin/users', require('./routes/adminRoutes'));
app.use('/api/admin/content', require('./routes/contentRoutes'));

// ─── 404 CATCH-ALL ──────────────────────────────────────────────────────────────
app.use((req, res, next) => {
  res.status(404).json({ message: `Route ${req.method} ${req.originalUrl} not found` });
});

// ─── CENTRAL ERROR HANDLER ─────────────────────────────────────────────────────
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
