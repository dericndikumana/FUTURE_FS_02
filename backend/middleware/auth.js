const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  if (!process.env.JWT_SECRET) {
    return res.status(500).json({ message: 'Server auth is not configured (JWT_SECRET missing). Check .env and restart the server.' });
  }

  // Get the token from the request header
  const token = req.headers.authorization?.split(' ')[1];

  // If no token — block access
  if (!token) {
    return res.status(401).json({ message: 'No token. Access denied.' });
  }

  // Check if token is valid
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = decoded;
    next(); // token is good — allow access
  } catch {
    res.status(401).json({ message: 'Token is not valid.' });
  }
};