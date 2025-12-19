const express = require('express');
const router = express.Router();
const Place = require('../models/Place');

// Get all or filtered places
router.get('/', async (req, res) => {
    try {
        const category = req.query.category;
        const filter = category ? { category } : {};
        const places = await Place.find(filter);
        res.json(places);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
