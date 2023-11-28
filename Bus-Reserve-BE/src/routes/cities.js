const express = require("express");
const router = express.Router();
const citiesController = require("../controllers/cities");

router.post("/search", citiesController.handleListCities);

module.exports = router;
