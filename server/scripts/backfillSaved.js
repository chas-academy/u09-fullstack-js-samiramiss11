/* eslint-disable linebreak-style */
// scripts/backfillSaved.js
require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const User = require('../models/User');

(async () => {
  await connectDB();
  const res = await User.updateMany(
    // eslint-disable-next-line linebreak-style
    { savedContent: { $exists: false } },
    { $set: { savedContent: [] } },
  );
  console.log(`Modified ${res.nModified} user documents.`);
  mongoose.disconnect();
})();
