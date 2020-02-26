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

router.patch("/:id", (req, res) => {
  Categories.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    response => {
      res.send(response);
    }
  );
});

module.exports = router;
