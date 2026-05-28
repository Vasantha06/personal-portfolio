const router = require('express').Router();
const Message = require('../models/Message');
const nodemailer = require('nodemailer');

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  // 1. Save to MongoDB
  try {
    await Message.create({ name, email, message });
  } catch (err) {
    return res.status(400).json({ message: 'Failed to save message' });
  }

  // 2. Send email to yourself
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS   // use Gmail App Password, not your real password
      }
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Contact from ${name}`,
      html: `
        <h3>New message from your portfolio!</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });

    } catch (err) {
    console.error('❌ Email Error:', err.message);
  }

  res.status(200).json({ message: 'Message sent successfully!' });
});

module.exports = router;