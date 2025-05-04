/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable import/order */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-else-return */
/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body; // Extract email and password

  try {
    // Check if user exists in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check password
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
      return res.json({
        token: generateToken(user._id),
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          createdAt: user.createdAt,
        },
      });
    } catch (error) {
    // Server error handling
    console.error('Login Error:', error.message); // Log error for debugging
    return res.status(500).json({ message: 'Server Error' });
  }
};

// Register User
const registerUser = async (req, res) => {
  const { name, email, password } = req.body; // Extract input data

  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists, Please Try again' });
    }

    // Create a new user
    const user = await User.create({ name, email, password });

    // Send token and user details if created successfully
    if (user) {
      return res.status(201).json({
        token: generateToken(user._id),
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          createdAt: user.createdAt,
        },
      });
    } else {
      // Handle invalid user data
      return res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    // Server error handling
    console.error('Registration Error:', error.message); // Log error for debugging
    return res.status(500).json({ message: 'Server Error' });
  }
};
const getUserProfile = async (req, res) => {
  try {
    const user = await User.findOne({
      _id: req.user.id,
      isActive: true,
    }).select('-password');

    if (!user) {
      return res.status(404).json({ message: 'User not found or deactivated' });
    }

    res.json(user);
  } catch (error) {
    console.error('Get Profile Error:', error.message);
    res.status(500).json({ message: 'Server Error' });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    // Soft-delete:
    const user = await User.findByIdAndUpdate(
      userId,
      { isActive: false, deletedAt: Date.now() },
      { new: true },
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.json({ message: 'User deactivated successfully' });
  } catch (error) {
    console.error('Delete User Error:', error.message);
    return res.status(500).json({ message: 'Server Error' });
  }
};
// all for admin
// Fetch all users (admin only)
const getAllUsers = async (req, res) => {
  const users = await User.find().select('-password');
  res.json(users);
};

// Fetch single user by ID (admin only)
const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id).select('-password');
  if (user) return res.json(user);
  return res.status(404).json({ message: 'User not found' });
};

// Update any user (admin only)
const updateUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });

  // only allow changing these fields
  user.name = (req.body.name !== undefined && req.body.name !== null) ? req.body.name : user.name;
  user.email = (req.body.email !== undefined && req.body.email !== null) ? req.body.email : user.email;
  user.isAdmin = typeof req.body.isAdmin === 'boolean'
                   ? req.body.isAdmin
                   : user.isAdmin;

  // active/inactive
  user.isActive = typeof req.body.isActive === 'boolean'
  ? req.body.isActive
  : user.isActive;

  await user.save();

  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
    isActive: user.isActive,
  });
};
// Export controllers
module.exports = {
 loginUser,
 registerUser,
 getUserProfile,
 deleteUser,
 getAllUsers,
 getUserById,
 updateUser,
};
