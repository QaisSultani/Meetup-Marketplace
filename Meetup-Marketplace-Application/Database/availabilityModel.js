const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const availabilitySchema = new Schema({
  mentorEmail: {
    type: String,
    ref: 'User',
    required: true,
  },
  availability: {
    type: Map,
    of: [String],
    required: true,
  },
});

module.exports = mongoose.model('Availability', availabilitySchema);
