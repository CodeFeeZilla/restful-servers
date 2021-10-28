const Restaurant = require("../models/Restaurant");

exports.create = async (req, res) => {
  const { name, image } = req.body;

  await Restaurant.create({
    name: name,
    image: image,
  });

  res.redirect("/home");
};

exports.getAll = async (req, res, next) => {
  const restaurants = await Restaurant.findAll({});

  req.restaurants = restaurants;

  next();
};
