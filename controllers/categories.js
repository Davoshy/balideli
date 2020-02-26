const Categories = require("../models/categories");
const router = require("express").Router();

router.get("/", (req, res) => {
  Categories.find().then(response => {
    res.send(response);
  });
});

router.post("/", (req, res) => {
  Categories.create(req.body).then(response => {
    res.send(response);
  });
});

module.exports = router;
