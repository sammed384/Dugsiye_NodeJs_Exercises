const express = require('express');
const { createBook, updateBook, deleteBook, getBooks, getBook } = require('../controllers/booksController');
const router = express.Router();



router.get('/', getBooks);
router.get('/:id', getBook);
router.post('/', createBook);
router.put('/:id', updateBook);     // 🔄 Update
router.delete('/:id', deleteBook);  // ❌ Delete

module.exports = router;
