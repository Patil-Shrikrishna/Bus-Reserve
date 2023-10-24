// const trips = require("../../models/tripModel");
const busOwner = require("../../models/busOwnerModel");
const handleListTripByQuery = async (req, res) => {
  try {
    const { date, from, to, rating, arrival, departure, name } = req.query;
    const filters = {};

    if (date) {
      filters.date = date;
    }

    if (from) {
      filters.from = from;
    }

    if (to) {
      filters.to = to;
    }

    if (rating) {
      filters.rating = Number(rating);
    }

    if (arrival) {
      filters.arrival = arrival;
    }

    if (departure) {
      filters.departure = departure;
    }

    if (name) {
      filters.name = name;
    }
    console.log("Filters:", filters);

    const filteredTrips2 = await busOwner.find(filters);
    console.log("Filtered Trips:", filteredTrips2);

    if (filteredTrips2.length === 0) {
      res.status(404).json({ message: "Trips not found for this query" });
    } else {
      res.status(200).json(filteredTrips2);
    }
  } catch (error) {
    res.status(500).json({
      message: "An unexpected error occurred. Please try again later.",
    });
  }
};
module.exports = handleListTripByQuery;
