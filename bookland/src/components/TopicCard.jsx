import React from 'react';
import { FaHeart } from 'react-icons/fa'; // Import the heart icon
import Header from './Header';
import Footer from './Footer';

const TopicCard = () => {
  // Placeholder data, replace with API fetched data later
  const topic = {
    title: "Stress Management",
    description: "Learn how to manage stress effectively with tips and strategies backed by research.",
    relatedTopics: ["Anxiety", "Mindfulness", "Time Management"],
    imageUrl: "https://via.placeholder.com/150", // Placeholder image
  };

  return (
    <div>
      <Header />
      <div className="relative bg-white rounded-lg shadow-md p-4 max-w-sm mx-auto">
        {/* Heart icon positioned at the top-right */}
        <FaHeart className="absolute top-2 right-2 text-gray-400 hover:text-teal-500 cursor-pointer text-lg" />

        <img
          src={topic.imageUrl}
          alt={topic.title}
          className="rounded-full w-32 h-32 mx-auto mb-4"
        />
        <h2 className="text-xl font-bold text-center">{topic.title}</h2>
        <p className="text-center text-gray-600 mb-4">{topic.description}</p>

        {topic.relatedTopics && topic.relatedTopics.length > 0 && (
          <div>
            <h3 className="mt-4 font-semibold">Related Topics:</h3>
            <ul className="list-disc list-inside mb-4">
              {topic.relatedTopics.map((relatedTopic, index) => (
                <li key={index}>{relatedTopic}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default TopicCard;