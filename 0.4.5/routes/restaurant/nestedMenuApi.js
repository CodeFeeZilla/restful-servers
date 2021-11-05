const express = require("express");
const router = express.Router({ mergeParams: true });

const controller = require("../../controllers/api.controller");

// menu CRUD api routes

router.post("/", controller.validateMenu(), controller.create); //creates single restaurant (foreign key, restaurant_id, specified as url param)

router.get("/:menuId", controller.fetch); // sends a single menu that belongs to a restaurant

router.get("/", controller.getRestaurantMenus); // sends all menus that belong to a restaurant

router.put("/:menuId", controller.validateMenu(), controller.edit);

router.delete("/:menuId", controller.delete);

module.exports = router;
