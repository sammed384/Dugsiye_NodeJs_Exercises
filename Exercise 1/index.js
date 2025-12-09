const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let books = [
  { id: 1, title: 'Atomic Habits', author: 'James Clear' },
  { id: 2, title: 'Deep Work', author: 'Cal Newport' }
];

// 👇 Your routes go here

// POST 
app.post('/books', (req, res) => {
    const newBooks = {
      id: books.length + 1,
      title: req.body.title,
      author:req.body.author
    };
    books.push(newBooks);
    res.status(201).json(newBooks);
  });

  //GET ALL 
  app.get('/books', (req, res) => {
    res.json(books);
  });
  
  //GET ONE
  app.get('/books/:id', (req, res) => {
    const book = books.find(u => u.id == req.params.id);
    if (!book) return res.status(404).send('Book not found');
    res.json(book);
  });
  
  //PUT
  app.put('/books/:id', (req, res) => {
    const book = books.find(u => u.id == req.params.id);
    if (!book) return res.status(404).send('book not found');
    book.title= req.body.title,
    book.author=req.body.author
    res.json(book);
  });

  //DELETE
  app.delete('/books/:id', (req, res) => {
    books = books.filter(u => u.id != req.params.id);
    res.send('Book deleted');
  });
  

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
