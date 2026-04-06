const express = require('express');
const router  = express.Router();
const jwt     = require('jsonwebtoken');

// POST /api/auth/login
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Get admin details from .env
  const adminEmail    = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;
  const jwtSecret     = process.env.JWT_SECRET;

  // If server env isn't set up, fail with a clear message
  if (!adminEmail || !adminPassword || !jwtSecret) {
    return res.status(500).json({
      message: 'Server auth is not configured. Set ADMIN_EMAIL, ADMIN_PASSWORD, and JWT_SECRET in .env and restart the server.'
    });
  }

  const inputEmail = String(email || '').trim().toLowerCase();
  const inputPass  = String(password || '').trim();
  const envEmail   = String(adminEmail).trim().toLowerCase();
  const envPass    = String(adminPassword).trim();

  // Check if email and password are correct
  if (inputEmail !== envEmail || inputPass !== envPass) {
    return res.status(401).json({ message: 'Wrong email or password.' });
  }

  // Create a token that lasts 8 hours
  const token = jwt.sign({ email: envEmail }, jwtSecret, { expiresIn: '8h' });

  // Send token back to frontend
  res.json({ token });
});

module.exports = router;