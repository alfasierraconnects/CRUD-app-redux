import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 px-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-semibold">
          Redux CRUD
        </Link>
        <div>
          <Link to="/" className="text-white">
            Create User
          </Link>
          <Link to="/read" className="ml-8 text-white">
            All Users
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
