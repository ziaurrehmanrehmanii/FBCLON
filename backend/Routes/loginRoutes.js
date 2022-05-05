const express = require("express");
// Goals Route Object
const router = express.Router();
const {
  Login,
  
} = require("../Controllers/loginControlers");

router.route(`/login`).get( Login)

module.exports = router;