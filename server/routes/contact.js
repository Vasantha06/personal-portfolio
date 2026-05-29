const router = require('express').Router();
const Message = require('../models/Message');

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await Message.create({ name, email, message });
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (err) {
    console.error('❌ DB Error:', err.message);
    res.status(400).json({ message: 'Failed to save message' });
  }
});

module.exports = router;