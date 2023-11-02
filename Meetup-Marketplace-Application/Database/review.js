const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  mentorEmail: {
    type: String,
    required: true,
  },

  stars: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  recommended: {
    type: Boolean,
    default: false,
  },
  feedback: {
    type: String,
    required: true,
  },
  menteeName: {
    type: String,
    required: true,
  },
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
