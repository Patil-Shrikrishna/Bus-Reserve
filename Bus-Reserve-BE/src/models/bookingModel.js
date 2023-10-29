const mongoose = require("mongoose");
const bookingModelSchema = new mongoose.Schema({
  passengerName: {
    type: String,
    require: true,
    trim: true,
    minlength: [2, "Name should be at least 2 character."],
    maxlength: [50, "Name should not exceed 50 characters."],
  },
  passengerGender: {
    type: String,
    require: true,
    enum: ["Male", "Female", "Other"],
  },
  passengerAge: {
    type: Number,
    require: true,
    min: [1, "Age must be greater than 1 year"],
    max: [100, "Age should not exceed 100 years"],
  },
  passengerContact: {
    type: Number,
    require: true,
    validate: {
      validator: function (value) {
        return /^(\+\d{1,3}\s?)?\d{10,12}$/.test(value);
      },
      message: "Invalid contact number!",
    },
  },
  passengerEmail: {
    type: String,
    require: true,
    validate: {
      validator: function (value) {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value);
      },
      message: "Invalid E-Mail ID!",
    },
  },
  seatBooked: {
    type: [String],
    require: true,
  },
  totalFare: {
    type: Number,
    require: true,
    min: [1, "Total fare for the booking should be greater than Rupees 1."],
  },
  date: {
    type: Number,
    require: true,
    validate: {
      validator: function (value) {
        const minTimestamp = Math.floor(
          (Date.now() + 5 * 60 * 60 * 1000) / 1000
        );
        const maxTimestamp = Math.floor(
          (Date.now() + 3 * 30 * 24 * 60 * 60 * 1000) / 1000
        );

        return value > minTimestamp && value < maxTimestamp;
      },
      message: "Date must be within 5 hours from now and 3 months from now",
    },
  },
  from: {
    type: String,
    require: true,
  },
  to: {
    type: String,
    require: true,
  },
  startTime: {
    type: Number,
    require: true,
    validate: {
      validator: function (value) {
        const minTimestamp = Math.floor(
          (Date.now() + 5 * 60 * 60 * 1000) / 1000
        );
        const maxTimestamp = Math.floor(
          (Date.now() + 3 * 30 * 24 * 60 * 60 * 1000) / 1000
        );

        return value > minTimestamp && value < maxTimestamp;
      },
      message: "Date must be within 5 hours from now and 3 months from now",
    },
  },
  endTime: {
    type: Number,
    require: true,
    validate: {
      validator: function (value) {
        const minTimestamp = Math.floor(
          (Date.now() + 5 * 60 * 60 * 1000) / 1000
        );
        const maxTimestamp = Math.floor(
          (Date.now() + 3 * 30 * 24 * 60 * 60 * 1000) / 1000
        );

        return value > minTimestamp && value < maxTimestamp;
      },
      message: "Date must be within 5 hours from now and 3 months from now",
    },
  },
});

const bookings = new mongoose.model("bookings", bookingModelSchema);

module.exports = bookings;
