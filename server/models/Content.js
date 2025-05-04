/* eslint-disable linebreak-style */
// server/models/Content.js
const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  body: {
    type: String, // Markdown or HTML
    default: '',
  },
  type: {
    type: String,
    enum: ['page', 'article', 'quiz'],
    default: 'page',
  },
}, {
  timestamps: true, // adds createdAt & updatedAt
});

module.exports = mongoose.model('Content', ContentSchema);
