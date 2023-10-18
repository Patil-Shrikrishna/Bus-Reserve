const trips = require("../../models/tripModel");

const handleCreateTrip = async (req, res) => {
  try {
    const trip = await trips.create(req.body);
    if (!trip) {
      return res
        .send(422)
        .json({ message: "Failed to create trip. Please try again later." });
    }
    res.status(200).json(trip);
  } catch (error) {
    console.error("Error creating trip:", error);
    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: "Invalid trip data. Please provide valid details.",
      });
    }
    res.status(500).json({
      message: "An unexpected error occurred. Please try again later.",
    });
  }
};
module.exports = handleCreateTrip;
