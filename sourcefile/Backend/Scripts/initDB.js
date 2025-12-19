require('dotenv').config();
console.log('MONGO_URI:', process.env.MONGO_URI);
const mongoose = require('mongoose');
const Place = require('../models/Place');
const User = require('../models/User');
const Comment = require('../models/Comment');

const placesData = require('./chemnitzCulture.places.json');
const userData = require('./chemnitzCulture.users.json');
const commentsData = require('./chemnitzCulture.comments.json');

function fixDateField(obj, field) {
  if (obj[field] && typeof obj[field] === 'object' && obj[field].$date) {
    obj[field] = new Date(obj[field].$date);
  }
}

async function initDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    await Place.deleteMany({});
    await User.deleteMany({});
    await Comment.deleteMany({});

    const cleanedPlaces = placesData.map(({ _id, ...rest }) => rest);

    const cleanedUsers = userData
      .map(({ _id, favorites, createdAt, updatedAt, ...rest }) => {
        // Fix favorites
        let fixedFavorites = [];
        if (Array.isArray(favorites)) {
          fixedFavorites = favorites.map(fav => {
            if (typeof fav === 'string') return fav;
            if (fav && fav.$oid) return fav.$oid;
            return fav;
          });
        }

        // Fix date fields
        const fixedCreatedAt = createdAt && createdAt.$date ? new Date(createdAt.$date) : createdAt;
        const fixedUpdatedAt = updatedAt && updatedAt.$date ? new Date(updatedAt.$date) : updatedAt;

        return {
          ...rest,
          favorites: fixedFavorites,
          createdAt: fixedCreatedAt,
          updatedAt: fixedUpdatedAt,
        };
      })
      .filter(user => {
        if (!user.username) {
          console.warn('Skipping user without username:', user);
          return false;
        }
        return true;
      });

 const cleanedComments = commentsData.map(({ _id, siteId, userId, date, ...rest }) => ({
  ...rest,
  siteId: typeof siteId === 'object' && siteId.$oid ? siteId.$oid : siteId,
  userId: typeof userId === 'object' && userId.$oid ? userId.$oid : userId,
  date: typeof date === 'object' && date.$date ? new Date(date.$date) : date,
}));


    await Place.insertMany(cleanedPlaces);
    await User.insertMany(cleanedUsers);
    await Comment.insertMany(cleanedComments);

    console.log('DB initialization complete: Places, Users, Comments inserted');
    process.exit(0);
  } catch (error) {
    console.error('DB init error:', error);
    process.exit(1);
  }
}

initDB();