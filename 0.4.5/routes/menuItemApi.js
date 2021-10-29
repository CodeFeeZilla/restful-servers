const express = require("express");
const router = express.Router({ mergeParams: true });

const menuItemController = require("../controllers/menuItemController");

// menuitem
router.post("/", menuItemController.create);

router.get("/:itemId", menuItemController.fetchById);

router.get("/", menuItemController.fetch);

router.put("/:itemId", menuItemController.edit);

router.delete("/:itemId", menuItemController.delete);

module.exports = router;
