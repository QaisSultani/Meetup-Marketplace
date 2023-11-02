const express = require("express");

// controller functions
const {
  signupUser,
  loginUser,
  superAdminChangeUserType,
  getAllUsers,
  getAllInActiveMentors,
  getAllMentors,
  changeUserStatus,
  oauthLogin,
  changePassword,
  deleteUser,
  currentUser,
  updateProfile,
  forgotPassword,
  resetPassword,
  checkSlugAvailability,
  getMentorBySlug,
} = require("../controller/userController");

const {
  createAvailability,
  updateAvailability,
  getAvailabilityByMentor,
  getCurrentAvailabilityByMentor,
} = require("../controller/availabilityController");

const {createReview,
  getReviewsByMentorEmail,} = require ("../controller/reviewController")
const { AuthAdmin } = require("../middleware");
const { VerifyToken } = require("../middleware/index");

const router = express.Router();

// get slug
router.post("/slug", checkSlugAvailability);

//get mentor by slug
router.get("/mentor/:slug", getMentorBySlug);

//login route
router.post("/login", loginUser);

//signup route
router.post("/signup", signupUser);

// Super admin change user type route

//all users
router.get("/users", getAllUsers);

//all inActive mentors for the superAdmin to make active
router.get("/users/IAmentors", getAllInActiveMentors);
router.get("/users/AllMentors", getAllMentors);

// Super admin change user status route
router.patch("/users/:email/change-status", changeUserStatus);
router.patch("/users/:email/change-type", superAdminChangeUserType);
// OAuth Login
router.post("/oauth-login", oauthLogin);

//create availability of mentor
router.post('/availability', createAvailability);

//update availability
router.put('/availability/:mentorEmail', updateAvailability);

//get availability
router.get('/getavailability/:mentorEmail', getAvailabilityByMentor);


// Create a new review
router.post('/review', createReview);

// Get reviews by mentor email
router.get('/review/:mentorEmail', getReviewsByMentorEmail);
router.get("/delete/:id", deleteUser);

// review routes
router.post('/review', createReview);
router.get('/review/:mentorEmail', getReviewsByMentorEmail);

//forgot-password
router.get("/forgot-password/:email", forgotPassword);
router.post("/reset-password/:email", resetPassword);

//routes for validated users
router.use(VerifyToken);

router.put("/change-password", changePassword);
router.get("/", currentUser);
router.patch("/update", updateProfile);

router.get('/weeklyavailability/mentor', getCurrentAvailabilityByMentor)


module.exports = router;
