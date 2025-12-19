const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');
const authMiddleware = require('../utils/authMiddleware');  // <-- import authMiddleware

// Get comments by site ID
router.get('/:siteId', async (req, res) => {
  try {
    const comments = await Comment.find({ siteId: req.params.siteId }).sort({ date: -1 });
    res.json(comments);
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({ message: 'Server error fetching comments' });
  }
});


// Add a comment (protected route)
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { siteId, text } = req.body;

    if (!siteId || !text) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Use user info from token
    const userId = req.user.id;
    const username = req.user.username;

    const newComment = new Comment({ siteId, userId, username, text });
    await newComment.save();

    res.status(201).json(newComment);
  } catch (error) {
    console.error('Error adding comment:', error);  
    res.status(500).json({ message: 'Server error adding comment' });
  }
});

module.exports = router;
