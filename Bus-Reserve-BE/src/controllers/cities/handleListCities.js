const stateDistricts = require("../../models/stateDistrictsModel");

const handleListCities = async (req, res) => {
  try {
    const city = req.body;
    console.log("searchString city", city.city);
    // console.log("searchString req.body", req.body);

    const regex = new RegExp(`^${city.city}`, "i");
    console.log("regex", regex);

    const cities = await stateDistricts.aggregate([
      {
        $match: {
          districts: {
            $regex: regex,
          },
        },
      },
      {
        $project: {
          state: 1,
          Districts: {
            $filter: {
              input: "$districts",
              as: "district",
              cond: { $regexMatch: { input: "$$district", regex: regex } },
            },
          },
        },
      },
    ]);

    if (!cities) {
      res.status(404).json({ message: "City not found" });
    }
    res.status(200).json(cities);
  } catch (error) {
    res.status(500).json({
      message: "An unexpected error occurred. Please try again later.",
    });
  }
};
module.exports = handleListCities;
