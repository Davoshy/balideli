const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
require("./restaurants");

module.exports = mongoose.model("meals", {
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
