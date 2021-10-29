const sequelize = require("./../sequelize");

const restaurantModel = require("./Restaurant");
const menuModel = require("./Menu");
const menuItemModel = require("./MenuItem");

const Restaurant = sequelize.define("Restaurant", restaurantModel);
const Menu = sequelize.define("Menu", menuModel);
const MenuItem = sequelize.define("MenuItem", menuItemModel);

// one-to-one relationship
Menu.belongsTo(Restaurant, {
  foreignKey: "restaurant_id",
});

// one-to-one relationship
MenuItem.belongsTo(Menu);

// one-to-many relationship
Restaurant.hasMany(Menu, {
  as: "restaurant_id",
});

// one-to-many relationship
Menu.hasMany(MenuItem);

module.exports = { Restaurant, Menu, MenuItem };
