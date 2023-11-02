const Review = require('../Database/review');
const User = require('../Database/userModel')


const createReview = async (req, res) => {
  try {
    const { mentorEmail, stars, recommended, feedback, menteeName } = req.body;

    // Check if mentorEmail exists in the database
    const mentor = await User.findOne({ email: mentorEmail });
    if (!mentor) {
      return res.status(400).json({ error: 'Mentor not found' });
    }

    // Create the review object
    const review = new Review({
      mentorEmail,
      stars,
      recommended,
      feedback,
      menteeName,
    });

    // Save the review in the database
    await review.save();

    res.status(201).json({ message: 'Review created successfully' });
  } catch (error) {
    console.error('Error creating review:', error);
    res.status(500).json({ error: 'An error occurred while creating the review' });
  }
};


const getReviewsByMentorEmail = async (req, res) => {
  try {
    const { mentorEmail } = req.params;
    console.log(req.params)

    // Find all reviews for the given mentor email
    const reviews = await Review.find({ mentorEmail });

    res.json(reviews);
  } catch (error) {
    console.error('Error retrieving reviews:', error);
    res.status(500).json({ error: 'An error occurred while retrieving the reviews' });
  }
};


module.exports = {
  createReview,
  getReviewsByMentorEmail,
};
