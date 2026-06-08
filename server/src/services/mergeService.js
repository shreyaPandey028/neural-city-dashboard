const { getAQIData } = require("./aqiService");
const getSwachhData = require("./swachhService");

const calculateUSI = (aqi, swachh) => {
  return Number(
    (
      swachh * 0.6 +
      (100 - aqi) * 0.4
    ).toFixed(2)
  );
};

const mergeData = async () => {
  const aqiData = await getAQIData();
  const swachhData = await getSwachhData();

  const merged = aqiData.map((aqiCity) => {
    const swachhCity = swachhData.find(
      (s) =>
        s.city.toLowerCase() ===
        aqiCity.city.toLowerCase()
    );

    const swachhScore =
      swachhCity?.swachhScore || 75;

    return {
      city: aqiCity.city,
      aqi: aqiCity.aqi,
      pm25: aqiCity.pm25,
      swachhScore,
      usi: calculateUSI(
        aqiCity.aqi,
        swachhScore
      ),
    };
  });

  return merged;
};

module.exports = {
  mergeData,
};