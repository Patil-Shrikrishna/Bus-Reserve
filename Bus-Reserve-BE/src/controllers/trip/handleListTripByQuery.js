const trips = require("../../models/tripModel");
const busDetails = require("../../models/busDetailsModel");
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

    if (arrival) {
      filters.arrival = arrival;
    }

    if (departure) {
      filters.departure = departure;
    }

    if (name) {
      filters.name = name;
    }
    const busFilter = {};
    if (rating) {
      busFilter.rating = Number(rating);
    }
    console.log("trips Filters:", filters);
    console.log("bus Filters:", busFilter);

    // let trip = await trips.find(filters);

    // const buses = await busOwner.find(busFilter);

    // const filteredTrips = { trip, buses };

    const filteredTrips = await trips.aggregate([
      {
        $lookup: {
          from: busDetails,
          localField: "busOwnerID",
          foreignField: "busOwnerID",
          as: "busDetails",
        },
      },
      { $match: filters },
    ]);

    console.log("Filtered Trips:", filteredTrips);

    if (filteredTrips.length === 0) {
      res.status(404).json({ message: "Trips not found for this query" });
    } else {
      res.status(200).json(filteredTrips);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "An unexpected error occurred. Please try again later.",
    });
  }
};
module.exports = handleListTripByQuery;
