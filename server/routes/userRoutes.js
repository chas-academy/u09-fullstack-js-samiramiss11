const express = require('express');
const router = express.Router();
const {
  loginUser, registerUser, getUserProfile, deleteUser,
} = require('../controllers/authController');
// eslint-disable-next-line no-unused-vars
const { protect, admin } = require('../middleware/authMiddleware');

router.delete('/:id', protect, async (req, res) => {
  // Only allow deletion of own account
  if (req.user._id.toString() !== req.params.id) {
    return res.status(403).json({ message: 'You can only delete your own account' });
  }
  return deleteUser(req, res);
});

router.post('/login', loginUser);
router.post('/signup', registerUser);
router.get('/profile', protect, getUserProfile);

module.exports = router;
