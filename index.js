// require dotenv
require("dotenv").config();
// require express
const express = require("express");
// initialize the app variable
// require methodOverride to use PUT of DELETE (only GET and POST are available until this is done)
const methodOverride = require("method-override");
const app = express();
// the next line was missing..
// app.set("views", _dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
// import the router created in controllers folder
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use("/places", require("./controllers/places"));

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
