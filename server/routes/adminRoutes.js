/* eslint-disable linebreak-style */
/* eslint-disable semi-style */
/* eslint-disable linebreak-style */
const express = require('express');
const {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/authController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

// all these are admin-only:
router.use(protect, admin);

// GET  /api/admin/users
router.get('/users', getAllUsers);
// GET  /api/admin/users/:id
router.get('/users/:id', getUserById);
// PUT  /api/admin/users/:id
router.put('/users/:id', updateUser);
// DELETE /api/admin/users/:id
router.delete('/users/:id', deleteUser);

module.exports = router;
