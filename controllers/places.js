const router = require("express").Router();

// first route, the index page the GET route that will eventually show a list of all places
// GET /places
router.get("/", (req, res) => {
  res.render("places/index");

module.exports = router
