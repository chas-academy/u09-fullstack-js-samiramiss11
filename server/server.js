/* eslint-disable consistent-return */
/* eslint-disable global-require */
const fs = require('fs');
const path = require('path');

// Locate the gopd package via require.resolve
let gopdDir;
try {
  // resolve path to gopd’s index.js
  const gopdIndex = require.resolve('gopd');
  gopdDir = path.dirname(gopdIndex);
} catch (err) {
  console.warn('Could not resolve gopd module:', err);
}

if (gopdDir) {
  const srcFile = path.join(gopdDir, 'gopd.js');
  const dstFile = path.join(gopdDir, 'gOPD.js');
  if (fs.existsSync(srcFile) && !fs.existsSync(dstFile)) {
    try {
      fs.copyFileSync(srcFile, dstFile);
      console.log('Patched gOPD.js in gopd module at', gopdDir);
    } catch (err) {
      console.warn('Failed to patch gOPD.js:', err);
    }
  }
}
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB(); // Connect Database

const app = express();

const WHITELIST = process.env.NODE_ENV === 'production'
  ? [process.env.FRONTEND_URL]
  : ['http://localhost:3000', 'http://localhost:5000'];

app.use(cors({
  origin: (origin, cb) => {
    // Allow requests with no origin (mobile apps, curl, postman)
    if (!origin) return cb(null, true);
    if (WHITELIST.includes(origin)) return cb(null, true);
    cb(new Error(`CORS policy: Origin ${origin} not allowed`));
  },
}));

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

if (process.env.NODE_ENV === 'production') {
// Serve React’s index.html for any non-API route
  app.use(express.static(path.join(__dirname, '../bookland/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../bookland/build', 'index.html'));
  });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
