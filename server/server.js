/* eslint-disable consistent-return */
/* eslint-disable global-require */
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB(); // Connect Database

const app = express();
app.use(express.json());

const WHITELIST = [
  process.env.NODE_ENV === 'production'
    ? process.env.FRONTEND_URL
    : 'http://localhost:3000', 'http://localhost:5000'];
app.use(cors({
  origin: (origin, cb) => {
    // Allow requests with no origin (mobile apps, curl, postman)
    if (!origin) return cb(null, true);
    if (WHITELIST.includes(origin)) return cb(null, true);
    cb(new Error(`CORS policy: Origin ${origin} not allowed`));
  },
}));

// Auth / User routes
const userRoutes = require('./routes/userRoutes');

app.use('/api/users', userRoutes);

// Search routes
const searchRoutes = require('./routes/searchRoutes');

app.use('/api/search', searchRoutes);

const savedRoutes = require('./routes/savedContentRoutes');

app.use('/api/users/me/saved', savedRoutes);

const contentRoutes = require('./routes/contentRoutes');

app.use('/api/admin/content', contentRoutes);

const adminRoutes = require('./routes/adminRoutes');

app.use('/api/admin', adminRoutes);

const contactRoutes = require('./routes/contactRoutes');

app.use('/api/contact', contactRoutes);

if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  // Serve React’s index.html for any non-API route
  app.use(express.static(path.join(__dirname, '../bookland/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../bookland/build', 'index.html'));
  });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
