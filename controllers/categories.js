const Categories = require("../models/categories");
const router = require("express").Router();

router.get("/", (req, res) => {
  Categories.find({})
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.send(err);
    });
});

router.post("/", (req, res) => {
  Categories.create(req.body)
    .then(response => {
      res.send(response);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
