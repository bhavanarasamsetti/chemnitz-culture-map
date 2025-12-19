const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  siteId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Place' },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  username: { type: String, required: true, trim: true },
  text: { type: String, required: true, trim: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Comment', commentSchema);
