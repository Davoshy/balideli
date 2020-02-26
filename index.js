// Packages
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Server
const App = express();
// please import database.js file with mongoose connection here here

// Middleware
App.use(cors());

// Routes
//App.use("/restaurants", require("./controllers/restaurants"));
// example: app.use('/houses', require('./controllers/houses'))

// Start Server
App.listen(process.env.PORT, () => {
  console.log(`Ready on port ${process.env.PORT}`);
});

module.exports = App;
