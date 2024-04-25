import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-semibold">
          Redux CRUD
        </Link>
        <div>
          <input
            type="text"
            placeholder="Search users..."
            className="px-4 py-2 text-gray-900 rounded-md border focus:border-blue-500 focus:outline-none"
          />
          <Link to="/" className="ml-4 text-white">
            Create User
          </Link>
          <Link to="/read" className="ml-4 text-white">
            All Users
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
