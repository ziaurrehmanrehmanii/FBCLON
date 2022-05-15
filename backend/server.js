// Imports----------------------------
const express = require("express");
const AUTH = require("./Routes/loginRoutes");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/testDB")
  .then(() => {
    console.log("connected");
  })
  .catch((e) => {
    console.log("Something went wrong", e);
  });
/////////////////////////////////////////////////////////////////////////////////////////
// Variables ----------------------------
const app = express();
const port = 5000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTES --------------------------------
// Authentication
app.use("/auth", AUTH);
// HOME ----------------------------------------------------------------
// app.use("/", home);

//Server --------------------------------
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
