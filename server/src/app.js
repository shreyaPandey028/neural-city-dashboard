const express = require("express");
const cors = require("cors");

const cityRoutes = require("./routes/cityRoutes");
const rankingRoutes = require("./routes/rankingRoutes");
const sustainabilityRoutes = require("./routes/sustainabilityRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server Working");
});

app.use("/api/cities", cityRoutes);

app.use("/api/rankings", rankingRoutes);

app.use(
  "/api/sustainability",
  sustainabilityRoutes
);

module.exports = app;