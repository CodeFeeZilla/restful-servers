const Sequelize = require("sequelize");

const menuModel = {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
};

module.exports = menuModel;
