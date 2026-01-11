const express = require("express");
const { body } = require("express-validator");
const controller = require("../controllers/userController");

const router = express.Router();

router.get("/register", controller.registerForm);

router.post(
  "/register",
  body("email").isEmail(),
  body("password").isLength({ min: 6 }),
  controller.register
);

module.exports = router;
