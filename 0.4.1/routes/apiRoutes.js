const express = require("express");
const router = express.Router();

const restaurantController = require("./../controllers/restaurantControllers");

router.get("/example/:id", (req, res) => {
  if (req.params.id === "0") res.send("Hello");
  res.send("Bye");
});

router.get("/time", (req, res) => {
  const date = new Date();
  res.send(date.toTimeString());
});

router.post("/restaurants", restaurantController.create);

module.exports = router;
