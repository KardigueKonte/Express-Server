const express = require("express");
const morgan = require("morgan");
// import files and packages up here
const topSpots = require("./data.json");
// create your express server below
var app = express();
app.use(morgan("dev"));
// Respond to GET / with the top spots page
app.get("/", (req, res) => {
  res.status(200).send(`
    <h1>San Diego Top Spots</h1>
    <p>Welcome to the Top Spots page!</p>
  `);
});

// Respond to GET /data with the top spots JSON
app.get("/data", (req, res) => {
  res.status(200).json(topSpots);
});
// add your routes and middleware below and Indicate when server is listening and on which port
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
// finally export the express application
module.exports = app;
