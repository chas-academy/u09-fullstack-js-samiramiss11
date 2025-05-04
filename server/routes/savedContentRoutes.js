/* eslint-disable linebreak-style */
const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const {
  getSaved,
  addSaved,
  removeSaved,
} = require('../controllers/savedContentController');

const router = express.Router();

router.use(protect);
router.get('/', protect, getSaved);
router.post('/', protect, addSaved);
router.delete('/:savedId', protect, removeSaved);

module.exports = router;
