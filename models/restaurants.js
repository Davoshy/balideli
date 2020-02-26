const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;
require("./categories");

module.exports = mongoose.model("restaurants", {
  name: {
    type: String,
    required: [true, "name is required"]
  },
  category: [
    {
      type: ObjectId,
      ref: "categories"
    }
  ],
  deliveryTime: {
    type: Number,
    required: [true, "deliveryTime is required"]
  },
  likes: {
    type: Number,
    required: [true, "likes is required"]
  },
  images: [String]
});
