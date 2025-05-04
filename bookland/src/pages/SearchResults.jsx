// src/pages/SearchResults.jsx
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { PAGES } from '../data/content';

export default function SearchResults() {
  const params = new URLSearchParams(useLocation().search);
  const q = params.get('q')?.trim() || '';
  const heading = q ? `Search results for “${q}”` : 'Please enter a query';

  let matches = [];
  if (q) {
    const re = new RegExp(q.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'i');
    matches = PAGES.filter(({ title, slug, body }) =>
      re.test(title) || re.test(slug) || re.test(body)
    );
  }

  return (
    <main className="box-border font-sans antialiased text-gray-700 bg-bg">
            <Header />
            <section className="bg-white p-8 md:p-16 rounded-lg hover:shadow-lg transition-shadow m-8">

<div className="flex-grow container mx-auto px-4 py-16 w-full  min-h-[600px]"><h1 className="text-3xl font-bold mb-4">{heading}</h1>
      {q && (
        matches.length > 0
          ? (
            <ul className="space-y-4">
              {matches.map(p => (
                <li key={p.slug}>
                  <Link
                    to={p.slug}
                    className="text-blue-600 hover:underline text-xl"
                  >
                    {p.title}
                  </Link>
                  <p className="text-gray-600 line-clamp-2">{/*
                    you could show a snippet here by slicing p.body */}
                    {p.body.slice(0, 150).trim()}…
                  </p>
                </li>
              ))}
            </ul>
          )
          : <p className="text-gray-600">No results found.</p>
      )}      </div>
  </section>
      <Footer />
    </main>
  );
}
