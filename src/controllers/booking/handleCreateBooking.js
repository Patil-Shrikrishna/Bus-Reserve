const bookings = require("../../models/bookingModel");
const handleCreateBooking = async (req, res) => {
  try {
    const booking = await bookings.create(req.body);
    if (!booking) {
      res
        .status(422)
        .json({ message: "Failed to create trip. Please try again later." });
    }
    res.status(200).json(booking);
  } catch (error) {
    console.error("Error creating booking:", error);
    if (error.name === "ValidationError") {
      return res.status(400).json({
        message: "Invalid booking data. Please provide valid details.",
      });
    }
    res.status(500).json({
      message: "An unexpected error occurred. Please try again later.",
    });
  }
};
module.exports = handleCreateBooking;
