/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
/* eslint-disable linebreak-style */
// controllers/savedContentController.js
const User = require('../models/User');

/**
 * GET /api/users/me/saved
 * Returns the logged-in user’s savedContent array.
 */
exports.getSaved = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('savedContent');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user.savedContent);
  } catch (err) {
    console.error('Get Saved Error:', err);
    res.status(500).json({ message: 'Server Error' });
  }
};

/**
 * POST /api/users/me/saved
 * Body: { type, itemId, title, link }
 * Adds one item to savedContent (no duplicates).
 */
exports.addSaved = async (req, res) => {
  const {
    type, itemId, title, link,
  } = req.body;
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Prevent duplicates
    const exists = user.savedContent.some(
      (i) => i.itemId === itemId && i.type === type,
    );
    if (!exists) {
      user.savedContent.push({
        type, itemId, title, link,
      });
      await user.save();
    }

    res.json(user.savedContent);
  } catch (err) {
    console.error('Add Saved Error:', err);
    res.status(500).json({ message: 'Server Error' });
  }
};

/**
 * DELETE /api/users/me/saved/:savedId
 * Removes the savedContent entry with that _id.
 */
exports.removeSaved = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.savedContent = user.savedContent.filter(
      (i) => i._id.toString() !== req.params.savedId,
    );
    await user.save();

    res.json(user.savedContent);
  } catch (err) {
    console.error('Remove Saved Error:', err);
    res.status(500).json({ message: 'Server Error' });
  }
};
