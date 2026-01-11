const Dish = require("../models/Dish");
const { validationResult } = require("express-validator");

exports.index = async (req, res) => {
  const { category, sort } = req.query;

  let query = {};
  if (category) query.category = category;

  let sortOption = {};
  if (sort === "price") sortOption.price = 1;
  if (sort === "name") sortOption.name = 1;

  const dishes = await Dish.find(query).sort(sortOption);
  res.render("dishes/index", { dishes });
};

exports.newForm = (req, res) => {
  res.render("dishes/new");
};

exports.create = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render("dishes/new", {
      errors: errors.array()
    });
  }

  await Dish.create(req.body);
  res.redirect("/dishes");
};

exports.show = async (req, res) => {
  const dish = await Dish.findById(req.params.id);
  res.render("dishes/show", { dish });
};

exports.editForm = async (req, res) => {
  const dish = await Dish.findById(req.params.id);
  res.render("dishes/edit", { dish });
};

exports.update = async (req, res) => {
  await Dish.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/dishes");
};

exports.delete = async (req, res) => {
  try {
    const dish = await Dish.findByIdAndDelete(req.params.id);
    if (!dish) {
      return res.status(404).send("Danie nie istnieje");
    }
    res.redirect("/dishes");
  } catch (err) {
    console.error(err);
    res.status(500).send("Błąd przy usuwaniu dania");
  }
};
