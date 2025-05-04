import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import ScrollToTopButton from '../components/ScrollToTopButton';
const Footer = () => {
  return (
    <footer className="bg-primary text-white">
    <div className="container text-center mx-auto pl-8 md:p-16 p-8">
      {/* Mobile Accordion */}
      <div className="md:hidden space-y-4">
        {[
          {
            title: 'General Pages',
            links: [
              { to: '/', label: 'Home' },
              { to: '/about-us', label: 'About Us' },
              { to: '/contact-us', label: 'Contact Us' },
              { to: '/privacy-policy', label: 'Privacy Policy' },
              { to: '/terms-service', label: 'Terms of Service' },
              { to: '/sitemap', label: 'Site Map' },
            ],
          },
          {
            title: 'Psychology Topics',
            links: [
              { to: '/core-concepts', label: 'Core Concepts' },
              { to: '/therapies', label: 'Therapies & Approaches' },
              { to: '/theories', label: 'Famous Theories' },
              { to: '/methods', label: 'Research Methods' },
            ],
          },
          {
            title: 'Explore More',
            links: [
              { to: '/news', label: 'Latest News' },
              { to: '/quiz', label: 'Quizzes' },
              { to: '/books', label: 'Recommended Books' },
            ],
          },
        ].map((section) => (
          <details key={section.title} className="border-b pb-4">
            <summary className="cursor-pointer text-lg font-bold">
              {section.title}
            </summary>
            <ul className="mt-2 space-y-1 pl-4">
              {section.links.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-3 md:gap-6">
        {/* Duplicate the same three sections */}
        <div>
          <h2 className="text-lg font-bold mb-2">General Pages</h2>
          <ul className="space-y-1 text-gray-300">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about-us" className="hover:underline">About Us</Link></li>
            <li><Link to="/contact-us" className="hover:underline">Contact Us</Link></li>
            <li><Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/terms-service" className="hover:underline">Terms of Service</Link></li>
            <li><Link to="/sitemap" className="hover:underline">Site Map</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">Psychology Topics</h2>
          <ul className="space-y-1 text-gray-300">
            <li><Link to="/core-concepts" className="hover:underline">Do I Need Therapy?</Link></li>
            <li><Link to="/therapies" className="hover:underline">Therapies & Approaches</Link></li>
            <li><Link to="/theories" className="hover:underline">Famous Theories</Link></li>
            <li><Link to="/methods" className="hover:underline">Research Methods</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-2">Explore More</h2>
          <ul className="space-y-1 text-gray-300">
            <li><Link to="/news" className="hover:underline">Quiz & Quote</Link></li>
            <li><Link to="/news" className="hover:underline">Behavior Exercises</Link></li>
            <li><Link to="/books" className="hover:underline">Recommended Books</Link></li>
          </ul>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-6 mt-8">
        <a href="https://github.com/samiramiss11" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
          <FaGithub size={24} />
        </a>
        <a href="mailto:samira.moa.app@gmail.com" aria-label="Email" className="hover:text-gray-300">
          <FaEnvelope size={24} />
        </a>
        <a href="https://www.linkedin.com/in/samira-moa-79a977131" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"className="hover:text-gray-300">
          <FaLinkedin size={24} />
        </a>
      </div>
      </div>

      <p className="text-center text-gray-400 text-sm mt-4">&copy; {new Date().getFullYear()} Samira Moa. All rights reserved.</p>
      <ScrollToTopButton /></footer>
  );
};

export default Footer;
