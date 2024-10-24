import React from 'react';

const AuthorCard = () => {
  // Placeholder data, replace with API fetched data later
  const author = {
    name: "Author Name",
    writingStyle: "Literary Style",
    years: "Year Range",
    books: ["Book 1", "Book 2", "Book 3", "Book 4"],
    description: "This is a brief description of the author.",
    imageUrl: "https://via.placeholder.com/150", // Placeholder image
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 max-w-sm mx-auto">
      <img
        src={author.imageUrl}
        alt={author.name}
        className="rounded-full w-32 h-32 mx-auto mb-4"
      />
      <h2 className="text-xl font-bold text-center">{author.name}</h2>
      <p className="text-center text-gray-600">{author.writingStyle}</p>
      <p className="text-center text-gray-600">{author.years}</p>
      <h3 className="mt-4 font-semibold">Books:</h3>
      <ul className="list-disc list-inside mb-4">
        {author.books.map((book, index) => (
          <li key={index}>{book}</li>
        ))}
      </ul>
      <p className="mb-4">{author.description}</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded">
        Save Content
      </button>
    </div>
  );
};

export default AuthorCard;
