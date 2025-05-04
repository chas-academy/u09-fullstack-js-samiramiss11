import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const SiteMap = () => {
  return (
    <main className="box-border font-sans antialiased text-gray-700 bg-bg">
      <Header />
      <section className="bg-white p-8 md:p-16 rounded-lg hover:shadow-lg transition-shadow m-8">

      <div className="container mx-auto px-9 lg:px-0 py-8">
        {/* Page Header */}
        <div className="text-left mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Site Map</h1>

        </div>

        {/* General Pages */}
        <section className="mb-6">
          <h2 className="text-1xl font-semibold text-gray-800 mb-4">General Pages</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li><Link to="/" className="text-blue-500 hover:underline">Home</Link></li>
            <li><Link to="/about-us" className="text-blue-500 hover:underline">About Us</Link></li>
            <li><Link to="/contact-us" className="text-blue-500 hover:underline">Contact Us</Link></li>
            <li><Link to="/privacy-policy" className="text-blue-500 hover:underline">Privacy Policy</Link></li>
            <li><Link to="/terms-service" className="text-blue-500 hover:underline">Terms of Service</Link></li>
          </ul>
        </section>

        {/* Topics */}
        <section className="mb-6">
          <h2 className="text-1xl font-semibold text-gray-800 mb-4">Psychology Topics</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li><Link to="/core-concepts" className="text-blue-500 hover:underline">Do I Need Therapy?</Link></li>
            <li><Link to="/therapies" className="text-blue-500 hover:underline">Therapies and Approaches</Link></li>
            <li><Link to="/theories" className="text-blue-500 hover:underline">Famous Theories</Link></li>
            <li><Link to="/methods" className="text-blue-500 hover:underline">Research Methods</Link></li>
          </ul>
        </section>

        {/* Explore More */}
        <section className="mb-6">
          <h2 className="text-1xl font-semibold text-gray-800 mb-4">Explore More</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li><Link to="/news" className="text-blue-500 hover:underline">Quiz & Quote</Link></li>
            <li><Link to="/news" className="text-blue-500 hover:underline">Behavior Exercises</Link></li>
            <li><Link to="/history" className="text-blue-500 hover:underline">History of Psychology</Link></li>
            <li><Link to="/books" className="text-blue-500 hover:underline">Recommended Books</Link></li>
            <li><Link to="/articles" className="text-blue-500 hover:underline">Articles</Link></li>
          </ul>
        </section>

    {/* Authentication */}
<section className="mb-6">
  <h2 className="text-xl font-semibold mb-4">Authentication</h2>
  <ul className="list-disc list-inside text-gray-600">
    <li><Link to="/login" className="text-blue-500 hover:underline">Sign In / Sign Up</Link></li>
    <li><Link to="/admin-dashboard" className="text-blue-500 hover:underline">Admin Dashboard</Link></li>
    <li><Link to="/user-dashboard" className="text-blue-500 hover:underline">User Dashboard</Link></li>
  </ul>
</section>

{/* Admin Only */}
<section className="mb-6">
  <h2 className="text-xl font-semibold mb-4">Admin Tools</h2>
  <ul className="list-disc list-inside text-gray-600">
    <li><Link to="/manage-users" className="text-blue-500 hover:underline">Manage Users</Link></li>
    <li><Link to="/manage-content" className="text-blue-500 hover:underline">Manage Content</Link></li>
  </ul>
</section>
      </div>
      </section>
      <Footer />
    </main>
  );
};

export default SiteMap;
