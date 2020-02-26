const Restaurants = require("../models/restaurants");
const router = require("express").Router();

router.get("/", (req, res) => {
  Restaurants.find()
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.send(err);
    });
});

router.post("/", (req, res) => {
  Restaurants.create(req.body)
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
