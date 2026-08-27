import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-around border-b border-gray-300 bg-white px-6 py-4"
      role="navigation"
    >
      <h1 className="text-2xl font-bold">My Blog</h1>

      <div className="flex gap-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-blue-600 font-bold text-blue-600"
              : "text-gray-600 hover:text-blue-600"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="#"
          className="text-gray-600 hover:text-blue-600"
        >
          Posts
        </NavLink>

        <NavLink
          to="#"
          className="text-gray-600 hover:text-blue-600"
        >
          About
        </NavLink>
      </div>
    </nav>
  );
}