const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const path = require('path');

// Ensure .env is loaded from the current directory
require('dotenv').config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5001;

// Debugging: Check if the string is loaded
if (!process.env.DATABASE_URL) {
    console.error("❌ ERROR: DATABASE_URL not found in .env file!");
    process.exit(1);
}

// Neon Connection Pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

app.use(cors());
app.use(express.json());
app.use(express.static('frontend'));

// Database Initialization
const initDB = async () => {
  const queryText = `
    CREATE TABLE IF NOT EXISTS leads (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      phone TEXT,
      source TEXT DEFAULT 'Website',
      status TEXT DEFAULT 'new',
      followUpDate DATE,
      notes JSONB DEFAULT '[]',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  try {
    await pool.query(queryText);
    console.log('✅ Neon Table Ready');
  } catch (err) {
    console.error('❌ Table Creation Error:', err.message);
  }
};

// Test connection and Init Table
pool.connect()
  .then(() => {
    console.log('✅ Connected to Neon PostgreSQL');
    initDB();
  })
  .catch(err => console.error('❌ Connection Error:', err.message));

// Pass the 'pool' to your routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/leads', (req, res, next) => {
  req.pool = pool; 
  next();
}, require('./routes/leads'));

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});