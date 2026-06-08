import { useEffect, useState } from "react";
import API from "../services/api";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  const [cities, setCities] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    API.get("/rankings")
      .then((res) => {
        setCities(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const filteredCities = cities.filter((c) =>
    c.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const bestCity = cities[0];

  const highestAQI = [...cities].sort(
    (a, b) => b.aqi - a.aqi
  )[0];

  const cleanestCity = [...cities].sort(
    (a, b) => b.swachhScore - a.swachhScore
  )[0];

  const avgAQI =
    cities.length > 0
      ? Math.round(
          cities.reduce((sum, city) => sum + city.aqi, 0) /
            cities.length
        )
      : 0;

  const recommendations = cities
    .filter(
      (city) =>
        city.aqi >= 70 &&
        city.swachhScore >= 80
    )
    .slice(0, 3);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        🌍 Neural City Sustainability Dashboard
      </h1>

      <input
        type="text"
        placeholder="Search city..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.search}
      />

      {}
      <div style={styles.insightsGrid}>
        <div style={styles.insightCard}>
          <h3>🏆 Best City</h3>
          <p>{bestCity?.city}</p>
        </div>

        <div style={styles.insightCard}>
          <h3>🌫 Highest AQI</h3>
          <p>{highestAQI?.city}</p>
        </div>

        <div style={styles.insightCard}>
          <h3>🧹 Cleanest City</h3>
          <p>{cleanestCity?.city}</p>
        </div>

        <div style={styles.insightCard}>
          <h3>📈 Avg AQI</h3>
          <p>{avgAQI}</p>
        </div>
      </div>

      {}
      <div style={styles.grid}>
        {filteredCities.map((c, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.rank}>#{index + 1}</div>

            <h2 style={styles.city}>{c.city}</h2>

            <p>
              🌫 AQI: <b>{c.aqi}</b>
            </p>

            <p>
              🧹 Swachh Score: <b>{c.swachhScore}</b>
            </p>

            <p>
              🌿 USI: <b>{c.usi}</b>
            </p>

            {c.pm25 && (
              <p>
                💨 PM2.5: <b>{c.pm25}</b>
              </p>
            )}

            <hr style={styles.hr} />

            <p>
              Overall Score:
              <span style={styles.score}>
                {" "}
                {c.usi}
              </span>
            </p>
          </div>
        ))}
      </div>

      {}
      <div style={styles.chartBox}>
        <h2 style={styles.chartTitle}>
          📊 AQI Comparison
        </h2>

        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={filteredCities}>
            <XAxis dataKey="city" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip />
            <Bar dataKey="aqi" fill="#38bdf8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {}
      <div style={styles.chartBox}>
        <h2 style={styles.chartTitle}>
          🌿 Sustainability Ranking
        </h2>

        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={filteredCities}>
            <XAxis dataKey="city" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip />
            <Bar dataKey="usi" fill="#22c55e" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {}
      <div style={styles.tableBox}>
        <h2 style={styles.chartTitle}>
          🏆 City Rankings
        </h2>

        <table style={styles.table}>
          <thead>
            <tr>
              <th>Rank</th>
              <th>City</th>
              <th>AQI</th>
              <th>Swachh</th>
              <th>USI</th>
            </tr>
          </thead>

          <tbody>
            {filteredCities.map((c, index) => (
              <tr key={index}>
                <td>#{index + 1}</td>
                <td>{c.city}</td>
                <td>{c.aqi}</td>
                <td>{c.swachhScore}</td>
                <td>{c.usi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {}
      <div style={styles.recommendationBox}>
        <h2>⭐ Recommended Sustainable Cities</h2>

        {recommendations.map((city, index) => (
          <p key={city.city}>
            #{index + 1} {city.city}
          </p>
        ))}
      </div>
     <div style={styles.infoBox}>
  <h2>📂 Dataset Source</h2>

  <p>CPCB PM2.5 Air Quality Dataset</p>

  <p>Source: data.gov.in</p>

  <p>Cities Processed: {cities.length}</p>
</div>

<div style={styles.infoBox}>
  <h2>🛠 Data Processing</h2>

  <ul>
    <li>Collected CPCB PM2.5 dataset</li>
    <li>Removed missing records</li>
    <li>Grouped entries city-wise</li>
    <li>Calculated average PM2.5</li>
    <li>Generated AQI score</li>
    <li>Merged with Swachh scores</li>
    <li>Calculated USI ranking</li>
  </ul>
</div>

<div style={styles.formulaBox}>
  <h2>📘 How USI is Calculated?</h2>

  <p>
    USI combines AQI and Swachh
    Score after normalization.
  </p>

  <p>
    Higher USI means better urban
    sustainability.
  </p>
</div>

        <p>
          USI combines AQI and Swachh
          Score after normalization.
        </p>

        <p>
          Higher USI means better urban
          sustainability.
        </p>
      </div>
    
  );
}

const styles = {
  container: {
    padding: "20px",
    background: "#081229",
    minHeight: "100vh",
  },

  title: {
    color: "#38bdf8",
    textAlign: "center",
    marginBottom: "25px",
  },

  search: {
    width: "100%",
    padding: "14px",
    borderRadius: "12px",
    border: "none",
    marginBottom: "25px",
    fontSize: "16px",
  },

  insightsGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit,minmax(220px,1fr))",
    gap: "15px",
    marginBottom: "25px",
  },

  insightCard: {
    background: "#16213e",
    padding: "20px",
    borderRadius: "14px",
    color: "white",
    textAlign: "center",
  },

 grid: {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit,minmax(240px,1fr))",
  gap: "18px",

  maxHeight: "700px",
  overflowY: "auto",
  paddingRight: "10px",
},

  card: {
    background: "#16213e",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "14px",
    padding: "18px",
    color: "white",
  },

  rank: {
    color: "#facc15",
    fontWeight: "bold",
    fontSize: "22px",
  },

  city: {
    color: "#38bdf8",
  },

  score: {
    color: "#22c55e",
    fontWeight: "bold",
    fontSize: "18px",
  },

  hr: {
    borderColor: "rgba(255,255,255,0.1)",
  },

  chartBox: {
    marginTop: "30px",
    background: "#16213e",
    padding: "20px",
    borderRadius: "14px",
  },

  chartTitle: {
    color: "white",
    marginBottom: "15px",
  },

  tableBox: {
  marginTop: "30px",
  background: "#16213e",
  padding: "20px",
  borderRadius: "14px",

  maxHeight: "500px",
  overflowY: "auto",
  overflowX: "auto",
},
  table: {
    width: "100%",
    borderCollapse: "collapse",
    color: "white",
  },

  recommendationBox: {
    marginTop: "30px",
    background: "#16213e",
    padding: "20px",
    borderRadius: "14px",
    color: "white",
  },
  infoBox: {
  marginTop: "20px",
  background: "#16213e",
  padding: "20px",
  borderRadius: "14px",
  color: "white",
},

  formulaBox: {
    marginTop: "20px",
    background: "#16213e",
    padding: "20px",
    borderRadius: "14px",
    color: "white",
    marginBottom: "30px",
  },
};