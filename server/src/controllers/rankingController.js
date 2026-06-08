const { getTopCities } = require("../services/sustainabilityService");

const getRankings = async (req, res) => {
  try {
    const rankings = await getTopCities();

    res.status(200).json(rankings);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  getRankings
};