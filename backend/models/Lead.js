const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, default: '' },
  source: { type: String, enum: ['Website', 'LinkedIn', 'Referral', 'Other'], default: 'Website' },
  status: { type: String, enum: ['new', 'contacted', 'converted', 'lost'], default: 'new' },
  notes: [{ text: String, createdAt: { type: Date, default: Date.now } }],
  followUpDate: { type: Date, default: null },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Lead', leadSchema);