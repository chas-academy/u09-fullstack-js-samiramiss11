import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa'; // Import the heart icon
import Header from '../components/Header';
import Footer from '../components/Footer';

const Authors = () => {
  // Placeholder data for literary concepts and their writers
  const literaryConcepts = [
    {
      concept: "Concept 1",
      writers: [
        { name: "Writer 1", year: "Year 1", imageUrl: "https://via.placeholder.com/100" },
        { name: "Writer 2", year: "Year 2", imageUrl: "https://via.placeholder.com/100" },
      ],
    },
    {
      concept: "Concept 2",
      writers: [
        { name: "Writer 3", year: "Year 3", imageUrl: "https://via.placeholder.com/100" },
        { name: "Writer 4", year: "Year 4", imageUrl: "https://via.placeholder.com/100" },
      ],
    },
    // Add more concepts and writers as needed
  ];

  return (
    <div><Header/>
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Authors</h1>

      {/* Map through literary concepts */}
      {literaryConcepts.map((concept, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-xl font-semibold mb-4">{concept.concept}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {concept.writers.map((writer, writerIndex) => (
              <div
                key={writerIndex}
                className="relative bg-white rounded-lg shadow-md p-4 text-center cursor-pointer"
              >
                {/* Heart icon positioned at the top-right */}
                <FaHeart className="absolute top-2 right-2 text-gray-400 hover:text-teal-500 cursor-pointer text-lg" />

                <Link to={`/author/${writer.name}`}>
                  <img
                    src={writer.imageUrl}
                    alt={writer.name}
                    className="rounded-full w-24 h-24 mx-auto mb-2"
                  />
                  <h3 className="font-bold">{writer.name}</h3>
                  <p className="text-gray-600">{writer.year}</p>
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

export default Authors;
