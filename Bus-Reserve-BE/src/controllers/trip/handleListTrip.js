const trips = require("../../models/tripModel");

const handleListTrip = async (req, res) => {
  try {
    const trip = await trips.find().sort({ createdAt: -1 }).limit(50);
    if (!trip) {
      res.status(404).json({ message: "Trips not found" });
    }
    res.status(200).json(trip);
  } catch (error) {
    res.status(500).json({
      message: "An unexpected error occurred. Please try again later.",
    });
  }
};
module.exports = handleListTrip;
