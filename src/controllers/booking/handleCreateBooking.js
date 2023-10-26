const bookings = require("../../models/bookingModel");
const trips = require("../../models/tripModel");
const mongoose = require("mongoose");

const handleCreateBooking = async (req, res) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const booking = await bookings.create([req.body], { session: session });
    const { date, from, to } = req.body;
    const filters = { date, from, to };
    const updateSeatsBooked = await trips.updateOne(
      { date: filters.date, from: filters.from, to: filters.to },
      {
        $push: {
          seatBooked: req.body.seatBooked,
        },
      }
    );
    if (updateSeatsBooked.modifiedCount == 0) {
      res
        .status(422)
        .json({ message: "Failed to create trip. Please try again later." });
    } else {
      await session.commitTransaction();
      res.status(200).json(booking);
    }
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
    await session.abortTransaction();
  } finally {
    session.endSession();
  }
};
module.exports = handleCreateBooking;
