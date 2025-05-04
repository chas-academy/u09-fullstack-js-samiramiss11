/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable linebreak-style */
/* eslint-disable prefer-template */
const express = require('express');

const router = express.Router();
const transporter = require('../utils/mailer');

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.SUPPORT_EMAIL,
      replyTo: email,
      subject: `New message from ${name}`,
      text: message + '\n\n— ' + email,
      html: `<p>${message}</p><p>— ${email}</p>`,
    });
    res.json({ ok: true });
  } catch (err) {
    console.error('Mail error', err);
    res.status(500).json({ message: 'Could not send email.' });
  }
});
module.exports = router;
