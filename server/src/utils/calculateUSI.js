const calculateUSI = (swachhScore, aqiScore) => {
  const usi =
    swachhScore * 0.6 +
    aqiScore * 0.4;

  return Number(usi.toFixed(2));
};

module.exports = calculateUSI;