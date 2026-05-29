const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/projects', require('./routes/projects'));
app.use('/api/contact',  require('./routes/contact'));

// Health check
app.get('/', (req, res) => res.send('Portfolio API is running ✅'));

const PORT = process.env.PORT || 5000;
setInterval(() => {
  console.log('Server keep alive ping');
}, 1000 * 60 * 14);
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));