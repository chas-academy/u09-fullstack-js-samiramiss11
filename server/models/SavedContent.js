/* eslint-disable linebreak-style */
// server/models/SavedContent.js
const mongoose = require('mongoose');

const SavedSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true }, // e.g. 'Book' or 'Page'
  itemId: { type: String, required: true }, // e.g. bookId or page slug
  title: { type: String, required: true },
  link: { type: String, required: true }, // route to visit
}, { timestamps: true });
module.exports = mongoose.model('SavedContent', SavedSchema);
