const bookings = require("../../models/bookingModel");
const trips = require("../../models/tripModel");
const mongoose = require("mongoose");

const handleCreateBooking = async (req, res) => {
  const data = req.body.booking;
  // console.log("bookingData.passengerDetails in create booking API", req.body);

  const {
    _id,
    seatBooked,
    busFare,
    from,
    to,
    startTime,
    endTime,
    selectedSeats,
  } = data.bookingDetails;

  const bookingData = {
    seatBooked,
    totalFare: busFare * selectedSeats.length,
    from,
    to,
    selectedSeats,
    startTime: new Date(startTime),
    endTime: new Date(endTime),
  };

  const passengerDetails = data.passengerDetails[0];

  const postData = { ...bookingData, passengerDetails: [...passengerDetails] };
  console.log("passengerDetails in create booking API", postData);

  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    const booking = await bookings.create([postData], { session: session });
    // const { _id, date, from, to } = postData;
    const filters = { _id, from, to };
    const updateSeatsBooked = await trips.updateOne(
      {
        _id: filters._id,
        // date: filters.date,
        from: filters.from,
        to: filters.to,
      },
      {
        $push: {
          seatBooked: postData.selectedSeats,
        },
      }
    );
    if (updateSeatsBooked.modifiedCount == 0) {
      res
        .status(422)
        .json({ message: "Failed to create trip. Please try again later." });
      console.log(
        "Failed to create trip. Please try again later.",
        updateSeatsBooked
      );
    } else {
      await session.commitTransaction();
      // res.status(200).json(booking);
      res.redirect(301, "http://localhost:5173/receipt");
      console.error("Booking Confirmed");
    }
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({
      message: "An unexpected error occurred. Please try again later.",
    });
    res.redirect(301, "http://localhost:5173/passengerInfo");
    await session.abortTransaction();
  } finally {
    session.endSession();
  }
};
module.exports = handleCreateBooking;
