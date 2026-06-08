const CityCard = ({ city, rank, aqi, swachh, usi }) => {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-lg relative">
      <div className="absolute top-3 right-3 bg-sky-400 text-black px-3 py-2 rounded-xl font-bold">
        #{rank}
      </div>

      <h2 className="text-4xl font-bold text-sky-400 mb-6 text-center">
        {city}
      </h2>

      <div className="space-y-3 text-xl">
        <div className="flex justify-between">
          <span>🌫 AQI:</span>
          <span>{aqi}</span>
        </div>

        <div className="flex justify-between">
          <span>🧹 Swachh:</span>
          <span>{swachh}</span>
        </div>

        <div className="flex justify-between">
          <span>🌿 USI:</span>
          <span>{usi}</span>
        </div>
      </div>
    </div>
  );
};

export default CityCard;