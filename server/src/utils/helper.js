const capitalizeCity = (city) => {

  return city
    .toLowerCase()
    .split(" ")
    .map(
      word =>
        word.charAt(0).toUpperCase() +
        word.slice(1)
    )
    .join(" ");
};

const sortDescending = (
  data,
  field
) => {

  return [...data].sort(
    (a, b) => b[field] - a[field]
  );
};

const sortAscending = (
  data,
  field
) => {

  return [...data].sort(
    (a, b) => a[field] - b[field]
  );
};

module.exports = {
  capitalizeCity,
  sortDescending,
  sortAscending
};