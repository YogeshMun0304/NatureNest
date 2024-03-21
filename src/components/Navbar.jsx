import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 px-4">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <div className="text-green-500 font-bold text-xl">NartyreNest</div>

        {/* Navigation Links */}
        <div className="space-x-4">
          <a href="#contact" className="text-green-500 hover:text-green-700">
            Contact Us
          </a>
          <a href="#reviews" className="text-green-500 hover:text-green-700">
            Reviews
          </a>
          <a href="#reviews" className="text-green-500 hover:text-green-700">
            Reviews
          </a>
          <a href="#reviews" className="text-green-500 hover:text-green-700">
            Reviews
          </a>
          <a href="#reviews" className="text-green-500 hover:text-green-700">
            Reviews
          </a>
          {/* Add 2-3 more random links here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
