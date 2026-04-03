const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead');
const auth = require('../middleware/auth');

// GET all leads
router.get('/', auth, async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch { res.status(500).json({ message: 'Server error' }); }
});

// GET stats
router.get('/stats', auth, async (req, res) => {
  try {
    const total = await Lead.countDocuments();
    const newL = await Lead.countDocuments({ status: 'new' });
    const contacted = await Lead.countDocuments({ status: 'contacted' });
    const converted = await Lead.countDocuments({ status: 'converted' });
    const lost = await Lead.countDocuments({ status: 'lost' });
    res.json({ total, new: newL, contacted, converted, lost });
  } catch { res.status(500).json({ message: 'Server error' }); }
});

// POST create lead
router.post('/', auth, async (req, res) => {
  try {
    const lead = new Lead(req.body);
    await lead.save();
    res.status(201).json(lead);
  } catch (e) { res.status(400).json({ message: e.message }); }
});

// PUT update lead
router.put('/:id', auth, async (req, res) => {
  try {
    const lead = await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(lead);
  } catch { res.status(500).json({ message: 'Server error' }); }
});

// POST add note
router.post('/:id/notes', auth, async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    lead.notes.push({ text: req.body.text });
    await lead.save();
    res.json(lead);
  } catch { res.status(500).json({ message: 'Server error' }); }
});

// DELETE lead
router.delete('/:id', auth, async (req, res) => {
  try {
    await Lead.findByIdAndDelete(req.params.id);
    res.json({ message: 'Lead deleted' });
  } catch { res.status(500).json({ message: 'Server error' }); }
});

module.exports = router;