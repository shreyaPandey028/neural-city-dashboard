const { mergeData } = require("../services/mergeService");

const getCities = async (req, res) => {
  try {
    const data = await mergeData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getCities };