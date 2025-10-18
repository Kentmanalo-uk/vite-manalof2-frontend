import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600 tracking-wide">
          CarRental
        </h1>

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-gray-700 font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-blue-600 transition duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/listing"
              className="hover:text-blue-600 transition duration-200"
            >
              Cars
            </Link>
          </li>
          <li>
            <Link
              to="/order"
              className="hover:text-blue-600 transition duration-200"
            >
              Order
            </Link>
          </li>
        </ul>

        {/* Login Button */}
        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
