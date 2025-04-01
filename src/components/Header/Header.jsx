import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-white shadow-md rounded-lg">
      <div className="text-2xl font-bold text-red-700">Foodie</div>
      <nav className="space-x-6">
        <NavLink to="/" className={({ isActive }) => isActive ? "text-red-600 font-bold" : "text-gray-800 hover:text-red-600"}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "text-red-600 font-bold" : "text-gray-800 hover:text-red-600"}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "text-red-600 font-bold" : "text-gray-800 hover:text-red-600"}>Contact Us</NavLink>
        <NavLink to="/github" className={({ isActive }) => isActive ? "text-red-600 font-bold" : "text-gray-800 hover:text-red-600"}>Github</NavLink>
      </nav>
      <div className="space-x-4">
        <Link to="/" className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">Login</Link>
        <Link to="/" className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">Sign Up</Link>
      </div>
    </header>
  );
}

