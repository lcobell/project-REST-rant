// require express
const express = require("express");
// initialize the app variable
const app = express();
// create homepage route
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(3000);
