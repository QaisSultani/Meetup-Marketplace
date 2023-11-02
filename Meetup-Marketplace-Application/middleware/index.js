// authMiddleware.js

const jwtDecode = require("jwt-decode");
const jwt = require("jsonwebtoken");

const AuthAdmin = async (req, res, next) => {
  const uRole = req.session.user.userRole;
  if (uRole == "superadmin") {
    next();
  } else {
    res.status(200).json({ message: "User is not authorised" });
  }
};

const AuthUser = (req) => {
  if (req.session.user) {
    return true;
  } else {
    throw new Error("User Not Logged In!");
  }
};

const VerifyToken = (req, res, next) => {
  let authHeader = req.headers.authorization;
  try {
    let token = authHeader.split(" ")[1];

    let verified = jwt.verify(token, process.env.SECRET, (err, verifiedJwt) => {
      try {
        return verifiedJwt;
      } catch (err) {
        return false;
      }
    });
    req.verified = verified;
    next();
  } catch (err) {
    let error = new Error("You need to login first.");
    res.status(400).json({ error: error.message });
  }
};

module.exports = { AuthAdmin, AuthUser, VerifyToken };
