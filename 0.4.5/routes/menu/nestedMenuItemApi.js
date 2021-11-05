const express = require("express");
const router = express.Router({ mergeParams: true });

const controller = require("../../controllers/api.controller");

// menuitem

router.post("/", controller.validateItem(), controller.create);

router.get("/:itemId", controller.fetch);

router.get("/", controller.getMenusItems); //sends a list of all menu items that belong to a menu

router.put("/:itemId", controller.validateItem(), controller.edit);

router.delete("/:itemId", controller.delete);

module.exports = router;
