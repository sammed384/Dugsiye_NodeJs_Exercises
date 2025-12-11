const Book = require('../models/books');

//GET ALL books
exports.getBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

//GET one book
exports.getBook = async (req, res) => {
  const {id}= req.params;
  try {
    const book = await Book.findById(id);
    if(!book){
      return res.status(404).send('Book not found');
    }
    res.json(book);
  } catch (error) {
    res.status(500).send('Server error');
    
  }
};

//POST a book
exports.createBook = async (req, res) => {
  const book = new Book(req.body);
  const saved = await book.save();
  res.status(201).json(saved);
};

// UPDATE a book
exports.updateBook = async (req, res) => {
  const { id } = req.params;
  try {
    const updateBook = await Book.findByIdAndUpdate(
      id,
      req.body,
      { new: true } // returns updated document
    );
    if (!updateBook) {
      return res.status(404).send('Book not found');
    }
    res.json(updateBook);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

// DELETE a book
exports.deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteBook = await Book.findByIdAndDelete(id);
    if (!deleteBook) {
      return res.status(404).send('Book not found');
    }
    res.send(`Book with id ${id} deleted`);
  } catch (err) {
    res.status(500).send('Server error');
  }
};
