const router = require("express").Router();

// first route, the index page the GET route that will eventually show a list of all places
// GET /places
router.get("/", (req, res) => {
  let places = [
    {
      name: "H-Thai-ML",
      city: "Seattle",
      state: "WA",
      cuisines: "Thai, Pan-Asian",
      pic: "/images/breakfast-food.jpeg",
    },
    {
      name: "Coding Cat Cafe",
      city: "Phoenix",
      state: "AZ",
      cuisines: "Coffee, Bakery",
      pic: "/images/peanut-butter-apple.jpeg",
    },
  ];
  res.render("places/index", { places });
});
module.exports = router;
