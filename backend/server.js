const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');
require('dotenv').config();

const app = express();
const PORT = Number(process.env.PORT) || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/crm-db';

// Allow frontend to talk to backend
app.use(cors());
app.use(express.json());

// Serve frontend files
app.use(express.static('frontend'));

// Connect routes
app.use('/api/auth',  require('./routes/auth'));
app.use('/api/leads', require('./routes/leads'));

// Connect to MongoDB and start server
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    const server = app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    }).on('error', (err) => {
      if (err && err.code === 'EADDRINUSE') {
        console.error(`❌ Port ${PORT} is already in use. Stop the other process or change PORT in .env.`);
        process.exit(1);
      }
      throw err;
    });

    // Allow Ctrl+C to close cleanly
    process.on('SIGINT', async () => {
      try { await mongoose.connection.close(); } catch {}
      server.close(() => process.exit(0));
    });
  })
  .catch(err => console.error('❌ Error:', err));