const express = require("express");
const router = express.Router();

const bookingController = require("../controllers/booking");
router.post("/addbooking", bookingController.handleCreateBooking);
module.exports = router;
