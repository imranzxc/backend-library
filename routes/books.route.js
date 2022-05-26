const {
  Router
} = require('express');
const {
  booksController
} = require('../controllers/books.controller.js');

const router = Router();

router.get('/books', booksController.getBooks)
router.get('/books/:id', booksController.getBookById)
router.post('/books/:id', booksController.postBook)
router.delete('/books/:id', booksController.deleteBookById)
router.patch('/books/:id', booksController.patchBookById)
router.get('/genre/books/:id', booksController.getBooksByGenre)

module.exports = router;