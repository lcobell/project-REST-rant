// require dotenv
require("dotenv").config();
// require express
const express = require("express");
// initialize the app variable
const app = express();

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
// import the router created in controllers folder
app.use("/places", require("./controllers/places"));
app.use(express.urlencoded({ extended: true }));
// create homepage route
app.get("/", (req, res) => {
  res.render("home");
});
// GET /places

// wildcard route, always below all other routes!
app.get("*", (req, res) => {
  res.render("error404");
});

app.listen(process.env.PORT);
