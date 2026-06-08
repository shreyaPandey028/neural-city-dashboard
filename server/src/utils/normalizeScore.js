const normalizeScore = (
  value,
  min,
  max
) => {

  if (max === min) {
    return 100;
  }

  const score =
    ((value - min) / (max - min)) * 100;

  return Number(score.toFixed(2));
};

module.exports = normalizeScore;