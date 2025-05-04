/* eslint-disable linebreak-style */
require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../config/db');
const User = require('../models/User');

async function backfill() {
  await connectDB();
  const res = await User.updateMany(
    { isActive: { $exists: false } },
    { isActive: true, deletedAt: null },
  );
  console.log(`Modified ${res.nModified} users.`);
  mongoose.disconnect();
}

backfill().catch((err) => {
  console.error(err);
  mongoose.disconnect();
});
