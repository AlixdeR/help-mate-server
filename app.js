require("dotenv").config();
var express = require("express");
var app = express();
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

var addRouter = require("./routes/adds");
var userRouter = require("./routes/users");
var commentRouter = require("./routes/comments");

app.use("/adds", addRouter);
app.use("/users", userRouter);
app.use("/comments", commentRouter);

app.get("*", function(req, res) {
  res.status(404).json("what???");
});

app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({ err });
});

module.exports = app;
//res.status(500).json(err)
