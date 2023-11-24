const trips = require("../../models/tripModel");
const handleListTripByQuery = async (req, res) => {
  try {
    const {
      from,
      to,
      travelDate,
      pickupPoint,
      dropPoint,
      busRating,
      arrivalTime,
      departureTime,
      busOperator,
    } = req.query;
    const filters = {};

    const sessionFilter = (session) => {
      const minTime = new Date(travelDate);
      const maxTime = new Date(travelDate);

      if (session === "Morning Session") {
        minTime.setHours(0, 0, 0);
        minTime.setHours(minTime.getHours() + 5);
        minTime.setMinutes(minTime.getMinutes() + 30);

        maxTime.setHours(11, 59, 59);
        maxTime.setHours(maxTime.getHours() + 5);
        maxTime.setMinutes(maxTime.getMinutes() + 30);

        return {
          $gte: new Date(minTime.toISOString()),
          $lte: new Date(maxTime.toISOString()),
        };
      } else if (session === "Afternoon Session") {
        minTime.setHours(12, 0, 0);
        minTime.setHours(minTime.getHours() + 5);
        minTime.setMinutes(minTime.getMinutes() + 30);

        maxTime.setHours(17, 59, 59);
        maxTime.setHours(maxTime.getHours() + 5);
        maxTime.setMinutes(maxTime.getMinutes() + 30);

        return {
          $gte: new Date(minTime.toISOString()),
          $lte: new Date(maxTime.toISOString()),
        };
      } else if (session === "Evening Session") {
        minTime.setHours(18, 0, 0);
        minTime.setHours(minTime.getHours() + 5);
        minTime.setMinutes(minTime.getMinutes() + 30);

        maxTime.setHours(23, 59, 59);
        maxTime.setHours(maxTime.getHours() + 5);
        maxTime.setMinutes(maxTime.getMinutes() + 30);

        return {
          $gte: new Date(minTime.toISOString()),
          $lte: new Date(maxTime.toISOString()),
        };
      }
    };

    if (travelDate) {
      const currentDate = new Date(travelDate);
      const nextDay = new Date(currentDate);
      nextDay.setDate(currentDate.getDate() + 1);

      filters.startTime = {
        $gte: new Date(travelDate),
        $lt: nextDay,
      };
    }

    if (departureTime) {
      filters.startTime = sessionFilter(departureTime);
    }

    if (arrivalTime) {
      filters.endTime = sessionFilter(arrivalTime);
    }

    if (from || pickupPoint) {
      filters.from = from || pickupPoint;
    }

    if (to || dropPoint) {
      filters.to = to || dropPoint;
    }

    if (busOperator) {
      filters["busDetails.busName"] = {
        $in: busOperator,
      };
    }
    if (busRating) {
      filters["busDetails.busRating"] = {
        $gte: Number(busRating[0]),
        $lt: Number(busRating[0]) === 0 ? Number(3) : Number(6),
      };
    }
    console.log("trips Filters:", filters);

    const filteredTrips = await trips.aggregate([
      {
        $lookup: {
          from: "bus_details",
          localField: "busOwnerID",
          foreignField: "busOwnerID",
          as: "busDetails",
        },
      },
      // { $match: filters },

      // NEW code Start
      // {
      //   $unwind: "$busDetails",
      // },
      {
        $match: filters,
      },
      // {
      //   $group: {
      //     _id: "$busDetails.busOwnerID", // Grouping by busOwnerID
      //     trips: { $push: "$$ROOT" }, // Collecting trip documents into an array
      //     busDetails: { $push: "$busDetails" },
      //   },
      // },

      // NEW code end
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
