const Place = require('../models/Place');

exports.getAllSites = async (req, res) => {
  try {
    const places = await Place.find();
    res.json(places);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch sites' });
  }
};
