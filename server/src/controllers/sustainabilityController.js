const {
  getTopCities,
  compareCities
} = require("../services/sustainabilityService");

/**
 * GET /api/sustainability/best
 */
const getBestCity = async (req, res) => {
  try {
    const cities = await getTopCities();

    if (!cities || cities.length === 0) {
      return res.status(404).json({
        message: "No city data found"
      });
    }

    res.json(cities[0]);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

/**
 * GET /api/sustainability/compare?city1=&city2=
 */
const compare = async (req, res) => {
  try {
    const { city1, city2 } = req.query;

    if (!city1 || !city2) {
      return res.status(400).json({
        message: "Please provide city1 and city2"
      });
    }

    const result = await compareCities(city1, city2);

    res.json(result);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  getBestCity,
  compare
};