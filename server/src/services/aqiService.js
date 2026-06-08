const fs = require("fs");
const path = require("path");

const getAQIData = async () => {
  const filePath = path.join(
    __dirname,
    "../data/raw/cleaned_pm25_dataset.json"
  );

  const rawData = JSON.parse(
    fs.readFileSync(filePath, "utf8")
  );

  const cityMap = {};

  rawData.forEach((item) => {
    const city = item.city?.trim();

    if (!city) return;

    if (!cityMap[city]) {
      cityMap[city] = {
        totalPM25: 0,
        count: 0,
      };
    }

    cityMap[city].totalPM25 += Number(
      item.pollutant_avg || 0
    );

    cityMap[city].count += 1;
  });

  const result = Object.keys(cityMap).map(
    (city) => {
      const avgPM25 =
        cityMap[city].totalPM25 /
        cityMap[city].count;

      return {
        city,
        pm25: Number(
          avgPM25.toFixed(2)
        ),
        aqi: Math.min(
          100,
          Math.round(avgPM25)
        ),
      };
    }
  );

  return result;
};

module.exports = {
  getAQIData,
};