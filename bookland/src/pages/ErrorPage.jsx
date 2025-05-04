// src/pages/NotFound.jsx
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-bg text-gray-700 p-8">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <p className="text-xl mb-8">Oops — the page you’re looking for doesn’t exist.</p>

      <div className="flex space-x-4">
        {/* Go Back button */}
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 bg-secondary text-white rounded-lg hover:bg-secondary-dark transition"
        >
          Go Back
        </button>

        {/* Go Home link */}
        <Link
          to="/"
          className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
};

export default ErrorPage;
