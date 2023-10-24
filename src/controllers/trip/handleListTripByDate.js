const trips = require("../../models/tripModel");
const handleListTripByDate = async (req, res) => {
  try {
    const date = req.params.date;
    if (!date) {
      return res
        .status(400)
        .json({ message: "Date query parameter is required." });
    }
    const trip = await trips.find({ date: date });
    if (!trip) {
      res.status(404).json({ message: "Trips not found for this date" });
    }
    res.status(200).json(trip);
  } catch (error) {
    res.status(500).json({
      message: "An unexpected error occurred. Please try again later.",
    });
  }
};
module.exports = handleListTripByDate;
