const User = require('../models/User');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const generateToken = (user) => {
  return jwt.sign(
    { 
      id: user._id, 
      username: user.username,   
      email: user.email          
    }, 
    process.env.JWT_SECRET, 
    { expiresIn: '7d' }
  );
};


exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: 'Email already in use' });

    const user = new User({ username, email, password });
    await user.save();

    const token = generateToken(user);
    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: { id: user._id, username, email }
    });
  } catch (err) {
    console.error('Error in registerUser:', err);
    res.status(500).json({ message: err.message });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user);
    res.json({ token, user: { id: user._id, username: user.username, email } });
  } catch (err) {
    console.error('Error in loginUser:', err);
    res.status(500).json({ message: err.message });
  }
};

exports.addFavorite = async (req, res) => {
  try {
    const placeId = req.params.placeId;

    if (!mongoose.Types.ObjectId.isValid(placeId)) {
      return res.status(400).json({ message: 'Invalid place ID' });
    }

    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    if (!user.favorites.includes(placeId)) {
      user.favorites.push(placeId);
      await user.save();
    }

    res.json({ message: 'Added to favorites' });
  } catch (err) {
    console.error('Error in addFavorite:', err);
    res.status(500).json({ message: err.message });
  }
};

exports.removeFavorite = async (req, res) => {
  try {
    const placeId = req.params.placeId;

    if (!mongoose.Types.ObjectId.isValid(placeId)) {
      return res.status(400).json({ message: 'Invalid place ID' });
    }

    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.favorites = user.favorites.filter(fav => fav.toString() !== placeId);
    await user.save();

    res.json({ message: 'Removed from favorites' });
  } catch (err) {
    console.error('Error in removeFavorite:', err);
    res.status(500).json({ message: err.message });
  }
};

exports.getFavorites = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('favorites');
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json(user.favorites);
  } catch (err) {
    console.error('Error in getFavorites:', err);
    res.status(500).json({ message: err.message });
  }
};
