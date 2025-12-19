const mongoose = require('mongoose');

const siteSchema = new mongoose.Schema({
  name: String,
  description: String,
  address: String,
  image: String
});

module.exports = mongoose.model('Site', siteSchema);