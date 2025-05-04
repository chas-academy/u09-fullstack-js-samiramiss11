import React, { useState } from 'react';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { sendContact } from '../utils/api';
const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1) send the payload
      const result = await sendContact({ name, email, message });
      alert('Thanks — your message has been sent!');
      setName(''); setEmail(''); setMessage('');
    } catch (err) {
      console.error('Contact form error:', err);
      alert(err.response?.data?.message || 'Sorry, something went wrong. Please try again later.');
    }
  };

  return (
    <main className="min-h-screen flex flex-col">
    <Header />
    <div className="flex-1 flex items-center justify-center p-10">
    <div className="w-full max-w-[400px] mx-2">
      <section>
      <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
      Contact us
          </h2>
      <form className="bg-gray-200 p-6 rounded-md shadow-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            rows="4"
            required
          />
        </div>
        <button type="submit" className="mt-4 px-4 py-2 bg-button text-white rounded">
          Send
        </button>

      </form>


      </section>        <div className="mt-8 text-center">
            <h3 className="text-lg font-semibold mb-2">Connect with us:</h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/YOUR_GITHUB_PROFILE"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub className="text-2xl hover:text-gray-700" />
              </a>
              <a href="mailto:YOUR_EMAIL@example.com" aria-label="Email">
                <FaEnvelope className="text-2xl hover:text-gray-700" />
              </a>
              <a
                href="https://www.linkedin.com/in/YOUR_LINKEDIN_PROFILE"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-2xl hover:text-gray-700" />
              </a>
            </div>
          </div></div>
    </div><Footer /></main>
  );
};

export default ContactUs;
