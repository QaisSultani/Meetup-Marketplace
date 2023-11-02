const Availability = require('../Database/availabilityModel');
const Booking = require('../Database/bookingModel')


const createAvailability = async (req, res) => {
  const { mentorEmail, availability } = req.body;

  try {
    const existingAvailability = await Availability.findOne({ mentorEmail });

    if (existingAvailability) {
      // Redirect to updateAvailability if availability already exists
      return updateAvailability(req, res);
    }

    const availabilityMap = new Map();
    Object.entries(availability).forEach(([dayOfWeek, timeSlots]) => {
      availabilityMap.set(dayOfWeek, timeSlots);
    });
    const createdAvailability = await Availability.create({
      mentorEmail,
      availability: availabilityMap,
    });

    res.status(201).json({ message: 'Availability created successfully', availability: createdAvailability });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create availability' });
  }
};


const updateAvailability = async (req, res) => {
  const { mentorEmail, availability } = req.body;

  try {
    const existingAvailability = await Availability.findOne({ mentorEmail });

    if (!existingAvailability) {
      return res.status(404).json({ error: 'Availability not found' });
    }

    const availabilityMap = new Map();

    Object.entries(availability).forEach(([dayOfWeek, timeSlots]) => {
      availabilityMap.set(dayOfWeek, timeSlots);
    });

    existingAvailability.availability = availabilityMap;

    const updatedAvailability = await existingAvailability.save();

    res.status(200).json({ message: 'Availability updated successfully', availability: updatedAvailability });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update availability' });
  }
};

const getCurrentAvailabilityByMentor = async (req, res) => {
  const { mentorEmail, startDate, endDate } = req.query;

  const new_start_date = new Date(startDate)
  const new_end_date = new Date(endDate)

  new_start_date.setUTCHours(0, 0, 0, 0, 0)
  new_end_date.setUTCHours(0, 0, 0, 0, 0)

  try {
    const mentorAvailability = await Availability.findOne({ mentorEmail });
    if (!mentorAvailability) {
      return res.status(404).json({ error: 'Availability not found for the mentor' });
    }
    const { availability } = mentorAvailability;
    const availability_object = Object.fromEntries(availability)

    const mentorBookings = await Booking.find(
      {
        mentorEmail,
        dateTime: { $gte: new_start_date, $lte: new_end_date },
      },
      { __v: 0, _id: 0 }
    );

    if (mentorBookings) {
      mentorBookings.forEach((booking) => {
        const { dateTime } = booking;
        const day = dateTime.toLocaleDateString(undefined, { weekday: 'long' });
        const timeslot = dateTime.toLocaleTimeString('en-US', {
          hour12: true,
          hour: '2-digit',
          minute: '2-digit',
        });

        availability_object[day] = availability_object[day].filter((value) => value !== timeslot);
      });

      res.status(200).json({ mentorEmail, availability: availability_object });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to fetch availability' });
  }

};

const getAvailabilityByMentor = async (req, res) => {
  const { mentorEmail } = req.params;
  try {
    const mentorAvailability = await Availability.findOne({ mentorEmail });
    if (!mentorAvailability) {
      return res.status(404).json({ error: 'Availability not found for the mentor' });
    }
    const { availability } = mentorAvailability;
    res.status(200).json({ mentorEmail, availability });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch availability' });
  }
}



module.exports = {
  createAvailability,
  updateAvailability,
  getAvailabilityByMentor,
  getCurrentAvailabilityByMentor,
};
