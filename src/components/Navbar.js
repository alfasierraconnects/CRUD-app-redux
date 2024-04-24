import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-semibold">Redux CRUD</div>
        <div>
          <input
            type="text"
            placeholder="Search users..."
            className="px-4 py-2 rounded-md border focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
