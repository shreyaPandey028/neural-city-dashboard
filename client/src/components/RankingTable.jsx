import CityCard from "./CityCard";

const cities = [
  { city: "Indore", rank: 1, aqi: 82, swachh: 95, usi: 89.8 },
  { city: "Surat", rank: 2, aqi: 78, swachh: 92, usi: 86.4 },
  { city: "Pune", rank: 3, aqi: 80, swachh: 85, usi: 83 },
  { city: "Mumbai", rank: 4, aqi: 72, swachh: 88, usi: 81.6 },
  { city: "Lucknow", rank: 5, aqi: 55, swachh: 75, usi: 67 },
  { city: "Delhi", rank: 6, aqi: 45, swachh: 70, usi: 60 },
];

export default function RankingTable() {
  return (
    <div>
      <h2 className="text-center text-4xl font-bold text-white mb-10">
        🏆 City Ranking (USI Based)
      </h2>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cities.map((city) => (
          <CityCard key={city.city} {...city} />
        ))}
      </div>
    </div>
  );
}