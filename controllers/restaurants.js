const Restaurants = require("../models/restaurants");
const router = require("express").Router();

router.get("/", (req, res) => {
  Restaurants.find({})
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.send(err);
    });
});

router.post("/", (req, res) => {
  console.log(req.body);
  Restaurants.create(req.body)
    .then(response => {
      res.send(response.data);
    })
    .catch(err => {
      res.send(err);
    });
});

// Created Route for single Restaurant
router.get("/:id", (req, res) => {
  Restaurants.find({ _id: req.params.id })
    .populate("category")
    .then(restaurant => {
      res.send(restaurant[0]);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
