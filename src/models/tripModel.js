const mongoose = require("mongoose");

const tripModelSchema = new mongoose.Schema({
  date: {
    type: Number,
    required: true,
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
  },
  startTime: {
    type: Number,
    required: true,
  },
  endTime: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  seatBooked: {
    type: [String],
    required: true,
  },
  bus_no: {
    type: String,
  },
  amenities_list: {
    type: [String],
  },
  busFare: {
    type: Number,
    required: true,
  },
  busName: {
    type: String,
    required: true,
  },
});

const trips = mongoose.model("trips", tripModelSchema);

module.exports = trips;
