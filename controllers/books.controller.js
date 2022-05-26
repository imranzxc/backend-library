const {
  findByIdAndDelete,
  findByIdAndRemove,
} = require("../models/Book.model")
const Book = require("../models/Book.model")

module.exports.booksController = {
  postBook: (req, res) => {
    Book.create({
      bookName: req.body.bookName,
      bookAuthor: req.body.bookAuthor,
      bookGenre: req.body.bookGenre
    }).then(() => {
      res.json("Книга добавлена")
    }).catch((err) => res.json("Ошибка при добавлении книги"))
  },
  deleteBookById: (req, res) => {
    Book.findByIdAndRemove(req.params.id).then(() => {
      res.json("Книга удалена")
    }).catch((err) => res.json("Ошибка при удалении книги"))
  },
  patchBookById: (req, res) => {
    Book.findByIdAndUpdate(req.params.id, {
      bookName: req.body.bookName,
      bookAuthor: req.body.bookAuthor,
      bookGenre: req.body.bookGenre
    }).then(() => {
      res.json("Книга изменена")
    }).catch((err) => res.json("Ошибка при изменении книги"))
  },
  getBookById: (req, res) => {
    Book.findById(req.params.id).then((data) => {
      res.json(data)
    }).catch((err) => res.json("Ошибка при получении книги"))
  },
  getBooks: (req, res) => {
    Book.find().then((data) => {
      res.json(data)
    }).catch((err) => res.json("Ошибка при получении книг"))
  },
  getBooksByGenre: (req, res) => {
    Book.find({
      bookGenre: req.params.id
    }).then((data) => {
      res.json(data)
    }).catch((err) => res.json("Ошибка при получении книги"))
  }
}