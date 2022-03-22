const router = require("express").Router();

// first route, the index page the GET route that will eventually show a list of all places
router.get("/", (req, res) => {
  res.send("GET /places");
});
module.exports = router;
