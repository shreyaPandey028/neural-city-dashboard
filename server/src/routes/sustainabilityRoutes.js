const express = require("express");
const router = express.Router();

const {
  getBestCity,
  compare
} = require("../controllers/sustainabilityController");

router.get("/best", getBestCity);
router.get("/compare", compare);

module.exports = router;