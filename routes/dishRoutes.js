const express = require("express");
const { body } = require("express-validator");
const controller = require("../controllers/dishController");

const router = express.Router();

router.get("/new", controller.newForm);
router.get("/:id/edit", controller.editForm);

router.get("/", controller.index);
router.post(
  "/",
  body("name").notEmpty(),
  body("price").isFloat({ min: 1 }),
  body("category").notEmpty(),
  controller.create
);
router.get("/:id", controller.show);
router.post("/:id", controller.update);
router.post("/:id/delete", controller.delete);

module.exports = router;
