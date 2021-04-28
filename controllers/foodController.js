const food = require("../models/foodSchema");
//adding a new food
const createFood = async (req, res) => {
  const newFood = new food({
    name: req.body.name,
    destination: req.body.destination,
    email: req.body.email,
  });

  await newFood.save();
  res.status(201).json(newFood);
};

//get all foodies
const getAllfoodies = async (req, res) => {
  const food = await food.find();
  res.json(foodies);
};

//get single food
const getSingleFood = async (req, res) => {
  const food = await food.findById(req.params._id);
  res.json(food)};

  //update a food
const updateFood = async (req, res) => {
  const foundFood = await Food.findById(req.params._id);

  if (foundFood) {
    (foundFood.name = req.body.name ? req.body.name : foundFood.name),
      (foundFood.destination = req.body.destination
        ? req.body.destination
        : foundFood.destination),
      (foundFood.email = req.body.email
        ? req.body.email
        : foundFood.email),
      (foundFood.dob = req.body.dob ? req.body.dob : foundFood.dob);

    const updatedFood = await foundFood.save();
    res.json({ updatedFood });
  }
};

//delete a food
const deleteFood = async (req, res) => {
  const foundFood = await Food.findById(req.params._id);
  if (foundFood) {
    foundFood.remove();
    res.json({ msg: `${foundFood.name} removed` });
  } else {
    res.status(404).json({ error: "Food notfound" });
  }
};

module.exports = {
  createFood,
  getAllfoodies,
  getSingleFood,
  updateFood,
  deleteFood,
};
