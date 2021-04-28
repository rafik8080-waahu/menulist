const { string } = require("joi");

const mongoose = require("mongoose");

const foodSchema = mongoose.Schema(
    {
      name:{
          type:String,
          required:true,
      },
      destination:{
          type:String,
          required:true,
      },
      email:{
          type:String,
          required:true,
      },
    },
    {
      timestamps:true
    }
);
const food = mongoose.model("food", foodSchema);
module.exports = food;