import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* General Pages */}
        <div>
          <h2 className="text-lg font-bold mb-2">General Pages</h2>
          <ul className="space-y-1">
            <li><Link to="/" className="text-blue-400 hover:underline">Home</Link></li>
            <li><Link to="/about-us" className="text-blue-400 hover:underline">About Us</Link></li>
            <li><Link to="/contact-us" className="text-blue-400 hover:underline">Contact Us</Link></li>
            <li><Link to="/privacy-policy" className="text-blue-400 hover:underline">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service" className="text-blue-400 hover:underline">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Literary Arts Categories */}
        <div>
          <h2 className="text-lg font-bold mb-2">Literary Arts Categories</h2>
          <ul className="space-y-1">
            <li><Link to="/history-literary" className="text-blue-400 hover:underline">History Literary</Link></li>
            <li><Link to="/books" className="text-blue-400 hover:underline">Books</Link></li>
            <li><Link to="/authors" className="text-blue-400 hover:underline">Authors</Link></li>
            <li><Link to="/news" className="text-blue-400 hover:underline">News</Link></li>
          </ul>
        </div>

        {/* User and Admin Pages */}
        <div>
          <h2 className="text-lg font-bold mb-2">User & Admin</h2>
          <ul className="space-y-1">
            <li><Link to="/user-dashboard" className="text-blue-400 hover:underline">User Dashboard</Link></li>
            <li><Link to="/saved-content" className="text-blue-400 hover:underline">Saved Content</Link></li>
            <li><Link to="/admin-dashboard" className="text-blue-400 hover:underline">Admin Dashboard</Link></li>
            <li><Link to="/manage-users" className="text-blue-400 hover:underline">Manage Users</Link></li>
            <li><Link to="/manage-content" className="text-blue-400 hover:underline">Manage Content</Link></li>
          </ul>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-4 mt-6">
        <a href="https://github.com/YOUR_GITHUB_PROFILE" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub className="text-2xl hover:text-gray-500" />
        </a>
        <a href="mailto:YOUR_EMAIL@example.com" aria-label="Email">
          <FaEnvelope className="text-2xl hover:text-gray-500" />
        </a>
        <a href="https://www.linkedin.com/in/YOUR_LINKEDIN_PROFILE" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin className="text-2xl hover:text-gray-500" />
        </a>
      </div>

      <p className="text-center text-sm mt-4">&copy; {new Date().getFullYear()} Book Explorer. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
