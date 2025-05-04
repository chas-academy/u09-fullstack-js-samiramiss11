/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
const router = require('express').Router();
const { protect, admin } = require('../middleware/authMiddleware');
const Content = require('../models/Content');

// GET /api/admin/content
router.get('/', protect, admin, async (req, res) => {
  const all = await Content.find();
  res.json(all);
});

// POST /api/admin/content
router.post('/', protect, admin, async (req, res) => {
  const newItem = await Content.create(req.body);
  res.status(201).json(newItem);
});

// PUT /api/admin/content/:id
router.put('/:id', protect, admin, async (req, res) => {
  const updated = await Content.findByIdAndUpdate(
    req.params.id,
    { ...req.body, updatedAt: Date.now() },
    { new: true },
  );
  res.json(updated);
});

// DELETE /api/admin/content/:id
router.delete('/:id', protect, admin, async (req, res) => {
  await Content.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;