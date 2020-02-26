const Meals = require("../models/meals");
const router = require("express").Router();

router.get("/", (req, res) => {
  Meals.find().then(response => {
    res.send(response);
  });
});

router.post("/", (req, res) => {
  Meals.create(req.body).then(response => {
    res.send(response);
  });
});

module.exports = router;
