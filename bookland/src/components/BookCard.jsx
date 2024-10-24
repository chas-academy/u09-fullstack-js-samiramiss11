import React from 'react';
import { FaHeart } from 'react-icons/fa'; // Import the heart icon
import Header from '../components/Header';
import Footer from '../components/Footer';

const BookCard = () => {
  // Placeholder data, replace with API fetched data later
  const book = {
    name: "Book Name",
    writer: "Writer Name",
    year: "2005",
    style: "Literary Style",
    description: "This is a brief description of the book.",
    imageUrl: "https://via.placeholder.com/150", // Placeholder image
  };

  return (
    <div><Header/>
    <div className="relative bg-white rounded-lg shadow-md p-4 max-w-sm mx-auto">
      {/* Heart icon positioned at the top-right */}
      <FaHeart className="absolute top-2 right-2 text-gray-400 hover:text-teal-500 cursor-pointer text-lg" />
      
      <img
        src={book.imageUrl}
        alt={book.name}
        className="rounded-lg w-32 h-32 mx-auto mb-4"
      />
      <h2 className="text-xl font-bold text-center">{book.name}</h2>
      <p className="text-center text-gray-600">{book.writer}</p>
      <p className="text-center text-gray-600">{book.year}</p>
      <p className="text-center text-gray-600">{book.style}</p>
      <p className="mt-4 mb-4">{book.description}</p>
    </div>
    <Footer/>
    </div>
  );
};

export default BookCard;
