const express = require("express");
// Goals Route Object
const router = express.Router();
const { Login } = require("../controllers/authControlers");

router.route(`/login`).post(Login);

module.exports = router;
