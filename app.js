// Import
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const express = require("express");

const app = express();

app.set("view engine", "ejs");
