/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
// server/routes/searchRoutes.js
const express = require('express');
const Content = require('../models/Content');

const router = express.Router();

// GET /api/search?...
router.get('/', async (req, res) => {
  const q = (req.query.q || '').trim();
  if (!q) {
    return res.status(400).json({ message: 'Query parameter `q` is required.' });
  }

  // case-insensitive regex search
  const re = new RegExp(q, 'i');
  try {
    const results = await Content.find({
      $or: [
        { title: { $regex: re } },
        { slug: { $regex: re } },
        { body: { $regex: re } },
      ],
    });
    res.json(results);
  } catch (err) {
    console.error('Search error:', err);
    res.status(500).json({ message: 'Server error while searching.' });
  }
});

module.exports = router;