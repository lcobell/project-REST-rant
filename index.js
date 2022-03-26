// require dotenv
require("dotenv").config();
// require express
const express = require("express");
// initialize the app variable
const app = express();

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
// import the router created in controllers folder
app.use("/places", require("./controllers/places"));
// create homepage route
app.get("/", (req, res) => {
  res.render("home");
});
// GET /places
app.get("/", (req, res) => {
  let places = [
    {
      name: "H-Thai-ML",
      city: "Seattle",
      state: "WA",
      cuisines: "Thai, Pan-Asian",
      pic: "http://placekitten.com/250/250",
    },
    {
      name: "Coding Cat Cafe",
      city: "Phoenix",
      state: "AZ",
      cuisines: "Coffee, Bakery",
      pic: "http://placekitten.com/250/250",
    },
  ];
  res.render("places/index", { places });
});
// wildcard route, always below all other routes!
app.get("*", (req, res) => {
  res.render("error404");
});

app.listen(process.env.PORT);
