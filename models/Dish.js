const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, min: 1, required: true },
  category: { type: String, required: true },
  available: { type: Boolean, default: true }
});

module.exports = mongoose.model("Dish", dishSchema);
