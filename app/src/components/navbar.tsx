import { Link, NavLink, useNavigation } from "react-router";
import type { Route } from "../../+types/root";

export default function Navbar() {
  return (
    <nav className="flex z-111 items-center justify-around px-6 py-4 sticky top-0 border-b border-b-gray-300 bg-white" role="navigation">
      <h1 className="text-2xl font-bold">My Blog</h1>

      <div className="flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-gray-600" : "font-bold text-blue-600 border-b"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="#"
          className={({ isActive }) =>
            isActive ? "text-gray-600" : "font-bold text-blue-600 border-b"
          }
        >
          Posts
        </NavLink>

        <NavLink
          to="#"
          className={({ isActive }) =>
            isActive ? "text-gray-600" : "font-bold text-blue-600 border-b"
          }
        >
          About
        </NavLink>
      </div>
    </nav>
  );
}
