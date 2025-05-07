import React, { useState, useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import useClickOutside from '../hooks/useClickOutside';
import SearchBar from '../components/SearchBar';
import AuthContext from '../context/AuthContext';

const Header = () => {
  const [isNavOpen, setNavOpen]       = useState(false);
  const [isUserOpen, setUserOpen]     = useState(false);
  const [isTopicsOpen, setTopicsOpen] = useState(false);
  const navigate                      = useNavigate();
  const { user }                      = useContext(AuthContext);

  const navRef    = useRef();
  const userRef   = useRef();
  const topicsRef = useRef();

  useClickOutside(navRef, () => setNavOpen(false));
  useClickOutside(userRef, () => setUserOpen(false));
  useClickOutside(topicsRef, () => setTopicsOpen(false));

  const toggleNav    = () => setNavOpen(o => !o);
  const toggleUser   = () => setUserOpen(o => !o);
  const toggleTopics = () => setTopicsOpen(o => !o);

  const handleSignOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
    window.location.reload();
  };

  return (
    <header className="relative flex items-center px-6 py-4 bg-gray-100 shadow">
      {/* Left group: nav button + search */}
      <div className="flex items-center space-x-4 order-1">
        {/* Nav dropdown */}
        <div className="relative" ref={navRef}>
          <button
            onClick={toggleNav}
            className="p-3 hover:bg-gray-200 rounded-full bg-gray-200 border border-primary"
          >
            <div className="rounded h-0.5 w-3.5 bg-primary mb-1" />
            <div className="rounded h-0.5 w-3.5 bg-primary mb-1" />
            <div className="rounded h-0.5 w-3.5 bg-primary" />
          </button>
          {isNavOpen && (
            <ul className="absolute left-0 mt-2 w-40 bg-white border rounded shadow z-50">
              <li><Link to="/" className="hover:text-white block px-4 py-2 hover:bg-primary cursor-pointer">Home</Link></li>
              <li><Link to="/history" className="hover:text-white block px-4 py-2 hover:bg-primary cursor-pointer">History</Link></li>
              <li ref={topicsRef}             className="relative"
           onMouseEnter={() => setTopicsOpen(true)}
          onMouseLeave={() => setTopicsOpen(false)}
                ><div className="hover:text-white block px-4 py-2 hover:bg-primary cursor-pointer">
                  Topics
                </div>
                {isTopicsOpen && (
                  <ul className="cursor-pointer absolute left-full top-0 mt-0 w-48 bg-white border rounded shadow-lg z-50">
                    <li><Link to="/core-concepts" className="hover:text-white block px-4 py-2 hover:bg-primary cursor-pointer">Do I Need Therapy?</Link></li>
                    <li><Link to="/therapies" className="hover:text-white block px-4 py-2 hover:bg-primary cursor-pointer">Therapies</Link></li>
                    <li><Link to="/theories" className="hover:text-white block px-4 py-2 hover:bg-primary cursor-pointer">Famous Theories</Link></li>
                    <li><Link to="/methods" className="hover:text-white block px-4 py-2 hover:bg-primary cursor-pointer">Research Methods</Link></li>
                  </ul>
                )}
              </li>
              <li><Link to="/books" className="hover:text-white block px-4 py-2 hover:bg-primary cursor-pointer">Books</Link></li>
              <li><Link to="/QuizAndQuote" className="block px-4 py-2 hover:bg-gray-100">Quiz & Quote</Link></li>
          {/* ———  MOBILE‐ONLY USER LINKS  ——— */}
          {!user && (
            <li className="md:hidden border-t">
              <Link to="/login" className="block px-4 py-2 hover:bg-primary hover:text-white">Sign In</Link>
            </li>
          )}
          {user && (
            <>
              <li className="md:hidden">
                <Link to="/dashboard" className="block px-4 py-2 hover:bg-primary hover:text-white">Dashboard</Link>
              </li>
              <li
                className="md:hidden"
                onClick={handleSignOut}
              >
                <div className="block px-4 py-2 hover:bg-primary hover:text-white cursor-pointer">
                  Sign Out
                </div>
              </li>
            </>
          )}
        </ul>
      )}
    </div>

    {/* DESKTOP-ONLY search on left */}
    <div className="hidden md:block">
          <SearchBar />
        </div>
      </div>

      {/* ─── Center Zone ─── */}
      <div className="absolute pr-4 left-1/2 transform -translate-x-1/2 order-2">
        <Link to="/">
          <img src="/images/Brains.png" alt="Brain Logo" className="h-26 w-32" />
        </Link>
      </div>

      {/* ─── Right Zone ─── */}
      <div className="pr-0 flex items-center space-x-4 ml-auto order-3">
        {/* MOBILE-ONLY search on right */}
        <div className="block md:hidden">
          <SearchBar />
        </div>

        {/* user icon + dropdown (only on md+) */}
        <div className="relative hidden md:flex" ref={userRef}>
          <button onClick={() => setUserOpen(o => !o)}
                  className="p-3 hover:bg-gray-200 rounded-full bg-gray-200 border border-primary">
            <FaUser className="h-4 w-4 text-primary" />
          </button>
          {isUserOpen && (
            <ul className="absolute right-0 mt-12 w-48 bg-white border  shadow z-50">
              {!user
                ? <li><Link to="/login" className="block px-4 py-2 hover:bg-primary  hover:text-white">Sign In</Link></li>
                : <>
                    <li><Link to="/dashboard" className="block px-4 py-2 hover:bg-primary hover:text-white">Dashboard</Link></li>
                    <li onClick={handleSignOut}>
                      <div className="block px-4 py-2 hover:bg-primary hover:text-white cursor-pointer">Sign Out</div>
                    </li>
                  </>}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
