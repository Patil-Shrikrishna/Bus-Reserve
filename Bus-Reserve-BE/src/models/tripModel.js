const mongoose = require("mongoose");

const tripModelSchema = new mongoose.Schema({
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

        return value > minDate && value < maxDate;
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

        return value > minDate && value < maxDate;
      },
      message:
        "Please select a valid date within the next 3 months and at least 5 hours from now",
    },
  },

  seatBooked: {
    type: [String],
    required: true,
  },
});

const trips = mongoose.model("trips", tripModelSchema);

module.exports = trips;

// [
//   {
//     busOwnerID: 1,
//     from: "Ahmedabad, Gujrat",
//     to: "New Delhi, Delhi",
//     startTime: "2023-12-21T10:00:00.000Z",
//     endTime: "2023-12-21T15:00:00.000Z",
//     seatBooked: ["1UB", "2UB"],
//   },
//   {
//     busOwnerID: 2,
//     from: "Ahmedabad, Gujrat",
//     to: "New Delhi, Delhi",
//     startTime: "2023-12-21T11:30:00.000Z",
//     endTime: "2023-12-21T18:00:00.000Z",
//     seatBooked: ["3UB", "4UB", "5LB"],
//   },
//   {
//     busOwnerID: 3,
//     from: "Ahmedabad, Gujrat",
//     to: "New Delhi, Delhi",
//     startTime: "2023-12-21T12:45:00.000Z",
//     endTime: "2023-12-21T17:30:00.000Z",
//     seatBooked: ["6LB", "7UB", "8UB", "9LB"],
//   },
//   {
//     busOwnerID: 4,
//     from: "Ahmedabad, Gujrat",
//     to: "New Delhi, Delhi",
//     startTime: "2023-12-21T09:00:00.000Z",
//     endTime: "2023-12-21T14:45:00.000Z",
//     seatBooked: ["6LB", "7UB", "8UB", "9LB"],
//   },
//   {
//     busOwnerID: 5,
//     from: "Ahmedabad, Gujrat",
//     to: "New Delhi, Delhi",
//     startTime: "2023-12-21T13:30:00.000Z",
//     endTime: "2023-12-21T19:15:00.000Z",
//     seatBooked: ["6LB", "7UB", "8UB", "9LB"],
//   },
//   {
//     busOwnerID: 6,
//     from: "Ahmedabad, Gujrat",
//     to: "New Delhi, Delhi",
//     startTime: "2023-12-21T14:30:00.000Z",
//     endTime: "2023-12-21T20:15:00.000Z",
//     seatBooked: ["6LB", "7UB", "8UB", "9LB"],
//   },
//   {
//     busOwnerID: 7,
//     from: "Ahmedabad, Gujrat",
//     to: "New Delhi, Delhi",
//     startTime: "2023-12-21T15:45:00.000Z",
//     endTime: "2023-12-21T21:30:00.000Z",
//     seatBooked: ["6LB", "7UB", "8UB", "9LB"],
//   },
//   {
//     busOwnerID: 8,
//     from: "Ahmedabad, Gujrat",
//     to: "New Delhi, Delhi",
//     startTime: "2023-12-21T20:45:00.000Z",
//     endTime: "2023-12-22T02:30:00.000Z",
//     seatBooked: ["6LB", "7UB", "8UB", "9LB"],
//   },
//   {
//     busOwnerID: 9,
//     from: "Ahmedabad, Gujrat",
//     to: "New Delhi, Delhi",
//     startTime: "2023-12-21T21:45:00.000Z",
//     endTime: "2023-12-22T03:30:00.000Z",
//     seatBooked: ["6LB", "7UB", "8UB", "9LB"],
//   },
// {
//   busOwnerID: 10,
//   from: "Ahmedabad, Gujrat",
//   to: "New Delhi, Delhi",
//   startTime: "2023-12-21T22:45:00.000Z",
//   endTime: "2023-12-22T04:30:00.000Z",
//   seatBooked: ["6LB", "7UB", "8UB", "9LB"],
// },
// ];
