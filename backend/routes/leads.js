const express = require('express');
const router  = express.Router();
const auth    = require('../middleware/auth');

// POST: Create a new lead with Duplicate Check
router.post('/', auth, async (req, res) => {
  const { name, email, phone, source, status, followUpDate } = req.body;

  try {
    // 1. Validation: Check if email exists
    const checkEmail = await req.pool.query('SELECT id FROM leads WHERE email = $1', [email]);

    if (checkEmail.rows.length > 0) {
      return res.status(400).json({ message: 'A lead with this email already exists!' });
    }

    // 2. Insert if unique
    const result = await req.pool.query(
      'INSERT INTO leads (name, email, phone, source, status, followUpDate) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [name, email, phone, source, status || 'new', followUpDate || null]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('❌ Save Lead Error:', err.message);
    res.status(500).json({ message: 'Server error while saving lead', error: err.message });
  }
});

// GET: Fetch all leads
router.get('/', auth, async (req, res) => {
  try {
    const result = await req.pool.query('SELECT * FROM leads ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    console.error('❌ Fetch Leads Error:', err.message);
    res.status(500).json({ message: 'Failed to fetch leads', error: err.message });
  }
});

// PUT: Update lead (Ensure email isn't stolen by another lead)
router.put('/:id', auth, async (req, res) => {
  const { name, email, phone, source, status, followUpDate } = req.body;
  const { id } = req.params;

  try {
    // Check if another lead already uses this email
    if (email) {
      const emailConflict = await req.pool.query(
        'SELECT id FROM leads WHERE email = $1 AND id != $2',
        [email, id]
      );
      if (emailConflict.rows.length > 0) {
        return res.status(400).json({ message: 'Email is already taken by another lead.' });
      }
    }

    const result = await req.pool.query(
      'UPDATE leads SET name=$1, email=$2, phone=$3, source=$4, status=$5, followUpDate=$6 WHERE id=$7 RETURNING *',
      [name, email, phone, source, status, followUpDate, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error('❌ Update Lead Error:', err.message);
    res.status(500).json({ message: 'Update failed', error: err.message });
  }
});

// DELETE: Delete a lead
router.delete('/:id', auth, async (req, res) => {
  const { id } = req.params;
  try {
    await req.pool.query('DELETE FROM leads WHERE id = $1', [id]);
    res.json({ message: 'Lead deleted' });
  } catch (err) {
    console.error('❌ Delete Lead Error:', err.message);
    res.status(500).json({ message: 'Delete failed', error: err.message });
  }
});

// POST: Add note to lead
router.post('/:id/notes', auth, async (req, res) => {
  const { text } = req.body;
  const { id } = req.params;
  try {
    const result = await req.pool.query(
      'UPDATE leads SET notes = notes || $1::jsonb WHERE id = $2 RETURNING *',
      [[{ text, createdAt: new Date().toISOString() }], id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error('❌ Add Note Error:', err.message);
    res.status(500).json({ message: 'Failed to add note', error: err.message });
  }
});

module.exports = router;