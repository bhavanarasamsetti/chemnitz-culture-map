const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors()); 
app.use((req, res, next) => {
  if (['POST', 'PUT', 'PATCH'].includes(req.method)) {
    express.json()(req, res, next);
  } else {
    next();
  }
});


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(' MongoDB connection error:', err));

app.use('/public', express.static(path.join(__dirname, '..', 'public')));

app.use(express.static(path.join(__dirname, '..', 'Frontend')));

const siteRoutes = require('./routes/siteRoutes');
const authRoutes = require('./routes/authRoutes');
const placeRoutes = require('./routes/Places');
const commentsRoutes = require('./routes/comments');
const userRoutes = require('./routes/userRoutes');


app.use('/api/sites', siteRoutes);
app.use('/api/auth', authRoutes);
app.use('/places', placeRoutes);
app.use('/api/comments', commentsRoutes);
app.use('/api/user', userRoutes); 


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
