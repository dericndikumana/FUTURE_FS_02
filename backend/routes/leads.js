const express = require('express');
const router  = express.Router();
const Lead    = require('../models/Lead');
const auth    = require('../middleware/auth');

// GET all leads — only logged in admin
router.get('/', auth, async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// GET stats for dashboard
router.get('/stats', auth, async (req, res) => {
  try {
    const total     = await Lead.countDocuments();
    const newLeads  = await Lead.countDocuments({ status: 'new' });
    const contacted = await Lead.countDocuments({ status: 'contacted' });
    const converted = await Lead.countDocuments({ status: 'converted' });
    const lost      = await Lead.countDocuments({ status: 'lost' });
    res.json({ total, new: newLeads, contacted, converted, lost });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// POST create a new lead
router.post('/', auth, async (req, res) => {
  try {
    const lead = new Lead(req.body);
    await lead.save();
    res.status(201).json(lead);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update a lead
router.put('/:id', auth, async (req, res) => {
  try {
    const lead = await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(lead);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// DELETE a lead
router.delete('/:id', auth, async (req, res) => {
  try {
    await Lead.findByIdAndDelete(req.params.id);
    res.json({ message: 'Lead deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// POST add a note to a lead
router.post('/:id/notes', auth, async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    lead.notes.push({ text: req.body.text });
    await lead.save();
    res.json(lead);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;