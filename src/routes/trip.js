const express = require("express");
const router = express.Router();
const tripController = require("../controllers/trip");

router.post("/addtrip", tripController.handleCreateTrip);
router.get("/listtrip", tripController.handleListTrip);
router.get("/listtripbydate", tripController.handleListTripByDate);
module.exports = router;