const express = require("express");
const router = express.Router();

const restaurantController = require("./../controllers/restaurantControllers");

router.get("/", (req, res) => {
  res.sendFile("index");
});

router.post("/submit", (req, res) => {
  console.log(req.body);
  res.send(`Thank you! Here is what you sent: ${JSON.stringify(req.body)}`);
});

router.get("/home", restaurantController.getAll, (req, res) => {
  console.log(req.restaurants);
  res.render("pages/index", { restaurants: req.restaurants });
});

module.exports = router;
