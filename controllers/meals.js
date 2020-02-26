const Meals = require("../models/meals");
const router = require("express").Router();

router.get("/", (req, res) => {
  Meals.find({})
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

module.exports = router;
