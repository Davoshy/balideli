// Packages
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Server
const App = express();
const mongoose = require("./database");

// Middleware
App.use(cors());

// Routes
// please add the routes here
// example: app.use('/houses', require('./controllers/houses'))

// Start Server
App.listen(process.env.PORT, () => {
  console.log(`Ready on port ${process.env.PORT}`);
});

module.exports = App;
