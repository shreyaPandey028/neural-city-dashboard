export default function CompareTable({ data }) {
  return (
    <div className="grid md:grid-cols-2 gap-5">

      {/* City 1 */}
      <div className="p-5 bg-white/5 border border-white/10 rounded-2xl">
        <h2 className="text-cyan-300 font-bold text-xl">
          {data.city1.city}
        </h2>
        <p className="mt-2">🌿 USI: {data.city1.usi}</p>
      </div>

      {/* City 2 */}
      <div className="p-5 bg-white/5 border border-white/10 rounded-2xl">
        <h2 className="text-cyan-300 font-bold text-xl">
          {data.city2.city}
        </h2>
        <p className="mt-2">🌿 USI: {data.city2.usi}</p>
      </div>

    </div>
  );
}