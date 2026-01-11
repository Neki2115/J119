require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const dishRoutes = require("./routes/dishRoutes");
const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express(); 

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB polaczone"))
  .catch(err => console.error("Mongo error:", err));

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use("/dishes", dishRoutes);
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.render("home");
});

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server dziala na porcie " + PORT);
});
