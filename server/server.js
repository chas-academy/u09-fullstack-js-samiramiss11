/* eslint-disable consistent-return */
/* eslint-disable global-require */
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');

dotenv.config();
connectDB(); // Connect Database

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',   // or process.env.FRONTEND_URL in prod
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization']
}));
app.options('*', cors());

app.use(express.json());
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


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
