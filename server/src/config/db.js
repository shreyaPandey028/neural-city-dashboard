const connectDB = async () => {
  try {
    console.log("📁 Using local JSON data source");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;