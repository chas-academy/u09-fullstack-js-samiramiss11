// src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Authors from './Authors';
import AuthorCard from '../components/AuthorCard';
import Login from './Login';

const Home = () => {
  return (
    <div>
      <Header />
      <h1>Welcome to Book Explorer</h1>
      {/* Add more content as needed */}
      
      <Footer/>
      
    </div>
  );
};

export default Home;
