const Meals = require("../models/meals");
const router = require("express").Router();

router.get("/", (req, res) => {
  Meals.find({})
    .populate("restaurant")
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.send(err);
    });
});

router.post("/", (req, res) => {
  Meals.create(req.body)
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.send(err);
    });
});

router.patch("/:id", (req, res) => {
  Meals.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    response => {
      res.send(response);
    }
  );
});

// Getting meals from a specific restaurant
router.get("/:id", (req, res) => {
  Meals.find({ restaurant: req.params.id })
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
