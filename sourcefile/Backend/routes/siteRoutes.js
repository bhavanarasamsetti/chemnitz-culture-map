const express = require('express');
const router = express.Router();
const Site = require('../models/Site');

// Get all cultural sites
router.get('/sites', async (req, res) => {
  try {
    const sites = await Site.find();
    res.json(sites);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;