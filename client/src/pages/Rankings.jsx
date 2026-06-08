import { useEffect, useState } from "react";
import API from "../services/api";

import RankingTable from "../components/RankingTable";

export default function Rankings() {
  const [rank, setRank] = useState([]);

  useEffect(() => {
    API.get("/rankings").then(res => setRank(res.data));
  }, []);

  return (
    <div className="p-6">
      <RankingTable data={rank} />
    </div>
  );
}