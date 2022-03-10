var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Express - Lab2",
    content: "This is Lab2 of Y22",
    request: `Request is made from ${req.url}, ${req.ip}`,
  });
});

// test and see how this and handlebars work together

module.exports = router;
