const mongoose = require("mongoose");

const stateDistrictsSchema = new mongoose.Schema({
  state: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^[A-Za-z\s\-']+$/.test(value);
      },
      message: "Invalid State Name!",
    },
  },
  districts: {
    type: [String],
    required: true,
    validate: {
      validator: function (value) {
        return /^[A-Za-z\s\-']+$/.test(value);
      },
      message: "Invalid District Name!",
    },
  },
});

const stateDistricts = mongoose.model("state_district", stateDistrictsSchema);

module.exports = stateDistricts;
