// Imports----------------------------
const express = require("express");
const AUTH = require("./Routes/authRoutes");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./Config/DB");
require("dotenv").config();
///////////////////////////////////////////////////////////////////////////////////////
// Connect to databas
connectDB();

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
