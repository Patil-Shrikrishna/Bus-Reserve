const mongoose = require("mongoose");

const passengerSchema = new mongoose.Schema({
  passengerName: {
    type: String,
    required: true,
    trim: true,
    minlength: [2, "Name should be at least 2 characters."],
    maxlength: [50, "Name should not exceed 50 characters."],
  },
  passengerGender: {
    type: String,
    required: true,
    // enum: ["Male", "Female", "Other"],
  },
  passengerAge: {
    type: Number,
    required: true,
    min: [1, "Age must be greater than 1 year"],
    max: [100, "Age should not exceed 100 years"],
  },
  passengerContact: {
    type: Number,
    required: true,
    validate: {
      validator: function (value) {
        return /^(\+\d{1,3}\s?)?\d{10,12}$/.test(`${value}`);
      },
      message: "Invalid contact number!",
    },
  },
  passengerEmail: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value);
      },
      message: "Invalid E-Mail ID!",
    },
  },
  seatNumber: {
    type: String,
    required: true,
  },
});

const bookingModelSchema = new mongoose.Schema({
  passengerDetails: {
    type: [passengerSchema],
    required: true,
  },
  seatBooked: {
    type: [String],
    required: true,
  },
  selectedSeats: {
    type: [String],
    required: true,
  },
  totalFare: {
    type: Number,
    required: true,
    min: [1, "Total fare for the booking should be greater than Rupees 1."],
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
    validate: {
      validator: function (value) {
        const now = new Date();
        const minDate = new Date(now.getTime() + 5 * 60 * 60 * 1000);
        const maxDate = new Date(now.getTime() + 3 * 30 * 24 * 60 * 60 * 1000);
        const selectedDate = new Date(value);
        return selectedDate > minDate && selectedDate < maxDate;
      },
      message:
        "Please select a valid date within the next 3 months and at least 5 hours from now",
    },
  },
  endTime: {
    type: Date,
    required: true,
    validate: {
      validator: function (value) {
        const now = new Date();
        const minDate = new Date(now.getTime() + 5 * 60 * 60 * 1000);
        const maxDate = new Date(now.getTime() + 3 * 30 * 24 * 60 * 60 * 1000);
        const selectedDate = new Date(value);
        return selectedDate > minDate && selectedDate < maxDate;
      },
      message:
        "Please select a valid date within the next 3 months and at least 5 hours from now",
    },
  },
});

const bookings = mongoose.model("bookings", bookingModelSchema);

module.exports = bookings;
