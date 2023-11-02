const nodemailer = require("nodemailer");
const moment = require("moment");

const User = require("../Database/userModel");
const { resetCode } = require("./template/email/index.js");

const sendEmail = async (
  req,
  res,
  { email, subject, emailTemplate, templateCheck }
) => {
  try {
    const user = await User.findOne({ email });

    let responseBody = { message: "Email Sent", data: "" };

    if (!user) {
      throw new Error("User not found");
    }
    var transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });
    const expire_date = Date.now() + 3600000;

    var mailOptions = {
      from: {
        name: "Meetup Marketplace",
        address: process.env.EMAIL,
      },
      to: user.email,
      subject: subject,
      html: emailTemplate,
    };

    transporter.sendMail(mailOptions, async function (error, info) {
      if (error) {
        throw new Error(error);
      } else {
        if (templateCheck === "password") {
          await User.findByIdAndUpdate(
            user._id,
            { expire_date },
            { new: true }
          );
          responseBody.message = "Check your email";
          responseBody.data = resetCode;
        } else if (templateCheck === "inactive") {
          await User.deleteOne({ email });
        }
        return res.status(202).json(responseBody);
      }
    });
  } catch (err) {
    return res.status(403).json({ error: err.message });
  }
};

const formatDate = (date) => {
  return moment(date).format("DD MMM YYYY");
};

const formatTime = (date) => {
  return moment(date).format("hh:mm A");
};

// check slug availability
const checkSlug = async (slug) => {
  let user = await User.find({ slug });

  if (user.length > 0) {
    return false;
  }

  return true;
};

module.exports = { sendEmail, formatDate, formatTime, checkSlug };
