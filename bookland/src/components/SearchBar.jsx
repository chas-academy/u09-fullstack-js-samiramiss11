// src/components/SearchBar.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search-results?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative ">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="w-28 pl-4 pr-10 py-1 p-18 rounded bg-white-100 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-200"
      />
      <button
        type="submit"
        className="absolute right-1 top-1/2 transform -translate-y-1/2 p-1 text-gray-600 hover:text-gray-800"
        aria-label="Search"
      >
        <FaSearch size={18} />
      </button>
    </form>
  );
};

export default SearchBar;
