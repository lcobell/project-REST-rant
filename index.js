// require dotenv
require("dotenv").config();
// require express
const express = require("express");
// initialize the app variable
const app = express();
// create homepage route
app.get("/", (req, res) => {
  res.send("Hello world!");
});
// wildcard route, always below all other routes!
app.get("*", (req, res) => {
  res.status(404).send("<h1>404 Page</h1>");
});

app.listen(process.env.PORT);
