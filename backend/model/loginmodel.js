const mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

const User = mongoose.Schema(
  {
    Fname: {
      type: String,
      required: true,
    },
    Lname: {
      type: String,
      required: true,
    },
    DOB: {
      type: Date,
      required: true,
    },
    Gender: {
      type: String,
      required: true,
      enum: ["user", "admin"],
    },
    email: {
      type: String,
      lowercase: true,
      required: [true, "Email can't be blank"],
      match: [/\S+@\S+\.\S+/, "Emaild is invalid"],
      index: true,
      unique: true,
    },
    hash: { type: String },
    salt: { type: String },
    password: {
      type: "string",
      required: [true, "pleas Pytype a password"],
      match: [/.*\d/, "Should contain a digit"],
      match: [/[A-Z]/, " at least one Capital letter"],
      match: [/[a-z]/, " at least one small letter "],
      match: [
        /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>]/,
        " at least one Special characters ",
      ],
    },
  },
  {
    timestamps: true,
  }
);
User.plugin(uniqueValidator);
module.exports = module.model("User", User);
