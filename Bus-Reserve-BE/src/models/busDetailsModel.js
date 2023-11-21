const mongoose = require("mongoose");

const busDetailsSchema = new mongoose.Schema({
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
  busName: {
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
  busNumber: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^[A-Za-z0-9\s]+$/.test(value);
      },
      message: "Invalid Bus Number!",
    },
  },
  busCategory: {
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
  busRating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  busAmenities: {
    type: [String],
    required: true,
    validate: {
      validator: function (value) {
        return /^[A-Za-z0-9]+$/.test(value);
      },
      message: "Invalid Input!",
    },
  },
  busFare: {
    type: Number,
    required: true,
    min: [1, "Bus fare for the booking should be greater than Rupees 1."],
  },
});

const busDetails = mongoose.model("bus_details", busDetailsSchema);

module.exports = busDetails;

// [
//   {
//     busOwnerID: 1,
//     busName: "Tata Motors - Marcopolo",
//     busNumber: "DL 02 HK 0001",
//     busCategory: "A/C Sleeper (2+1)",
//     totalWindowSeatsAvailable: 24,
//     totalSeats: 38,
//     busRating: 5.0,
//     busAmenities: [
//       "Live Tracking",
//       "Policies",
//       "Photos",
//       "Amenities",
//       "Reviews",
//     ],
//     busFare: 900,
//   },
//   {
//     busOwnerID: 2,
//     busName: "Eicher Motors",
//     busNumber: "DL 01 KG 2428",
//     busCategory: "A/C Sleeper (2+1)",
//     totalWindowSeatsAvailable: 24,
//     totalSeats: 38,
//     busRating: 3.5,
//     busAmenities: [
//       "Live Tracking",
//       "Policies",
//       "Photos",
//       "Amenities",
//       "Reviews",
//     ],
//     busFare: 950,
//   },
//   {
//     busOwnerID: 3,
//     busName: "Bharat Benz",
//     busNumber: "DL 05 AB 3640",
//     busCategory: "A/C Sleeper (2+1)",
//     totalWindowSeatsAvailable: 24,
//     totalSeats: 38,
//     busRating: 5.0,
//     busAmenities: [
//       "Live Tracking",
//       "Policies",
//       "Photos",
//       "Amenities",
//       "Reviews",
//     ],
//     busFare: 1000,
//   },
//   {
//     busOwnerID: 4,
//     busName: "Volvo Buses",
//     busNumber: "DL 02 HK 0003",
//     busCategory: "A/C Sleeper (2+1)",
//     totalWindowSeatsAvailable: 24,
//     totalSeats: 38,
//     busRating: 3.5,
//     busAmenities: [
//       "Live Tracking",
//       "Policies",
//       "Photos",
//       "Amenities",
//       "Reviews",
//     ],
//     busFare: 1100,
//   },
//   {
//     busOwnerID: 5,
//     busName: "Mahindra & Mahindra",
//     busNumber: "DL 03 WQ 4044",
//     busCategory: "A/C Sleeper (2+1)",
//     totalWindowSeatsAvailable: 24,
//     totalSeats: 38,
//     busRating: 5.0,
//     busAmenities: [
//       "Live Tracking",
//       "Policies",
//       "Photos",
//       "Amenities",
//       "Reviews",
//     ],
//     busFare: 1250,
//   },
//   {
//     busOwnerID: 6,
//     busName: "jabbar travels",
//     busNumber: "DL 01 FC 4448",
//     busCategory: "A/C Sleeper (2+1)",
//     totalWindowSeatsAvailable: 24,
//     totalSeats: 38,
//     busRating: 2.5,
//     busAmenities: [
//       "Live Tracking",
//       "Policies",
//       "Photos",
//       "Amenities",
//       "Reviews",
//     ],
//     busFare: 1300,
//   },
//   {
//     busOwnerID: 7,
//     busName: "Neeta travels",
//     busNumber: "DL 02 JY 3236",
//     busCategory: "A/C Sleeper (2+1)",
//     totalWindowSeatsAvailable: 24,
//     totalSeats: 38,
//     busRating: 4.5,
//     busAmenities: [
//       "Live Tracking",
//       "Policies",
//       "Photos",
//       "Amenities",
//       "Reviews",
//     ],
//     busFare: 1350,
//   },
//   {
//     busOwnerID: 8,
//     busName: "jeppiar travels",
//     busNumber: "DL 06 XS 2832",
//     busCategory: "A/C Sleeper (2+1)",
//     totalWindowSeatsAvailable: 24,
//     totalSeats: 38,
//     busRating: 3.5,
//     busAmenities: [
//       "Live Tracking",
//       "Policies",
//       "Photos",
//       "Amenities",
//       "Reviews",
//     ],
//     busFare: 1400,
//   },
//   {
//     busOwnerID: 9,
//     busName: "IntrCity Smart Bus",
//     busNumber: "DL 06 ZM 1215",
//     busCategory: "A/C Sleeper (2+1)",
//     totalWindowSeatsAvailable: 24,
//     totalSeats: 38,
//     busRating: 3.5,
//     busAmenities: [
//       "Live Tracking",
//       "Policies",
//       "Photos",
//       "Amenities",
//       "Reviews",
//     ],
//     busFare: 1450,
//   },
//   {
//     busOwnerID: 10,
//     busName: "Ashok Leyland",
//     busNumber: "DL 05 PT 0811",
//     busCategory: "A/C Sleeper (2+1)",
//     totalWindowSeatsAvailable: 24,
//     totalSeats: 38,
//     busRating: 4.5,
//     busAmenities: [
//       "Live Tracking",
//       "Policies",
//       "Photos",
//       "Amenities",
//       "Reviews",
//     ],
//     busFare: 1500,
//   },
// ]
