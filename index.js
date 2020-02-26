// Packages
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config();

// Server
const App = express();
// please import database.js file with mongoose connection here here
const mongoose = require("./database");

// Middleware
App.use(cors());
App.use(bodyParser.urlencoded({ extended: false }));
App.use(bodyParser.json());

// Routes
App.use("/restaurants", require("./controllers/restaurants"));
App.use("/categories", require("./controllers/categories"));
App.use("/meals", require("./controllers/meals")); // example: app.use('/houses', require('./controllers/houses'))

// Start Server
App.listen(process.env.PORT, () => {
  console.log(`Ready on port ${process.env.PORT}`);
});

module.exports = App;
