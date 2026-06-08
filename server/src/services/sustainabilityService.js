const { mergeData } = require("./mergeService");

const getTopCities = async () => {
  const cities = await mergeData();

  return cities.sort(
    (a, b) => b.usi - a.usi
  );
};

const compareCities = async (
  city1,
  city2
) => {
  const cities = await mergeData();

  return {
    city1: cities.find(
      (c) =>
        c.city.toLowerCase() ===
        city1.toLowerCase()
    ),

    city2: cities.find(
      (c) =>
        c.city.toLowerCase() ===
        city2.toLowerCase()
    ),
  };
};

module.exports = {
  getTopCities,
  compareCities,
};