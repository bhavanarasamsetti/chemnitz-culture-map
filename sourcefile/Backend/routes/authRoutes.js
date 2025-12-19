const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../utils/authMiddleware'); // Adjust path if needed

// Public routes
router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);

// Protected routes — require valid JWT token
router.get('/favorites', authMiddleware, authController.getFavorites);
router.post('/favorites/:placeId', authMiddleware, authController.addFavorite);
router.delete('/favorites/:placeId', authMiddleware, authController.removeFavorite);

module.exports = router;
