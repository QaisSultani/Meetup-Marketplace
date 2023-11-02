const all_routes = require("express-list-endpoints");

const express = require("express");
const mongoose = require("mongoose");
const { CURSOR_FLAGS } = require("mongodb");
const app = express();
const cors = require("cors");
require("dotenv").config();

const { CPF_NFT_Session } = require("./Database/session");

app.use(express.json());
//session
app.use(CPF_NFT_Session);

app.use(
  cors({
    origin: "*", // Allow requests from a specific origin
    methods: ["GET", "POST", "DELETE", "PATCH", "PUT"], // Allow only GET and POST requests
    allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers
    credentials: true, // Allow sending cookies from the client
  })
);

//routes
const userRoutes = require("./routes/user");
const bookingRoutes = require("./routes/bookingRoutes");

//register routes
app.use("/api/user", userRoutes);
app.use("/api/bookings", bookingRoutes);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("db.connection done");
  });

app.get("/", (req, resp) => {
  console.log(all_routes(app));
  resp.send("working fine...");
});

app.listen(process.env.PORT, () => {
  console.log("Server is running on Port:", process.env.PORT);
});
