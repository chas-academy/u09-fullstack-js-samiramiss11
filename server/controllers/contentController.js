/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable linebreak-style */
const Content = require('../models/Content');

// List all
exports.getAllContent = async (req, res) => {
  const items = await Content.find().sort('slug');
  res.json(items);
};

// Create
exports.createContent = async (req, res) => {
  const {
    type, slug, title, body,
  } = req.body;
  const exists = await Content.findOne({ slug });
  if (exists) return res.status(400).json({ message: 'Slug already in use' });
  const item = await Content.create({
    type, slug, title, body,
  });
  res.status(201).json(item);
};

// Update
exports.updateContent = async (req, res) => {
  const item = await Content.findById(req.params.id);
  if (!item) return res.status(404).json({ message: 'Not found' });
  ['type', 'slug', 'title', 'body'].forEach((field) => {
    if (req.body[field] != null) item[field] = req.body[field];
  });
  await item.save();
  res.json(item);
};

// Delete
exports.deleteContent = async (req, res) => {
  await Content.findByIdAndDelete(req.params.id);
  res.status(204).end();
};
