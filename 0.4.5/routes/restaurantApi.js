const express = require("express");
const router = express.Router();

const restaurantsController = require("../controllers/restaurantsController");

// restaurant
router.get("/", restaurantsController.fetch);

router.get("/:id", restaurantsController.fetchById);

router.post("/", restaurantsController.create);

router.delete("/:id", restaurantsController.delete);

router.put("/:id", restaurantsController.edit);

module.exports = router;
