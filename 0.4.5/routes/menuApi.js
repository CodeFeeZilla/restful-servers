const express = require("express");
const router = express.Router();

const menuController = require("../controllers/menuController");

// menu
router.post("/", menuController.create);

router.get("/:menuId", menuController.fetchById);

router.get("/", menuController.fetch);

router.put("/:menuId", menuController.edit);

router.delete("/:menuId", menuController.delete);

module.exports = router;
