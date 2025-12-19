const express = require('express');
const router = express.Router();
const User = require('../models/User');
const authMiddleware = require('../utils/authMiddleware');


// GET user profile
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    // Find user by ID from the JWT token payload
    const user = await User.findById(req.user.id).select('-password -favorites -__v');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error('Error fetching user profile:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// PUT update user profile (email, bio, avatar)
router.put('/profile', authMiddleware, async (req, res) => {
  try {
    const { email, bio, avatar } = req.body;

    // Find user by ID from the JWT token payload
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update fields if provided
    if (email) user.email = email;
    if (bio) user.bio = bio;
    if (avatar) user.avatar = avatar;

    await user.save();

    res.json({ message: 'Profile updated successfully' });
  } catch (err) {
    console.error('Error updating user profile:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
