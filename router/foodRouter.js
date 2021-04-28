const express = require("express");
const { getAllfoodies, createFood } = require("../controllers/foodController");
const{
    getSingleFood,
    updateFood,
    deleteFood,
}= require("../controllers/foodController");
const protect = require("../middlewares/authMiddleware");

const router = express.Router();

router.route("/").get(getAllfoodies).post(protect, createFood);
router
  .route("/:_id")
  .get(getSingleFood)
  router
  .route("/:_id")
  .get(getSingleFood)
  .put(protect, updateFood)
  .delete(protect, deleteFood);

module.exports = router;
