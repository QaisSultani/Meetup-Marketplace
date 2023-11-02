const User = require("../Database/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {
  emailTemplate,
  rejectMentorTemplate,
  acceptMentorTemplate,
} = require("../helpers/template/email/index.js");
const { sendEmail, checkSlug } = require("../helpers/user");

const creatToken = (_id, userRole, email, userType) => {
  return jwt.sign({ _id, userRole, email, userType }, process.env.SECRET, {
    expiresIn: "1d",
  });
};

//check slug availbility
const checkSlugAvailability = async (req, res) => {
  const { slug } = req.body;
  console.log(slug);
  try {
    // if (req.session.user.userType === "mentee") {
    //   throw Error("Mentees are not able to make profiles!");
    // }

    if (await checkSlug(slug)) {
      res.json({
        slug,
        availability: true,
        message: "Slug is available!",
      });
    } else {
      res.status(200).json({
        slug,
        availability: false,
        message: "Slug is not available!",
      });
    }
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

//get mentor public profile by slug
const getMentorBySlug = async (req, res) => {
  const { slug } = req.params;
  console.log('Qaisssssssssssss')
  console.log("SLUG: ", slug);
  const mentor = await User.findOne({ slug }).select(
    "-_id name location bio profileImage age"
  );
  console.log("User: ", mentor);
  res.json({ mentor });
};

//login user //

const loginUser = async (req, res) => {
  const { name, email, password } = req.body;

  
  //////////////////////////////////////////////////////////////
  // console.log("name: ", name)
  // console.log("email: ", email)
  // console.log("password: ", password)
  // console.log("req.body: ", req.body)
  /////////////////////////////////////////////////////////////


  try {
    let user = await User.login(name, email, password);
    //token
    const token = creatToken(
      user._id,
      user.userRole,
      user.email,
      user.userType,
      user.statusValue
    );

    const response = {
      name: user.name,
      email: user.email,
      userType: user.userType,
      userRole: user.userRole,
      statusValue: user.statusValue,
      jwt: token,
    };

    req.session.user = response;
    req.session.save(function (err) {
      if (err) {
        console.error("Error saving session:", err);
      } else {
        console.log("Session saved.");
        console.log("User Logged In : " + user.name);
      }
    });

    //   res.status(202).cookie(token).json({ name, email, token, statusValue, userType })
    // }
    // catch (error) {
    //   res.status(404).json({ error: error.message })
    // }
    res.status(202).json({ user, token });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

//signup user

const signupUser = async (req, res) => {
  const { name, email, password, userType } = req.body;

  try {
    let statusValue = "inactive";

    if (userType === "mentee") {
      statusValue = "active";
    }

    const userRole = (await User.exists({ userRole: "superadmin" }))
      ? "user"
      : "superadmin";

    const hash = await bcrypt.hash(password, await bcrypt.genSalt(10));
    let user = await User.signup({
      name,
      email,
      password: hash,
      userType,
      statusValue,
      userRole,
    });
    const token = creatToken(
      user._id,
      user.userRole,
      user.email,
      user.userType
    );

    res.status(200).json({ user, token, user });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const superAdminChangeUserType = async (req, res) => {
  const { userId } = req.params;
  const { userType } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    user.userType = userType;
    await user.save();

    res.status(200).json({ message: "User type updated successfully" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, '-password');
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve users" });
  }
};

const getAllInActiveMentors = async (req, res) => {
  try {
    const users = await User.find(
      { userType: "mentor", statusValue: "inactive" },
      { __v: 0, _id: 0 }
    ); // returns all mentors who are not active for superadmin to change their status
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve users" });
  }
};

const getAllMentors = async (req, res) => {
  try {
    const users = await User.find({ userType: "mentor" }, { __v: 0, _id: 0 });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve users" });
  }
};

// const getAllMentors = async (req, res) => {
//   try {
//     const users = await User.find(
//       { userType: "mentor"},
//       { __v: 0, _id: 0 }
//     );
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to retrieve users" });
//   }
// };

const changeUserStatus = async (req, res) => {
  const { email } = req.params;
  const { statusValue } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("User not found");
    }

    user.statusValue = statusValue;
    await user.save().then(async (response) => {
      let subject = "",
        emailTemplate;
      if (statusValue === "inactive") {
        subject = "Mentor Request Rejected";
        emailTemplate = rejectMentorTemplate({ user: response.name });
      } else {
        subject = "Mentor Request Accepted";
        emailTemplate = acceptMentorTemplate({ user: response.name });
      }
      sendEmail(req, res, {
        email,
        subject,
        emailTemplate,
        templateCheck: statusValue,
      });
    });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// OAuth signup
const oauthSignup = async (req, res, password) => {
  let { name, email, userType } = req.body;

  try {
    let statusValue = "inactive";

    if (userType === "mentee" || !userType) {
      userType = "mentee";
      statusValue = "active";
    }

    const userRole = (await User.exists({ userRole: "superadmin" }))
      ? "user"
      : "superadmin";

    const hash = await bcrypt.hash(password, await bcrypt.genSalt(10));

    const user = await User.signup({
      name,
      email,
      password: hash,
      userType,
      statusValue,
      userRole,
    });

    const token = creatToken(
      user._id,
      user.userRole,
      user.email,
      user.userType
    );

    res.status(200).json({ user, token, statusValue, userType });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// OAuth login
const oauthLogin = async (req, res) => {
  const { name, email, userType } = req.body;

    //////////////////////////////////////////////////////////////
    // console.log("name: ", name)
    // console.log("email: ", email)
    // console.log("userType: ", userType)
    // console.log("req.body: ", req.body)
    /////////////////////////////////////////////////////////////


  try {
    const user = await User.findOne({ email }, { _id: 0, password: 0, __v: 0 });
    if (user) {
      const token = creatToken(
        user._id,
        user.userRole,
        user.email,
        user.userType
      );
      res.status(202).json({ user, token });
    } else {
      // User not found, proceed with oauthSignup
      await oauthSignup(req, res, email);
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const changePassword = async (req, res) => {
  try {
    const { email } = req.verified;
    const { oldPassword, newPassword } = req.body;

    await User.changePassword(email, oldPassword, newPassword);
    return res.status(200).json({ message: "Password Changed" });
  } catch (error) {
    return res.status(403).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  await User.deleteOne({ _id: req.params.id });
  res.status(202).json({ message: "Deleted!" });
};

const currentUser = async (req, res) => {
  const { email } = req.verified;
  try {
    let user = await User.findOne({ email }, { _id: 0, password: 0, __v: 0 });
    return res.status(200).json({ user });
  } catch (error) {
    return res.status(403).json({ error: error.message });
  }
};

const updateProfile = async (req, res) => {
  const { email } = req.verified;
  const { user } = req.body;
  try {
    const updatedUser = await User.findOneAndUpdate({ email }, user, {
      new: true,
    }).select("-_id -password -__v");
    return res.status(200).json({ user: updatedUser });
  } catch (error) {
    return res.status(403).json({ error: error.message });
  }
};

const forgotPassword = async (req, res) => {
  const { email } = req.params;
  sendEmail(req, res, {
    email,
    subject: "Password Reset Code",
    emailTemplate,
    templateCheck: "password",
  });
};

const resetPassword = async (req, res, next) => {
  try {
    const { email } = req.params;
    let { password } = req.body;

    let user = await User.findOne({
      email,
      expire_date: { $gt: Date.now() },
    });

    if (!user) {
      throw new Error(
        "This code is expired for reseting the password. Try again."
      );
    } else {
      await User.resetPassword(email, password);
      return res.status(202).json({ message: "Password reset successfully." });
    }
  } catch (error) {
    return res.status(403).json({ error: error.message });
  }
};

module.exports = {
  signupUser,
  loginUser,
  superAdminChangeUserType,
  getAllUsers,
  getAllInActiveMentors,
  getAllMentors,
  changeUserStatus,
  oauthLogin,
  oauthSignup,
  changePassword,
  deleteUser,
  currentUser,
  updateProfile,
  forgotPassword,
  resetPassword,
  checkSlugAvailability,
  getMentorBySlug,
};
