/* eslint-disable linebreak-style */
const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: +process.env.EMAIL_PORT,
  secure: process.env.EMAIL_SECURE === 'true', // true for 465

  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },

});

module.exports = transporter;
