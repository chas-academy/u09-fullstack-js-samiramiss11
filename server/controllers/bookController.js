
const Book = require('../models/Book');

exports.searchBooks = async (req, res) => {
  const q = req.query.q || '';
  const re = new RegExp(q, 'i');
  try {
    const books = await Book.find({
      $or: [
        { title: { $regex: re } },
        { description: { $regex: re } },
        // …other fields…
      ],
    });
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};
