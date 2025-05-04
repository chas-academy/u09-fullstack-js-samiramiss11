/* eslint-disable linebreak-style */
/* eslint-disable func-names */
/* eslint-disable no-return-await */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const savedItemSchema = new mongoose.Schema({
  type: { type: String, enum: ['Book', 'Author'], required: true },
  itemId: { type: String, required: true },
  title: { type: String, required: true },
  link: { type: String, required: true },
}, { _id: true, timestamps: false });
const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    deletedAt: { type: Date, default: null },
    savedContent: { type: [savedItemSchema], default: [] },
  },
  {
    timestamps: true,
  }
);

// Encrypt password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Compare entered password with hashed password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
