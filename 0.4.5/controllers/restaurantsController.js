const { Restaurant } = require("./../models");

exports.fetch = async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll({});

    res.status(200).json(restaurants);
  } catch (error) {
    res.status(401).send(error.message);
  }
};

exports.fetchById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findOne({
      where: { id: req.params.id },
    });

    res.status(200).json(restaurant);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

exports.create = async (req, res) => {
  console.log(req.body);
  try {
    const restaurant = await Restaurant.create(req.body);

    res.status(201).json(restaurant);
  } catch (error) {
    res.status(401).send(error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    const restaurantId = await Restaurant.destroy({
      where: { id: req.params.id },
      restartIdentity: true,
    });

    res.status(200).json(restaurantId);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

exports.edit = async (req, res) => {
  try {
    const [restaurantId] = await Restaurant.update(req.body, {
      where: { id: req.params.id },
    });

    res.status(200).json(restaurantId);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
