// src/pages/Books.jsx
import React, { useState, useEffect, useContext } from 'react';
import {useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaHeart, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import API    from '../utils/api';
import AuthContext from '../context/AuthContext';

const Books = () => {
  const { user, addSavedContent } = useContext(AuthContext);
  const navigate = useNavigate();
  const [query, setQuery]         = useState('psychology');
  const [books, setBooks]         = useState([]);
  const [loading, setLoading]     = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 15;
  const [flash, setFlash] = useState('');
  
    // My helper to truncate long titles to 5 words
    const truncateTitle = (title, maxWords = 4) => {
      const words = title.split(/\s+/);
      return words.length > maxWords
        ? words.slice(0, maxWords).join(' ') + '…'
        : title;
    };

    // handler that checks auth
  const handleSave = (book) => {
    if (!user) {
      return navigate('/login', { replace: true })
    }
      addSavedContent({
        type:   'Book',
        itemId: book.id,
        title:  book.title,
        link:   `/book/${book.id}`,
      }); 
      
     setFlash('Page saved!');
     setTimeout(() => setFlash(''), 2000);
   };
    useEffect(() => {
      (async () => {
        setLoading(true);
        try {
          const results = await API.fetchBooksFromGoogle(query);
          setBooks(results);
          setCurrentPage(1);
        } finally {
          setLoading(false);
        }
      })();
    }, [query]);

  // Calculate pagination
  const totalPages = Math.ceil(books.length / booksPerPage);
  const startIdx   = (currentPage - 1) * booksPerPage;
  const pageBooks  = books.slice(startIdx, startIdx + booksPerPage);

  return (
    <div>
      <Header />
      <div className="p-4 mx-4 sm:mx-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Books on “{query}”</h2>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search books…"
            className="p-2 border rounded w-28"
          />
        </div>

        {loading ? (
          <p>Loading…</p>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 ">
              {pageBooks.map((book) => (
                <div key={book.id}
                     className="relative bg-slate-100 rounded-lg shadow-md p-4 text-center border border-slate-400">
      <FaHeart size={24} className="absolute top-4 right-4 text-gray-400 hover:text-teal-500 cursor-pointer text-lg"
         onClick={() => handleSave(book)}/> 
                               {/* Flash message */}
      {flash && (
        <div className="fixed bottom-8 right-8 bg-primary text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in-out z-50">
          {flash}
        </div>)}
                 <Link to={`/book/${book.id}`}>
                    <img src={book.imageUrl} alt={book.title}
                         className="rounded-lg w-24 h-32 mx-auto mb-2" />
                    <h3 className="font-bold">{truncateTitle(book.title)}</h3>
                    <p className="text-xs text-gray-600">{book.author}</p>
                    <p className="text-xs text-gray-600">{book.year}</p>
                  </Link>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center mt-6 space-x-4">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="p-3 hover:bg-gray-200 rounded-full bg-gray-200 border border-gray-400"
              >
                <FaChevronLeft />
              </button>

              <span >
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-3 hover:bg-gray-200 rounded-full bg-gray-200 border border-gray-400"
              >
                <FaChevronRight />
              </button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Books;
