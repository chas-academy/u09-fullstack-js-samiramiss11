import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import useClickOutside from '../hooks/useClickOutside'; 

const Header = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const [isUserOpen, setUserOpen] = useState(false);
  
  // Refs for the dropdowns
  const navRef = useRef();
  const userRef = useRef();

  // Close dropdowns when clicking outside to close
  useClickOutside(navRef, () => setNavOpen(false));
  useClickOutside(userRef, () => setUserOpen(false));

  const toggleNav = () => setNavOpen(!isNavOpen);
  const toggleUser = () => setUserOpen(!isUserOpen);

  return (
<header className="container mx-auto flex items-center justify-between p-5">
  {/* Left Navigation Dropdown */}
  <div className="relative" ref={navRef}>
    <button
      onClick={toggleNav}
      className="flex flex-col items-center p-4 text-lg bg-gray-800 rounded hover:bg-gray-700 transition"
    >
      <div className="h-1 w-8 bg-white mb-1" />
      <div className="h-1 w-8 bg-white mb-1" />
      <div className="h-1 w-8 bg-white" />
      <span className="text-white">Menu</span>
    </button>
    {isNavOpen && (
      <ul className="absolute left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg">
        <li>
          <Link to="/" className="block px-4 py-2 hover:bg-gray-700">Home</Link>
        </li>
        <li>
          <Link to="/books" className="block px-4 py-2 hover:bg-gray-700">Books</Link>
        </li>
        <li>
          <Link to="/authors" className="block px-4 py-2 hover:bg-gray-700">Authors</Link>
        </li>
        <li>
          <Link to="/news" className="block px-4 py-2 hover:bg-gray-700">News</Link>
        </li>
      </ul>
    )}
  </div>

  {/* Search Bar in the Middle */}
  <div className="flex-grow mx-4">
    <input
      type="text"
      placeholder="Search..."
      className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {/* Right User Dropdown */}
  <div className="relative" ref={userRef}>
    <button onClick={toggleUser} className="flex items-center p-4">
      <FaUser className="h-8 w-8" />
    </button>
    {isUserOpen && (
      <ul className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg">
        <li>
          <Link to="/login" className="block px-4 py-2 hover:bg-gray-700">Sign In</Link>
        </li>
        <li>
          <Link to="/user-dashboard" className="block px-4 py-2 hover:bg-gray-700">Profile</Link>
        </li>
      </ul>
    )}
  </div>
</header>
  );
};

export default Header;