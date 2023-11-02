const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;
const validator = require("validator");
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    userType: {
      type: String,
      enum: ["mentee", "mentor"],
      default: "mentee",
    },
    statusValue: {
      type: String,
      enum: ["active", "inactive"],
      default: "inactive",
    },
    userRole: {
      type: String,
      enum: ["user", "superadmin"],
      default: "user",
    },
    profileImage: {
      type: String,
      default: "",
    },
    contact: {
      type: String,
      default: "",
    },
    location: {
      type: String,
      default: "",
    },
    age: {
      type: Number,
      default: 0,
    },
    bio: {
      type: String,
      default: "",
    },
    expire_date: {
      type: String,
      default: "",
    },
    slug: {
      type: String,
    },
  },
  { timestamps: true }
);

//validation
//static signup method

userSchema.statics.signup = async function ({
  name,
  email,
  password,
  userType,
  statusValue,
  userRole,
}) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }

  if (!validator.isStrongPassword(password)) {
    throw Error("password not strong enough");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw new Error("Email already used");
  }

  await this.create({
    name,
    email,
    password,
    userType,
    statusValue,
    userRole,
  });

  const user = await this.findOne({ email }, { _id: 0, password: 0, __v: 0 });
  return user;
};

//static login method

userSchema.statics.login = async function (name, email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  let user = await this.findOne({ email }, { _id: 0, __v: 0 });

  if (!user) {
    throw new Error("Email is incorrect");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("incorrect credentials");
  }
  user = await this.findOne({ email }, { _id: 0, password: 0, __v: 0 });
  return user;
};

userSchema.statics.changePassword = async function (
  email,
  oldPassword,
  newPassword
) {
  try {
    const user = await this.findOne({
      email,
    });

    const match = await bcrypt.compare(oldPassword, user.password);

    if (!match) {
      throw new Error("Old Password didn't matched");
    }

    if (!newPassword) {
      throw Error("Please provide a new password.");
    }

    if (validator.isEmail(newPassword)) {
      throw Error("Password shouldn't be an email!");
    }

    var salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newPassword, salt);
    const updated = await this.findOneAndUpdate(
      { email },
      {
        password: hash,
      },
      {
        new: true,
      }
    );
  } catch (err) {
    throw Error(err.message);
  }
};
userSchema.statics.resetPassword = async function (email, password) {
  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }
  const hashed_pass = await bcrypt.hash(password, await bcrypt.genSalt(10));
  try {
    let user = await this.findOneAndUpdate(
      { email },
      { password: hashed_pass, expire_date: "" },
      { new: true }
    );
  } catch (err) {
    throw Error(err.message);
  }
};

module.exports = mongoose.model("User", userSchema);
