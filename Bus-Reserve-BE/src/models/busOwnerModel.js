const mongoose = require("mongoose");

const busOwnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: [2, "Name should be at least 2 character."],
    maxlength: [50, "Name should not exceed 50 characters."],
    validate: {
      validator: function (value) {
        return /^[A-Za-z\s\-']+$/.test(value);
      },
      message: "Invalid Bus Owner Name!",
    },
  },
  busOwnerID: {
    type: Number,
    required: true,
    min: 1,
    validate: {
      validator: function (value) {
        return /[0-9]/.test(value);
      },
      message: "Invalid Bus Owner ID!",
    },
  },
  category: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^[A-Za-z0-9]+$/.test(value);
      },
      message: "Invalid Input!",
    },
  },
  totalWindowSeatsAvailable: {
    type: Number,
    required: true,
    min: 1,
    max: 30,
  },
  totalSeats: {
    type: Number,
    required: true,
    min: 1,
    max: 55,
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  amenities: {
    type: [String],
    required: true,
    validate: {
      validator: function (value) {
        return /^[A-Za-z0-9]+$/.test(value);
      },
      message: "Invalid Input!",
    },
  },
});

const busOwner = mongoose.model("bus_owners", busOwnerSchema);

module.exports = busOwner;
