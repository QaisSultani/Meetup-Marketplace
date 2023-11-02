const express = require("express");
const {
  bookings,
  booking,
  approveBooking,
  rejectBooking,
  newBooking,
  allBookings,
  deleteBookinng,
} = require("../controller/bookingController");
const { VerifyToken } = require("../middleware");

const {
  validateBookingsInputs,
  validateBookingInputs,
  validateBookingApproveInputs,
  validateBookingRejectInputs,
  validateNewBookingInputs,
} = require("../middleware/bookings");

const router = express.Router();
router.get("/all", allBookings);
router.get("/delete/:id", deleteBookinng);

router.use(VerifyToken);
router.get("/", bookings);
// router.get('/booking', (req, res) => res.status(400).json({ error: 'Booking ID not Found!' }))
router.get('/:id', booking)
router.post('/approve', approveBooking)
router.post('/reject', rejectBooking)
router.post('/new-booking', newBooking)

module.exports = router;
