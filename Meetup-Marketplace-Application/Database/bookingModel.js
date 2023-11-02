const mongoose = require('mongoose')
const User = mongoose.model('User')

const Schema = mongoose.Schema

const bookingSchema = new Schema({
    mentorEmail: {
        type: String,
        // ref: "User",
        required: true,
    },
    userEmail: {
        type: String,
        // ref: "User",
        required: true,
    },
    dateTime: {
        type: Date,
        required: true
    },
    statusValue: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        required: true,
        default: 'pending',
    },
    payment: {
        type: Intl,
        required: true,
    }
});

bookingSchema.index({mentorEmail: 1, dateTime: 1}, {unique: true})

module.exports = mongoose.model('Booking', bookingSchema)