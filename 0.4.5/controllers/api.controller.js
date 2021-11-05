const repository = require("./repository");
const { check, validationResult } = require("express-validator");

exports.fetch = async (req, res) => {
  try {
    const result = await repository.fetch(req.params, req.baseUrl);

    res.status(200).json(result);
  } catch (error) {
    res.status(401).send(error.message);
  }
};

exports.fetchAll = async (req, res) => {
  try {
    const restaurant = await repository.fetchAll(req.baseUrl);

    res.status(200).json(restaurant);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

exports.create = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await repository.create(req.body, req.baseUrl, req.params);

    res.status(201).json(result);
  } catch (error) {
    res.status(401).send(error.message);
  }
};

exports.delete = async (req, res) => {
  try {
    const restaurantId = await repository.delete(req.params, req.baseUrl);

    res.status(200).json(restaurantId);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

exports.edit = async (req, res) => {
  try {
    await repository.edit(req.params, req.baseUrl, req.body);
    const result = await repository.fetch(req.params, req.baseUrl);

    res.status(200).json(result);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

exports.fetchNested = async (req, res) => {
  try {
    const result = await repository.fetchNested(req.baseUrl);

    res.status(200).json(result);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

exports.getRestaurantMenus = async (req, res) => {
  try {
    const menus = await repository.fetchMenusByRestaurantId(
      req.params,
      req.baseUrl
    );

    res.status(200).json(menus);
  } catch (error) {
    res.sendStatus(404).send(error.message);
  }
};

exports.getMenusItems = async (req, res) => {
  try {
    const menus = await repository.fetchMenuitemsByMenuId(
      req.params,
      req.baseUrl
    );

    res.status(200).json(menus);
  } catch (error) {
    res.status(404).send(error.message);
  }
};

exports.validateRestaurant = () => {
  return [
    check("name").not().isEmpty().isLength({ max: 50 }).trim().escape(),
    check("image").not().isEmpty().isURL(),
  ];
};

exports.validateMenu = () => {
  return [check("title").not().isEmpty().isLength({ max: 50 }).trim().escape()];
};

exports.validateItem = () => {
  return [
    check("name").not().isEmpty().isLength({ max: 50 }).trim().escape(),
    check("price").not().isEmpty().isFloat(),
  ];
};
