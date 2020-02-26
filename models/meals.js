const mongoose = require("mongoose");
require("./restaurants");

module.exports = mongoose.model("restaurants", {
  name: {
    type: String,
    required: [true, "name is required"]
  },
  price: {
    type: Number,
    required: [true, "price is required"]
  },
  group: {
    type: Number,
    required: [true, "group is required"]
  },
  restaurant: {
    type: ObjectId,
    ref: "restaurants"
  }
});
