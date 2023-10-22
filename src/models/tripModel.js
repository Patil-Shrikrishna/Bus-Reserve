const mongoose = require("mongoose");

const tripModelSchema = new mongoose.Schema({
  date: {
    type: Number,
    required: true,
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
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  busOwnerID: {
    type: Number,
    required: true,
    min: 1,
  },
  startTime: {
    type: Number,
    required: true,
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
    required: true,
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
  category: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^[A-Za-z0-9]+$/.test(value);
      },
      message: "Invalid Bus Number!",
    },
  },
  seatBooked: {
    type: [String],
    required: true,
  },
  bus_no: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^[A-Za-z0-9]+$/.test(value);
      },
      message: "Invalid Bus Number!",
    },
  },
  amenities_list: {
    type: [String],
    required: true,
  },
  busFare: {
    type: Number,
    required: true,
    min: [1, "Bus fare for the booking should be greater than Rupees 1."],
  },
  busName: {
    type: String,
    required: true,
    trim: true,
    minlength: [2, "Bus name should be at least 2 character."],
    maxlength: [30, "Bus name should not exceed 30 characters."],
  },
});

const trips = mongoose.model("trips", tripModelSchema);

module.exports = trips;
