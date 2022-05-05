// Imports----------------------------
const express = require('express')
const AUTH = require('./Routes/loginRoutes')


/////////////////////////////////////////////////////////////////////////////////////////
// Variables ----------------------------
const app = express()
const port = 5000


// ROUTES --------------------------------
// Authentication
app.use("/auth", AUTH);
// HOME ----------------------------------------------------------------
// app.use("/", home);


//Server --------------------------------
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})