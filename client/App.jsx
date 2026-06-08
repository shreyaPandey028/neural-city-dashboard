import { useState } from "react";
import RankingTable from "./components/RankingTable";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-[#02153b] text-white">
      <div className="max-w-7xl mx-auto p-8">

        <h1 className="text-center text-5xl font-bold text-sky-400 mb-8">
          🌍 Neural City Dashboard
        </h1>

        <input
          type="text"
          placeholder="Search city..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-4 rounded-xl text-black mb-12"
        />

        <RankingTable searchTerm={searchTerm} />
      </div>
    </div>
  );
}

export default App;