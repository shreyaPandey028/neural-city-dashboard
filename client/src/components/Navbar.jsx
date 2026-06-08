import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-slate-900/60 backdrop-blur border-b border-slate-700">
      
      <h1 className="text-xl font-bold text-cyan-400">
        🌍 Neural City
      </h1>

      <div className="flex gap-6 text-sm">
        <Link to="/" className="hover:text-cyan-400">Dashboard</Link>
        <Link to="/rankings" className="hover:text-cyan-400">Rankings</Link>
        <Link to="/compare" className="hover:text-cyan-400">Compare</Link>
      </div>
    </div>
  );
}