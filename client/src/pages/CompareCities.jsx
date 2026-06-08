import { useEffect, useState } from "react";
import API from "../services/api";

export default function CompareCities() {
  const [cities, setCities] = useState([]);
  const [c1, setC1] = useState("");
  const [c2, setC2] = useState("");
  const [result, setResult] = useState(null);

  useEffect(() => {
    API.get("/cities")
      .then(res => setCities(res.data))
      .catch(err => console.log(err));
  }, []);

  const compare = () => {
    const cityA = cities.find(c => c.city === c1);
    const cityB = cities.find(c => c.city === c2);

    if (cityA && cityB) {
      setResult({
        better: cityA.usi > cityB.usi ? cityA.city : cityB.city,
        cityA,
        cityB
      });
    }
  };

  return (
    <div style={{ padding: 20, color: "white", background: "#0f172a", minHeight: "100vh" }}>
      <h1>⚖ Compare Cities</h1>

      <select onChange={e => setC1(e.target.value)}>
        <option>Select City 1</option>
        {cities.map(c => <option key={c.city}>{c.city}</option>)}
      </select>

      <select onChange={e => setC2(e.target.value)}>
        <option>Select City 2</option>
        {cities.map(c => <option key={c.city}>{c.city}</option>)}
      </select>

      <button onClick={compare}>Compare</button>

      {result && (
        <div>
          <h2>🏆 Better City: {result.better}</h2>
        </div>
      )}
    </div>
  );
}