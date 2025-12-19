const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  location: String,
  category: String, // e.g. museum, gallery, theatre
  image: String,
  lat: Number,
  lng: Number,
  hours: String,
  parking: String,
});

module.exports = mongoose.model('Place', placeSchema);
