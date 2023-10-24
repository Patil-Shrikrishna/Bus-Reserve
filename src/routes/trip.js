const express = require("express");
const router = express.Router();
const tripController = require("../controllers/trip");

router.get("/search", tripController.handleListTripByQuery);
router.post("/addtrip", tripController.handleCreateTrip);
router.get("/", tripController.handleListTrip);
router.get("/:date", tripController.handleListTripByDate);
module.exports = router;
