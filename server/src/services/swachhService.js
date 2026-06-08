const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

const getSwachhData = () => {
  return new Promise((resolve, reject) => {
    const results = [];

    fs.createReadStream(
      path.join(__dirname, "../data/raw/swachh.csv")
    )
      .pipe(csv())
      .on("data", (data) => {
        results.push({
          city: data.city,
          swachhScore: Number(data.swachhScore)
        });
      })
      .on("end", () => {
        resolve(results);
      })
      .on("error", reject);
  });
};

module.exports = getSwachhData;