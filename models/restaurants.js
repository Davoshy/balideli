const mongoose = require("mongoose");
require("./categories");

module.exports = mongoose.model("restaurants", {
  name: {
    type: String,
    required: [true, "name is required"]
  },
  category: {
    type: ObjectId,
    ref: "types"
  },
  deliveryTime: {
    type: Number,
    required: true
  },
  likes: {
    type: Number,
    required: [true, "likes is required"]
  },
  images: [String],
  title: {
    type: String,
    required: [true, "title is required"]
  }
});
