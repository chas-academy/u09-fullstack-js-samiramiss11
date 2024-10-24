import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa'; // Import the heart icon
import Header from '../components/Header';
import Footer from '../components/Footer';

const Books = () => {
  // Placeholder data for literary genres and their books
  const literaryGenres = [
    {
      genre: "Fantasy",
      books: [
        { name: "Book 1", year: "2001", writer: "Writer 1", style: "Epic", imageUrl: "https://via.placeholder.com/100" },
        { name: "Book 2", year: "2003", writer: "Writer 2", style: "High Fantasy", imageUrl: "https://via.placeholder.com/100" },
      ],
    },
    {
      genre: "Science Fiction",
      books: [
        { name: "Book 3", year: "1995", writer: "Writer 3", style: "Dystopian", imageUrl: "https://via.placeholder.com/100" },
        { name: "Book 4", year: "2010", writer: "Writer 4", style: "Space Opera", imageUrl: "https://via.placeholder.com/100" },
      ],
    },
    // Add more genres and books as needed
  ];

  return (
    <div><Header/>
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Books</h1>

      {/* Map through literary genres */}
      {literaryGenres.map((genre, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-xl font-semibold mb-4">{genre.genre}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {genre.books.map((book, bookIndex) => (
              <div
                key={bookIndex}
                className="relative bg-white rounded-lg shadow-md p-4 text-center cursor-pointer"
              >
                {/* Heart icon positioned at the top-right */}
                <FaHeart className="absolute top-2 right-2 text-gray-400 hover:text-teal-500 cursor-pointer text-lg" />

                <Link to={`/book/${book.name}`}>
                  <img
                    src={book.imageUrl}
                    alt={book.name}
                    className="rounded-lg w-24 h-24 mx-auto mb-2"
                  />
                  <h3 className="font-bold">{book.name}</h3>
                  <p className="text-gray-600">{book.year}</p>
                  <p className="text-gray-600">{book.writer}</p>
                  <p className="text-gray-600">{book.style}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    
    </div>
    <Footer/>
    </div>
  );
};

export default Books;
