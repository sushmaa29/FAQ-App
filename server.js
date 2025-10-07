const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const faqRoutes = require('./routes/faq');
const path = require('path');
const { createClient } = require('redis');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON and URL-encoded payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files(Admin)
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect(process.env.MONGOURL)
.then(() => console.log('FAQ MongoDB is connected'))
.catch((err) => console.error(err));

//Connect to Redis
const redisClient = createClient();
redisClient.connect()
  .then(() => console.log('FAQ Redis is connected'))
  .catch((err) => console.error('Redis connection error:', err));

// Make Redis available to routes via app locals
app.locals.redisClient = redisClient;


// API Routes
app.use('/api/faqs', faqRoutes);

// Admin panel route
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin.html'));
  });

// Start server only if file is run directly
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;