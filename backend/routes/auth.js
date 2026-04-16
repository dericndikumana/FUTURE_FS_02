const express = require('express');
const router  = express.Router();
const jwt     = require('jsonwebtoken');

// POST /api/auth/login
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  const adminEmail    = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;
  const jwtSecret     = process.env.JWT_SECRET;

  if (!adminEmail || !adminPassword || !jwtSecret) {
    return res.status(500).json({ message: 'Server auth is not configured.' });
  }

  if (email !== adminEmail || password !== adminPassword) {
    return res.status(401).json({ message: 'Wrong email or password.' });
  }

  const token = jwt.sign({ email: adminEmail }, jwtSecret, { expiresIn: '8h' });
  res.json({ token });
});

module.exports = router;