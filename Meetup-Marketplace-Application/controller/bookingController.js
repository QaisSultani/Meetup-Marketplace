// const User = require('../Database/userModel')
const ObjectId = require("mongodb").ObjectId;

const { default: mongoose } = require("mongoose");
const Booking = require("../Database/bookingModel");
const User = require("../Database/userModel");
const {
  acceptBookingTemplate,
  rejectBookingTemplate,
} = require("../helpers/template/email");
const { sendEmail, formatDate, formatTime } = require("../helpers/user");

// const bookings = async (req, res) => {
//   const toFind =
//     req.verified.userType === "mentee"
//       ? { userEmail: req.verified.email }
//       : { mentorEmail: req.verified.email };
//   Booking.find(toFind, { _id: 0, __v: 0 })
//     .then((bookings) => {
//       for (const booking of bookings) {
//         User.findOne({ email: booking.userEmail }, '-password -__v -expire_data -_id -statusValue -userRole')
//           .then((user, booking) => {
//             // console.log('User: ', user)
//             booking.userDetails = user
//           })
//           .catch((error) => res.status(500).json({ error }));
//         console.log('Booking: ', booking)
//         //   booking.userDetails = user; // Add user details to the booking object
//       }
//       res.status(202).json({ bookings })
//     })
//     .catch((error) => res.status(500).json({ error }));
// };
const bookings = async (req, res) => {
  const toFind =
    req.verified.userType === "mentee"
      ? { userEmail: req.verified.email }
      : { mentorEmail: req.verified.email };

  try {
    const bookings = await Booking.find(toFind, { _id: 0, __v: 0 }).lean();

    for (const booking of bookings) {
      const user = await User.findOne(
        { email: booking.userEmail },
        '-_id name email userType profileImage contact location age bio'
      ).lean();
      booking.userDetails = user;
    }

    res.status(202).json({ bookings });
  } catch (error) {
    res.status(500).json({ error });
  }
};



const booking = async (req, res) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id)) {
    return res.status(401).json({ error: "Invalid Booking ID" });
  }
  Booking.findById(id)
    .then((booking) => {
      booking
        ? res.send(booking)
        : res.status(404).json({ error: "Booking not Found!" });
    })
    .catch((error) =>
      res.status(500).json({ error: "Internal server error!" })
    );
};

const approveBooking = async (req, res) => {
  const { email } = req.verified;
  const { userEmail, dateTime } = req.body;

  Booking.findOneAndUpdate(
    { userEmail, dateTime, mentorEmail: email, statusValue: "pending" },
    { $set: { statusValue: "approved" } },
    { returnDocument: "after", projection: { _id: 0, __v: 0 } }
  )
    .then(async (booking) => {
      let user = await User.findOne({ email });

      booking
        ? sendEmail(req, res, {
          email: userEmail,
          subject: "Booking Confirmed",
          emailTemplate: acceptBookingTemplate({
            user: user.name,
            dateTime: formatDate(user.date) + formatTime(user.date),
          }),
        })
        : res.status(404).json({ error: "Booking not Updated!" });
    })
    .catch((error) => res.status(500).json({ error }));
};

const deleteBooking = async (req, res, { id, email }) => {
  try {
    await Booking.deleteOne({ _id: id }).then(async (response) => {
      let user = await User.findOne({ email });

      sendEmail(req, res, {
        email,
        subject: "Booking Rejected",
        emailTemplate: rejectBookingTemplate({
          user: user.name,
          dateTime: formatDate(user.date) + formatTime(user.date),
        }),
      });
    });
  } catch (err) {
    res.status(500).json({ err });
  }
};

const rejectBooking = async (req, res) => {
  const { email } = req.verified;
  const { userEmail, dateTime } = req.body;

  await Booking.findOneAndUpdate(
    { userEmail, dateTime, mentorEmail: email, statusValue: "pending" },
    { $set: { statusValue: "rejected" } },
    { returnDocument: "after", projection: { __v: 0 } }
  )
    .then((booking) => {
      booking
        ? deleteBooking(req, res, { id: booking._id, email: userEmail })
        : res.status(404).json({ error: "Booking not Updated!" });
    })
    .catch((error) => res.status(500).json({ error }));
};

const newBooking = async (req, res) => {
  const { email, userType } = req.verified;
  const { mentorEmail, dateTime, payment } = req.body;

  if (userType === "mentor") {
    res.status(400).json({ error: "Mentor can not create a Booking!" });
  } else {
    User.findOne({ email: mentorEmail, userType: "mentor" })
      .then((user) => {
        if (!user) {
          res.status(404).json({ error: "No Mentor Found with this Email!" });
        } else {
          Booking.findOne({ mentorEmail, dateTime })
            .then((booking) => {
              if (booking) {
                res.status(409).json({
                  error: "Mentor is not available in this time slot!",
                });
              } else {
                Booking.create({
                  mentorEmail,
                  dateTime,
                  payment,
                  userEmail: email,
                })
                  .then((booking) => {
                    if (booking) {
                      const { _id, __v, ...responseData } = booking._doc;
                      res.send(responseData);
                    } else {
                      res
                        .status(500)
                        .json({ error: "Booking could not Created!" });
                    }
                  })
                  .catch((error) => {
                    res.status(500).json({ error });
                  });
              }
            })
            .catch((error) => {
              res.status(500).json({ error });
            });
        }
      })
      .catch((error) => {
        res.status(500).json({ error });
      });
  }
};

const allBookings = async (req, res) => {
  Booking.find({}, { __v: 0 })
    .then((bookings) => res.status(202).json({ bookings }))
    .catch((error) => res.status(500).json({ error }));
};

const deleteBookinng = async (req, res) => {
  await Booking.deleteOne({ _id: req.params.id });
  res.status(202).json({ message: "Deleted!" });
};

module.exports = {
  bookings,
  booking,
  approveBooking,
  rejectBooking,
  newBooking,
  allBookings,
  deleteBookinng,
};
