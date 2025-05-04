// src/pages/BookCard.jsx
import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate }    from 'react-router-dom';
import { FaHeart }      from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import API    from '../utils/api';
import AuthContext from '../context/AuthContext';
const BookCard = () => {
  const { id }      = useParams();
  const navigate    = useNavigate(); 
  const [book, setBook] = useState(null);
  const { user, addSavedContent } = useContext(AuthContext);

  useEffect(() => {
    API.fetchBookDetailFromGoogle(id).then(setBook).catch(console.error);
  }, [id]);

  if (!book) return <p>Loading…</p>;

  // 1. Remove all HTML tags (including <br>)  
const cleanDescription = book.description
  ? book.description.replace(/<[^>]+>/g, ' ')
   : '';

// 2. Truncate to 200 characters  
const shortDesc = cleanDescription.length > 800
   ? cleanDescription.slice(0, 700).trim() + '…'
  : cleanDescription;

// handler that checks auth
  const handleSave = () => {
    if (!user) {
      // not logged in → redirect them
      navigate('/login', { replace: true });
    } else {
      addSavedContent({
        type:   'Book',
        itemId: book.id,
        title:  book.title,
        link:   `/book/${book.id}`,
      });
    }
  };

  return (
    <>
      <Header />
      <div className="relative bg-slate-200 border border-slate-400 rounded-lg shadow-md p-8  mx-6 my-8">
      <FaHeart size={24} className="absolute top-4 right-4 text-gray-400 hover:text-teal-500 cursor-pointer text-lg"
         onClick={handleSave}/>        
         <img src={book.imageUrl} alt={book.title}  className="rounded-lg w-38 h-38 mx-auto mb-4" />
        <h2 className="text-xl font-bold text-center">{book.title}</h2>
        <p className="text-s text-center text-gray-600">{book.author}</p>
        <p className="text-xs text-center text-gray-600">{book.year}</p>
        <p className="text-xs text-center text-gray-600">{book.category}</p>
        <p className="mt-4 mb-4">{shortDesc}</p>
      </div>
      <Footer />
    </>
  );
};

export default BookCard;
