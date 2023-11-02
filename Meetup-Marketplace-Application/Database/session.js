const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
require('dotenv').config()

const store = new MongoDBStore({
  uri: process.env.MONGO_URI,
  // databaseName: process.env.DB_NAME,
  // collection: process.env.SESSION_COLLECTION_NAME,
});

module.exports.CPF_NFT_Session = session({
  key: process.env.SECRET,
  secret: process.env.SESSION_SECRET_KEY,
  resave: true,
  saveUninitialized: false,
  store: store,
  proxy: true,
  cookie: {
    // secure: process.env.MODE === 'production',
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24,
  },
});
