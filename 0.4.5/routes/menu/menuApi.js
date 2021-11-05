const express = require("express");
const router = express.Router();

const controller = require("./../../controllers/api.controller");

const menuItemRouter = require("./nestedMenuItemApi");

// full route - /menus/:menuId/menu-items/:itemId

/* todo: validatation for crud routes */

router.get("/", controller.fetchAll); //sends list of all menus

router.get("/menu-items", controller.fetchNested); //sends list of all menus with nested menu items

router.get("/:menuId", controller.fetch); // sends single menu

router.post("/", controller.create); //creates single menu (foreign key, restaurant_id, specified in req body)

router.delete("/:menuId", controller.delete); // deletes single menu

router.put("/:menuId", controller.edit); //edits single menu

// nested menu item REST routes

router.use("/:menuId/menu-items", menuItemRouter);

module.exports = router;
