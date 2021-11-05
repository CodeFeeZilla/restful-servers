const sequelize = require("./../sequelize");

const restaurantModel = require("./Restaurant");
const menuModel = require("./Menu");
const menuItemModel = require("./MenuItem");

const Restaurant = sequelize.define("Restaurant", restaurantModel);
const Menu = sequelize.define("Menu", menuModel);
const MenuItem = sequelize.define("MenuItem", menuItemModel);

// one-to-one relationship
Menu.belongsTo(Restaurant, {
  foreignKey: { name: "restaurant_id", allowNull: false },
  onDelete: "CASCADE",
});

// one-to-one relationship
MenuItem.belongsTo(Menu, {
  foreignKey: { name: "menu_id", allowNull: false },
  onDelete: "CASCADE",
});

// one-to-many relationship
Restaurant.hasMany(Menu, {
  foreignKey: { name: "restaurant_id", allowNull: false },
  onDelete: "CASCADE",
});

// one-to-many relationship
Menu.hasMany(MenuItem, {
  foreignKey: { name: "menu_id", allowNull: false },
  onDelete: "CASCADE",
});

module.exports = { Restaurant, Menu, MenuItem };
