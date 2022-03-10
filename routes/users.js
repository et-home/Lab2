var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/:name", function (req, res, next) {
  if (req.params.name === "") {
    res.send("please login");
    // this if statement never works
  } else {
    res.render("users", {
      user: req.params.name,
      request: `Request is made from ${req.url}, ${req.ip}`,
    });
  }
});
module.exports = router;
