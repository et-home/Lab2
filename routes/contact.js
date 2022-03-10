// try a new route path

const express = require("express");
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("contact us by calling 123-456-7788");
});

module.exports = router;
