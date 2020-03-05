require("dotenv").config();
require("./config/mongo");
require("./config/passport");
var express = require("express");
const session = require("express-session"); //sessions make data persist between http calls
const passport = require("passport"); // auth library (needs sessions)
const cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const _DEVMODE = false;

var app = express();

app.use(logger("dev"));
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use(
  session({
    cookie: {
      secure: false,
      maxAge: 4 * 60 * 60 * 1000
    }, // 4 hours
    resave: true,
    saveUninitialized: true,
    secret: process.env.SECRET_SESSION
  })
);

const corsOptions = {
  origin: [process.env.CLIENT_URL],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(passport.initialize());
app.use(passport.session());


if (_DEVMODE === true) {
  app.use(function devMode(req, res, next) {
    req.user = {
<<<<<<< HEAD
      _id: "5e5fb68e186c1726647ccfc9",
      username: "wen",
      email: "wen@wen.com",
=======
      _id: "5e5fa6c65cf2019a9585d86c",
      
      username: "Gégé du 75",
      email: "gege@gmail.com",
>>>>>>> 072239ce76fb50d02925fb4c1eb3bbb9a2128366
      avatar: "https://res.cloudinary.com/gdaconcept/image/upload/v1575298339/user-pictures/jadlcjjnspfhknucjfkd.png",
      // role: "admin",
    };

    next();
  });
}

var adRouter = require("./routes/ads");
var userRouter = require("./routes/users");
var commentRouter = require("./routes/comments");
var authRouter = require("./routes/auth");
var msgRouter = require("./routes/message");

app.use("/ads", adRouter);
app.use("/users", userRouter);
app.use("/comments", commentRouter);
app.use("/", authRouter);
app.use("/messages", msgRouter);

// app.get("*", function(req, res) {
//   res.status(404).json("what???");
// });

// app.use(function(err, req, res, next) {
//   console.error(err.stack);
//   res.status(500).json({ err });
// });

module.exports = app;
