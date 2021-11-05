const express = require("express");
const router = express.Router();

const controller = require("../../controllers/api.controller");

const menuRouter = require("./nestedMenuApi");

// full route /restaurant/:id/menus/:menuId

// restaurant CRUD api routes

router.get("/", controller.fetchAll); //sends list of all restaurants

router.get("/menus", controller.fetchNested); //sends list of all restaurants with nested menus

router.get("/:id", controller.fetch); // sends single restaurant

router.post("/", controller.validateRestaurant(), controller.create); //creates single restaurant

router.delete("/:id", controller.delete); // deletes single restaurant

router.put("/:id", controller.validateRestaurant(), controller.edit); //edits single restaurant

// nested REST menu routes

router.use("/:id/menus", menuRouter);

module.exports = router;
