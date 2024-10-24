
import React from 'react';
import { Link } from 'react-router-dom';
//import './Footer.css'; 

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Book Explorer. All rights reserved.</p>
      <nav>
        <ul>
         
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
      </nav>
      </footer>
  );
};

export default Footer;
