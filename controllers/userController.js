const User = require("../models/User");
const { validationResult } = require("express-validator");

exports.registerForm = (req, res) => {
  res.render("auth/register");
};

exports.register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render("auth/register", {
      errors: errors.array()
    });
  }

  try {
    await User.create(req.body);
    res.redirect("/");
  } catch (err) {
    res.status(500).send("Blad rejestracji");
  }
};
