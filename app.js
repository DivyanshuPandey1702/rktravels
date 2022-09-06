const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const express = require("express");
let body_parser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.use(
  body_parser.urlencoded({
    extended: true,
  })
);

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("main");
});

app.get("/login", function (req, res) {
  res.render("auth");
});

app.get("/register", function (req, res) {
  res.render("auth");
});

module.exports = app;
